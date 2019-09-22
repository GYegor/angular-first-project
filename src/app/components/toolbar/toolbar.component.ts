import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public searchCriterion: string;

  @Output() filterTasks = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  filter() {
    this.filterTasks.emit(this.searchCriterion)
  };

}
