import { RandomProcessingDispatch } from '@/data/usecases'
import { ProcessingDispatch } from '@/domain/usecases'
import { ConsoleLogRepository } from '@/infra/log'

export const makeProcessingDispatchUsecase = (): ProcessingDispatch => {
  return new RandomProcessingDispatch(new ConsoleLogRepository())
}
