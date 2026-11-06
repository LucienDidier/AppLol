import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionData } from '../../models/region.model';
import { API_BASE_URL } from '../api-url';

@Injectable({providedIn: 'root'})
export class Region {
    protected readonly http = inject(HttpClient);
    protected readonly apiUrl = `${API_BASE_URL}/RegionsAPI.php`;

    getAll(): Observable<RegionData[]> {
        return this.http.get<RegionData[]>(this.apiUrl);
    }

    getById(id: number){
        return this.http.get<RegionData>(this.apiUrl, {
            params:{id: id.toString(),} 
        })
    }

    create(Region: Omit<RegionData, 'id'>): Observable<RegionData> {
        return this.http.post<RegionData>(this.apiUrl, Region);
    }
    
    update(
        id: number,
        changes: Partial<Omit<RegionData, 'id'>>,
    ): Observable<RegionData> {
        return this.http.patch<RegionData>(this.apiUrl, changes, {
            params: { id: id.toString() },
        });
    }
    
    delete(id: number): Observable<unknown> {
        return this.http.delete(this.apiUrl, {
            params: { id: id.toString() },
        });
    }
}
