import { Component, OnInit } from '@angular/core';
import { HeroesEqipmentItemService } from './heroes-equipment-item.service';
import { HeroEquipmentItem } from './heroes-equipment-item';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-heroes-equipment-item',
  templateUrl: './heroes-equipment-item.component.html',
  styleUrls: ['./heroes-equipment-item.component.css']
})
export class HeroesEquipmentItemComponent implements OnInit {

  @Input() Item: HeroEquipmentItem;

  constructor(
    private route: ActivatedRoute,
    private heroesEqipmentItemService: HeroesEqipmentItemService
    ) {}

  ngOnInit() {
    this.getEqipmentItem();
  }

  getEqipmentItem() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesEqipmentItemService.getEqipmentItem(id)
      .subscribe(Item => this.Item = Item);
  }

}
