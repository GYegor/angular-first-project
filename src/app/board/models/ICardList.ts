import { IUser } from './IUser'

export interface ICardList {
  id: string
  name: string
  cards: ICard[]
}
export interface ICard {
  id: string | null
  name: string | null
  description: string | null
  dueDate?: Date | string | null
  assignee?: IUser | string | null
}
