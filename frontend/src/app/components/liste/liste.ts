import { Component, input } from '@angular/core';
import { ItemListe } from '../../models/liste-item.model';

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.scss',
  templateUrl: './liste.html',
})
export class Liste {
  readonly items = input.required<ItemListe[]>();
}
