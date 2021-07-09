export const paymentSchema = {
  type: 'object',
  properties: {
    kind: {
      type: 'string',
      enum: ['cash', 'card']
    },
    amount: {
      type: 'number'
    },
    creditCard: {
      type: 'number'
    },
    vtt: {
      type: 'number'
    },
    validation: {
      type: 'string'
    }
  },
  required: ['kind', 'amount']
}
