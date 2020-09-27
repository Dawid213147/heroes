import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentRoutingModule } from './heroes-equipment-routing.module';
import { HeroesEquipmentComponent } from './heroes-equipment.component';
import { FormsModule } from '@angular/forms';
import { HeroesEquipmentItemComponent } from './heroes-equipment-item/heroes-equipment-item.component';

@NgModule({
  declarations: [HeroesEquipmentComponent],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    FormsModule
  ]
})
export class HeroesEquipmentModule { }
