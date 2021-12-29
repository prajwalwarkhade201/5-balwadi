import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoemsPage } from './poems.page';

const routes: Routes = [
  {
    path: '',
    component: PoemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoemsPageRoutingModule {}
