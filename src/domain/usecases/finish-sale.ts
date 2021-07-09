import { Sale } from '@/domain/models'

export interface FinishSale {
  perform: (sale: FinishSale.Params) => Promise<void>
}

export namespace FinishSale {
  export type Params = Sale
}
