import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesEquipmentComponent } from './heroes-equipment.component';

const routes: Routes = [{ path: '', component: HeroesEquipmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
