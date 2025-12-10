import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, user, updateProfile } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  currentUser: any = null;

  constructor() {
    this.user$.subscribe((aUser) => {
      this.currentUser = aUser;
    });
  }

  // Registro con email y contraseña
  async register(userData: User): Promise<{ success: boolean; message: string }> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        userData.email,
        userData.password
      );

      // Actualizar el perfil con el nombre
      if (userData.name && userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: userData.name
        });
      }

      return { success: true, message: 'Registro exitoso' };
    } catch (error: any) {
      console.error('Error en registro:', error);
      return { success: false, message: this.getErrorMessage(error.code) };
    }
  }

  // Login con email y contraseña
  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return { success: true, message: 'Login exitoso' };
    } catch (error: any) {
      console.error('Error en login:', error);
      return { success: false, message: this.getErrorMessage(error.code) };
    }
  }

  // Login con Google
  async loginWithGoogle(): Promise<{ success: boolean; message: string }> {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      await signInWithPopup(this.auth, provider);
      return { success: true, message: 'Login con Google exitoso' };
    } catch (error: any) {
      console.error('Error en login con Google:', error);
      return { success: false, message: this.getErrorMessage(error.code) };
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error en logout:', error);
    }
  }

  // Verificar si está autenticado
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  // Obtener usuario actual
  getCurrentUser() {
    return this.currentUser;
  }

  // Mensajes de error en español
  private getErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/email-already-in-use': 'Este email ya está registrado',
      'auth/invalid-email': 'Email inválido',
      'auth/operation-not-allowed': 'Operación no permitida',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
      'auth/user-disabled': 'Usuario deshabilitado',
      'auth/user-not-found': 'Usuario no encontrado',
      'auth/wrong-password': 'Contraseña incorrecta',
      'auth/invalid-credential': 'Credenciales inválidas',
      'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde',
      'auth/network-request-failed': 'Error de conexión',
      'auth/popup-closed-by-user': 'Ventana cerrada por el usuario',
      'auth/cancelled-popup-request': 'Solicitud cancelada'
    };

    return errorMessages[errorCode] || 'Error desconocido. Intenta de nuevo';
  }
}