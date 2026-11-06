import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Loldle } from './loldle';

describe('Loldle', () => {
  let component: Loldle;
  let fixture: ComponentFixture<Loldle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loldle],
    }).compileComponents();

    fixture = TestBed.createComponent(Loldle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
