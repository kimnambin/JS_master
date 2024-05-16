import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip01PageRoutingModule } from './tip01-routing.module';

import { Tip01Page } from './tip01.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip01PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tip01Page]
})
export class Tip01PageModule {}
