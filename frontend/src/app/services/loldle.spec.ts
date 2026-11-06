import { TestBed } from '@angular/core/testing';
import { Loldle } from './loldle';

describe('Loldle', () => {
  let service: Loldle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loldle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
