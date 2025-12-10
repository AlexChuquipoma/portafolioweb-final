import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-portfolio-alexander',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './portfolio-alexander.component.html',
  styleUrl: './portfolio-alexander.component.css'
})
export class PortfolioAlexanderComponent implements OnInit {
  currentUser: any = null;

  // Información personal de Alexander
  developer = {
    name: 'Alexander Chuquipoma',
    greeting: '¡Qué onda Mijo!',
    title: 'Desarrollador Web Full Stack',
    image: '/imagenes/alex.png',
    bio: 'Soy Alexander Chuquipoma, un desarrollador web apasionado por crear soluciones innovadoras y eficientes.',
    description: 'He trabajado con Angular, Firebase y arquitecturas modernas basadas en microservicios.',
    email: 'alexander@example.com',
    github: 'https://github.com/AlexChuquipoma',
    linkedin: 'https://www.linkedin.com/in/alexander-chuquipoma-a62686220/'
  };

  projects: Project[] = [
    {
      id: 1,
      title: 'Fundamentos Web - Unidad 1',
      description: 'Proyecto educativo de fundamentos de programación web, desarrollado con TypeScript, HTML y SCSS.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500',
      technologies: ['TypeScript', 'HTML', 'SCSS'],
      link: 'https://alexchuquipoma.github.io/icc-ppw-u2-01Fundamentos/',
      github: 'https://github.com/AlexChuquipoma/icc-ppw-u2-01Fundamentos'
    },
    {
      id: 2,
      title: 'Fundamentos Web - Unidad 2',
      description: 'Segunda unidad de fundamentos web construida con Astro, framework moderno para sitios web rápidos.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      technologies: ['Astro', 'JavaScript'],
      link: 'https://alexchuquipoma.github.io/icc-ppw-u2-02Fundamentos/',
      github: 'https://github.com/AlexChuquipoma/icc-ppw-u2-02Fundamentos'
    },
    {
      id: 3,
      title: 'App de Heurísticas UI',
      description: 'Aplicación de componentes UI enfocada en heurísticas de usabilidad y diseño de interfaces.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500',
      technologies: ['HTML', 'TypeScript', 'CSS'],
      link: 'https://alexchuquipoma.github.io/02-ui-componentes/',
      github: 'https://github.com/AlexChuquipoma/02-ui-componentes'
    },
    {
      id: 4,
      title: 'Estilos y Componentes UI',
      description: 'Proyecto de componentes UI reutilizables con estilos personalizados y diseño moderno.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500',
      technologies: ['HTML', 'TypeScript', 'CSS'],
      link: 'https://alexchuquipoma.github.io/03-ui-componentes-/',
      github: 'https://github.com/AlexChuquipoma/03-ui-componentes-'
    },
    {
      id: 5,
      title: 'Pokémon App',
      description: 'Aplicación interactiva de Pokémon con búsqueda, filtros y visualización de información detallada.',
      image: 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=500',
      technologies: ['HTML', 'TypeScript', 'CSS'],
      link: 'https://alexchuquipoma.github.io/prueba2/',
      github: 'https://github.com/AlexChuquipoma/prueba2'
    }
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 95, icon: '🅰️' },
    { name: 'TypeScript', level: 90, icon: '💙' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Firebase', level: 90, icon: '🔥' },
    { name: 'MongoDB', level: 80, icon: '🍃' }
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
