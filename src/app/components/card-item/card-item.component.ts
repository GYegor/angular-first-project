import { Component, OnInit } from '@angular/core';

import { Card } from'../../models/CardList';
import { User } from'../../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit, Card {
  public id: string
  public name: string
  public description: string
  public dueDate?: Date | string
  public assignee?: User

  constructor() { }

  ngOnInit() {
  }

}
