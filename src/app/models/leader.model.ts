import { Member } from './member.model';

export interface Leader {
  memberId: number;
  title: string;
  member: Partial<Member>;
}
