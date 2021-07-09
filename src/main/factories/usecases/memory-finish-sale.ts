import { MemoryFinishSale } from '@/data/usecases'
import { HttpStockRepository } from '@/infra/stock'
import { NodeFetchAdapter } from '@/infra/http'
import { MemorySaveSaleRepository } from '@/infra/sale'
import { HttpPaymentRepository } from '@/infra/payment'
import env from '@/main/config/env'
import { HttpSaleDispatcherRepository } from '@/infra/dispatcher'
import { ConsoleLogRepository } from '@/infra/log'

export const makeMemoryFinishSaleUsecase = (): MemoryFinishSale => {
  const httpClient = new NodeFetchAdapter()
  const logger = new ConsoleLogRepository()
  const stockProcessingRepository = new HttpStockRepository({
    httpClient,
    baseUrl: env.baseUrl,
    logger
  })
  const saveSale = new MemorySaveSaleRepository(logger)
  const paymentRepository = new HttpPaymentRepository({
    baseUrl: env.baseUrl,
    httpClient,
    logger
  })
  const saleDispatcher = new HttpSaleDispatcherRepository({
    baseUrl: env.baseUrl,
    httpClient,
    logger
  })
  return new MemoryFinishSale({
    stockAfterProcessing: stockProcessingRepository,
    stockBeforeProcessing: stockProcessingRepository,
    stockCancelProcessing: stockProcessingRepository,
    saveSale,
    paymentRepository,
    saleDispatcher
  })
}
