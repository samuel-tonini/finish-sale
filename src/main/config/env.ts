import { config } from 'dotenv'

config()

export default {
  saleAppPort: process.env.SALE_APP_PORT ?? 3000,
  paymentAppPort: process.env.PAYMENT_APP_PORT ?? 3001,
  dispatchAppPort: process.env.DISPATCH_APP_PORT ?? 3002,
  stockAppPort: process.env.STOCK_APP_PORT ?? 3003,
  saleBaseUrl: process.env.BASE_URL ?? `http://localhost:${process.env.APP_PORT ?? 3000}`,
  paymentBaseUrl: process.env.BASE_URL ?? `http://localhost:${process.env.PAYMENT_APP_PORT ?? 3001}`,
  dispatchBaseUrl: process.env.BASE_URL ?? `http://localhost:${process.env.DISPATCH_APP_PORT ?? 3002}`,
  stockBaseUrl: process.env.BASE_URL ?? `http://localhost:${process.env.STOCK_APP_PORT ?? 3003}`
}
