import { StockCancelProcessingController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeStockCancelProcessingUsecase } from '@/main/factories/usecases'
import { RequiredFieldValidation } from '@/validation/validators'

export const makeStockCancelProcessingController = (): Controller => {
  return new StockCancelProcessingController({
    stockCancelProcessing: makeStockCancelProcessingUsecase(),
    validator: new RequiredFieldValidation('processingId')
  })
}
