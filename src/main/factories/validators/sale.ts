import { Validation } from '@/presentation/protocols'
import { ArrayRequiredFieldValidation, ArrayValueInRangeValidation, ConditionalRequiredFieldValidation, RequiredFieldValidation, ValidationComposite, ValueInSetValidation } from '@/validation/validators'

export const makeSaleValidations = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['id', 'client.name', 'client.vat', 'payment.kind', 'payment.amount', 'address.street', 'address.neighbourhood', 'address.city', 'address.state']) {
    validations.push(new RequiredFieldValidation(field))
  }
  for (const field of ['payment.creditCard', 'payment.vtt', 'payment.validation']) {
    validations.push(new ConditionalRequiredFieldValidation({
      fieldName: field,
      conditionalFieldName: 'payment.kind',
      conditionalFieldValue: 'card'
    }))
  }
  validations.push(new ValueInSetValidation({
    fieldName: 'payment.kind',
    setOfValues: ['cash', 'card']
  }))
  for (const field of ['sku', 'quantity', 'value']) {
    validations.push(new ArrayRequiredFieldValidation({
      arrayFieldName: 'items',
      fieldName: field
    }))
  }
  for (const field of ['sku', 'quantity', 'value']) {
    validations.push(new ArrayValueInRangeValidation({
      arrayFieldName: 'items',
      fieldName: field,
      min: 0,
      max: 999999
    }))
  }
  return new ValidationComposite(validations)
}
