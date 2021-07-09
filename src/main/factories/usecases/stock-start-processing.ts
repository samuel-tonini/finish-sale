import { MemoryStockStartProcessing } from '@/data/usecases'
import { StockStartProcessing } from '@/domain/usecases'
import { MemoryStockRepository } from '@/infra/stock'

export const makeStockStartProcessingUsecase = (): StockStartProcessing => {
  const stockBeforeProcessingRepository = new MemoryStockRepository()
  const stockCheckQuantityRepository = new MemoryStockRepository()
  return new MemoryStockStartProcessing({
    stockBeforeProcessingRepository,
    stockCheckQuantityRepository
  })
}
