import { SaveSaleRepository } from '@/data/protocols'
import { Sale } from '@/domain/models'

let sales: any = {}

export class MemorySaveSaleRepository implements SaveSaleRepository {
  async save (sale: Sale): Promise<void> {
    if (sale.id.toString() in (sales ?? {})) {
      throw new Error('Sale already exists.')
    }
    sales = { ...sales, [sale.id]: sale }
  }
}
