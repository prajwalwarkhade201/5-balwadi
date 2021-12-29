import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NumbersPage }  from '../numbers/numbers.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'numbers',
    component: NumbersPage ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
