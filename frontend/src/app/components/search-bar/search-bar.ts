import { Component, model, output, input, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.scss',
  templateUrl: './search-bar.html',
})
export class SearchBar {

  search = model('');
  searchButtonClicked: OutputEmitterRef<void> = output<void>({
    alias:'submit'
  });

  searchClick(){
    this.searchButtonClicked.emit();
  }
}
