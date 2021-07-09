import {
  errorSchema,
  addressSchema,
  clientSchema,
  itemSchema,
  paymentSchema,
  saleSchema,
  stockItemSchema,
  stockResponseSchema
} from './schemas/'

export default {
  address: addressSchema,
  client: clientSchema,
  item: itemSchema,
  payment: paymentSchema,
  error: errorSchema,
  sale: saleSchema,
  stockItem: stockItemSchema,
  stockResponse: stockResponseSchema
}
