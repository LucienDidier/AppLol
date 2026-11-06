import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, Subscription, finalize } from 'rxjs';
import { Header } from './components/header/header';
import { Liste } from './components/liste/liste';
import { ItemListe } from './models/liste-item.model';
import { MenuSelection } from './components/menu/menu';
import { toChampionItem, toRoleItem, toRegionItem, toEspeceItem} from './mappers/liste-item.mapper';
import { Champion } from './services/data/champion';
import { Role } from './services/data/role';
import { Region } from './services/data/region';
import { Espece } from './services/data/espece';
import { Login } from './pages/login/login';

@Component({
  imports: [Header, Liste, Login],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly championService = inject(Champion);
  private readonly roleService = inject(Role);
  private readonly regionService = inject(Region);
  private readonly especeService = inject(Espece);
  private readonly destroyRef = inject(DestroyRef);
  private activeRequest?: Subscription;

  protected readonly selectedContent = signal<MenuSelection | null>(null);
  protected readonly items = signal<ItemListe[] | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  onMenuSelected(selection: MenuSelection): void {
    this.activeRequest?.unsubscribe();
    this.selectedContent.set(selection);
    this.items.set(null);
    this.errorMessage.set(null);

    switch (selection) {
      case 'champions':
        this.loadItems(
          this.championService.getAll(),
          toChampionItem,
        );
        break;
      case 'roles':
        this.loadItems(
          this.roleService.getAll(),
          toRoleItem,
        );
        break;
      case 'regions':
        this.loadItems(
          this.regionService.getAll(),
          toRegionItem,
        );
        break;
      case 'especes':
        this.loadItems(
          this.especeService.getAll(),
          toEspeceItem,
        );
        break;
      default:
        this.isLoading.set(false);
    }
  }

  private loadItems<T>(
    request: Observable<T[]>,
    toItem: (entity: T) => ItemListe,
  ): void {
    this.isLoading.set(true);
    this.activeRequest = request
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: (entities) => this.items.set(entities.map(toItem)),
        error: (error: unknown) => {
          console.error('Échec du chargement des données sélectionnées.', error);
          this.errorMessage.set('Impossible de charger ces données.');
        },
      });
  }

}
