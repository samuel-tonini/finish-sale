export interface StockAfterProcessingRepository {
  afterProcess: (id: number) => Promise<void>
}
