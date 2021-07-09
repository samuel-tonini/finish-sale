import { Validation } from '@/presentation/protocols'
import { ConditionalRequiredFieldValidation, RequiredFieldValidation, ValidationComposite, ValueInSetValidation } from '@/validation/validators'

export const makePaymentValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['kind', 'amount']) {
    validations.push(new RequiredFieldValidation(field))
  }
  for (const field of ['creditCard', 'vtt', 'validation']) {
    validations.push(new ConditionalRequiredFieldValidation({
      fieldName: field,
      conditionalFieldName: 'kind',
      conditionalFieldValue: 'card'
    }))
  }
  validations.push(new ValueInSetValidation({
    fieldName: 'kind',
    setOfValues: ['cash', 'card']
  }))
  return new ValidationComposite(validations)
}
