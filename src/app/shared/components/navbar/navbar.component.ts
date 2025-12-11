import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface NavMenuItem {
  label: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  @Input() currentUser: any = null;
  @Input() showDashboardLink: boolean = false;
  @Input() additionalMenuItems: NavMenuItem[] = [];
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() scrollToEvent = new EventEmitter<string>();

  menuOpen = false;
  userMenuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  closeUserMenu(): void {
    this.userMenuOpen = false;
  }

  logout(): void {
    this.logoutEvent.emit();
    this.closeUserMenu();
  }

  scrollToSection(sectionId: string): void {
    this.scrollToEvent.emit(sectionId);
    this.menuOpen = false;
  }

  getUserInitials(): string {
    if (!this.currentUser) return '?';
    const name = this.currentUser.displayName || this.currentUser.name || this.currentUser.email;
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  getUserDisplayName(): string {
    return this.currentUser?.displayName || this.currentUser?.name || 'Usuario';
  }

  getUserEmail(): string {
    return this.currentUser?.email || '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.user-menu-container');
    if (!clickedInside && this.userMenuOpen) {
      this.userMenuOpen = false;
    }
  }
}