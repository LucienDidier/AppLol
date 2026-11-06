import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChampionData } from '../../models/champion.model';
import { API_BASE_URL } from '../api-url';

@Injectable({ providedIn: 'root' })
export class Champion {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${API_BASE_URL}/championsAPI.php`;

  getAll(): Observable<ChampionData[]> {
    return this.http.get<ChampionData[]>(this.apiUrl);
  }

  getById(id: number): Observable<ChampionData> {
    return this.http.get<ChampionData>(this.apiUrl, {
      params: { id: id.toString() },
    });
  }

  create(champion: Omit<ChampionData, 'id'>): Observable<ChampionData> {
    return this.http.post<ChampionData>(this.apiUrl, champion);
  }

  update(
    id: number,
    changes: Partial<Omit<ChampionData, 'id'>>,
  ): Observable<ChampionData> {
    return this.http.patch<ChampionData>(this.apiUrl, changes, {
      params: { id: id.toString() },
    });
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(this.apiUrl, {
      params: { id: id.toString() },
    });
  }
}
