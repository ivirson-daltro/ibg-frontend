import { Contribution } from './contribution.model';

export interface Financial {
  id: number;
  tipo: FinancialTypes;
  descricao?: string;
  valor: number;
  data: string;
  category?: string;
  memberId?: number;
  contribuicao?: Contribution;
}

export enum FinancialTypes {
  INCOME = 'Entrada',
  EXPENSE = 'Saída',
}
