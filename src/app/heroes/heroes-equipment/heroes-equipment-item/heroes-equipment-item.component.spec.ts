import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesEquipmentItemComponent } from './heroes-equipment-item.component';

describe('HeroesEquipmentItemComponent', () => {
  let component: HeroesEquipmentItemComponent;
  let fixture: ComponentFixture<HeroesEquipmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesEquipmentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesEquipmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
