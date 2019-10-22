import { Component, OnInit } from '@angular/core';
import { ICardList } from '../../models/ICardList';
import { TaskCardListsService } from '../../services/task-card-lists.service';


@Component({
  selector: 'app-board',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  public searchCriterion: string;
  public cardLists: ICardList[];

  constructor(private taskListsService: TaskCardListsService) {}

  ngOnInit() {
    this.cardLists = this.taskListsService.cardLists;
  }

  onSearch(searchString: string) {
    this.searchCriterion = searchString;
  }

  removeCard(cardId: string) {
    this.taskListsService.removeCard(cardId);
  }
}
