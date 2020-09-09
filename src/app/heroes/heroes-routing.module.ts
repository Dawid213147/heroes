import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  {
    path: ':id',
    loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule),
    data: { preload: true , animation: 'hero'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
