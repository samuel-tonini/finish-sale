import { Validation } from '@/presentation/protocols'

export class ArrayRequiredFieldValidation implements Validation {
  private readonly arrayFieldName: string
  private readonly fieldName: string

  constructor (params: ArrayRequiredFieldValidation.ConstructorParam) {
    this.arrayFieldName = params.arrayFieldName
    this.fieldName = params.fieldName
    Object.freeze(this)
  }

  validate (input: any): Error | undefined {
    const items: any = input[this.arrayFieldName]
    if (items === undefined || items === null) {
      return new Error(`Missing param: ${this.arrayFieldName}`)
    }
    if (this.fieldName.includes('.')) {
      try {
        input = this.fieldName.split('.').reduce((input, property) => input[property], input)
      } catch (error) {
        input = undefined
      }
    }
    for (const item of items) {
      let value: any
      if (this.fieldName.includes('.')) {
        try {
          value = this.fieldName.split('.').reduce((item, property) => item[property], items)
        } catch (error) {
          value = undefined
        }
      } else {
        value = item[this.fieldName]
      }
      if (value === undefined || value === null) {
        return new Error(`Missing param: ${this.fieldName}`)
      }
    }
  }
}

export namespace ArrayRequiredFieldValidation {
  export type ConstructorParam = {
    arrayFieldName: string
    fieldName: string
  }
}
