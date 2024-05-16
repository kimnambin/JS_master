import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tip02Page } from './tip02.page';

const routes: Routes = [
  {
    path: '',
    component: Tip02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tip02PageRoutingModule {}
