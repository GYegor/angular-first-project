import { Component, OnInit } from '@angular/core';
import { ICardList } from '../../models/ICardList';
import { CardListsService } from '../../services/card-lists.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  public searchCriterion: string;
  public cardLists: ICardList[];

  constructor(private router: Router, private fakeStorage: CardListsService) {}

  ngOnInit() {
    this.cardLists = this.fakeStorage.cardLists;
  }

  onSearch(searchString: string) {
    this.searchCriterion = searchString;
  }

  editCard(cardId: string) {
    this.router.navigate(['/board', 'edit', cardId])
  }

  removeCard(cardId: string) {
    this.fakeStorage.removeCard(cardId);
  }
}
