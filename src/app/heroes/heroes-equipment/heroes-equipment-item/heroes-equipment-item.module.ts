import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentItemRoutingModule } from './heroes-equipment-item-routing.module';
import { FormsModule } from '@angular/forms';
import { HeroesEquipmentItemComponent } from './heroes-equipment-item.component';

@NgModule({
  declarations: [HeroesEquipmentItemComponent],
  imports: [
    CommonModule,
    EquipmentItemRoutingModule,
    FormsModule
  ]
})
export class HeroesEquipmentItemModule { }