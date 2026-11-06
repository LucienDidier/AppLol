import { RoleData } from "./role.model";
import { RegionData } from "./region.model";
import { SpellData } from "./spell.model";
import { EspeceData } from "./espece.model";

export interface ChampionData {
  id_champ: number;
  nom_champ: string;
  genre_champ: string;
  type_portee: string;
  id_Annee: string;
  annee_sortie: string;
  id_lore: number;
  lore: string;
  id_ressource: string;
  nom_ressource: string;
  roles: ChampionRoleData[];
  regions: ChampionRegionData[];
  spells: ChampionSpellData[];
  especes: ChampionEspeceData[];
  rarete?: string; //autre classe avec un extends ?
}

export interface ChampionRoleData {
  id_role: number;
  nom_role: string;
}

export interface ChampionRegionData {
  id_region: number;
  nom_region: string;
}

export interface ChampionSpellData {
  id_spell: number;
  nom_spell: string;
  touche: string;
  is_Passive: number;
}

export interface ChampionEspeceData {
  id_espece: number;
  nom_espece: string;
}

export interface ChampionAnneeeData {
    id_Annee: number;
    annee: number;
}

