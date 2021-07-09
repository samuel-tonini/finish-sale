import { Sale } from '@/domain/models'
import { ProcessingDispatch } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class ProcessingDispatchController implements Controller<Sale> {
  private readonly validator: Validation
  private readonly processingDispatch: ProcessingDispatch

  constructor (params: ProcessingDispatchController.ConstructorParams) {
    this.validator = params.validator
    this.processingDispatch = params.processingDispatch
    Object.freeze(this)
  }

  async handle (request: Partial<Sale>): Promise<HttpResponse> {
    const hasError = this.validator.validate(request)
    if (hasError) {
      return badRequest(hasError)
    }
    try {
      await this.processingDispatch.dispatch(request as any)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace ProcessingDispatchController {
  export type ConstructorParams = {
    validator: Validation
    processingDispatch: ProcessingDispatch
  }
}
