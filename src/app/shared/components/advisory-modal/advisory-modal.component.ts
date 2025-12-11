import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../core/services/user.service';
import { AdvisoryService } from '../../../core/services/advisory.service';
import { User } from '../../models/user.model';
import { UserRole } from '../../interfaces/role.interface';

@Component({
  selector: 'app-advisory-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './advisory-modal.component.html',
  styleUrl: './advisory-modal.component.css'
})
export class AdvisoryModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  advisoryForm: FormGroup;
  programmers: User[] = [];
  loading = false;
  successMessage = '';
  errorMessage = '';
  currentUser: any = null;

  // Horarios disponibles (esto se podría mejorar con el servicio de Schedule)
  availableTimes = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private advisoryService: AdvisoryService
  ) {
    this.advisoryForm = this.fb.group({
      programmerId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      comment: ['']
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    });

    this.loadProgrammers();
  }

  loadProgrammers(): void {
    console.log('🔍 AdvisoryModal: Iniciando carga de programadores...');
    this.userService.getProgrammers().subscribe({
      next: (programmers) => {
        console.log('✅ AdvisoryModal: Programadores recibidos:', programmers);
        this.programmers = programmers;
        console.log('✅ AdvisoryModal: this.programmers actualizado:', this.programmers);
      },
      error: (error) => {
        console.error('❌ AdvisoryModal: Error al cargar programadores:', error);
        this.programmers = [];
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.advisoryForm.valid && this.currentUser) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      try {
        const formValue = this.advisoryForm.value;
        const selectedProgrammer = this.programmers.find(p => p.uid === formValue.programmerId);

        if (!selectedProgrammer) {
          throw new Error('Programador no encontrado');
        }

        const userData = this.authService.getCurrentUserData();

        await this.advisoryService.createAdvisory(
          this.currentUser.uid,
          userData?.displayName || this.currentUser.displayName || 'Usuario',
          this.currentUser.email!,
          selectedProgrammer.displayName || 'Programador',
          {
            programmerId: formValue.programmerId,
            date: new Date(formValue.date),
            time: formValue.time,
            comment: formValue.comment
          }
        );

        this.successMessage = '¡Solicitud de asesoría enviada exitosamente!';
        setTimeout(() => {
          this.closeModal();
        }, 2000);
      } catch (error) {
        console.error('Error al crear asesoría:', error);
        this.errorMessage = 'Error al enviar la solicitud. Intenta de nuevo.';
      } finally {
        this.loading = false;
      }
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  // Obtener fecha mínima (hoy)
  getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  get programmerId() { return this.advisoryForm.get('programmerId'); }
  get date() { return this.advisoryForm.get('date'); }
  get time() { return this.advisoryForm.get('time'); }
  get comment() { return this.advisoryForm.get('comment'); }
}
