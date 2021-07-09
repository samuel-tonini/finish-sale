import { StockFinishProcessingController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeStockFinishProcessingUsecase } from '@/main/factories/usecases'
import { RequiredFieldValidation } from '@/validation/validators'

export const makeStockFinishProcessingController = (): Controller => {
  return new StockFinishProcessingController({
    stockFinishProcessing: makeStockFinishProcessingUsecase(),
    validator: new RequiredFieldValidation('processingId')
  })
}
