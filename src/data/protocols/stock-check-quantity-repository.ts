import { Item } from '@/domain/models'

export interface StockCheckQuantityRepository {
  checkQuantity: (items: Item[]) => Promise<void>
}
