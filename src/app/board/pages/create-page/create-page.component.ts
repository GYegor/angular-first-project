import { Component } from '@angular/core';
import { ICard } from '../../models/ICardList';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})

export class CreatePageComponent {
  public emptyCard: ICard = {
    id: null,
    name: null,
    description: null,
    dueDate: new Date (Date.now()),
  };
}
