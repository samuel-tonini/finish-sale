import { Sale } from '@/domain/models'
import { ProcessingDispatch } from '@/domain/usecases'
import { LogRepository } from '@/data/protocols'

export class RandomProcessingDispatch implements ProcessingDispatch {
  constructor (private readonly logger: LogRepository) {
    Object.freeze(this)
  }

  async dispatch (sale: Sale): Promise<void> {
    const success = Math.random() * 100
    if (success < 20) {
      await this.logger.log({ message: 'Dispatch error.' })
      throw new Error('Dispatch error.')
    }
  }
}
