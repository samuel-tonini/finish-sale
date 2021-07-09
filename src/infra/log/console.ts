import { LogRepository } from '@/data/protocols'

export class ConsoleLogRepository implements LogRepository {
  async log (params: LogRepository.Params): Promise<void> {
    console.log({
      time: new Date(Date.now()).toLocaleString('pt-BR'),
      message: params.message,
      stack: params?.stack ?? undefined
    })
  }
}
