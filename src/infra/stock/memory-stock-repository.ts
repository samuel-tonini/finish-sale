import { StockAfterProcessingRepository, StockBeforeProcessingRepository, StockCancelProcessingRepository, StockCheckQuantityRepository } from '@/data/protocols'
import { Item } from '@/domain/models'

let stock: any = {}
let lastPendingStock = 0

/**
 * stock: {
 *    1: {
 *      quantity: 0,
 *      reserved: 0,
 *      pending: {
 *        1: 0
 *      }
 *    }
 * }
 */

export class MemoryStockRepository implements StockAfterProcessingRepository, StockBeforeProcessingRepository, StockCancelProcessingRepository, StockCheckQuantityRepository {
  async beforeProcess (items: Item[]): Promise<number> {
    lastPendingStock = lastPendingStock + 1
    for (const item of items) {
      stock = {
        ...stock,
        [item.sku]: {
          ...stock[item.sku],
          reserved: Number(stock?.[item.sku]?.reserved ?? 0.0) + item.quantity,
          quantity: Number(stock?.[item.sku]?.quantity ?? 5.0),
          pending: {
            ...stock?.[item.sku]?.pending ?? undefined,
            [lastPendingStock]: item.quantity
          }
        }
      }
    }
    return lastPendingStock
  }

  async afterProcess (id: number): Promise<void> {
    for (const keyMain in stock) {
      if (Object.prototype.hasOwnProperty.call(stock, keyMain)) {
        const element = stock[keyMain]
        if (Object.prototype.hasOwnProperty.call(element?.pending ?? {}, id)) {
          const { [id]: pendingQuantity, ...pending } = element.pending
          stock = {
            ...stock,
            [keyMain]: {
              quantity: (element?.quantity ?? 0) - pendingQuantity,
              reserved: (element?.reserved ?? 0) - pendingQuantity,
              pending
            }
          }
        }
      }
    }
  }

  async cancelProcess (id: number): Promise<void> {
    for (const keyMain in stock) {
      if (Object.prototype.hasOwnProperty.call(stock, keyMain)) {
        const element = stock[keyMain]
        if (Object.prototype.hasOwnProperty.call(element?.pending ?? {}, id)) {
          const { [id]: pendingQuantity, ...pending } = element.pending
          stock = {
            ...stock,
            [keyMain]: {
              ...stock[keyMain],
              reserved: (element?.reserved ?? 0) - pendingQuantity,
              pending
            }
          }
        }
      }
    }
  }

  async checkQuantity (items: Item[]): Promise<void> {
    for (const item of items) {
      if (((stock?.[item.sku]?.quantity ?? 5.0) - (stock?.[item.sku]?.reserved ?? 0.0)) < item.quantity) {
        throw new Error(`Invalid quantity sku: ${item.sku}.`)
      }
    }
  }
}
