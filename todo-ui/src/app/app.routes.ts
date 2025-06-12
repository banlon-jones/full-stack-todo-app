import { Routes } from '@angular/router';
import {SignInComponent} from './domain/auth/pages/sign-in/sign-in.component';
import {SignUpComponent} from './domain/auth/pages/sign-up/sign-up.component';
import {DashboardComponent} from './domain/task/pages/dashboard/dashboard.component';
import {authGuard} from './guards/auth/auth.guard';

export const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
];
