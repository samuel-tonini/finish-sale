import { Payment } from '@/domain/models'
import { ProcessingPayment } from '@/domain/usecases'

export class RandomProcessingPayment implements ProcessingPayment {
  async pay (payment: Payment): Promise<void> {
    const success = Math.random() * 100
    if (success < 20) {
      throw new Error('Payment error.')
    }
  }
}
