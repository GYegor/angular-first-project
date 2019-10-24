import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardListsService } from '../../services/card-lists.service';
import { ICard } from '../../models/ICardList';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public cardForEdit: ICard;

  constructor(private route: ActivatedRoute, private fakeStorage: CardListsService) { }

  ngOnInit() {
    this.cardForEdit = this.fakeStorage.getCardById(this.route.snapshot.params.id)
  }
}
