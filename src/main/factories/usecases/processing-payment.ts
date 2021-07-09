import { RandomProcessingPayment } from '@/data/usecases'
import { ProcessingPayment } from '@/domain/usecases'
import { ConsoleLogRepository } from '@/infra/log'

export const makeProcessingPaymentUsecase = (): ProcessingPayment => {
  return new RandomProcessingPayment(new ConsoleLogRepository())
}
