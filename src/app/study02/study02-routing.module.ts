import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Study02Page } from './study02.page';

const routes: Routes = [
  {
    path: '',
    component: Study02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Study02PageRoutingModule {}
