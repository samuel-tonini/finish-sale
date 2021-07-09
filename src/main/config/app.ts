import setupRoutes from '@/main/config/routes'
import setupMiddlewares from '@/main/config/middlewares'
import setupSwagger from '@/main/config/swagger'

import express from 'express'

const app = express()
app.disable('x-powered-by')
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
