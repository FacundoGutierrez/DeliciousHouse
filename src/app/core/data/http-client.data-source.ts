import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Client } from '../models/client.model';
import { ClientRepository } from './client.repository';

interface ClientResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable()
export class HttpClientDataSource implements ClientRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/clients';

  getAll(): Observable<Client[]> {
    return this.http.get<ClientResponse[]>(this.apiUrl).pipe(
      map((items) =>
        items.map((item) => ({
          id: String(item.id),
          name: item.name,
          email: item.email,
          phone: item.phone,
          address: item.address,
          order: [],
          cost: 0,
        })),
      ),
    );
  }
}
