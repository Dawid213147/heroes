import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  @Input() hero: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
