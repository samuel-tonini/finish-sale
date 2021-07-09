export const stockItemSchema = {
  type: 'object',
  properties: {
    items: {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            $ref: '#/schemas/item'
          }
        }
      }
    }
  },
  required: ['items']
}
