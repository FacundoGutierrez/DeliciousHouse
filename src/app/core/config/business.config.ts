/** Business and contact constants — replace placeholders when details are final. */
export interface AppBusinessConfig {
  businessName: string;
  phone: string;
  whatsAppUrl: string;
  email: string;
  address: string;
  hours: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
  currency: string;
  defaultLocale: 'es' | 'en';
}

export const DEFAULT_BUSINESS_CONFIG: AppBusinessConfig = {
  businessName: 'DeliciousHouse',
  phone: '+54 11 0000-0000',
  whatsAppUrl: 'https://wa.me/5491100000000',
  email: 'hola@delicioushouse.example',
  address: 'Dirección pendiente — Buenos Aires',
  hours: 'Lun–Sáb 9:00–18:00',
  social: {},
  currency: 'ARS',
  defaultLocale: 'es',
};
