import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from './../../../auth/services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public searchCriterion: string;

  @Output() search = new EventEmitter<string>();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  getSearchString() {
    this.search.emit(this.searchCriterion)
  };

  logOut() {
    this.loginService.logOut()
  }
}
