import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip02PageRoutingModule } from './tip02-routing.module';

import { Tip02Page } from './tip02.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip02PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tip02Page]
})
export class Tip02PageModule {}
