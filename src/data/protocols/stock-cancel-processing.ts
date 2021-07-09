export interface StockCancelProcessingRepository {
  cancelProcess: (id: number) => Promise<void>
}
