import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  readdirSync(`${__dirname}/../routes`).map(async (path: string) => {
    if (!path.endsWith('.map')) {
      (await import(`../routes/${path}`)).default(router)
    }
  })
}
