import { Sale } from '@/domain/models'
import { ProcessingDispatch } from '@/domain/usecases'

export class RandomProcessingDispatch implements ProcessingDispatch {
  async dispatch (sale: Sale): Promise<void> {
    const success = Math.random() * 100
    if (success < 20) {
      throw new Error('Dispatch error.')
    }
  }
}
