import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ICard } from'../../models/ICardList';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card: ICard
  @Input() isDone: boolean
  @Output() removeCard = new EventEmitter<ICard>()
  @ViewChild('editBtn', { static: false }) editBtnRef: ElementRef;
  @ViewChild('removeBtn', { static: false }) removeBtnRef: ElementRef;

  public isExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.isExpanded = !this.isExpanded;
  }
}
