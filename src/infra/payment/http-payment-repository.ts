import { PaymentRepository } from '@/data/protocols'
import { Payment } from '@/domain/models'
import { HttpClient, HttpMethod } from '@/infra/http'

export class HttpPaymentRepository implements PaymentRepository {
  private readonly httpClient: HttpClient
  private readonly baseUrl: string

  constructor (params: HttpPaymentRepository.ConstrutorParams) {
    this.httpClient = params.httpClient
    this.baseUrl = params.baseUrl
    Object.freeze(this)
  }

  async pay (payment: Payment): Promise<void> {
    const response = await this.httpClient.request({
      method: HttpMethod.post,
      url: `${this.baseUrl}/payment`,
      body: payment
    })
    if (response.statusCode > 299) {
      throw new Error(`Payment processing error status: ${response.statusCode}`)
    }
  }
}

export namespace HttpPaymentRepository {
  export type ConstrutorParams = {
    httpClient: HttpClient
    baseUrl: string
  }
}
