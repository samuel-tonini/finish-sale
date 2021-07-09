export interface StockCancelProcessing {
  stockCancel: (id: number) => Promise<void>
}
