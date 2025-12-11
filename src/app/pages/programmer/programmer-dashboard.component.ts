import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ProjectService } from '../../core/services/project.service';
import { AdvisoryService } from '../../core/services/advisory.service';
import { Project, ProjectType, ParticipationType } from '../../shared/interfaces/project.interface';
import { Advisory, AdvisoryStatus } from '../../shared/interfaces/advisory.interface';
import { NavbarComponent, NavMenuItem } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-programmer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './programmer-dashboard.component.html',
  styleUrl: './programmer-dashboard.component.css'
})
export class ProgrammerDashboardComponent implements OnInit {
  currentUser: any = null;
  projects: Project[] = [];
  academicProjects: Project[] = [];
  professionalProjects: Project[] = [];
  advisories: Advisory[] = [];
  pendingAdvisories: Advisory[] = [];
  loading = true;
  loadingAdvisories = true;
  showAddProjectModal = false;
  selectedAdvisory: Advisory | null = null;
  responseMessage = '';
  navMenuItems: NavMenuItem[] = [];

  // Enums para el template
  ProjectType = ProjectType;
  ParticipationType = ParticipationType;
  AdvisoryStatus = AdvisoryStatus;

  // Formulario de nuevo proyecto
  newProject: Partial<Project> = {
    name: '',
    description: '',
    type: ProjectType.ACADEMIC,
    participationType: [],
    technologies: [],
    repositoryUrl: '',
    demoUrl: '',
    imageUrl: ''
  };

  techInput = '';
  selectedParticipations: ParticipationType[] = [];

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private advisoryService: AdvisoryService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.initializeNavMenu();
        this.loadProjects();
        this.loadAdvisories();
      }
    });
  }

  initializeNavMenu(): void {
    this.navMenuItems = [
      {
        label: 'Ver mi Portafolio',
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>',
        action: () => this.goToMyPortfolio()
      },
      {
        label: 'Nuevo Proyecto',
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>',
        action: () => this.openAddProjectModal()
      }
    ];
  }

  loadProjects(): void {
    if (!this.currentUser) return;

    this.loading = true;
    this.projectService.getProjectsByProgrammer(this.currentUser.uid).subscribe(projects => {
      this.projects = projects;
      this.academicProjects = projects.filter(p => p.type === ProjectType.ACADEMIC);
      this.professionalProjects = projects.filter(p => p.type === ProjectType.PROFESSIONAL);
      this.loading = false;
    });
  }

  openAddProjectModal(): void {
    this.showAddProjectModal = true;
    this.resetForm();
  }

  closeAddProjectModal(): void {
    this.showAddProjectModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.newProject = {
      name: '',
      description: '',
      type: ProjectType.ACADEMIC,
      participationType: [],
      technologies: [],
      repositoryUrl: '',
      demoUrl: '',
      imageUrl: ''
    };
    this.techInput = '';
    this.selectedParticipations = [];
  }

  toggleParticipationType(type: ParticipationType): void {
    const index = this.selectedParticipations.indexOf(type);
    if (index > -1) {
      this.selectedParticipations.splice(index, 1);
    } else {
      this.selectedParticipations.push(type);
    }
  }

  addTechnology(): void {
    if (this.techInput.trim()) {
      if (!this.newProject.technologies) {
        this.newProject.technologies = [];
      }
      this.newProject.technologies.push(this.techInput.trim());
      this.techInput = '';
    }
  }

  removeTechnology(index: number): void {
    this.newProject.technologies?.splice(index, 1);
  }

  async saveProject(): Promise<void> {
    if (!this.currentUser) return;

    if (!this.newProject.name || !this.newProject.description) {
      alert('Por favor completa los campos obligatorios');
      return;
    }

    if (this.selectedParticipations.length === 0) {
      alert('Selecciona al menos un tipo de participación');
      return;
    }

    try {
      const projectData: Omit<Project, 'id'> = {
        name: this.newProject.name!,
        description: this.newProject.description!,
        type: this.newProject.type!,
        participationType: this.selectedParticipations,
        technologies: this.newProject.technologies || [],
        repositoryUrl: this.newProject.repositoryUrl,
        demoUrl: this.newProject.demoUrl,
        imageUrl: this.newProject.imageUrl,
        programmerId: this.currentUser.uid
      };

      await this.projectService.createProject(projectData);
      alert('Proyecto creado exitosamente');
      this.closeAddProjectModal();
      this.loadProjects();
    } catch (error) {
      console.error('Error creando proyecto:', error);
      alert('Error al crear el proyecto');
    }
  }

  async deleteProject(projectId: string): Promise<void> {
    if (confirm('¿Estás seguro de eliminar este proyecto?')) {
      try {
        await this.projectService.deleteProject(projectId);
        alert('Proyecto eliminado exitosamente');
        this.loadProjects();
      } catch (error) {
        console.error('Error eliminando proyecto:', error);
        alert('Error al eliminar el proyecto');
      }
    }
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  goToMyPortfolio(): void {
    // Aquí podrías redirigir al portafolio individual del programador
    this.router.navigate(['/portfolio']);
  }

  // ========== ADVISORY METHODS ==========

  loadAdvisories(): void {
    if (!this.currentUser) return;

    this.loadingAdvisories = true;
    this.advisoryService.getAdvisoriesByProgrammer(this.currentUser.uid).subscribe(advisories => {
      this.advisories = advisories;
      this.pendingAdvisories = advisories.filter(a => a.status === AdvisoryStatus.PENDING);
      this.loadingAdvisories = false;
    });
  }

  selectAdvisory(advisory: Advisory): void {
    this.selectedAdvisory = advisory;
    this.responseMessage = '';
  }

  closeAdvisoryDetail(): void {
    this.selectedAdvisory = null;
    this.responseMessage = '';
  }

  async approveAdvisory(): Promise<void> {
    if (!this.selectedAdvisory) return;

    try {
      await this.advisoryService.approveAdvisory(
        this.selectedAdvisory.id!,
        this.responseMessage || 'Asesoría aprobada'
      );
      alert('Asesoría aprobada exitosamente');
      this.closeAdvisoryDetail();
      this.loadAdvisories();
    } catch (error) {
      console.error('Error aprobando asesoría:', error);
      alert('Error al aprobar la asesoría');
    }
  }

  async rejectAdvisory(): Promise<void> {
    if (!this.selectedAdvisory) return;

    if (!this.responseMessage.trim()) {
      alert('Por favor ingresa un motivo para rechazar la asesoría');
      return;
    }

    try {
      await this.advisoryService.rejectAdvisory(this.selectedAdvisory.id!, this.responseMessage);
      alert('Asesoría rechazada');
      this.closeAdvisoryDetail();
      this.loadAdvisories();
    } catch (error) {
      console.error('Error rechazando asesoría:', error);
      alert('Error al rechazar la asesoría');
    }
  }

  async completeAdvisory(advisoryId: string): Promise<void> {
    if (confirm('¿Marcar esta asesoría como completada?')) {
      try {
        await this.advisoryService.completeAdvisory(advisoryId);
        alert('Asesoría marcada como completada');
        this.loadAdvisories();
      } catch (error) {
        console.error('Error completando asesoría:', error);
        alert('Error al completar la asesoría');
      }
    }
  }

  getStatusBadgeClass(status: AdvisoryStatus): string {
    switch (status) {
      case AdvisoryStatus.PENDING:
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50';
      case AdvisoryStatus.APPROVED:
        return 'bg-green-600/20 text-green-400 border-green-600/50';
      case AdvisoryStatus.REJECTED:
        return 'bg-red-600/20 text-red-400 border-red-600/50';
      case AdvisoryStatus.COMPLETED:
        return 'bg-blue-600/20 text-blue-400 border-blue-600/50';
      case AdvisoryStatus.CANCELLED:
        return 'bg-gray-600/20 text-gray-400 border-gray-600/50';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-600/50';
    }
  }

  getStatusText(status: AdvisoryStatus): string {
    switch (status) {
      case AdvisoryStatus.PENDING:
        return 'Pendiente';
      case AdvisoryStatus.APPROVED:
        return 'Aprobada';
      case AdvisoryStatus.REJECTED:
        return 'Rechazada';
      case AdvisoryStatus.COMPLETED:
        return 'Completada';
      case AdvisoryStatus.CANCELLED:
        return 'Cancelada';
      default:
        return status;
    }
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
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
