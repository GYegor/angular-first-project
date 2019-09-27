import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ExpireWarnDirective } from './directives/expire-warn.directive';
import { TaskCardListsService } from './services/task-card-lists.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FooterComponent,
    FilterByPipe,
    ExpireWarnDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [TaskCardListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
