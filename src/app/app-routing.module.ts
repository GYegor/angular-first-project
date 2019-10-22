import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadGuard } from './core/guards/load.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'board',
    loadChildren: './board/board.module#BoardModule',
    canLoad: [LoadGuard],
  },
  // { path: '**', component: NotFoundComponent }, // при отсутствии совпадений показываем нотфаунд страничку

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
