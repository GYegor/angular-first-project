import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ExpireWarnDirective } from './directives/expire-warn.directive';
import { FilterByPipe } from './pipes/filter-by.pipe';

import { BoardPageComponent } from './pages/board-page/board-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CardFormComponent } from './components/card-form/card-form.component';

const COMPONENTS = [
  BoardPageComponent,
  ToolbarComponent,
  CardListComponent,
  CardItemComponent,
  CardFormComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    FilterByPipe,
    ExpireWarnDirective,
    CreatePageComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class BoardModule { }
