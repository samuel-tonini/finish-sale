import { HttpClient, HttpResponse } from '@/infra/http'

import fetch from 'node-fetch'

export class NodeFetchAdapter implements HttpClient {
  async request (params: HttpClient.Params): Promise<HttpResponse> {
    let body: any
    let headers: any
    if (params.body !== undefined && params.body !== null) {
      body = JSON.stringify(params.body)
      headers = params.headers ?? { 'Content-Type': 'application/json', Accept: 'application/json' }
    } else {
      body = undefined
      headers = params.headers
    }
    const result = await fetch(params.url, {
      method: params.method,
      body,
      headers
    })
    const responseData = await result.text()
    return {
      statusCode: result.status,
      data: responseData !== null && responseData !== undefined && responseData !== '' ? JSON.parse(responseData) : undefined
    }
  }
}
