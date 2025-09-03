import { Member } from './member.model';

export interface Ministry {
  id: number;
  name: string;
  description?: string;
  leaderId: number;
  members?: Member[];
}
