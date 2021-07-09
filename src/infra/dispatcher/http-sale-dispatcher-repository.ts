import { SaleDispatcherRepository, LogRepository } from '@/data/protocols'
import { Sale } from '@/domain/models'
import { HttpClient, HttpMethod } from '@/infra/http'

export class HttpSaleDispatcherRepository implements SaleDispatcherRepository {
  private readonly httpClient: HttpClient
  private readonly baseUrl: string
  private readonly logger: LogRepository

  constructor (params: HttpSaleDispatcherRepository.ConstrutorParams) {
    this.httpClient = params.httpClient
    this.baseUrl = params.baseUrl
    this.logger = params.logger
    Object.freeze(this)
  }

  async dispatch (sale: Sale): Promise<void> {
    const response = await this.httpClient.request({
      method: HttpMethod.post,
      url: `${this.baseUrl}/dispatch`,
      body: sale
    })
    if (response.statusCode > 299) {
      await this.logger.log({ message: `Sale dispatch error status: ${response.statusCode}` })
      throw new Error(`Sale dispatch error status: ${response.statusCode}`)
    }
  }
}

export namespace HttpSaleDispatcherRepository {
  export type ConstrutorParams = {
    httpClient: HttpClient
    baseUrl: string
    logger: LogRepository
  }
}
