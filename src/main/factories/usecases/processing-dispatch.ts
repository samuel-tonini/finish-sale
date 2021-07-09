import { RandomProcessingDispatch } from '@/data/usecases'
import { ProcessingDispatch } from '@/domain/usecases'

export const makeProcessingDispatchUsecase = (): ProcessingDispatch => {
  return new RandomProcessingDispatch()
}
