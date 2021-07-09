import { bodyParser, contentType, cors, urlEncoded } from '@/main/middlewares'

import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(urlEncoded)
  app.use(contentType)
  app.use(cors)
}
