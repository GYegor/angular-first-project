import { Component, OnInit, OnChanges } from '@angular/core';
import { ICardList, ICard } from './../../models/ICardList';
const cardLists: ICardList[] = [
  {
    name:'Backlog',
    id: '1',
    cards: [
      {
        id:'11',
        name: '@input',
        description: 'pass props from @input',
        dueDate: '23.09.2019',
        assignee: 'Glueg'
      },
      {
        id:'12',
        name: '@output',
        description: 'pass over props from @output'
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
    cards: []
  },
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  searchCriterion: string;
  cardLists: ICardList[];

  constructor() { }

  ngOnInit() {
    this.cardLists = cardLists;
  }
}
