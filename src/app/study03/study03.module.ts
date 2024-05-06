import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Study03PageRoutingModule } from './study03-routing.module';

import { Study03Page } from './study03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Study03PageRoutingModule
  ],
  declarations: [Study03Page]
})
export class Study03PageModule {}
