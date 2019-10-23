import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Assignee {
  value: string;
}

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  assignees: Assignee[] = [
    {value: 'John-01'},
    {value: 'Коля-02'},
    {value: 'Яўген-03'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  createCard() {

  }

  returnToBoard() {
   this.router.navigate(['/board'])
  }

}
