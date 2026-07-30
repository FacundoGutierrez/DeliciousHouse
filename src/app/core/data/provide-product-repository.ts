import { Provider } from '@angular/core';

import { HttpProductDataSource } from './http-product.data-source';
import { PRODUCT_REPOSITORY } from './product.repository';

export function provideProductRepository(): Provider {
  return {
    provide: PRODUCT_REPOSITORY,
    useClass: HttpProductDataSource,
  };
}
