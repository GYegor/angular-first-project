import { Component, OnInit } from '@angular/core';

import { Card, CardList } from'../../models/CardList'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, CardList {
  public id: string
  public name: string
  public cards: Card[ ]

  constructor() { }

  ngOnInit() {
  }

}
