import { MemoryStockStartProcessing } from '@/data/usecases'
import { StockStartProcessing } from '@/domain/usecases'
import { ConsoleLogRepository } from '@/infra/log'
import { MemoryStockRepository } from '@/infra/stock'

export const makeStockStartProcessingUsecase = (): StockStartProcessing => {
  const logger = new ConsoleLogRepository()
  const stockBeforeProcessingRepository = new MemoryStockRepository(logger)
  const stockCheckQuantityRepository = new MemoryStockRepository(logger)
  return new MemoryStockStartProcessing({
    stockBeforeProcessingRepository,
    stockCheckQuantityRepository
  })
}
