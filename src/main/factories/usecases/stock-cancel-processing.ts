import { MemoryStockCancelProcessing } from '@/data/usecases'
import { StockCancelProcessing } from '@/domain/usecases'
import { ConsoleLogRepository } from '@/infra/log'
import { MemoryStockRepository } from '@/infra/stock'

export const makeStockCancelProcessingUsecase = (): StockCancelProcessing => {
  const stockBeforeProcessingRepository = new MemoryStockRepository(new ConsoleLogRepository())
  return new MemoryStockCancelProcessing(stockBeforeProcessingRepository)
}
