import { adaptRoute } from '@/main/adapters'
import { makeStockCancelProcessingController, makeStockFinishProcessingController, makeStockStartProcessingController } from '@/main/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/stock/before', adaptRoute(makeStockStartProcessingController()))
  router.post('/stock/after/:processingId', adaptRoute(makeStockFinishProcessingController()))
  router.post('/stock/cancel/:processingId', adaptRoute(makeStockCancelProcessingController()))
}
