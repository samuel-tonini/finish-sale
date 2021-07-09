import { StockFinishProcessing } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class StockFinishProcessingController implements Controller<{processingId: number}> {
  private readonly validator: Validation
  private readonly stockFinishProcessing: StockFinishProcessing

  constructor (params: StockFinishProcessingController.ConstructorParams) {
    this.validator = params.validator
    this.stockFinishProcessing = params.stockFinishProcessing
    Object.freeze(this)
  }

  async handle (request: Partial<{processingId: number}>): Promise<HttpResponse> {
    const hasError = this.validator.validate(request)
    if (hasError) {
      return badRequest(hasError)
    }
    try {
      await this.stockFinishProcessing.stockFinish(request.processingId ?? 0)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace StockFinishProcessingController {
  export type ConstructorParams = {
    validator: Validation
    stockFinishProcessing: StockFinishProcessing
  }
}
