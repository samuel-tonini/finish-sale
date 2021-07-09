export const addressSchema = {
  type: 'object',
  properties: {
    street: {
      type: 'string'
    },
    neighbourhood: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    }
  },
  required: ['street', 'neighbourhood', 'city', 'state']
}
