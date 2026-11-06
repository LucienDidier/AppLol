import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspeceData } from '../../models/espece.model';
import { API_BASE_URL } from '../api-url';

@Injectable({ providedIn: 'root'})
export class Espece {
    protected readonly http = inject(HttpClient);
    protected readonly apiUrl = `${ API_BASE_URL}/especesAPI.php`;

    getAll(): Observable<EspeceData[]> {
        return this.http.get<EspeceData[]>(this.apiUrl);
    }
    
    getById(id: number): Observable<EspeceData> {
        return this.http.get<EspeceData>(this.apiUrl, {
            params: { id: id.toString() },
        });
    }
    
    create(espece: Omit<EspeceData, 'id'>): Observable<EspeceData> {
        return this.http.post<EspeceData>(this.apiUrl, espece);
    }
    
    update(
        id: number,
        changes: Partial<Omit<EspeceData, 'id'>>,
        ): Observable<EspeceData> {
        return this.http.patch<EspeceData>(this.apiUrl, changes, {
            params: { id: id.toString() },
        });
    }
    
    delete(id: number): Observable<unknown> {
        return this.http.delete(this.apiUrl, {
            params: { id: id.toString() },
        });
    }
}
