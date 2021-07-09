import { MemoryFinishSale } from '@/data/usecases'
import { HttpStockRepository } from '@/infra/stock'
import { NodeFetchAdapter } from '@/infra/http'
import { MemorySaveSaleRepository } from '@/infra/sale'
import { HttpPaymentRepository } from '@/infra/payment'
import env from '@/main/config/env'
import { HttpSaleDispatcherRepository } from '@/infra/dispatcher'

export const makeMemoryFinishSaleUsecase = (): MemoryFinishSale => {
  const httpClient = new NodeFetchAdapter()
  const stockProcessingRepository = new HttpStockRepository({
    httpClient,
    baseUrl: env.baseUrl
  })
  const saveSale = new MemorySaveSaleRepository()
  const paymentRepository = new HttpPaymentRepository({
    baseUrl: env.baseUrl,
    httpClient
  })
  const saleDispatcher = new HttpSaleDispatcherRepository({
    baseUrl: env.baseUrl,
    httpClient
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
