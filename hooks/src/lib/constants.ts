import { CardChecker } from './type';

export const cardBrandChecker: Record<string, CardChecker> = {
  DINERS: {
    name: 'DINERS',
    format: [4, 6, 4],
    validMaxLength: 14,
  },

  AMEX: {
    name: 'AMEX',
    format: [4, 6, 5],
    validMaxLength: 15,
  },

  VISA: {
    name: 'VISA',
    format: [4, 4, 4, 4],
    validMaxLength: 16,
  },
  MASTER: {
    name: 'MASTER',
    format: [4, 4, 4, 4],
    validMaxLength: 16,
  },
  UNION_PAY: {
    name: 'UNION_PAY',
    format: [4, 4, 4, 4],
    validMaxLength: 16,
  },
  '': {
    name: '',
    format: [4, 4, 4, 4],
    validMaxLength: 16,
  },
};