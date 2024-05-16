import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip02PageRoutingModule } from './tip02-routing.module';

import { Tip02Page } from './tip02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip02PageRoutingModule
  ],
  declarations: [Tip02Page]
})
export class Tip02PageModule {}
