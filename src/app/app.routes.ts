import { Routes } from '@angular/router';
import { DirectorshipComponent } from './pages/directorship/directorship.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { MinistriesComponent } from './pages/ministries/ministries.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MemberDetailsComponent } from './pages/members/components/member-details/member-details.component';
import { MembersListComponent } from './pages/members/components/members-list/members-list.component';
import { AddMemberComponent } from './pages/members/components/add-member/add-member.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'members',
    component: MembersComponent,
    children: [
      {
        path: '',
        component: MembersListComponent,
        data: { title: 'Membros', backTo: 'home' },
      },
      {
        path: 'add',
        component: AddMemberComponent,
        data: { title: 'Adicionar Membro', backTo: 'members' },
      },
      {
        path: 'details/:id',
        component: MemberDetailsComponent,
        data: { title: 'Detalhes do Membro', backTo: 'members' },
      },
    ],
  },
  {
    path: 'ministries',
    component: MinistriesComponent,
    data: { title: 'Ministérios', backTo: 'home' },
  },
  {
    path: 'directorship',
    component: DirectorshipComponent,
    data: { title: 'Diretoria', backTo: 'home' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Configurações', backTo: 'home' },
  },
];
