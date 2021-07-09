import { ProcessingPaymentController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeProcessingPaymentUsecase } from '@/main/factories/usecases'
import { makePaymentValidation } from '@/main/factories/validators'

export const makeProcessingPaymentController = (): Controller => {
  return new ProcessingPaymentController({
    processingPayment: makeProcessingPaymentUsecase(),
    validator: makePaymentValidation()
  })
}
