import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tip01Page } from './tip01.page';

const routes: Routes = [
  {
    path: '',
    component: Tip01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tip01PageRoutingModule {}
