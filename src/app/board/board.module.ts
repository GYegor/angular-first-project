import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FilterByPipe } from './pipes/filter-by.pipe';
import { ExpireWarnDirective } from './directives/expire-warn.directive';

import { BoardComponent } from './components/board/board.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';


const COMPONENTS = [
  BoardComponent,
  ToolbarComponent,
  CardListComponent,
  CardItemComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    FilterByPipe,
    ExpireWarnDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS,
  ]

})
export class BoardModule { }
