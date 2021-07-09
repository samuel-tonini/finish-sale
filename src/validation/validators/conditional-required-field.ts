import { Validation } from '@/presentation/protocols'

export class ConditionalRequiredFieldValidation implements Validation {
  private readonly fieldName: string
  private readonly conditionalFieldName: string
  private readonly conditionalFieldValue: any

  constructor (params: ConditionalRequiredFieldValidation.ConstructorParam) {
    this.fieldName = params.fieldName
    this.conditionalFieldName = params.conditionalFieldName
    this.conditionalFieldValue = params.conditionalFieldValue
    Object.freeze(this)
  }

  validate (input: any): Error | undefined {
    let atualConditionalValue: any = input[this.conditionalFieldName]
    if (this.conditionalFieldName.includes('.')) {
      try {
        atualConditionalValue = this.conditionalFieldName.split('.').reduce((object, property) => object[property], input)
      } catch (error) {
        atualConditionalValue = undefined
      }
    }
    if (atualConditionalValue === this.conditionalFieldValue) {
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
}

export namespace ConditionalRequiredFieldValidation {
  export type ConstructorParam = {
    fieldName: string
    conditionalFieldName: string
    conditionalFieldValue: any
  }
}
