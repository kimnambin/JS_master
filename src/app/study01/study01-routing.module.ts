import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Study01Page } from './study01.page';

const routes: Routes = [
  {
    path: '',
    component: Study01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Study01PageRoutingModule {}
