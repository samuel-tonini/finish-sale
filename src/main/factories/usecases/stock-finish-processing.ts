import { MemoryStockFinishProcessing } from '@/data/usecases'
import { StockFinishProcessing } from '@/domain/usecases'
import { MemoryStockRepository } from '@/infra/stock'

export const makeStockFinishProcessingUsecase = (): StockFinishProcessing => {
  const stockBeforeProcessingRepository = new MemoryStockRepository()
  return new MemoryStockFinishProcessing(stockBeforeProcessingRepository)
}
