import setupRoutes from '@/main/config/routes'
import setupMiddlewares from '@/main/config/middlewares'
import setupSwagger from '@/main/config/swagger'

import express from 'express'

const appSale = express()
const appPayment = express()
const appDispatch = express()
const appStock = express()

appSale.disable('x-powered-by')
appPayment.disable('x-powered-by')
appDispatch.disable('x-powered-by')
appStock.disable('x-powered-by')

setupSwagger(appSale)

setupMiddlewares(appSale)
setupMiddlewares(appPayment)
setupMiddlewares(appDispatch)
setupMiddlewares(appStock)

setupRoutes({ app: appSale, subfolder: 'sale' })
setupRoutes({ app: appPayment, subfolder: 'payment' })
setupRoutes({ app: appDispatch, subfolder: 'dispatch' })
setupRoutes({ app: appStock, subfolder: 'stock' })

export default { appSale, appPayment, appDispatch, appStock }
