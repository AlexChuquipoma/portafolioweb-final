import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ProjectService } from '../../../core/services/project.service';
import { Project, ProjectType } from '../../../shared/interfaces/project.interface';
import { NavbarComponent, NavLink } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeroSectionComponent, DeveloperInfo } from '../../../shared/components/developer/hero-section/hero-section';
import { ProjectsSection, ProjectInfo } from '../../../shared/components/developer/projects-section/projects-section';
import { SkillsSection, SkillInfo } from '../../../shared/components/developer/skills-section/skills-section';
import { ContactSection } from '../../../shared/components/developer/contact-section/contact-section';

@Component({
  selector: 'app-portfolio-juan',
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
  templateUrl: './portfolio-juan.component.html',
  styleUrl: './portfolio-juan.component.css'
})
export class PortfolioJuanComponent implements OnInit {
  currentUser: any = null;
  juanUID = 'L96lG4v5Y7PbDSuA0iTy8RtKOYB2'; // UID de Juan en Firebase

  // Enlaces personalizados para el navbar
  customNavLinks: NavLink[] = [
    { label: 'Sobre mi', sectionId: 'home' },
    { label: 'Mis Proyectos', sectionId: 'projects' },
    { label: 'Habilidades', sectionId: 'skills' },
    { label: 'Contacto', sectionId: 'contact' }
  ];

  // Información personal de Juan
  developerInfo: DeveloperInfo = {
    name: 'Juan Fernández',
    greeting: '¡Holaa!',
    title: 'Desarrollador Web Front-End & Back-End',
    image: '/imagenes/juan.png',
    bio: 'Soy Juan Fernández, un desarrollador web dedicado a construir aplicaciones web atractivas y funcionales.',
    description: 'Tengo experiencia en el desarrollo front-end y back-end, utilizando tecnologías como Angular, Node.js y bases de datos NoSQL.',
    email: 'Fernandezj159@hotmail.com',
    github: 'https://github.com/Juan0Fernandez',
    linkedin:'https://www.linkedin.com/in/juan-fernandez-074a3734b/' ,
    whatsapp: '593979173286'
  };

  // Proyectos dinámicos desde Firestore
  projects: ProjectInfo[] = [];
  loadingProjects = true;

  skills: SkillInfo[] = [
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'TypeScript', level: 88, icon: '💙' },
    { name: 'Angular', level: 85, icon: '🅰️' },
    { name: 'Node.js', level: 82, icon: '🟢' },
    { name: 'Tailwind CSS', level: 90, icon: '💨' },
    { name: 'NoSQL', level: 80, icon: '🗄️' }
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

    this.projectService.getProjectsByProgrammer(this.juanUID).subscribe({
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
        console.log('✅ Proyectos de Juan cargados:', this.projects);
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
