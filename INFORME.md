# INFORME DEL PROYECTO
## Portafolio Web - Plataforma de Gestión de Programadores

---

## 1. Logo de la Carrera y del Proyecto

<div align="center">

![Universidad Politécnica Salesiana](/public/imagenes/ups.webp)

### Universidad Politécnica Salesiana
### Carrera de Computación

<br>

### 🚀 Portafolio Web
#### Sistema de Gestión de Programadores y Asesorías Técnicas

</div>

---

## 2. Integrantes

<table>
  <tr>
    <th>Nombre Completo</th>
    <th>GitHub Personal</th>
    <th>LinkedIn</th>
  </tr>
  <tr>
    <td><strong>Alexander Chuquipoma</strong></td>
    <td><a href="https://github.com/AlexChuquipoma">github.com/AlexChuquipoma</a></td>
    <td><a href="https://www.linkedin.com/in/alexander-chuquipoma-a62686220/">LinkedIn Profile</a></td>
  </tr>
  <tr>
    <td><strong>Juan Fernández</strong></td>
    <td><a href="https://github.com/Juan0Fernandez">github.com/Juan0Fernandez</a></td>
    <td><a href="https://www.linkedin.com/in/juan-fernandez-074a3734b/">LinkedIn Profile</a></td>
  </tr>
</table>

**Correo de contacto del proyecto:** achuquipoma@est.ups.edu.ec

**Repositorio del Proyecto:** *[Pendiente de publicación]*

---

## 3. Tecnologías Utilizadas

<div align="center">

### Stack Tecnológico Principal

<table>
  <tr>
    <td align="center" width="150">
      <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="80" height="80"/><br/>
      <strong>Angular 21</strong><br/>
      <sub>Framework Frontend</sub>
    </td>
    <td align="center" width="150">
      <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="80" height="80"/><br/>
      <strong>Firebase</strong><br/>
      <sub>Backend Serverless</sub>
    </td>
    <td align="center" width="150">
      <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="80" height="80"/><br/>
      <strong>TypeScript</strong><br/>
      <sub>Lenguaje Principal</sub>
    </td>
    <td align="center" width="150">
      <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="80" height="80"/><br/>
      <strong>Tailwind CSS</strong><br/>
      <sub>Framework de Estilos</sub>
    </td>
  </tr>
</table>

</div>

### 🔧 Tecnologías Frontend

- **Angular 21.0.0** - Framework principal para la construcción de la SPA
- **TypeScript 5.9.2** - Lenguaje de programación tipado
- **Tailwind CSS 4.1.12** - Framework de utilidades CSS
- **RxJS 7.8.0** - Programación reactiva y manejo de observables
- **Angular Router** - Navegación y gestión de rutas

### 🗄️ Backend y Base de Datos

- **Firebase Authentication** - Sistema de autenticación de usuarios
  - Login con email/password
  - Gestión de sesiones persistentes
  - Recuperación de contraseña

- **Cloud Firestore** - Base de datos NoSQL en tiempo real
  - Colecciones: users, advisories, projects, schedules, notifications
  - Sincronización en tiempo real
  - Consultas complejas con filtros

- **Firebase Storage** - Almacenamiento de archivos
  - Fotos de perfil de usuarios
  - Imágenes de proyectos

### 📧 Servicios Externos

- **EmailJS** - Servicio de notificaciones por correo electrónico
  - Service ID: `service_0eplwcm`
  - Public Key: `kktEDGVaLELfRoLHg`
  - Plantillas:
    - Nueva asesoría: `template_l9bes1c`
    - Respuesta de asesoría: `template_xoqq0bc`

- **WhatsApp Integration** - Contacto directo vía WhatsApp Web
  - Enlaces directos con mensaje predefinido
  - Integración en sección de contacto

### 🛠️ Herramientas de Desarrollo

- **Angular CLI 21.0.2** - Herramienta de línea de comandos
- **Vitest 4.0.8** - Framework de testing
- **PostCSS 8.5.3** - Procesador de CSS
- **Prettier** - Formateador de código
- **npm 10.9.2** - Gestor de paquetes

---

## 4. Descripción del Proyecto

> **Portafolio Web** es una plataforma web integral diseñada para gestionar portafolios de programadores, solicitudes de asesorías técnicas y proyectos académicos/profesionales, implementando un sistema de roles diferenciados.
>
> La plataforma permite a **administradores** gestionar usuarios, roles y horarios del sistema; a **programadores** mostrar sus portafolios personalizados, gestionar solicitudes de asesoría y administrar su catálogo de proyectos; y a **usuarios generales** visualizar portafolios, solicitar asesorías técnicas y gestionar su perfil personal.
>
> El sistema está construido con **Angular 21** como framework frontend, utilizando **Firebase** como backend serverless (Authentication, Firestore, Storage) y **EmailJS** para el envío automático de notificaciones por correo electrónico. Implementa componentes modulares reutilizables, arquitectura basada en servicios y guards de autenticación para control de acceso basado en roles (RBAC).

### Objetivos del Proyecto

1. **Centralizar la gestión de portafolios** de programadores en una sola plataforma
2. **Facilitar el proceso de solicitud** de asesorías técnicas entre usuarios y programadores
3. **Implementar un sistema robusto de notificaciones** en tiempo real
4. **Proporcionar herramientas administrativas** completas para la gestión del sistema
5. **Crear una experiencia de usuario moderna** y responsive

---

## 5. Roles y Funcionalidades

### 👤 **Usuario (USER)**

**Descripción:** Rol básico asignado a todos los usuarios registrados en la plataforma.

**Funcionalidades:**

- ✅ **Visualización de Portafolios**
  - Acceder a portafolios de programadores
  - Ver proyectos académicos y profesionales
  - Visualizar habilidades y tecnologías
  - Acceder a enlaces de redes sociales

- 📋 **Gestión de Asesorías**
  - Crear solicitudes de asesoría técnica
  - Seleccionar programador, fecha y hora
  - Especificar tema y descripción de la asesoría
  - Visualizar historial de asesorías solicitadas
  - Recibir notificaciones de respuestas (aprobación/rechazo)
  - Cancelar asesorías pendientes

- 👥 **Gestión de Perfil Personal**
  - Actualizar nombre de usuario
  - Cambiar contraseña
  - Subir foto de perfil
  - Ver información de cuenta (fecha de registro, última actualización)

- 🔔 **Sistema de Notificaciones**
  - Recibir notificaciones en la aplicación
  - Recibir correos electrónicos automáticos
  - Ver contador de notificaciones no leídas
  - Marcar notificaciones como leídas

**Restricciones:**
- No puede aprobar/rechazar asesorías
- No puede crear proyectos
- No puede gestionar otros usuarios

---

### 💻 **Programador (PROGRAMMER)**

**Descripción:** Rol especializado para desarrolladores que gestionan sus portafolios y asesorías.

**Funcionalidades:**

- ✨ **Todas las funciones de Usuario**
  - Incluye todas las capacidades del rol USER

- 📊 **Dashboard de Programador**
  - Panel personalizado con estadísticas
  - Visualización de asesorías:
    - Pendientes
    - Aprobadas
    - Rechazadas
    - Canceladas
  - Contador de proyectos registrados
  - Acceso rápido a gestiones

- 🎯 **Gestión de Asesorías**
  - Visualizar solicitudes recibidas
  - **Aprobar** asesorías con confirmación
  - **Rechazar** asesorías con mensaje
  - Ver detalles completos (usuario, fecha, hora, tema, descripción)
  - Filtrar por estado
  - Envío automático de notificaciones al usuario

- 💼 **Gestión de Proyectos**
  - **Crear** nuevos proyectos
    - Validación de URLs (repositorio, demo, imagen)
    - Campos obligatorios completos
  - **Editar** proyectos existentes
  - **Eliminar** proyectos
  - Categorización:
    - Tipo: Académico / Profesional
    - Participación: Individual / Grupal
  - Agregar tecnologías utilizadas
  - URLs de repositorio (GitHub/GitLab)
  - URL de demo (Firebase/Vercel/Netlify)
  - Imagen representativa del proyecto

- 🌐 **Portafolio Personalizado**
  - Sección Hero con información personal
  - Galería de proyectos
  - Listado de habilidades con niveles
  - Sección de contacto con redes sociales

**Restricciones:**
- No puede gestionar otros usuarios
- No puede modificar horarios del sistema
- Solo gestiona asesorías donde es el programador asignado

---

### 🔴 **Administrador (ADMIN)**

**Descripción:** Rol con permisos completos para la administración integral del sistema.

**Funcionalidades:**

- 🌟 **Todas las funciones de Programador y Usuario**
  - Acceso completo a todas las capacidades anteriores

- 🎛️ **Dashboard Administrativo**
  - Panel de control centralizado
  - Estadísticas del sistema:
    - Total de usuarios registrados
    - Total de programadores
    - Total de asesorías
    - Asesorías pendientes
  - Gráficos y métricas
  - Vista general del sistema

- 👥 **Gestión Completa de Usuarios**
  - **Crear** nuevos usuarios
    - Asignar email y contraseña
    - Definir nombre de usuario
    - Asignar rol (admin/programmer/user)
  - **Editar** usuarios existentes
    - Modificar información personal
    - Cambiar rol
    - Actualizar datos de contacto
  - **Eliminar** usuarios
    - Eliminación en Firebase Auth
    - Eliminación en Firestore
  - **Visualizar** lista completa de usuarios
    - Filtrar por rol
    - Buscar por nombre/email
    - Ver detalles completos

- ⏰ **Gestión de Horarios del Sistema**
  - **Crear** horarios de disponibilidad
  - **Editar** horarios existentes
  - **Eliminar** horarios
  - Definir días y horas disponibles
  - Asignar horarios a programadores

- 📋 **Vista General de Asesorías**
  - Ver todas las asesorías del sistema
  - Filtrar por estado
  - Filtrar por programador
  - Estadísticas generales

- 🔐 **Gestión de Roles y Permisos**
  - Asignar roles a usuarios
  - Cambiar roles dinámicamente
  - Controlar accesos del sistema

**Privilegios Especiales:**
- Acceso sin restricciones a todas las colecciones de Firebase
- Puede modificar cualquier dato del sistema
- Puede eliminar cualquier registro
- Control total sobre usuarios y roles

---

## 6. Módulos y Pantallas del Sistema

### 🔐 **Módulo de Autenticación**

#### **Pantalla de Login** (`/login`)
**Descripción:** Pantalla de inicio de sesión para usuarios registrados.

**Elementos:**
- Formulario con campos:
  - Email (con validación de formato)
  - Contraseña (campo oculto)
- Botón "Iniciar Sesión"
- Enlace a registro "¿No tienes cuenta? Regístrate"
- Mensajes de error en tiempo real
- Diseño responsive con gradientes

**Funcionalidad:**
- Validación de formulario con Angular Reactive Forms
- Autenticación con Firebase Auth
- Redirección según rol:
  - Admin → `/admin`
  - Programmer → `/programmer`
  - User → `/`
- Manejo de errores (credenciales incorrectas, usuario no existe)

#### **Pantalla de Registro** (`/register`)
**Descripción:** Formulario para crear nuevas cuentas de usuario.

**Elementos:**
- Campos del formulario:
  - Nombre completo
  - Email
  - Contraseña (mínimo 6 caracteres)
  - Confirmar contraseña
- Validaciones en tiempo real
- Botón "Registrarse"
- Enlace a login "¿Ya tienes cuenta? Inicia sesión"

**Funcionalidad:**
- Validación de contraseñas coincidentes
- Creación de usuario en Firebase Auth
- Creación de documento en Firestore (colección `users`)
- Rol por defecto: `user`
- Redirección automática al login

---

### 🏠 **Módulo de Portafolios**

#### **Portafolio Principal** (`/`)
**Descripción:** Página de inicio con portafolio general del equipo.

**Secciones:**
- Navbar con navegación
- Hero section
- Sección de características
- Sección de habilidades
- Formulario de contacto
- Footer

#### **Portafolio de Alexander** (`/developer/alexander`)
**Descripción:** Portafolio personal modular de Alexander Chuquipoma.

**Componentes utilizados:**
- `<app-hero-section>` - Información personal, foto, enlaces sociales
- `<app-projects-section>` - Grid de 5 proyectos
- `<app-skills-section>` - 6 habilidades técnicas con barras de progreso
- `<app-contact-section>` - Formulario y enlaces de contacto

**Proyectos mostrados:**
1. Fundamentos Web - Unidad 1 (TypeScript, HTML, SCSS)
2. Fundamentos Web - Unidad 2 (Astro, JavaScript)
3. App de Heurísticas UI
4. Estilos y Componentes UI
5. Pokémon App

#### **Portafolio de Juan** (`/developer/juan`)
**Descripción:** Portafolio personal modular de Juan Fernández.

**Componentes utilizados:**
- Misma estructura modular que Alexander
- Tema visual en azul/cyan

**Proyectos mostrados:**
1. Proyecto Angular Formularios
2. Heurísticas Web
3. Simpson Page

---

### 👤 **Módulo de Perfil de Usuario**

#### **Página de Perfil** (`/profile`)
**Descripción:** Panel para gestionar información personal del usuario.

**Secciones:**

1. **Header con foto de perfil**
   - Foto circular con borde degradado
   - Botón de cámara para cambiar foto
   - Badge de rol (color según tipo)
   - Fondo degradado purple-pink

2. **Formulario de información**
   - Nombre completo (editable)
   - Email (solo lectura)
   - Fecha de registro
   - Última actualización

3. **Sección de cambio de contraseña** (expandible)
   - Nueva contraseña
   - Confirmar contraseña
   - Validación de longitud mínima
   - Validación de coincidencia

4. **Botones de acción**
   - Guardar cambios
   - Volver al dashboard

**Funcionalidades:**
- Upload de foto a Firebase Storage
- Actualización de perfil en Authentication
- Actualización de datos en Firestore
- Validación de contraseñas
- Mensajes de éxito/error
- Estados de carga

---

### 💻 **Módulo de Programador**

#### **Dashboard de Programador** (`/programmer`)
**Descripción:** Panel de control para programadores.

**Secciones:**

1. **Estadísticas**
   - Total de asesorías
   - Asesorías pendientes
   - Asesorías aprobadas
   - Total de proyectos

2. **Gestión de Asesorías**
   - Tabs por estado:
     - Pendientes
     - Aprobadas
     - Rechazadas
     - Canceladas
   - Tarjetas de asesorías con:
     - Información del usuario
     - Fecha y hora
     - Tema y descripción
     - Botones de acción (Aprobar/Rechazar)

3. **Gestión de Proyectos**
   - Lista de proyectos propios
   - Botón "Nuevo Proyecto"
   - Botones de editar/eliminar
   - Vista categorizada (Académicos/Profesionales)

**Modal de Nuevo Proyecto:**
- Nombre del proyecto *
- Descripción *
- Tipo (Académico/Profesional) *
- Tipo de participación (Individual/Grupal) *
- Tecnologías (tags dinámicos) *
- URL del repositorio * (validación de URL)
- URL del demo * (validación de URL)
- URL de imagen * (validación de URL)
- Botones: Guardar / Cancelar

**Funcionalidades:**
- Aprobar asesoría → Envía email + notificación
- Rechazar asesoría → Envía email + notificación
- CRUD completo de proyectos
- Validación de URLs
- Notificaciones en tiempo real

---

### 🔴 **Módulo de Administrador**

#### **Dashboard de Administrador** (`/admin`)
**Descripción:** Panel de control maestro del sistema.

**Secciones:**

1. **Estadísticas Globales**
   - Total de usuarios
   - Total de programadores
   - Total de asesorías
   - Asesorías pendientes

2. **Gestión de Usuarios**
   - Tabla de usuarios con:
     - Nombre
     - Email
     - Rol
     - Fecha de registro
     - Acciones (Editar/Eliminar)
   - Botón "Crear Usuario"
   - Búsqueda y filtros

**Modal de Crear Usuario:**
- Nombre completo
- Email
- Contraseña
- Rol (admin/programmer/user)
- Botón crear

**Modal de Editar Usuario:**
- Modificar nombre
- Cambiar rol
- Actualizar información

3. **Gestión de Horarios**
   - Lista de horarios disponibles
   - Días de la semana
   - Horas de inicio y fin
   - Botón "Nuevo Horario"
   - Editar/Eliminar horarios

4. **Vista General de Asesorías**
   - Todas las asesorías del sistema
   - Filtros por estado
   - Filtros por programador
   - Estadísticas

**Funcionalidades especiales:**
- Eliminación de usuarios (Auth + Firestore)
- Asignación de roles
- Gestión completa de horarios
- Vista omnisciente del sistema

---

## 7. Flujos Principales del Usuario

### 🔹 **Flujo 1: Registro e Inicio de Sesión**

```mermaid
Usuario → Accede a /register
       → Completa formulario (nombre, email, contraseña)
       → Click en "Registrarse"
       → Firebase Auth crea usuario
       → Firestore crea documento en colección "users"
       → Redirección a /login
       → Usuario ingresa credenciales
       → Firebase valida credenciales
       → AuthService emite usuario actual
       → Guard verifica rol
       → Redirección según rol:
          - Admin → /admin
          - Programmer → /programmer
          - User → /
```

**Datos guardados en Firebase:**
- **Authentication:** email, uid, displayName
- **Firestore (users):**
  ```typescript
  {
    uid: string,
    email: string,
    displayName: string,
    role: 'user', // por defecto
    createdAt: Timestamp,
    updatedAt: Timestamp
  }
  ```

---

### 🔹 **Flujo 2: Solicitud de Asesoría (Usuario)**

```mermaid
Usuario autenticado → Accede a portafolio de programador
                    → Click en "Solicitar Asesoría"
                    → Modal de solicitud se abre
                    → Completa formulario:
                       - Selecciona fecha
                       - Selecciona hora
                       - Escribe tema
                       - Escribe descripción
                    → Click en "Enviar Solicitud"
                    → Validación de campos
                    → AdvisoryService.createAdvisory()
                    → Firestore crea documento en "advisories"
                    → EmailService envía correo al programador
                    → NotificationService crea notificación para programador
                    → Mensaje de éxito al usuario
                    → Modal se cierra
```

**Datos guardados en Firestore (advisories):**
```typescript
{
  id: 'auto-generated',
  userId: 'uid-del-usuario',
  userName: 'Juan Pérez',
  userEmail: 'juan@example.com',
  programmerId: 'uid-del-programador',
  programmerName: 'Alexander Chuquipoma',
  date: '2025-12-15',
  time: '10:00',
  topic: 'Consulta sobre Angular',
  description: 'Necesito ayuda con...',
  status: 'pending',
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**Email enviado (EmailJS):**
- Destinatario: Email del programador
- Template: `template_l9bes1c`
- Contenido: Nueva solicitud de asesoría de [Usuario] para [Fecha] a las [Hora]

---

### 🔹 **Flujo 3: Gestión de Asesoría (Programador)**

```mermaid
Programador → Accede a /programmer
            → Ve listado de asesorías pendientes
            → Click en "Gestionar" en una asesoría
            → Ve detalles completos
            → Opción A: Aprobar
               → Click en "Aprobar"
               → Confirmación
               → AdvisoryService.updateAdvisoryStatus('approved')
               → Firestore actualiza status a 'approved'
               → EmailService envía email de aprobación al usuario
               → NotificationService crea notificación para usuario
               → Mensaje de éxito
            → Opción B: Rechazar
               → Click en "Rechazar"
               → Confirmación
               → AdvisoryService.updateAdvisoryStatus('rejected')
               → Firestore actualiza status a 'rejected'
               → EmailService envía email de rechazo
               → NotificationService crea notificación
```

**Actualización en Firestore:**
```typescript
// Documento en advisories/{id}
{
  ...datos_anteriores,
  status: 'approved', // o 'rejected'
  updatedAt: Timestamp.now()
}
```

**Notificación creada:**
```typescript
// Documento en notifications
{
  userId: 'uid-del-usuario-solicitante',
  type: 'advisory_approved', // o 'advisory_rejected'
  title: '✅ Asesoría Aprobada',
  message: 'Tu asesoría con Alexander... ha sido aprobada',
  read: false,
  createdAt: Timestamp
}
```

---

### 🔹 **Flujo 4: Creación de Proyecto (Programador)**

```mermaid
Programador → Dashboard /programmer
            → Sección "Mis Proyectos"
            → Click en "Nuevo Proyecto"
            → Modal se abre
            → Completa formulario:
               - Nombre del proyecto
               - Descripción
               - Tipo (Académico/Profesional)
               - Participación (Individual/Grupal)
               - Tecnologías (agregar tags)
               - URL repositorio (validación)
               - URL demo (validación)
               - URL imagen (validación)
            → Click en "Guardar"
            → Validaciones:
               ✓ Campos obligatorios completos
               ✓ URLs válidas (regex)
               ✓ Al menos una tecnología
            → ProjectService.createProject()
            → Firestore crea documento en "projects"
            → Mensaje de éxito
            → Modal se cierra
            → Lista de proyectos se actualiza
```

**Validación de URLs (Regex):**
```typescript
const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
```

**Datos guardados en Firestore (projects):**
```typescript
{
  id: 'auto-generated',
  name: 'Portafolio Web',
  description: 'Sistema de gestión...',
  type: 'professional',
  participationType: 'group',
  technologies: ['Angular', 'Firebase', 'Tailwind'],
  repositoryUrl: 'https://github.com/user/repo',
  demoUrl: 'https://proyecto.vercel.app',
  imageUrl: 'https://example.com/image.jpg',
  developerId: 'uid-del-programador',
  createdAt: Timestamp
}
```

---

### 🔹 **Flujo 5: Gestión de Usuarios (Administrador)**

```mermaid
Admin → Accede a /admin
      → Sección "Gestión de Usuarios"
      → Ve tabla con todos los usuarios
      → Opción A: Crear Usuario
         → Click en "Crear Usuario"
         → Modal con formulario
         → Completa datos (nombre, email, password, rol)
         → Click en "Crear"
         → Firebase Auth crea cuenta
         → Firestore crea documento
         → Usuario aparece en tabla
      → Opción B: Editar Usuario
         → Click en "Editar"
         → Modal con datos actuales
         → Modifica información
         → UserService.updateUser()
         → Firestore actualiza documento
      → Opción C: Eliminar Usuario
         → Click en "Eliminar"
         → Confirmación
         → UserService.deleteUser()
         → Elimina de Firebase Auth
         → Elimina de Firestore
```

**Operaciones en Firebase:**

**Crear:**
```typescript
// 1. Firebase Auth
const userCredential = await createUserWithEmailAndPassword(auth, email, password);

// 2. Firestore
await setDoc(doc(firestore, 'users', uid), {
  uid,
  email,
  displayName,
  role,
  createdAt: serverTimestamp()
});
```

**Eliminar:**
```typescript
// 1. Firestore
await deleteDoc(doc(firestore, 'users', uid));

// 2. Firebase Auth (requiere privilegios admin)
await deleteUser(user);
```

---

## 8. Fragmentos Técnicos Importantes

### 📧 **Código de Envío de Correo (EmailJS)**

#### **Servicio de Email** (`email.service.ts`)

```typescript
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = environment.emailjs.serviceId;
  private publicKey = environment.emailjs.publicKey;

  /**
   * Enviar email de nueva asesoría al programador
   */
  async sendNewAdvisoryEmail(params: {
    to_email: string;
    to_name: string;
    from_name: string;
    user_email: string;
    date: string;
    time: string;
    topic: string;
    description: string;
  }): Promise<void> {
    try {
      const response = await emailjs.send(
        this.serviceId,
        environment.emailjs.templates.newAdvisory, // template_l9bes1c
        {
          to_email: params.to_email,
          to_name: params.to_name,
          from_name: params.from_name,
          user_email: params.user_email,
          date: params.date,
          time: params.time,
          topic: params.topic,
          description: params.description
        },
        this.publicKey
      );

      console.log('✅ Email enviado exitosamente', response);
    } catch (error) {
      console.error('❌ Error enviando email:', error);
      throw error;
    }
  }

  /**
   * Enviar email de respuesta de asesoría al usuario
   */
  async sendAdvisoryResponseEmail(params: {
    to_email: string;
    to_name: string;
    programmer_name: string;
    status: string;
    date: string;
    time: string;
    topic: string;
  }): Promise<void> {
    try {
      const response = await emailjs.send(
        this.serviceId,
        environment.emailjs.templates.advisoryResponse, // template_xoqq0bc
        {
          to_email: params.to_email,
          to_name: params.to_name,
          programmer_name: params.programmer_name,
          status: params.status === 'approved' ? 'APROBADA ✅' : 'RECHAZADA ❌',
          date: params.date,
          time: params.time,
          topic: params.topic
        },
        this.publicKey
      );

      console.log('✅ Email de respuesta enviado', response);
    } catch (error) {
      console.error('❌ Error enviando email de respuesta:', error);
      throw error;
    }
  }
}
```

#### **Uso en AdvisoryService**

```typescript
// Aprobar asesoría
async approveAdvisory(advisoryId: string): Promise<void> {
  const advisory = await this.getAdvisoryById(advisoryId);

  // Actualizar estado en Firestore
  await updateDoc(doc(this.firestore, 'advisories', advisoryId), {
    status: 'approved',
    updatedAt: serverTimestamp()
  });

  // Enviar email al usuario
  await this.emailService.sendAdvisoryResponseEmail({
    to_email: advisory.userEmail,
    to_name: advisory.userName,
    programmer_name: advisory.programmerName,
    status: 'approved',
    date: advisory.date,
    time: advisory.time,
    topic: advisory.topic
  });

  // Crear notificación
  await this.notificationService.notifyAdvisoryApproved(
    advisory.userId,
    advisory.userName,
    advisory.programmerName,
    advisoryId,
    advisory.date,
    advisory.time
  );
}
```

---

### 💬 **Código de Integración WhatsApp**

#### **Componente de Contacto** (`contact-section.html`)

```html
<!-- Botón de WhatsApp -->
<a
  *ngIf="developer.whatsapp"
  [href]="'https://wa.me/' + developer.whatsapp + '?text=Hola%20' + developer.name + '%2C%20me%20gustaría%20contactarte'"
  target="_blank"
  class="w-14 h-14 rounded-full bg-slate-800/50 border border-white/10
         flex items-center justify-center hover:bg-green-600/20
         hover:border-green-500/50 transition group">
  <svg class="w-7 h-7 text-gray-400 group-hover:text-green-400 transition"
       fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
  </svg>
</a>
```

#### **Generación de Enlaces WhatsApp** (TypeScript)

```typescript
export class ContactSection {
  @Input({ required: true }) developer!: ContactInfo;

  /**
   * Generar enlace de WhatsApp con mensaje predefinido
   */
  getWhatsAppLink(): string {
    if (!this.developer.whatsapp) return '#';

    const phoneNumber = this.developer.whatsapp;
    const message = `Hola ${this.developer.name}, me gustaría contactarte sobre una consulta técnica.`;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }
}
```

**Formato del número de teléfono:**
- Código de país sin `+`: `593` (Ecuador)
- Número sin guiones: `983592464`
- Formato completo: `593983592464`

---

### 🔔 **Sistema de Notificaciones en Tiempo Real**

#### **Servicio de Notificaciones** (`notification.service.ts`)

```typescript
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, orderBy,
         onSnapshot, updateDoc, doc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notification } from '../../shared/interfaces/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private firestore: Firestore) {}

  /**
   * Crear notificación
   */
  async createNotification(notification: Omit<Notification, 'id'>): Promise<void> {
    const notificationsRef = collection(this.firestore, 'notifications');
    await addDoc(notificationsRef, {
      ...notification,
      read: false,
      createdAt: serverTimestamp()
    });
  }

  /**
   * Obtener notificaciones de usuario en tiempo real
   */
  getUserNotifications(userId: string): Observable<Notification[]> {
    return new Observable(observer => {
      const q = query(
        collection(this.firestore, 'notifications'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const notifications = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Notification[];

        observer.next(notifications);
      });

      return () => unsubscribe();
    });
  }

  /**
   * Marcar notificación como leída
   */
  async markAsRead(notificationId: string): Promise<void> {
    const notificationRef = doc(this.firestore, 'notifications', notificationId);
    await updateDoc(notificationRef, { read: true });
  }

  /**
   * Notificar asesoría aprobada
   */
  async notifyAdvisoryApproved(
    userId: string,
    userName: string,
    programmerName: string,
    advisoryId: string,
    date: string,
    time: string
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: 'advisory_approved',
      title: '✅ Asesoría Aprobada',
      message: `Tu asesoría con ${programmerName} para el ${date} a las ${time} ha sido aprobada`,
      read: false,
      createdAt: new Date()
    });
  }
}
```

#### **Componente Navbar con Notificaciones**

```typescript
export class NavbarComponent implements OnInit {
  notifications: Notification[] = [];
  unreadCount = 0;
  notificationsMenuOpen = false;

  ngOnInit(): void {
    if (this.currentUser?.uid) {
      this.loadNotifications();
    }
  }

  loadNotifications(): void {
    this.notificationService
      .getUserNotifications(this.currentUser.uid)
      .subscribe(notifications => {
        this.notifications = notifications.slice(0, 5); // Solo 5 más recientes
        this.unreadCount = notifications.filter(n => !n.read).length;
      });
  }

  async markAsRead(notification: Notification): Promise<void> {
    if (notification.id && !notification.read) {
      await this.notificationService.markAsRead(notification.id);
    }
  }
}
```

---

### 🔒 **Guards de Autenticación y Roles**

#### **Auth Guard** (`auth.guard.ts`)

```typescript
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => {
      if (user) {
        return true; // Usuario autenticado
      } else {
        // Redirigir a login si no está autenticado
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
```

#### **Role Guard** (`role.guard.ts`)

```typescript
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { map, switchMap, take } from 'rxjs/operators';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const userService = inject(UserService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[];

  return authService.user$.pipe(
    take(1),
    switchMap(async user => {
      if (!user) {
        router.navigate(['/login']);
        return false;
      }

      const userData = await userService.getUserByUid(user.uid);

      if (allowedRoles.includes(userData.role)) {
        return true; // Rol permitido
      } else {
        router.navigate(['/']); // Redirigir si no tiene permiso
        return false;
      }
    })
  );
};
```

#### **Uso en Rutas** (`app.routes.ts`)

```typescript
export const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Rutas protegidas (requieren autenticación)
  {
    path: 'profile',
    component: UserProfile,
    canActivate: [authGuard]
  },

  // Rutas de programador
  {
    path: 'programmer',
    component: ProgrammerDashboardComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['programmer', 'admin'] }
  },

  // Rutas de administrador
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] }
  }
];
```

---

### 📸 **Upload de Foto de Perfil**

#### **Componente de Perfil** (`user-profile.ts`)

```typescript
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { updateProfile } from '@angular/fire/auth';

export class UserProfile {
  selectedFile: File | null = null;
  @ViewChild('photoInput') photoInput!: ElementRef<HTMLInputElement>;

  /**
   * Abrir selector de archivo
   */
  openPhotoUpload(): void {
    this.photoInput.nativeElement.click();
  }

  /**
   * Cuando se selecciona una foto
   */
  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Validar que sea imagen
      if (!this.selectedFile.type.startsWith('image/')) {
        this.errorMessage = 'Por favor selecciona un archivo de imagen válido';
        this.selectedFile = null;
        return;
      }

      // Validar tamaño (max 5MB)
      if (this.selectedFile.size > 5 * 1024 * 1024) {
        this.errorMessage = 'La imagen no debe superar los 5MB';
        this.selectedFile = null;
        return;
      }

      this.uploadPhoto();
    }
  }

  /**
   * Subir foto a Firebase Storage
   */
  async uploadPhoto(): Promise<void> {
    if (!this.selectedFile || !this.currentUser) return;

    try {
      this.saving = true;

      const storage = getStorage();
      const fileRef = ref(
        storage,
        `profile-photos/${this.currentUser.uid}/${Date.now()}_${this.selectedFile.name}`
      );

      // Subir archivo
      await uploadBytes(fileRef, this.selectedFile);

      // Obtener URL de descarga
      const photoURL = await getDownloadURL(fileRef);

      // Actualizar perfil en Authentication
      await updateProfile(this.currentUser, { photoURL });

      // Actualizar en Firestore
      await this.userService.updateUserProfile(this.currentUser.uid, { photoURL });

      this.currentUser.photoURL = photoURL;
      this.successMessage = '¡Foto actualizada exitosamente!';
    } catch (error) {
      console.error('Error subiendo foto:', error);
      this.errorMessage = 'Error al subir la foto';
    } finally {
      this.saving = false;
      this.selectedFile = null;
    }
  }
}
```

---

## 9. Conclusiones

### 🎯 **Logros del Proyecto**

1. **Arquitectura Modular Exitosa**
   - Se implementó con éxito una arquitectura basada en componentes reutilizables
   - Reducción significativa de código: de ~186 líneas a 26 líneas por portafolio
   - Los componentes modulares (Hero, Projects, Skills, Contact) pueden ser reutilizados fácilmente

2. **Sistema de Autenticación Robusto**
   - Implementación completa de Firebase Authentication
   - Sistema de roles (RBAC) funcionando correctamente
   - Guards de autenticación protegiendo rutas sensibles
   - Gestión de sesiones persistente

3. **Gestión Integral de Asesorías**
   - Flujo completo desde solicitud hasta respuesta
   - Sistema de notificaciones dual (in-app + email)
   - Estados bien definidos (pendiente, aprobada, rechazada, cancelada)
   - Integración exitosa con EmailJS

4. **Interfaz de Usuario Moderna**
   - Diseño responsive con Tailwind CSS
   - Animaciones suaves y efectos visuales atractivos
   - Experiencia de usuario coherente en todos los módulos
   - Feedback visual inmediato en todas las acciones

5. **Base de Datos en Tiempo Real**
   - Implementación exitosa de Firestore
   - Sincronización en tiempo real de notificaciones
   - Estructura de datos bien organizada
   - Consultas eficientes con índices

---

### 📚 **Aprendizajes Clave**

#### **Técnicos:**

1. **Angular 21 y Componentes Standalone**
   - Migración exitosa a la nueva arquitectura standalone
   - Comprensión profunda del ciclo de vida de componentes
   - Implementación de comunicación entre componentes (@Input/@Output)
   - Uso efectivo de servicios e inyección de dependencias

2. **Firebase como Backend Serverless**
   - Dominio de Firebase Authentication
   - Firestore para base de datos NoSQL en tiempo real
   - Firebase Storage para manejo de archivos
   - Configuración de Security Rules

3. **TypeScript y Programación Reactiva**
   - Tipado fuerte con interfaces y tipos
   - RxJS y observables para manejo de datos asíncronos
   - Operadores de transformación (map, switchMap, filter)
   - Manejo de suscripciones y memory leaks

4. **Validación y Seguridad**
   - Validación de formularios con Reactive Forms
   - Validación de URLs con expresiones regulares
   - Implementación de guards para protección de rutas
   - Role-based access control (RBAC)

#### **Metodológicos:**

1. **Separación de Responsabilidades**
   - Arquitectura en capas (componentes, servicios, guards)
   - Single Responsibility Principle
   - Código limpio y mantenible

2. **Gestión de Estado**
   - Uso de servicios para estado compartido
   - Observables para comunicación reactiva
   - Manejo eficiente de datos en tiempo real

3. **Experiencia de Usuario**
   - Diseño mobile-first
   - Estados de carga y feedback visual
   - Manejo de errores user-friendly
   - Accesibilidad básica

---

### 🚀 **Posibles Mejoras Futuras**

#### **Funcionalidades:**

1. **Sistema de Chat en Tiempo Real**
   - Comunicación directa entre usuario y programador
   - Notificaciones de mensajes nuevos
   - Historial de conversaciones

2. **Calendario Integrado**
   - Vista de calendario para asesorías
   - Sincronización con Google Calendar
   - Recordatorios automáticos

3. **Sistema de Calificaciones**
   - Los usuarios pueden calificar las asesorías
   - Programadores acumulan reputación
   - Sistema de badges y logros

4. **Videollamadas Integradas**
   - Integración con WebRTC
   - Asesorías virtuales directamente en la plataforma
   - Grabación de sesiones (con permiso)

5. **Dashboard con Analíticas**
   - Gráficos de estadísticas avanzadas
   - Reportes exportables (PDF, Excel)
   - Métricas de rendimiento

#### **Técnicas:**

1. **Testing**
   - Implementar unit tests con Vitest
   - Tests e2e con Playwright
   - Cobertura de código > 80%

2. **Performance**
   - Lazy loading de módulos
   - Optimización de imágenes (WebP, lazy loading)
   - Service Workers para PWA
   - Caché estratégico

3. **Internacionalización (i18n)**
   - Soporte multi-idioma (español, inglés)
   - Detección automática de idioma
   - Traducción de notificaciones

4. **Accesibilidad (a11y)**
   - ARIA labels completos
   - Navegación por teclado
   - Modo de alto contraste
   - Compatibilidad con lectores de pantalla

5. **CI/CD**
   - GitHub Actions para despliegue automático
   - Tests automáticos en pull requests
   - Versionamiento semántico
   - Despliegue automático a Firebase Hosting

6. **Monitoreo y Logs**
   - Integración con Firebase Analytics
   - Monitoreo de errores con Sentry
   - Logs estructurados
   - Alertas automáticas

---

### 💡 **Reflexión Final**

El desarrollo de **Portafolio Web** ha sido una experiencia enriquecedora que nos permitió aplicar conocimientos de desarrollo web moderno, arquitectura de software y diseño de interfaces de usuario.

La implementación de un sistema completo con autenticación, roles diferenciados, notificaciones en tiempo real y gestión de datos en la nube nos ha dado una visión integral del desarrollo de aplicaciones web empresariales.

El proyecto demuestra que es posible construir aplicaciones robustas y escalables utilizando tecnologías serverless como Firebase, reduciendo significativamente la complejidad del backend y permitiendo enfocarse en la experiencia del usuario.

Los componentes modulares creados no solo mejoran la mantenibilidad del código, sino que también pueden ser reutilizados en futuros proyectos, demostrando la importancia de una arquitectura bien pensada desde el inicio.

---

## 📞 **Contacto y Soporte**

Para consultas, sugerencias o reportes de bugs:

- **Email:** achuquipoma@est.ups.edu.ec
- **GitHub Alexander:** [github.com/AlexChuquipoma](https://github.com/AlexChuquipoma)
- **GitHub Juan:** [github.com/Juan0Fernandez](https://github.com/Juan0Fernandez)

---

<div align="center">

### 🎓 Universidad Politécnica Salesiana
### Carrera de Computación

**Proyecto Académico - 2025**

---

**Desarrollado con ❤️ por Alexander Chuquipoma y Juan Fernández**

</div>
