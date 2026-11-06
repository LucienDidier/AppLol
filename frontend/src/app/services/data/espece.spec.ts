import { TestBed } from '@angular/core/testing';
import { Espece } from './espece';

describe('Espece', () => {
  let service: Espece;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Espece);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
