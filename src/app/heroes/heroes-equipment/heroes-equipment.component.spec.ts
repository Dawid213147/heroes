import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesEquipmentComponent } from './heroes-equipment.component';

describe('HeroesEquipmentComponent', () => {
  let component: HeroesEquipmentComponent;
  let fixture: ComponentFixture<HeroesEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
