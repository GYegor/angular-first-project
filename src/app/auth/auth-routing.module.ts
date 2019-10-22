// ng g m auth --rouing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // mind for child
  exports: [RouterModule]
})
export class AuthRoutingModule { }
