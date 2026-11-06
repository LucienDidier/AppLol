export interface ItemListe {
  id: string;
  type: string;
  title: string;
  fields: ChampListe[];
}

export interface ChampListe {
  label: string;
  value: string;
}