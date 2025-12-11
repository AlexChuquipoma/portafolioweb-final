import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, setDoc, updateDoc, deleteDoc, query, where, getDocs, collectionData, addDoc, serverTimestamp, orderBy } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Advisory, AdvisoryStatus, AdvisoryRequest } from '../../shared/interfaces/advisory.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvisoryService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  /**
   * Crear nueva solicitud de asesoría
   */
  async createAdvisory(userId: string, userName: string, userEmail: string, programmerName: string, request: AdvisoryRequest): Promise<string> {
    const data: Omit<Advisory, 'id'> = {
      userId,
      userName,
      userEmail,
      programmerId: request.programmerId,
      programmerName,
      date: request.date,
      time: request.time,
      comment: request.comment || '',
      status: AdvisoryStatus.PENDING,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const advisoriesRef = collection(this.firestore, 'advisories');
    const docRef = await addDoc(advisoriesRef, data);
    return docRef.id;
  }

  /**
   * Obtener asesoría por ID
   */
  async getAdvisoryById(advisoryId: string): Promise<Advisory | null> {
    const advisoryDoc = doc(this.firestore, 'advisories', advisoryId);
    const docSnap = await getDoc(advisoryDoc);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Advisory;
    }
    return null;
  }

  /**
   * Obtener todas las asesorías de un programador
   */
  getAdvisoriesByProgrammer(programmerId: string): Observable<Advisory[]> {
    return this.getAllAdvisories().pipe(
      map(advisories => {
        const filtered = advisories.filter(a => a.programmerId === programmerId);
        console.log('📋 Asesorías del programador:', filtered);
        return filtered;
      }),
      catchError(error => {
        console.error('❌ Error obteniendo asesorías del programador:', error);
        return of([]);
      })
    );
  }

  /**
   * Obtener asesorías pendientes de un programador
   */
  getPendingAdvisories(programmerId: string): Observable<Advisory[]> {
    return this.getAllAdvisories().pipe(
      map(advisories => {
        const filtered = advisories.filter(a =>
          a.programmerId === programmerId &&
          a.status === AdvisoryStatus.PENDING
        );
        console.log('📋 Asesorías pendientes del programador:', filtered);
        return filtered;
      }),
      catchError(error => {
        console.error('❌ Error obteniendo asesorías pendientes:', error);
        return of([]);
      })
    );
  }

  /**
   * Obtener asesorías de un usuario
   */
  getAdvisoriesByUser(userId: string): Observable<Advisory[]> {
    return this.getAllAdvisories().pipe(
      map(advisories => {
        const filtered = advisories.filter(a => a.userId === userId);
        console.log('📋 Asesorías del usuario:', filtered);
        return filtered;
      }),
      catchError(error => {
        console.error('❌ Error obteniendo asesorías del usuario:', error);
        return of([]);
      })
    );
  }

  /**
   * Aprobar asesoría
   */
  async approveAdvisory(advisoryId: string, message?: string): Promise<void> {
    const advisoryDoc = doc(this.firestore, 'advisories', advisoryId);
    await updateDoc(advisoryDoc, {
      status: AdvisoryStatus.APPROVED,
      responseMessage: message || 'Asesoría aprobada',
      updatedAt: serverTimestamp()
    });
  }

  /**
   * Rechazar asesoría
   */
  async rejectAdvisory(advisoryId: string, message: string): Promise<void> {
    const advisoryDoc = doc(this.firestore, 'advisories', advisoryId);
    await updateDoc(advisoryDoc, {
      status: AdvisoryStatus.REJECTED,
      responseMessage: message,
      updatedAt: serverTimestamp()
    });
  }

  /**
   * Marcar asesoría como completada
   */
  async completeAdvisory(advisoryId: string): Promise<void> {
    const advisoryDoc = doc(this.firestore, 'advisories', advisoryId);
    await updateDoc(advisoryDoc, {
      status: AdvisoryStatus.COMPLETED,
      updatedAt: serverTimestamp()
    });
  }

  /**
   * Cancelar asesoría
   */
  async cancelAdvisory(advisoryId: string): Promise<void> {
    const advisoryDoc = doc(this.firestore, 'advisories', advisoryId);
    await updateDoc(advisoryDoc, {
      status: AdvisoryStatus.CANCELLED,
      updatedAt: serverTimestamp()
    });
  }

  /**
   * Eliminar asesoría
   */
  async deleteAdvisory(advisoryId: string): Promise<void> {
    const advisoryDoc = doc(this.firestore, 'advisories', advisoryId);
    await deleteDoc(advisoryDoc);
  }

  /**
   * Obtener todas las asesorías (admin)
   */
  getAllAdvisories(): Observable<Advisory[]> {
    const advisoriesRef = collection(this.firestore, 'advisories');
    return from(getDocs(advisoriesRef)).pipe(
      map(snapshot => {
        const advisories: Advisory[] = [];
        snapshot.forEach(doc => {
          advisories.push({
            id: doc.id,
            ...doc.data()
          } as Advisory);
        });
        console.log('📦 getAllAdvisories: Asesorías obtenidas desde Firestore:', advisories);
        return advisories;
      }),
      catchError(error => {
        console.error('❌ getAllAdvisories: Error:', error);
        return of([]);
      })
    );
  }
}
