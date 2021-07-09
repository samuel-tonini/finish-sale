import { StockStartProcessingController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeStockStartProcessingUsecase } from '@/main/factories/usecases'
import { makeItemsValidations } from '@/main/factories/validators'

export const makeStockStartProcessingController = (): Controller => {
  return new StockStartProcessingController({
    stockStartProcessing: makeStockStartProcessingUsecase(),
    validator: makeItemsValidations()
  })
}
