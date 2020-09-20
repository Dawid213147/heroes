import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit, OnDestroy {

  selectedHero: Hero;
  heroes: Hero[];
  sub: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getHeroes() {
    this.sub = this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  trackBy(hero: Hero): number {
    return hero.id;
  }
}
