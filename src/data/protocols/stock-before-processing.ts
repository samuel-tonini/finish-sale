import { Item } from '@/domain/models'

export interface StockBeforeProcessingRepository {
  beforeProcess: (items: Item[]) => Promise<number>
}
