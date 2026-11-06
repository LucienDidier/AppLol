import { Component, output } from '@angular/core';
import { Menu, MenuSelection } from '../menu/menu';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  imports: [Menu, SearchBar],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  search = '';
  readonly menuSelection = output<MenuSelection>();

  onMenuSelection(selection: MenuSelection): void {
    this.menuSelection.emit(selection);
  }
}
