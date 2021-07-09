import { RandomProcessingPayment } from '@/data/usecases'
import { ProcessingPayment } from '@/domain/usecases'

export const makeProcessingPaymentUsecase = (): ProcessingPayment => {
  return new RandomProcessingPayment()
}
