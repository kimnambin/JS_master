import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Study01PageRoutingModule } from './study01-routing.module';

import { Study01Page } from './study01.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Study01PageRoutingModule,
  ],
  declarations: [Study01Page]
})
export class Study01PageModule {}
