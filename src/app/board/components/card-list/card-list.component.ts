import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ICardList } from'../../models/ICardList'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() cardList: ICardList;
  @Input() searchCriterion: string;

  @Output() removeCard = new EventEmitter<string>();

  constructor(private router: Router) { };

  ngOnInit() {
  };

  openCreatePage() {
    this.router.navigate(['/board', 'create'])
  }
}
