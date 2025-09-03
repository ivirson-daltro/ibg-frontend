export interface User {
  id: number;
  memberId?: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: UserRoles;
  registrationDate: string;
}

export enum UserRoles {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  VISITOR = 'VISITOR',
}
