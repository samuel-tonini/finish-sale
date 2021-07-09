export interface StockFinishProcessing {
  stockFinish: (id: number) => Promise<void>
}
