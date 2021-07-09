import { Payment } from '@/domain/models'

export interface PaymentRepository {
  pay: (payment: Payment) => Promise<void>
}
