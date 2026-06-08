import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

export interface ProductRepository { // contract for the product repository
  getAll(): Observable<Product[]>;
}

export const PRODUCT_REPOSITORY = new InjectionToken<ProductRepository>(
  'ProductRepository',
); // token for the product repository

// export const EMPLOYEES_REPOSITORY = new InjectionToken<EmployeeRepository>(
//   'EmployeeRepository',
// );

// export const CLIENTS_REPOSITORY = new InjectionToken<ClientRepository>(
//   'ClientRepository',
// );