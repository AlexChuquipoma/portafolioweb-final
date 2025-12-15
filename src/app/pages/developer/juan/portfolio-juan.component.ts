import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
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

  projects: ProjectInfo[] = [
    {
      id: 1,
      title: 'Proyecto Angular Formularios',
      description: 'Formulario realizado en el entorno de desarrollo Visual Studio Code, formulario simple y dinamico.',
      image: 'https://bias.academy/wp-content/uploads/2025/03/Heuristicas-no-UX.jpg',
      technologies: ['Angular','Node.js', 'TypeScript'],
      link: 'https://juan0fernandez.github.io/Programaci-n-y-Plataformas-Web-Clases/',
      github: 'https://github.com/Juan0Fernandez/Programaci-n-y-Plataformas-Web-Clases'
    },
    {
      id: 2,
      title: 'Heuristicas web',
      description: 'Plataforma con una interfaz centrada  seguido de una segunda parte con contenido de 10 heuristicas realizadas en VS Code.',
      image: 'https://cdn.prod.website-files.com/6474afeeb40eaf59586560eb/64aac931ef5d25bb34107199_Audit2.jpg',
      technologies: ['Angular', 'TypeScript', 'Tailwind'],
      link: 'https://juan0fernandez.github.io/02-ui-components/',
      github: 'https://github.com/Juan0Fernandez/icc-ppw-03-ui-fundamentos.git'
    },
    {
      id: 3,
      title: 'Simpson page',
      description: 'Aplicación web que muestra información de personajes de Los Simpson utilizando el consumo de una API pública.',
      image: 'https://hips.hearstapps.com/es.h-cdn.co/teleprogramaes/images/series-tv/2017/marzo/dia-mundial-de-los-simpson-antena-3/11679727-1-esl-ES/antena-3-crea-el-dia-mundial-de-los-simpson.jpg',
      technologies: ['Angular', 'TypeScript', 'Tailwind'],
      link: 'https://juan0fernandez.github.io/icc-ppw-03-ui-fundamentos/',
      github: 'https://github.com/Juan0Fernandez/icc-ppw-03-ui-fundamentos.git'
    }
  ];

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
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
