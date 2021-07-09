import { Validation } from '@/presentation/protocols'

export class ArrayValueInRangeValidation implements Validation {
  private readonly arrayFieldName: string
  private readonly fieldName: string
  private readonly min: number
  private readonly max: number

  constructor (params: ValueInRangeValidation.ConstructorParam) {
    this.arrayFieldName = params.arrayFieldName
    this.fieldName = params.fieldName
    this.min = params.min
    this.max = params.max
    Object.freeze(this)
  }

  validate (input: any): Error | undefined {
    const items: any = input[this.arrayFieldName]
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
      if (value < this.min || value > this.max) {
        return new Error(`Invalid value for: ${this.fieldName}`)
      }
    }
  }
}

export namespace ValueInRangeValidation {
  export type ConstructorParam = {
    arrayFieldName: string
    fieldName: string
    min: number
    max: number
  }
}
