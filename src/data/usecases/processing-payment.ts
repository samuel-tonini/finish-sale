import { Payment } from '@/domain/models'
import { ProcessingPayment } from '@/domain/usecases'
import { LogRepository } from '@/data/protocols'

export class RandomProcessingPayment implements ProcessingPayment {
  constructor (private readonly logger: LogRepository) {
    Object.freeze(this)
  }

  async pay (payment: Payment): Promise<void> {
    const success = Math.random() * 100
    if (success < 20) {
      await this.logger.log({ message: 'Payment error.' })
      throw new Error('Payment error.')
    }
  }
}
