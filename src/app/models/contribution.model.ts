export interface Contribution {
  id: number;
  memberId: number;
  type: ContributionTypes;
  value: number;
  date: string;
  paymentMethod: PaymentMethods;
}

export enum ContributionTypes {
  OFFERING = 'Oferta',
  TITHING = 'Dízimo',
  SPECIAL_DONATION = 'Doação Especial',
}

export enum PaymentMethods {
  CASH = 'Dinheiro',
  PIX = 'PIX',
  CARD = 'Cartão',
}
