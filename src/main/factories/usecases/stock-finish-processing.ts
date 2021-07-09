import { MemoryStockFinishProcessing } from '@/data/usecases'
import { StockFinishProcessing } from '@/domain/usecases'
import { ConsoleLogRepository } from '@/infra/log'
import { MemoryStockRepository } from '@/infra/stock'

export const makeStockFinishProcessingUsecase = (): StockFinishProcessing => {
  const stockBeforeProcessingRepository = new MemoryStockRepository(new ConsoleLogRepository())
  return new MemoryStockFinishProcessing(stockBeforeProcessingRepository)
}
