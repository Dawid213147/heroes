import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

export const routes: Routes = [
    { path: '', component: HeroesComponent },
    {
      path: ':id',
      loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule),
      data: { preload: true , animation: 'hero'}
    }
  ];