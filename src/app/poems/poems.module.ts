import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoemsPageRoutingModule } from './poems-routing.module';

import { PoemsPage } from './poems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoemsPageRoutingModule
  ],
  declarations: [PoemsPage]
})
export class PoemsPageModule {}
