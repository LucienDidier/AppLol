import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleData } from '../../models/role.model';
import { API_BASE_URL } from '../api-url';

@Injectable({ providedIn: 'root'})
export class Role {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = `${API_BASE_URL}/rolesAPI.php`;

    getAll(): Observable<RoleData[]> {
        return this.http.get<RoleData[]>(this.apiUrl);
    }

    getById(id: number): Observable<RoleData> {
        return this.http.get<RoleData>(this.apiUrl, {
            params:{id: id.toString()},
        });
    }

    create(role: Omit<RoleData, 'id'>): Observable<RoleData> {
        return this.http.post<RoleData>(this.apiUrl, role);
    }

    update(
        id: number,
        changes: Partial<Omit<RoleData, 'id'>>,
        ): Observable<RoleData> {
            return this.http.patch<RoleData>(this.apiUrl, changes, {
                params: { id: id.toString() },
        });
    }

    delete(id: number): Observable<unknown> {
        return this.http.delete(this.apiUrl, {
            params: { id: id.toString() },
        });
    }
}
