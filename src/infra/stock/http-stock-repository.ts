import { StockAfterProcessingRepository, StockBeforeProcessingRepository, StockCancelProcessingRepository } from '@/data/protocols'
import { Item } from '@/domain/models'
import { HttpClient, HttpMethod } from '@/infra/http'

export class HttpStockRepository implements StockAfterProcessingRepository, StockBeforeProcessingRepository, StockCancelProcessingRepository {
  private readonly httpClient: HttpClient
  private readonly baseUrl: string

  constructor (params: StockRepository.ConstrutorParams) {
    this.httpClient = params.httpClient
    this.baseUrl = params.baseUrl
    Object.freeze(this)
  }

  async afterProcess (id: number): Promise<void> {
    const response = await this.httpClient.request({
      method: HttpMethod.post,
      url: `${this.baseUrl}/stock/after/${id}`
    })
    if (response.statusCode > 299) {
      throw new Error(`Stock after processing error status: ${response.statusCode}`)
    }
  }

  async beforeProcess (items: Item[]): Promise<number> {
    const response = await this.httpClient.request({
      method: HttpMethod.post,
      url: `${this.baseUrl}/stock/before`,
      body: { items }
    })
    if (response.statusCode > 299) {
      throw new Error(`Stock before processing error status: ${response.statusCode}`)
    }
    if (response?.data?.processingId) {
      return response.data.processingId
    }
    throw new Error('Stock before processing without processing id')
  }

  async cancelProcess (id: number): Promise<void> {
    const response = await this.httpClient.request({
      method: HttpMethod.post,
      url: `${this.baseUrl}/stock/cancel/${id}`
    })
    if (response.statusCode > 299) {
      throw new Error(`Stock cancel processing error status: ${response.statusCode}`)
    }
  }
}

export namespace StockRepository {
  export type ConstrutorParams = {
    httpClient: HttpClient
    baseUrl: string
  }
}
