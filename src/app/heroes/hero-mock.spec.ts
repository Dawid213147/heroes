import { TestBed } from '@angular/core/testing';

import { HeroMock } from './hero-mock';

describe('InMemoryDataService', () => {
  let service: HeroMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
