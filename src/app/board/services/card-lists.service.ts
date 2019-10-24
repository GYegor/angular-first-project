import { Injectable } from '@angular/core';
import { ICardList, ICard } from '../models/ICardList';
import { IUser } from '../models/IUser';


@Injectable()
export class CardListsService {
  public check = 2;
  public users: IUser[] = [
    {
      id: '1',
      firstName: 'Anton',
      lastName: 'Antonov'
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Johnson'
    },
    {
      id: '3',
      firstName: 'Egor',
      lastName: 'Egoroff'
    },
  ]

  public cardLists: ICardList[] = [
    {
      name:'Backlog',
      id: '1',
      cards: [
        {
          id:'11',
          name: '@input',
          description: 'pass props from @input',
          dueDate: new Date (Date.now() + 86400000 * 2.9),
          assignee: this.users[1],
        },
        {
          id:'12',
          name: '@output',
          description: 'pass over props from @output',
          dueDate: new Date (Date.now() + 86400000 * 6.9),
          assignee: this.users[0],
        },
        {
          id:'13',
          name: 'pipe',
          description: 'pass over props from @output',
          dueDate: new Date (Date.now() + 86400000 * 8),
        },
      ]
    },
    {
      name:'In progress',
      id: '2',
      cards: [
        {
          id:'21',
          name: 'Doinggoing',
          description: 'pass pass from from to to',
          dueDate: new Date (Date.now() + 86400000 * 6.9),
          assignee: this.users[1],
        },
        {
          id:'22',
          name: 'DoingWantToDo',
          description: 'pass pass too from from to to',
          dueDate: new Date (Date.now() + 86400000 * 11.9),
          assignee: this.users[2],
        },
      ],
    },
    {
      name:'Done',
      id: '3',
      cards: [
        {
          id:'31',
          name: 'hoho',
          description: 'pass props from @input',
          dueDate: new Date (Date.now() + 86400000 * 2.9),
          assignee: this.users[2],
        },
        {
          id:'32',
          name: 'donedone',
          description: 'pass over props from @output',
          dueDate: new Date (Date.now() + 86400000 * 6.9),
        },
        {
          id:'33',
          name: 'pipe',
          description: 'pass over props from @output',
          dueDate: new Date (Date.now() + 86400000 * 8),
        },
      ]
    }
  ];

  public removeCard(cardId: string) {
    this.cardLists.forEach(list => list.cards = list.cards.filter(card => card.id !== cardId));
  }

  public getCardById(id: number | string): ICard {
    for (let i = 0; i < this.cardLists.length; i++) {
      let result = this.cardLists[i].cards.find(card => card.id == id)
      if(result) return result;
    }
  }

  public addData(updatedCard: ICard) {
    for (let i = 0; i < this.cardLists.length; i++) {
      const cardIndex = this.cardLists[i].cards.findIndex(card => card.id === updatedCard.id);
      if (cardIndex !== -1) {
        this.cardLists[i].cards.splice(cardIndex, 1, updatedCard)
      }
    }
  }
}
