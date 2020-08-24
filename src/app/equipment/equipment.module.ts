import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentComponent } from './equipment.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [EquipmentComponent],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    FormsModule
  ]
})
export class EquipmentModule { }
