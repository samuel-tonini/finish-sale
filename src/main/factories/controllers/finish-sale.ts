import { FinishSaleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeMemoryFinishSaleUsecase } from '@/main/factories/usecases'
import { makeSaleValidations } from '@/main/factories/validators'

export const makeFinishSaleController = (): Controller => {
  return new FinishSaleController({
    finishSale: makeMemoryFinishSaleUsecase(),
    validator: makeSaleValidations()
  })
}
