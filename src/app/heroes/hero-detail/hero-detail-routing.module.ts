import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
    children: [
      {
        path: 'equipment/:id',
        loadChildren: () => import('../heroes-equipment/heroes-equipment.module').then(m => m.HeroesEquipmentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule { }
