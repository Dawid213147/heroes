import { ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { HeroesEqipmentItemService } from './heroes-equipment-item/heroes-equipment-item.service';
import { HeroEquipmentItem } from './heroes-equipment-item/heroes-equipment-item';

@Component({
  selector: 'app-heroes-equipment',
  templateUrl: './heroes-equipment.component.html',
  styleUrls: ['./heroes-equipment.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeroesEquipmentComponent implements OnInit, OnDestroy {

  public itemIDs: number[];
  public items: HeroEquipmentItem[];
  public sub: Subscription;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroesEquipmentItemService: HeroesEqipmentItemService
  ) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
        this.itemIDs = params['itemID'];
      });
      this.getEqipmentItems(this.itemIDs);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancel() {
    this.location.back();
  }

  getEqipmentItems(ids: number[]) {
    this.sub = this.heroesEquipmentItemService.getEqipmentItems(ids)
      .subscribe(items => this.items = items);
  }

}
