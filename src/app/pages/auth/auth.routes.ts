import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login', showMenu: false },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Cadastrar', backTo: '/auth/login', showMenu: false },
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Esqueci minha Senha',
      backTo: '/auth/login',
      showMenu: false,
    },
  },
];
