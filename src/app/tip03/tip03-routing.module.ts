import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tip03Page } from './tip03.page';

const routes: Routes = [
  {
    path: '',
    component: Tip03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tip03PageRoutingModule {}
