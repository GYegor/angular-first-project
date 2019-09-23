import { IUser } from './IUser'

export interface ICardList {
  id: string
  name: string
  cards: ICard[]
}
export interface ICard {
  id: string
  name: string
  description: string
  dueDate?: Date | string
  assignee?: IUser | string
}
