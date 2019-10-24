
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { BoardModule } from './board/board.module';

import { CardListsService } from './board/services/card-lists.service';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    AuthModule,
    BoardModule,
  ],
  providers: [
    CardListsService,
      {provide: MAT_DATE_LOCALE, useValue: 'ru'},
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
