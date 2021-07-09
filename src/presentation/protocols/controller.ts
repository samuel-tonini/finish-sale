import { HttpResponse } from '@/presentation/protocols'

export interface Controller<T = any> {
  handle: Controller.Handle<T>
}

export namespace Controller {
  export type Handle<T = any> = (request: Partial<T>) => Promise<HttpResponse>
}
