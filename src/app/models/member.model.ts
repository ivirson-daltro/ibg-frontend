import { Address } from './address.model';

export interface Member {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  gender?: Genders;
  maritalStatus?: MaritalStatuses;
  baptismDate?: string;
  entryDate?: string;
  profilePicture?: string;
  active: boolean;
  notes?: string;
  address: Address;
}

export enum Genders {
  Male = 'Masculino',
  Female = 'Feminino',
}

export enum MaritalStatuses {
  Single = 'Solteiro(a)',
  Married = 'Casado(a)',
  Divorced = 'Divorciado(a)',
  Widowed = 'Viúvo(a)',
}
