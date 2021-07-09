import { Item } from '@/domain/models'
import { StockStartProcessing } from '@/domain/usecases'
import { StockBeforeProcessingRepository, StockCheckQuantityRepository } from '@/data/protocols'

export class MemoryStockStartProcessing implements StockStartProcessing {
  private readonly stockBeforeProcessingRepository: StockBeforeProcessingRepository
  private readonly stockCheckQuantityRepository: StockCheckQuantityRepository

  constructor (params: MemoryStockStartProcessing.ConstructorParams) {
    this.stockBeforeProcessingRepository = params.stockBeforeProcessingRepository
    this.stockCheckQuantityRepository = params.stockCheckQuantityRepository
    Object.freeze(this)
  }

  async stockStart (items: Item[]): Promise<number> {
    await this.stockCheckQuantityRepository.checkQuantity(items)
    return await this.stockBeforeProcessingRepository.beforeProcess(items)
  }
}

export namespace MemoryStockStartProcessing {
  export type ConstructorParams = {
    stockBeforeProcessingRepository: StockBeforeProcessingRepository
    stockCheckQuantityRepository: StockCheckQuantityRepository
  }
}
