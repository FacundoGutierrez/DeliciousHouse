/**
 * All UI copy for the marketing site (Spanish v1).
 * Import SITE_CONTENT in components and bind via `t` in templates.
 */
export const SITE_CONTENT = {
  common: {
    whatsAppButtonLabel: 'WhatsApp',
    contactButtonLabel: 'Contacto',
    menuButtonLabel: 'Ver menú',
    brandInitials: 'DH',
    imagePlaceholderBrandLabel: 'DeliciousHouse',
  },

  nav: {
    desktopAriaLabel: 'Principal',
    mobileAriaLabel: 'Menú móvil',
    mobileToggleAriaLabel: 'Abrir menú',
    links: [
      { path: '/', label: 'Inicio', exact: true as const },
      { path: '/menu', label: 'Menú', exact: false as const },
      { path: '/about', label: 'Nosotros', exact: false as const },
      { path: '/contact', label: 'Contacto', exact: false as const },
      { path: '/cart', label: 'Carrito', exact: false as const },
    ],
  },

  footer: {
    brandDescriptionText:
      'Cookies y budines artesanales. Un equipo de seis personas con pasión por lo hecho a mano — y pronto, tu café de barrio.',
    navigationHeadingText: 'Navegación',
    contactHeadingText: 'Contacto',
    copyrightText: (year: number, businessName: string) =>
      `© ${year} ${businessName}. Hecho con cariño en Buenos Aires.`,
  },

  home: {
    hero: {
      sectionBadgeText: 'Panadería artesanal',
      mainHeadlineText: 'Cookies y budines hechos a mano',
      introParagraphText:
        'Somos un equipo de seis personas que hornea en pequeños lotes con ingredientes de calidad. Pronto abrimos las puertas de nuestro café — por ahora, endulzá tu día con lo nuestro.',
      menuCtaText: 'Ver menú',
      cartCtaText: 'Ver carrito',
      whatsAppCtaText: 'Consultar por WhatsApp',
    },
    featured: {
      sectionBadgeText: 'Destacados',
      sectionHeadingText: 'Lo más pedido',
      sectionSupportText:
        'Probá nuestros budines y cookies — recetas clásicas, sabor casero.',
      emptyCatalogText: 'Pronto publicaremos nuestro catálogo. Mientras tanto, escribinos.',
      fullMenuCtaText: 'Ver menú completo',
    },
    story: {
      sectionBadgeText: 'Nuestra historia',
      sectionHeadingText: 'De panadería a café de barrio',
      sectionSupportText:
        'Empezamos horneando para vecinos y amigos. Hoy crecemos hacia un espacio donde compartir un café y una cookie recién hecha sea parte del día a día.',
      aboutCtaText: 'Conocenos',
    },
    visit: {
      sectionHeadingText: 'Visitános',
      addressPrefixText: 'Dirección:',
      hoursPrefixText: 'Horarios:',
    },
  },

  menu: {
    catalogBadgeText: 'Catálogo',
    catalogHeadingText: 'Menú',
    catalogSupportText:
      'Cookies crujientes y budines esponjosos. Precios en pesos argentinos — consultá disponibilidad del día.',
    emptyCatalogText: 'No hay productos cargados en este momento.',
    emptyCatalogCtaText: 'Escribinos',
    cookiesSectionHeadingText: 'Cookies',
    cookiesSectionSupportText: 'Horneadas en lotes pequeños',
    budinesSectionHeadingText: 'Budines',
    budinesSectionSupportText: 'Pound cakes clásicos y de temporada',
    comingSoonText: 'Próximamente más variedades.',
    wholesaleHeadingText: '¿Pedido especial o mayorista?',
    wholesaleSupportText:
      'Contanos qué necesitás por WhatsApp o el formulario de contacto.',
    wholesaleCtaText: 'Consultar',
  },

  about: {
    hero: {
      sectionBadgeText: 'Nosotros',
      mainHeadingText: 'Hecho a mano, con tiempo y cuidado',
      introParagraphText: (businessName: string) =>
        `${businessName} nació en una cocina chica con ganas de compartir lo que sabemos hacer bien: cookies que crujen por fuera y budines que abrazan. Somos seis personas que creemos en la calidad, el lote chico y el trato cercano.`,
    },
    story: {
      originBadgeText: 'Origen',
      originHeadingText: 'De la panadería al café',
      originSupportText:
        'Empezamos vendiendo a vecinos y ferias locales. Cada receta la probamos una y otra vez hasta que nos da orgullo poner nuestro nombre.',
      originBodyText:
        'Hoy estamos en plena transición hacia un espacio de café: un lugar para sentarse, pedir un budín con café filtrado y sentir que estás en un barrio que cuida lo artesanal. Mientras tanto, seguimos horneando con la misma dedicación de siempre.',
    },
    team: {
      memberCountText: '6',
      memberCountLabelText: 'personas en el equipo',
      memberRolesText: 'Panaderos, baristas y soñadores',
    },
    values: {
      sectionBadgeText: 'Valores',
      sectionHeadingText: 'Lo que nos define',
      cards: [
        {
          icon: '✦',
          title: 'Calidad',
          description:
            'Ingredientes seleccionados y procesos que respetan el tiempo de cada masa y budín.',
        },
        {
          icon: '◎',
          title: 'Hecho a mano',
          description:
            'Lotes chicos, atención al detalle. Nada sale de una línea industrial.',
        },
        {
          icon: '♥',
          title: 'Cercanía',
          description:
            'Conocemos a quienes nos eligen. Queremos que te sientas en casa.',
        },
      ],
    },
    cta: {
      headingText: '¿Querés probar lo nuestro?',
      supportText: 'Mirá el menú del día o escribinos para pedidos y consultas.',
      menuCtaText: 'Ver menú',
      contactCtaText: 'Contacto',
    },
  },

  contact: {
    sectionBadgeText: 'Hablemos',
    sectionHeadingText: 'Contacto',
    sectionSupportText: 'Pedidos, consultas o saludos — te respondemos lo antes posible.',
    infoCardHeadingText: 'Datos',
    addressLabelText: 'Dirección',
    hoursLabelText: 'Horarios',
    phoneLabelText: 'Teléfono',
    emailLabelText: 'Email',
    mapCtaText: 'Ver en mapa',
    formHeadingText: 'Enviar consulta',
    formSupportText: 'Se abrirá tu cliente de correo con el mensaje — sin backend por ahora.',
    nameFieldLabelText: 'Nombre',
    emailFieldLabelText: 'Email',
    messageFieldLabelText: 'Mensaje',
    submitButtonText: 'Enviar por email',
    validationErrors: {
      nameRequiredText: 'El nombre es obligatorio.',
      emailRequiredText: 'El email es obligatorio.',
      emailInvalidText: 'Ingresá un email válido.',
      messageRequiredText: 'El mensaje es obligatorio.',
      messageMinLengthText: 'Escribí al menos 10 caracteres.',
    },
    mailto: {
      emailSubjectText: (name: string) => `Consulta desde la web — ${name}`,
      emailBodyText: (name: string, email: string, message: string) =>
        `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    },
  },

  productCard: {
    soldOutBadgeText: 'Agotado',
    addToCartText: 'Agregar',
    addedText: 'Agregado',
  },

  cart: {
    pageTitle: 'Carrito',
    emptyTitle: 'Tu carrito está vacío',
    emptyDescription: 'Mirá nuestro menú y agregá tus productos favoritos.',
    emptyCtaText: 'Ver menú',
    itemCountText: (count: number) =>
      `${count} ${count === 1 ? 'producto' : 'productos'}`,
    totalLabelText: 'Total',
    checkoutButtonText: 'Finalizar pedido',
    continueShoppingText: 'Seguir comprando',
    removeItemLabelText: 'Eliminar',
    quantityLabelText: 'Cantidad',
    whatsappOrderMessage: (items: Array<{ name: string; qty: number; price: number }>, total: number) => {
      const lines = items.map((i) => `• ${i.name} x${i.qty} — $${(i.price * i.qty).toLocaleString('es-AR')}`);
      return `¡Hola! Quiero hacer un pedido:\n\n${lines.join('\n')}\n\nTotal: $${total.toLocaleString('es-AR')}`;
    },
  },
} as const;

export type SiteContent = typeof SITE_CONTENT;
