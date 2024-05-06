import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Study04Page } from './study04.page';

const routes: Routes = [
  {
    path: '',
    component: Study04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Study04PageRoutingModule {}
