import { LogRepository, SaveSaleRepository } from '@/data/protocols'
import { Sale } from '@/domain/models'

let sales: any = {}

export class MemorySaveSaleRepository implements SaveSaleRepository {
  constructor (private readonly logger: LogRepository) {
    Object.freeze(this)
  }

  async save (sale: Sale): Promise<void> {
    if (sale.id.toString() in (sales ?? {})) {
      await this.logger.log({ message: `Sale index "${sale.id}" already exists.` })
      throw new Error(`Sale index "${sale.id}" already exists.`)
    }
    sales = { ...sales, [sale.id]: sale }
    await this.logger.log({ message: 'Current sales', stack: JSON.stringify(sales, null, 2) })
  }
}
