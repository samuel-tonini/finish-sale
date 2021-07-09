import { StockCancelProcessing } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class StockCancelProcessingController implements Controller<{processingId: number}> {
  private readonly validator: Validation
  private readonly stockCancelProcessing: StockCancelProcessing

  constructor (params: StockCancelProcessingController.ConstructorParams) {
    this.validator = params.validator
    this.stockCancelProcessing = params.stockCancelProcessing
    Object.freeze(this)
  }

  async handle (request: Partial<{processingId: number}>): Promise<HttpResponse> {
    const hasError = this.validator.validate(request)
    if (hasError) {
      return badRequest(hasError)
    }
    try {
      await this.stockCancelProcessing.stockCancel(request.processingId ?? 0)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace StockCancelProcessingController {
  export type ConstructorParams = {
    validator: Validation
    stockCancelProcessing: StockCancelProcessing
  }
}
