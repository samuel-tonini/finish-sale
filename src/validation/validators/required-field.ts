import { Validation } from '@/presentation/protocols'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {
    Object.freeze(this)
  }

  validate (input: any): Error | undefined {
    let value: any = input[this.fieldName]
    if (this.fieldName.includes('.')) {
      try {
        value = this.fieldName.split('.').reduce((object, property) => object[property], input)
      } catch (error) {
        value = undefined
      }
    }
    if (value === undefined || value === null) {
      return new Error(`Missing param: ${this.fieldName}`)
    }
  }
}
