import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MinistriesComponent } from './pages/ministries/ministries.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Dashboard', showMenu: true },
  },
  {
    path: 'members',
    loadChildren: () =>
      import('./pages/members/members.routes').then((m) => m.MEMBERS_ROUTES),
  },
  {
    path: 'ministries',
    component: MinistriesComponent,
    data: { title: 'Ministérios', backTo: 'home', showMenu: true },
  },
  {
    path: 'leadership',
    loadChildren: () =>
      import('./pages/leadership/leadership.routes').then(
        (m) => m.LEADERSHIP_ROUTES
      ),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Configurações', backTo: 'home', showMenu: true },
  },
];
