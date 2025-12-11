import { Component, OnInit } from '@angular/core';
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
    dayOfWeek: 1,
    startTime: '09:00',
    endTime: '17:00',
    isActive: true
  };

  daysOfWeek = [
    { value: 0, label: 'Domingo' },
    { value: 1, label: 'Lunes' },
    { value: 2, label: 'Martes' },
    { value: 3, label: 'Miércoles' },
    { value: 4, label: 'Jueves' },
    { value: 5, label: 'Viernes' },
    { value: 6, label: 'Sábado' }
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private scheduleService: ScheduleService,
    private advisoryService: AdvisoryService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.initializeNavMenu();
      }
    });

    await this.loadUsers();
    this.loadSchedules();
    this.loadAdvisories();
  }

  initializeNavMenu(): void {
    this.navMenuItems = [
      {
        label: 'Ver Portafolio',
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>',
        action: () => this.goToPortfolio()
      },
      {
        label: 'Gestionar Usuarios',
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
        action: () => this.scrollToSection('users')
      },
      {
        label: 'Ver Horarios',
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
        action: () => this.scrollToSection('schedules')
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
        },
        error: (error) => {
          console.error('Error cargando usuarios:', error);
          this.loading = false;
        }
      });
    } catch (error) {
      console.error('Error cargando usuarios:', error);
      this.loading = false;
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
      },
      error: (error) => {
        console.error('Error cargando horarios:', error);
        this.loadingSchedules = false;
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
      },
      error: (error) => {
        console.error('Error cargando asesorías:', error);
        this.loadingAdvisories = false;
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
      dayOfWeek: 1,
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
        dayOfWeek: this.newSchedule.dayOfWeek,
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

  getDayName(dayOfWeek: number): string {
    const day = this.daysOfWeek.find(d => d.value === dayOfWeek);
    return day?.label || '';
  }
}
