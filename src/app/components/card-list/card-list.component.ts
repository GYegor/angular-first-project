import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ICard, ICardList } from'../../models/ICardList'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() cardList: ICardList;
  @Input() searchCriterion: string;

  @Output() removeCard = new EventEmitter<string>();

  constructor() { };

  ngOnInit() {
  };

}
