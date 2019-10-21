import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';

const MODULES = [
  FlexLayoutModule,
  AppMaterialModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
