import { StockCancelProcessingRepository } from '@/data/protocols'
import { StockCancelProcessing } from '@/domain/usecases'

export class MemoryStockCancelProcessing implements StockCancelProcessing {
  constructor (private readonly stockCancelProcessingRepository: StockCancelProcessingRepository) {
    Object.freeze(this)
  }

  async stockCancel (id: number): Promise<void> {
    return await this.stockCancelProcessingRepository.cancelProcess(id)
  }
}
