import { HttpMethod, HttpResponse } from '@/infra/http'

export interface HttpClient {
  request: (params: HttpClient.Params) => Promise<HttpResponse>
}

export namespace HttpClient {
  export type Params = {
    url: string
    body?: any
    method: HttpMethod
    headers?: any
  }
}
