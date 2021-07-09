import { Payment } from '@/domain/models'
import { ProcessingPayment } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class ProcessingPaymentController implements Controller<Payment> {
  private readonly validator: Validation
  private readonly processingPayment: ProcessingPayment

  constructor (params: ProcessingPaymentController.ConstructorParams) {
    this.validator = params.validator
    this.processingPayment = params.processingPayment
    Object.freeze(this)
  }

  async handle (request: Partial<Payment>): Promise<HttpResponse> {
    const hasError = this.validator.validate(request)
    if (hasError) {
      return badRequest(hasError)
    }
    try {
      await this.processingPayment.pay(request as any)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace ProcessingPaymentController {
  export type ConstructorParams = {
    validator: Validation
    processingPayment: ProcessingPayment
  }
}
