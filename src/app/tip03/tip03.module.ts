import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip03PageRoutingModule } from './tip03-routing.module';

import { Tip03Page } from './tip03.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip03PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tip03Page]
})
export class Tip03PageModule {}
