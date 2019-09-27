import { Injectable } from '@angular/core';
import { ICardList } from './../models/ICardList';
import { IUser } from './../models/IUser';


@Injectable()
export class TaskCardListsService {
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
          assignee: 'Glueg'
        },
        {
          id:'12',
          name: '@output',
          description: 'pass over props from @output',
          dueDate: new Date (Date.now() + 86400000 * 6.9),
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
      cards: []
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
          assignee: 'Glueg'
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
