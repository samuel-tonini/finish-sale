export interface LogRepository {
  log: (params: LogRepository.Params) => Promise<void>
}

export namespace LogRepository {
  export type Params = {
    message: string
    stack?: string
  }
}
