import { MemberDetailsComponent } from '../members/components/member-details/member-details.component';
import { SetLeadershipComponent } from './components/set-leadership/set-leadership.component';
import { ViewLeadershipComponent } from './components/view-leadership/view-leadership.component';

export const LEADERSHIP_ROUTES = [
  {
    path: '',
    component: ViewLeadershipComponent,
    data: { title: 'Liderança', backTo: 'home', showMenu: true },
  },
  {
    path: 'set',
    component: SetLeadershipComponent,
    data: {
      title: 'Configurar Liderança',
      backTo: 'leadership',
      showMenu: true,
    },
  },
  {
    path: 'details/:id',
    component: MemberDetailsComponent,
    data: {
      title: 'Detalhes do Membro',
      backTo: 'leadership',
      showMenu: true,
    },
  },
];
