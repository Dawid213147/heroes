import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroDetailRoutingModule} from './hero-detail-routing.module';
import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    HeroDetailRoutingModule,
    FormsModule
  ]
})
export class HeroDetailModule { }
