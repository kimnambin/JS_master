import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Study04PageRoutingModule } from './study04-routing.module';

import { Study04Page } from './study04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Study04PageRoutingModule
  ],
  declarations: [Study04Page]
})
export class Study04PageModule {}
