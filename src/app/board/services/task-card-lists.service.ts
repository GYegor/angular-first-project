import { Injectable } from '@angular/core';
import { ICardList } from '../models/ICardList';
import { IUser } from '../models/IUser';


@Injectable()
export class TaskCardListsService {

  private user: IUser = {
    id: '1',
    firstName: 'Hoy',
    lastName: 'Glueg'
  }

  public readonly cardLists: ICardList[] = [
    {
      name:'Backlog',
      id: '1',
      cards: [
        {
          id:'11',
          name: '@input',
          description: 'pass props from @input',
          dueDate: new Date (Date.now() + 86400000 * 2.9),
          assignee: `${this.user.firstName+' '+this.user.lastName}`,
        },
        {
          id:'12',
          name: '@output',
          description: 'pass over props from @output',
          dueDate: new Date (Date.now() + 86400000 * 6.9),
          assignee: `${this.user.firstName+' '+this.user.lastName}`,
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
      cards: [ {
        id:'21',
        name: 'Doinggoing',
        description: 'pass pass from from to to',
        dueDate: new Date (Date.now() + 86400000 * 6.9),
        assignee: `${this.user.firstName+' '+this.user.lastName}`,
      },
      {
        id:'22',
        name: 'DoingWantToDo',
        description: 'pass pass too from from to to',
        dueDate: new Date (Date.now() + 86400000 * 11.9),
        assignee: `${this.user.firstName+' '+this.user.lastName}`,
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
          assignee: `${this.user.firstName+' '+this.user.lastName}`,
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

}
