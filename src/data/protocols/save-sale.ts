import { Sale } from '@/domain/models'

export interface SaveSaleRepository {
  save: (sale: Sale) => Promise<void>
}
