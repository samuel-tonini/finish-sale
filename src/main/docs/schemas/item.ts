export const itemSchema = {
  type: 'object',
  properties: {
    sku: {
      type: 'number'
    },
    quantity: {
      type: 'number'
    },
    value: {
      type: 'number'
    }
  },
  required: ['sku', 'quantity', 'value']
}
