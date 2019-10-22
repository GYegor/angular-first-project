import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
// import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
];


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    // FormsModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
