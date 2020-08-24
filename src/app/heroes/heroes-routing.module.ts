import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: ':id', component: HeroDetailComponent },
  { path: ':id/:id/equipment', loadChildren: () => import('../equipment/equipment.module').then(m => m.EquipmentModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
