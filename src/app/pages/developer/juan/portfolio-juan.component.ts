import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent, NavLink } from '../../../shared/components/navbar/navbar.component';
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
  selector: 'app-portfolio-juan',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
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
  developer = {
    name: 'Juan Fernández',
    greeting: '¡Holaa!',
    title: 'Desarrollador Web Front-End & Back-End',
<<<<<<< HEAD
    image: '/imagenes/juanperfil.jpg',
    bio: 'Soy Juan Fernández, un desarrollador ewqeweb dedicado a construir aplicaciones web atractivas y funcionales.',
=======
    image: '/imagenes/juan.png',
    bio: 'Soy Juan Fernández, un desarrollador web dedicado a construir aplicaciones web atractivas y funcionales.',
>>>>>>> 33fe33bf647b6340ec60b465e87b8af12983b7b9
    description: 'Tengo experiencia en el desarrollo front-end y back-end, utilizando tecnologías como Angular, Node.js y bases de datos NoSQL.',
    email: 'juan@example.com',
    github: 'https://github.com/juan',
    linkedin: 'https://linkedin.com/in/juan'
  };

  projects: Project[] = [
    {
      id: 1,
      title: 'Proyecto Angular Dashboard',
      description: 'Formularios simple y dinamico.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      technologies: ['Angular', 'D3.js', 'Node.js', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Blog Platform',
      description: 'Plataforma de blogs con editor markdown, categorías y sistema de comentarios.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
      link: 'https://juan0fernandez.github.io/02-ui-components/',
      github: 'https://github.com/Juan0Fernandez/icc-ppw-03-ui-fundamentos.git'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Aplicación del clima con pronóstico de 7 días, mapas interactivos y alertas meteorológicas.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'Redux'],
      link: 'https://juan0fernandez.github.io/icc-ppw-03-ui-fundamentos/',
      github: 'https://github.com/Juan0Fernandez/icc-ppw-03-ui-fundamentos.git'
    }
  ];

  skills: Skill[] = [
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
