import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Study02PageRoutingModule } from './study02-routing.module';

import { Study02Page } from './study02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Study02PageRoutingModule
  ],
  declarations: [Study02Page]
})
export class Study02PageModule {}
