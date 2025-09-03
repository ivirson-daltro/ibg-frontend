import { Member } from './member.model';

export interface Event {
  id: number;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  type?: EventTypes;
  ministryId?: number;
}

export enum EventTypes {
  SERVICE = 'Culto',
  MEETING = 'Reunião',
  REHEARSAL = 'Ensaio',
  OTHER = 'Outro',
}
