import { InjectionToken, Provider } from '@angular/core';

import {
  AppBusinessConfig,
  DEFAULT_BUSINESS_CONFIG,
} from './business.config';

export const APP_CONFIG = new InjectionToken<AppBusinessConfig>('APP_CONFIG');

export function provideAppConfig(
  config: AppBusinessConfig = DEFAULT_BUSINESS_CONFIG,
): Provider {
  return { provide: APP_CONFIG, useValue: config };
}
