import { Item } from '@/domain/models'
import { StockStartProcessing } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers'

export class StockStartProcessingController implements Controller<{items: Item[]}> {
  private readonly validator: Validation
  private readonly stockStartProcessing: StockStartProcessing

  constructor (params: StockStartProcessingController.ConstructorParams) {
    this.validator = params.validator
    this.stockStartProcessing = params.stockStartProcessing
    Object.freeze(this)
  }

  async handle (request: Partial<{items: Item[]}>): Promise<HttpResponse> {
    const hasError = this.validator.validate(request)
    if (hasError) {
      return badRequest(hasError)
    }
    try {
      const processingId = await this.stockStartProcessing.stockStart(request?.items ?? [])
      return ok({ processingId })
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace StockStartProcessingController {
  export type ConstructorParams = {
    validator: Validation
    stockStartProcessing: StockStartProcessing
  }
}
