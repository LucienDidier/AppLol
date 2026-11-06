import { Component, output } from '@angular/core';

export type MenuSelection = 'champions' | 'roles' | 'regions' | 'sorts' | 'especes' | 'objets';

@Component({
  imports: [],
  selector: 'app-menu',
  styleUrl: './menu.scss',
  templateUrl: './menu.html',
})
export class Menu {
  readonly selection = output<MenuSelection>();

  selectMenu(selection: MenuSelection): void {
    this.selection.emit(selection);
  }
}
