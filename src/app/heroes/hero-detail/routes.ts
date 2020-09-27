import { Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';

export const routes: Routes = [
    {
      path: '',
      component: HeroDetailComponent,
      children: [
        {
          path: 'equipment',
          loadChildren: () => import('../heroes-equipment/heroes-equipment.module').then(m => m.HeroesEquipmentModule),
          data: { preload: true }
        }
      ]
    }
  ];