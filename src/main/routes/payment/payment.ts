import { adaptRoute } from '@/main/adapters'
import { makeProcessingPaymentController } from '@/main/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/payment', adaptRoute(makeProcessingPaymentController()))
}
