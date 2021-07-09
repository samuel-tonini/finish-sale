import { Sale } from '@/domain/models'

export interface SaleDispatcherRepository {
  dispatch: (sale: Sale) => Promise<void>
}
