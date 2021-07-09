import { adaptRoute } from '@/main/adapters'
import { makeFinishSaleController } from '@/main/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/sale', adaptRoute(makeFinishSaleController()))
}
