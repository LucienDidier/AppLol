import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should create without loading lists before a menu selection', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    httpTesting.expectNone('http://localhost/LOL/api/championsAPI.php');
    httpTesting.expectNone('http://localhost/LOL/api/rolesAPI.php');
  });

  it('should load and display champions when selected in the menu', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    clickMenuOption(fixture.nativeElement, 'Champions');

    const request = httpTesting.expectOne(
      'http://localhost/LOL/api/championsAPI.php',
    );
    request.flush([
      {
        id: 1,
        nom: 'Ahri',
        genre: 'Femme',
        anneeSortie: '2011',
        ressource: 'Mana',
        typePortee: 'Distance',
        role: {},
        region: {},
        spell: {},
        espece: {},
      },
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Ahri');
    expect(fixture.nativeElement.textContent).toContain('Champion');
  });

  it('should load and display roles when selected in the menu', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    clickMenuOption(fixture.nativeElement, 'Rôles');

    const request = httpTesting.expectOne(
      'http://localhost/LOL/api/rolesAPI.php',
    );
    request.flush([{ id: 1, nom: 'Mage' }]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Mage');
    expect(fixture.nativeElement.textContent).toContain('Rôle');
  });
});

function clickMenuOption(root: HTMLElement, label: string): void {
  const button = Array.from(root.querySelectorAll('button')).find(
    (candidate) => candidate.textContent?.trim() === label,
  );
  expect(button).toBeTruthy();
  button?.click();
}
