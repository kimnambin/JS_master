import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreePageRoutingModule } from './free-routing.module';

import { FreePage } from './free.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreePageRoutingModule,
    HttpClientModule
  ],
  declarations: [FreePage]
})
export class FreePageModule {}
