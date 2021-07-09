export const stockResponseSchema = {
  type: 'object',
  properties: {
    processingId: {
      type: 'number'
    }
  },
  required: ['processingId']
}
