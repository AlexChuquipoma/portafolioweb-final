import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component';
import { PortfolioAlexanderComponent } from './pages/developer/alexander/portfolio-alexander.component';
import { PortfolioJuanComponent } from './pages/developer/juan/portfolio-juan.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';
import { ProgrammerDashboardComponent } from './pages/programmer/programmer-dashboard.component';
import { SetupComponent } from './pages/setup/setup.component';
import { adminGuard, programmerGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/alexander', component: PortfolioAlexanderComponent },
  { path: 'portfolio/juan', component: PortfolioJuanComponent },
  { path: 'setup', component: SetupComponent },

  // Rutas protegidas por rol
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'programmer',
    component: ProgrammerDashboardComponent,
    canActivate: [programmerGuard]
  },

  { path: '**', redirectTo: '/portfolio' }
];