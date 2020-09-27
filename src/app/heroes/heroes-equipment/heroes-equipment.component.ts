import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-equipment',
  templateUrl: './heroes-equipment.component.html',
  styleUrls: ['./heroes-equipment.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeroesEquipmentComponent implements OnInit {

  private equipmentID: Observable<string>;

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.equipmentID = this.route
      .queryParamMap
      .pipe(map(params => params.get('equipmsentID') || 'None'));
    console.log(this.equipmentID);
  }

  cancel() {
    this.location.back();
    console.log(this.equipmentID);
  }

}
