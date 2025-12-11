import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { ScheduleService } from '../../core/services/schedule.service';
import { AdvisoryService } from '../../core/services/advisory.service';
import { User } from '../../shared/models/user.model';
import { UserRole } from '../../shared/interfaces/role.interface';
import { Schedule, Advisory } from '../../shared/interfaces/advisory.interface';
import { NavbarComponent, NavMenuItem } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  currentUser: any = null;
  allUsers: User[] = [];
  programmers: User[] = [];
  allSchedules: Schedule[] = [];
  allAdvisories: Advisory[] = [];
  loading = true;
  loadingSchedules = true;
  loadingAdvisories = true;
  UserRole = UserRole; // Para usar en el template
  navMenuItems: NavMenuItem[] = [];

  // Schedule modal
  showScheduleModal = false;
  selectedProgrammerId = '';
  newSchedule = {
    date: new Date(),
    startTime: '09:00',
    endTime: '17:00',
    isActive: true
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private scheduleService: ScheduleService,
    private advisoryService: AdvisoryService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.initializeNavMenu();
      }
      // Forzar detección de cambios después de actualizar currentUser
      this.cdr.detectChanges();
    });

    await this.loadUsers();
    this.loadSchedules();
    this.loadAdvisories();
  }

  initializeNavMenu(): void {
    this.navMenuItems = [
      {
        label: 'Mi Perfil',
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>',
        action: () => this.router.navigate(['/profile'])
      }
    ];
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async loadUsers(): Promise<void> {
    this.loading = true;
    try {
      this.userService.getAllUsers().subscribe({
        next: (users) => {
          console.log('🔍 Admin: Usuarios recibidos:', users);
          this.allUsers = users;
          this.programmers = users.filter(u => {
            const role = u.role as string;
            return role === 'programmer' || role === UserRole.PROGRAMMER;
          });
          console.log('🔍 Admin: Programadores filtrados:', this.programmers);
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error cargando usuarios:', error);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } catch (error) {
      console.error('Error cargando usuarios:', error);
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  async changeUserRole(userId: string, newRole: UserRole): Promise<void> {
    try {
      await this.userService.assignRole(userId, newRole);
      alert(`Rol actualizado exitosamente a ${newRole}`);
      await this.loadUsers();
    } catch (error) {
      console.error('Error cambiando rol:', error);
      alert('Error al cambiar el rol');
    }
  }

  async deleteUser(userId: string): Promise<void> {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      try {
        await this.userService.deleteUser(userId);
        alert('Usuario eliminado exitosamente');
        await this.loadUsers();
      } catch (error) {
        console.error('Error eliminando usuario:', error);
        alert('Error al eliminar usuario');
      }
    }
  }

  getRoleBadgeColor(role?: UserRole | string): string {
    const roleStr = role as string;
    if (roleStr === UserRole.ADMIN || roleStr === 'admin') {
      return 'bg-red-600';
    } else if (roleStr === UserRole.PROGRAMMER || roleStr === 'programmer') {
      return 'bg-purple-600';
    } else if (roleStr === UserRole.USER || roleStr === 'user') {
      return 'bg-blue-600';
    }
    return 'bg-gray-600';
  }

  getRoleLabel(role?: UserRole | string): string {
    const roleStr = role as string;
    if (roleStr === UserRole.ADMIN || roleStr === 'admin') {
      return 'Administrador';
    } else if (roleStr === UserRole.PROGRAMMER || roleStr === 'programmer') {
      return 'Programador';
    } else if (roleStr === UserRole.USER || roleStr === 'user') {
      return 'Usuario';
    }
    return 'Sin rol';
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  // ========== SCHEDULE MANAGEMENT ==========

  loadSchedules(): void {
    this.loadingSchedules = true;
    this.scheduleService.getAllSchedules().subscribe({
      next: (schedules) => {
        console.log('🔍 Admin: Horarios recibidos:', schedules);
        this.allSchedules = schedules;
        this.loadingSchedules = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error cargando horarios:', error);
        this.loadingSchedules = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadAdvisories(): void {
    this.loadingAdvisories = true;
    this.advisoryService.getAllAdvisories().subscribe({
      next: (advisories) => {
        console.log('🔍 Admin: Asesorías recibidas:', advisories);
        this.allAdvisories = advisories;
        this.loadingAdvisories = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error cargando asesorías:', error);
        this.loadingAdvisories = false;
        this.cdr.detectChanges();
      }
    });
  }

  openScheduleModal(programmerId: string): void {
    this.selectedProgrammerId = programmerId;
    this.showScheduleModal = true;
    this.resetScheduleForm();
  }

  closeScheduleModal(): void {
    this.showScheduleModal = false;
    this.selectedProgrammerId = '';
    this.resetScheduleForm();
  }

  resetScheduleForm(): void {
    this.newSchedule = {
      date: new Date(),
      startTime: '09:00',
      endTime: '17:00',
      isActive: true
    };
  }

  async createSchedule(): Promise<void> {
    if (!this.selectedProgrammerId) {
      alert('Selecciona un programador');
      return;
    }

    try {
      const programmerName = this.getProgrammerName(this.selectedProgrammerId);

      const scheduleData: Omit<Schedule, 'id'> = {
        programmerId: this.selectedProgrammerId,
        programmerName: programmerName,
        date: this.newSchedule.date,
        startTime: this.newSchedule.startTime,
        endTime: this.newSchedule.endTime,
        isActive: this.newSchedule.isActive
      };

      await this.scheduleService.createSchedule(scheduleData);
      alert('Horario creado exitosamente');
      this.closeScheduleModal();
      this.loadSchedules();
    } catch (error) {
      console.error('Error creando horario:', error);
      alert('Error al crear el horario');
    }
  }

  async toggleScheduleStatus(scheduleId: string, currentStatus: boolean): Promise<void> {
    try {
      await this.scheduleService.toggleSchedule(scheduleId, !currentStatus);
      this.loadSchedules();
    } catch (error) {
      console.error('Error cambiando estado del horario:', error);
      alert('Error al cambiar el estado');
    }
  }

  async deleteSchedule(scheduleId: string): Promise<void> {
    if (confirm('¿Eliminar este horario?')) {
      try {
        await this.scheduleService.deleteSchedule(scheduleId);
        alert('Horario eliminado');
        this.loadSchedules();
      } catch (error) {
        console.error('Error eliminando horario:', error);
        alert('Error al eliminar el horario');
      }
    }
  }

  getProgrammerSchedules(programmerId: string): Schedule[] {
    return this.allSchedules.filter(s => s.programmerId === programmerId);
  }

  getProgrammerName(programmerId: string): string {
    const programmer = this.allUsers.find(u => u.uid === programmerId);
    return programmer?.displayName || programmer?.email || 'Desconocido';
  }

  formatDate(date: any): string {
    if (!date) return '';

    let dateObj: Date;
    if (date.toDate && typeof date.toDate === 'function') {
      dateObj = date.toDate();
    } else if (date instanceof Date) {
      dateObj = date;
    } else {
      dateObj = new Date(date);
    }

    return dateObj.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  formatDateShort(date: any): string {
    if (!date) return '';

    let dateObj: Date;
    if (date.toDate && typeof date.toDate === 'function') {
      dateObj = date.toDate();
    } else if (date instanceof Date) {
      dateObj = date;
    } else {
      dateObj = new Date(date);
    }

    return dateObj.toLocaleDateString('es-ES');
  }

  getCurrentDate(): string {
    // Retorna la fecha actual en formato YYYY-MM-DD para el input type="date"
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
}
