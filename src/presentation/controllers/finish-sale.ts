import { Sale } from '@/domain/models'
import { FinishSale } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class FinishSaleController implements Controller<Sale> {
  private readonly validator: Validation
  private readonly finishSale: FinishSale

  constructor (params: FinishSaleController.ConstructorParams) {
    this.validator = params.validator
    this.finishSale = params.finishSale
    Object.freeze(this)
  }

  async handle (request: Partial<Sale>): Promise<HttpResponse> {
    const hasError = this.validator.validate(request)
    if (hasError) {
      return badRequest(hasError)
    }
    try {
      await this.finishSale.perform(request as any)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace FinishSaleController {
  export type ConstructorParams = {
    validator: Validation
    finishSale: FinishSale
  }
}
