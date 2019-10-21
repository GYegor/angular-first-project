import { BoardModule } from './board/board.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { TaskCardListsService } from './board/services/task-card-lists.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    BoardModule,
  ],
  providers: [TaskCardListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
