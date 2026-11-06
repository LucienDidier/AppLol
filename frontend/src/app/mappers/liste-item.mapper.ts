import { ChampionData } from '../models/champion.model';
import { EspeceData } from '../models/espece.model';
import { ItemListe } from '../models/liste-item.model';
import { RegionData } from '../models/region.model';
import { RoleData } from '../models/role.model';

export function toChampionItem(champion: ChampionData): ItemListe {
  return {
    id: `champion-${champion.id_champ ?? champion.nom_champ}`,
    type: 'Champion',
    title: champion.nom_champ,
    fields: [
      { label: 'Genre', value: champion.genre_champ },
      { label: 'Année de sortie', value: champion.annee_sortie },
      { label: 'Ressource', value: champion.nom_ressource },
      { label: 'Portée', value: champion.type_portee },
      { label: 'Régions', value: champion.regions.map((region) => region.nom_region).join(', ')}
    ],
  };
}

export function toRoleItem(role: RoleData): ItemListe {
  return {
    id: `role-${role.id_role}`,
    type: 'Rôle',
    title: role.nom_role,
    fields: [],
  };
}

export function toRegionItem(region: RegionData): ItemListe {
  return {
    id: `region-${region.id_region}`,
    type: 'Région',
    title: region.nom_region,
    fields: [],
  }
}

export function toEspeceItem(espece: EspeceData): ItemListe{
  return {
    id: `espece-${espece.id_espece}`,
    type: 'Espèce',
    title: espece.nom_espece,
    fields: [],
  }
}
