import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Study03Page } from './study03.page';

const routes: Routes = [
  {
    path: '',
    component: Study03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Study03PageRoutingModule {}
