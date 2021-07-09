import { Validation } from '@/presentation/protocols'
import { ArrayRequiredFieldValidation, ArrayValueInRangeValidation, ValidationComposite } from '@/validation/validators'

export const makeItemsValidations = (): Validation => {
  const validations: Validation[] = []
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
