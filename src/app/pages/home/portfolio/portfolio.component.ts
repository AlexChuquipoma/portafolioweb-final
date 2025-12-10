import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

interface Developer {
  id: number;
  name: string;
  image: string;
  greeting: string;
  description: string;
  bio: string;
  github: string;
  linkedin: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent implements OnInit {
  currentUser: any = null;
  menuOpen = false;

  developers: Developer[] = [
    {
      id: 1,
      name: 'Alexander Chuquipoma',
      image: '/imagenes/alex.png',
      greeting: '¡Qué onda Mijo!',
      description: 'Soy Alexander Chuquipoma, un desarrollador web apasionado por crear soluciones innovadoras y eficientes.',
      bio: 'He trabajado con Angular, Firebase y arquitecturas modernas basadas en microservicios.',
      github: 'https://github.com/AlexChuquipoma',
      linkedin: 'https://www.linkedin.com/in/alexander-chuquipoma-a62686220/'
    },
    {
      id: 2,
      name: 'Juan Fernández',
      image: '/imagenes/juan.webp',
      greeting: '¡Holaa!',
      description: 'Soy Juan Fernández, un desarrollador web dedicado a construir aplicaciones web atractivas y funcionales.',
      bio: 'Tengo experiencia en el desarrollo front-end y back-end, utilizando tecnologías como Angular, Node.js y bases de datos NoSQL.',
      github: '#',
      linkedin: '#'
    }
  ];

  features: Feature[] = [
    {
      icon: '👥',
      title: 'Multi-User Portfolios',
      description: 'Admin-managed accounts for programmers to showcase their work.'
    },
    {
      icon: '📅',
      title: 'Advisory Booking',
      description: 'External users can easily schedule advisory sessions with available programmers.'
    },
    {
      icon: '💡',
      title: 'AI Idea Generator',
      description: 'Leverage AI to generate unique project ideas and overcome creative blocks.'
    },
    {
      icon: '🔐',
      title: 'Role-Based Access',
      description: 'Secure and distinct dashboards for Admins, Programmers, and Users.'
    }
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 90, icon: '🅰️' },
    { name: 'TypeScript', level: 85, icon: '💙' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'Tailwind CSS', level: 85, icon: '💨' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del usuario
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToProfile(developerId: number): void {
    if (developerId === 1) {
      this.router.navigate(['/portfolio/alexander']);
    } else if (developerId === 2) {
      this.router.navigate(['/portfolio/juan']);
    }
  }
}