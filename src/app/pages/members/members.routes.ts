import { Routes } from '@angular/router';
import { MembersListComponent } from './components/members-list/members-list.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';

export const MEMBERS_ROUTES: Routes = [
  {
    path: '',
    component: MembersListComponent,
    data: { title: 'Membros', backTo: 'home', showMenu: true },
  },
  {
    path: 'add',
    component: AddMemberComponent,
    data: { title: 'Adicionar Membro', backTo: 'members', showMenu: true },
  },
  {
    path: 'details/:id',
    component: MemberDetailsComponent,
    data: { title: 'Detalhes do Membro', backTo: 'members', showMenu: true },
  },
];
