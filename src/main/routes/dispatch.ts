import { adaptRoute } from '@/main/adapters'
import { makeProcessingDispatchController } from '@/main/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/dispatch', adaptRoute(makeProcessingDispatchController()))
}
