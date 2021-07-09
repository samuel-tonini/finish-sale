import { PaymentRepository, SaleDispatcherRepository, SaveSaleRepository, StockAfterProcessingRepository, StockBeforeProcessingRepository, StockCancelProcessingRepository } from '@/data/protocols'
import { Sale } from '@/domain/models'
import { FinishSale } from '@/domain/usecases'

export class MemoryFinishSale implements FinishSale {
  private readonly stockBeforeProcessing: StockBeforeProcessingRepository
  private readonly paymentRepository: PaymentRepository
  private readonly saveSale: SaveSaleRepository
  private readonly saleDispatcher: SaleDispatcherRepository
  private readonly stockAfterProcessing: StockAfterProcessingRepository
  private readonly stockCancelProcessing: StockCancelProcessingRepository

  constructor (params: FinishSaleMemory.ConstructorParams) {
    this.stockBeforeProcessing = params.stockBeforeProcessing
    this.paymentRepository = params.paymentRepository
    this.saveSale = params.saveSale
    this.saleDispatcher = params.saleDispatcher
    this.stockAfterProcessing = params.stockAfterProcessing
    this.stockCancelProcessing = params.stockCancelProcessing
    Object.freeze(this)
  }

  async perform (sale: Sale): Promise<void> {
    const stockProcessingId = await this.stockBeforeProcessing.beforeProcess(sale.items)
    try {
      await this.paymentRepository.pay(sale.payment)
      await this.saleDispatcher.dispatch(sale)
      await this.saveSale.save(sale)
      await this.stockAfterProcessing.afterProcess(stockProcessingId)
    } catch (error) {
      await this.stockCancelProcessing.cancelProcess(stockProcessingId)
      throw error
    }
  }
}

export namespace FinishSaleMemory {
  export type ConstructorParams = {
    stockBeforeProcessing: StockBeforeProcessingRepository
    paymentRepository: PaymentRepository
    saveSale: SaveSaleRepository
    saleDispatcher: SaleDispatcherRepository
    stockAfterProcessing: StockAfterProcessingRepository
    stockCancelProcessing: StockCancelProcessingRepository
  }
}
