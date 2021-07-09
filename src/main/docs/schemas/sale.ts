export const saleSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    client: {
      type: 'object',
      $ref: '#/schemas/client'
    },
    address: {
      type: 'object',
      $ref: '#/schemas/address'
    },
    payment: {
      type: 'object',
      $ref: '#/schemas/payment'
    },
    items: {
      type: 'array',
      items: {
        $ref: '#/schemas/item'
      }
    },
    shipValue: {
      type: 'number'
    }
  },
  required: ['id', 'shipValue']
}
