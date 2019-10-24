import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CardListsService } from '../../services/card-lists.service';
import { ICardList, ICard } from '../../models/ICardList';
import { IUser } from '../../models/IUser';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  @Input() card: ICard;
  @Input() isNew: boolean;
  public cardCopy: ICard;
  public boardContent: ICardList[];
  public assignees: IUser[];

  constructor(private fakeStorage: CardListsService, private router: Router) {}

  ngOnInit() {
    this.boardContent = this.fakeStorage.cardLists;
    this.assignees = this.fakeStorage.users;
    this.cardCopy = {...this.card}
  }

  cancelChanges(event: Event) {
    event.stopImmediatePropagation();
    this.router.navigate(['board']);
  }

  commitCard() {
    if(this.isNew) {
      this.fakeStorage.createCard(this.cardCopy);
      this.router.navigate(['board']);
      return;
    }
    this.fakeStorage.addData(this.cardCopy);
    this.router.navigate(['board']);
  }
}
