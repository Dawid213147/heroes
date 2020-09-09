import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), data: { animation: 'heroes' } },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'dashboard' }},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
