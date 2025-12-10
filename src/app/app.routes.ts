import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component';
import { PortfolioAlexanderComponent } from './pages/developer/alexander/portfolio-alexander.component';
import { PortfolioJuanComponent } from './pages/developer/juan/portfolio-juan.component';

export const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/alexander', component: PortfolioAlexanderComponent },
  { path: 'portfolio/juan', component: PortfolioJuanComponent },
  { path: '**', redirectTo: '/portfolio' }
];