import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  @Input() currentUser: any = null;
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() scrollToEvent = new EventEmitter<string>();
  
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  logout(): void {
    this.logoutEvent.emit();
  }

  scrollToSection(sectionId: string): void {
    this.scrollToEvent.emit(sectionId);
    this.menuOpen = false;
  }
}