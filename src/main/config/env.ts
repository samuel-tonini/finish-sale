import { config } from 'dotenv'

config()

export default {
  port: process.env.APP_PORT ?? 3000,
  baseUrl: process.env.BASE_URL ?? `http://localhost:${process.env.APP_PORT ?? 3000}`
}
