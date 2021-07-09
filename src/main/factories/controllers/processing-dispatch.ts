import { ProcessingDispatchController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeProcessingDispatchUsecase } from '@/main/factories/usecases'
import { makeSaleValidations } from '@/main/factories/validators'

export const makeProcessingDispatchController = (): Controller => {
  return new ProcessingDispatchController({
    processingDispatch: makeProcessingDispatchUsecase(),
    validator: makeSaleValidations()
  })
}
