import { BoardModule } from './board/board.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './shared/app-material.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

// import { FormsModule } from '@angular/forms';
import { TaskCardListsService } from './board/services/task-card-lists.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BoardModule,
    AuthModule,
    // FormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    CoreModule,
  ],
  providers: [TaskCardListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
