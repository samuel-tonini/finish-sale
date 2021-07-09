import { StockAfterProcessingRepository } from '@/data/protocols'
import { StockFinishProcessing } from '@/domain/usecases'

export class MemoryStockFinishProcessing implements StockFinishProcessing {
  constructor (private readonly stockAfterProcessingRepository: StockAfterProcessingRepository) {
    Object.freeze(this)
  }

  async stockFinish (id: number): Promise<void> {
    return await this.stockAfterProcessingRepository.afterProcess(id)
  }
}
