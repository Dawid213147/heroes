import { Routes } from '@angular/router';
import { HeroesEquipmentComponent } from './heroes-equipment.component';

export const routes: Routes = [
    { 
        path: '',
        component: HeroesEquipmentComponent,
        children: [
            {
              path: ':equipmentID',
              loadChildren: () => import('./heroes-equipment-item/heroes-equipment-item.module').then(m => m.HeroesEquipmentItemModule),
              data: { preload: true }
            }
          ] 
    },
];