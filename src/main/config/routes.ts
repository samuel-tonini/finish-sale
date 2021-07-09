import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (params: { app: Express, subfolder?: string }): void => {
  const router = Router()
  params.app.use(router)
  readdirSync(`${__dirname}/../routes${params.subfolder ? '/' + params.subfolder : ''}`).map(async (path: string) => {
    if (!path.endsWith('.map')) {
      (await import(`../routes/${params.subfolder ? params.subfolder + '/' : ''}${path}`)).default(router)
    }
  })
}
