export const clientSchema = {
  type: 'object',
  properties: {
    vat: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  },
  required: ['vat', 'name']
}
