import { Validation } from '@/presentation/protocols'

export class ValueInSetValidation implements Validation {
  private readonly fieldName: string
  private readonly setOfValues: any[]

  constructor (params: ValueInSetValidation.ConstructorParam) {
    this.fieldName = params.fieldName
    this.setOfValues = params.setOfValues
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
    if (!this.setOfValues.includes(value)) {
      return new Error(`Invalid value for: ${this.fieldName}`)
    }
  }
}

export namespace ValueInSetValidation {
  export type ConstructorParam = {
    fieldName: string
    setOfValues: any[]
  }
}
