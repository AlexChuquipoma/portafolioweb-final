import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ProjectService } from '../../../core/services/project.service';
import { UserService } from '../../../core/services/user.service';
import { Project, ProjectType } from '../../../shared/interfaces/project.interface';
import { NavbarComponent, NavLink } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeroSectionComponent, DeveloperInfo } from '../../../shared/components/developer/hero-section/hero-section';
import { ProjectsSection, ProjectInfo } from '../../../shared/components/developer/projects-section/projects-section';
import { SkillsSection, SkillInfo } from '../../../shared/components/developer/skills-section/skills-section';
import { ContactSection } from '../../../shared/components/developer/contact-section/contact-section';

@Component({
  selector: 'app-portfolio-alexander',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    ProjectsSection,
    SkillsSection,
    ContactSection
  ],
  templateUrl: './portfolio-alexander.component.html',
  styleUrl: './portfolio-alexander.component.css'
})
export class PortfolioAlexanderComponent implements OnInit {
  currentUser: any = null;
  alexanderUID = 'XJnEWmE7HLdP5ILsFj5ufQzgWvf2'; // UID de Alexander en Firebase

  // Enlaces personalizados para el navbar
  customNavLinks: NavLink[] = [
    { label: 'Sobre mi', sectionId: 'home' },
    { label: 'Mis Proyectos', sectionId: 'projects' },
    { label: 'Habilidades', sectionId: 'skills' },
    { label: 'Contacto', sectionId: 'contact' }
  ];

  // Información personal de Alexander
  developerInfo: DeveloperInfo = {
    name: 'Alexander Chuquipoma',
    greeting: '¡Qué onda Mijo!',
    title: 'Desarrollador Web Full Stack',
    image: '/imagenes/alex.png',
    bio: 'Soy Alexander Chuquipoma, un desarrollador web apasionado por crear soluciones innovadoras y eficientes.',
    description: 'He trabajado con Angular, Firebase y arquitecturas modernas basadas en microservicios.',
    email: 'achuquipoma@est.ups.edu.ec',
    github: 'https://github.com/AlexChuquipoma',
    linkedin: 'https://www.linkedin.com/in/alexander-chuquipoma-a62686220/',
    whatsapp: '593983592464'
  };

  // Proyectos dinámicos desde Firestore
  projects: ProjectInfo[] = [];
  loadingProjects = true;

  skills: SkillInfo[] = [
    { name: 'Angular', level: 95, icon: '🅰️' },
    { name: 'TypeScript', level: 90, icon: '💙' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Firebase', level: 90, icon: '🔥' },
    { name: 'MongoDB', level: 80, icon: '🍃' }
  ];

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    });

    // Cargar proyectos desde Firestore
    this.loadProjects();
  }

  /**
   * Cargar proyectos dinámicamente desde Firestore
   */
  loadProjects(): void {
    this.loadingProjects = true;

    this.projectService.getProjectsByProgrammer(this.alexanderUID).subscribe({
      next: (firestoreProjects: Project[]) => {
        // Convertir de Project (Firestore) a ProjectInfo (UI)
        this.projects = firestoreProjects.map((project, index) => ({
          id: index + 1,
          title: project.name,
          description: project.description,
          image: project.imageUrl || 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500',
          technologies: project.technologies || [],
          link: project.demoUrl || '',
          github: project.repositoryUrl || ''
        }));

        this.loadingProjects = false;
        console.log('✅ Proyectos de Alexander cargados:', this.projects);
      },
      error: (error) => {
        console.error('❌ Error cargando proyectos:', error);
        this.loadingProjects = false;
        // Mantener array vacío si hay error
        this.projects = [];
      }
    });
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
