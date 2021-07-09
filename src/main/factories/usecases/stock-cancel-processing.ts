import { MemoryStockCancelProcessing } from '@/data/usecases'
import { StockCancelProcessing } from '@/domain/usecases'
import { MemoryStockRepository } from '@/infra/stock'

export const makeStockCancelProcessingUsecase = (): StockCancelProcessing => {
  const stockBeforeProcessingRepository = new MemoryStockRepository()
  return new MemoryStockCancelProcessing(stockBeforeProcessingRepository)
}
