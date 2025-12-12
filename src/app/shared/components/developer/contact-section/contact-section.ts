import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContactInfo {
  name: string;
  title: string;
  email?: string;
  github: string;
  linkedin: string;
  whatsapp?: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  @Input({ required: true }) developer!: ContactInfo;
}
