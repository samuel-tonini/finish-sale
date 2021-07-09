import { Address, Item, Payment, Client } from '@/domain/models'

export type Sale = {
  id: number
  client: Client
  address: Address
  payment: Payment
  items: Item[]
  shipValue: number
}
