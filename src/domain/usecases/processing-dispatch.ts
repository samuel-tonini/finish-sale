import { Sale } from '@/domain/models'

export interface ProcessingDispatch {
  dispatch: (sale: Sale) => Promise<void>
}
