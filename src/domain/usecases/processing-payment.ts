import { Payment } from '@/domain/models'

export interface ProcessingPayment {
  pay: (payment: Payment) => Promise<void>
}
