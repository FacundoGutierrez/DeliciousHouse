import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';

import { CLIENT_REPOSITORY } from '../data/client.repository';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
    private readonly repository = inject(CLIENT_REPOSITORY);

    private readonly _clients = signal<Client[]>([]);
    private readonly _isLoading = signal(false);

    readonly clients = this._clients.asReadonly();
    readonly isLoading = this._isLoading.asReadonly();

    fetchClients(): Observable<Client[]> {
        this._isLoading.set(true);
        return this.repository.getAll().pipe(
            tap((data) => this._clients.set(data)),
            finalize(() => this._isLoading.set(false)),
        );
    }
}