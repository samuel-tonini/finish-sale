import { Item } from '@/domain/models'

export interface StockStartProcessing {
  stockStart: (items: Item[]) => Promise<number>
}
