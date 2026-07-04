'use strict';

(function () {
  var translations = {
    es: {
      nav_about: '¿Quiénes somos?',
      nav_gallery: 'Galería',
      nav_facilities: 'Nuestras Instalaciones',
      nav_contact: 'Contáctenos',
      hero_title: 'Entre la playa y la jungla',
      hero_subtitle: 'Descanso, playa y piscina privada en Punta Leona',
      intro_title: '¿Quiénes somos?',
      intro_body: 'Ubicado en Punta Leona, Avocado\'s Pool es un complejo vacacional de playa que cuenta con una casa y un apartamento con piscina privada muy cerca de <strong>Playa Mantas</strong> y <strong>Playa Blanca</strong>.',
      intro_cta: 'Ver galería',
      feat_pool_title: 'Piscina privada',
      feat_pool_body: 'De uso exclusivo para los huéspedes y totalmente privada.',
      feat_ac_title: 'Aire acondicionado',
      feat_ac_body: 'Para su confort todas las habitaciones cuentan con aire acondicionado',
      feat_beach_title: 'Acceso a playas',
      feat_beach_body: 'Disfrute de Playa Mantas y Playa Blanca con nuestro servicio de menaje de playa (toldo, mesa, sillas, hamaca, asador)',
      feat_pet_title: 'Pet Friendly',
      feat_pet_body: '¡Tu mascota es parte de la familia y también es bienvenida!',
      feat_capacity_title: 'Capacidad',
      feat_capacity_body: 'Contamos con dos edificios, una casa para mínimo 7 y hasta 11 personas, y un apartamento para un máximo de 6 personas',
      feat_checkin_title: 'Check-in, Check-out',
      feat_checkin_body: '<strong>Check-in: </strong> 3:00 pm <br/> <strong>Check-out: </strong> 12:00 md',
      gallery_title: 'Instalaciones',
      gallery_casa: 'Casa',
      gallery_apto: 'Apartamento',
      gcap_pool: '<i>Avocados\' <span>Pool</span></i>',
      gcap_entrance: '<i>Entrada <span>Principal</span></i>',
      gcap_privatepool: '<i>Piscina <span>Privada</span></i>',
      gcap_poolterrace: '<i>Terraza <span>Piscina</span></i>',
      gcap_petfriendly: '<i>Pet <span>Friendly</span></i>',
      gcap_nature: '<i>Disfrute la <span>Naturaleza</span></i>',
      gcap_mantas: '<i>Playa <span>Mantas</span></i>',
      gcap_blanca: '<i>Playa <span>Blanca</span></i>',
      gcap_kitchen: '<i>Cocina</i>',
      gcap_livingroom: '<i><span>Sala</span></i>',
      gcap_bedroom_ensuite: '<i>Habitación con <span>Baño privado</span></i>',
      gcap_bedroom_secondary: '<i>Habitación secundaria</i>',
      gcap_groundfloor: '<i>Planta <span>Baja</span></i>',
      gcap_balcony: '<i>Balcón</i>',
      gcap_room: '<i>Habitación</i>',
      gcap_mainbath: '<i>Baño <span>Principal</span></i>',
      fac_title: 'Nuestras Instalaciones',
      fac_li_pool: 'Piscina privada de uso exclusivo',
      fac_li_fiber: 'Internet de fibra óptica',
      fac_li_cable: 'Televisión por cable',
      fac_li_beach: 'A 600 metros de la playa',
      fac_li_shops: 'A 300 metros de un mini súper, una POPS y una Pizzería',
      fac_li_parking: 'Parqueo para 4 vehículos frente a la propiedad',
      fac_li_security: 'Residencial de acceso privado con seguridad ambulante noctura',
      fac_li_jungle: 'Ubicado frente a la jungla con monos cariblancos, lapas e iguanas como vecinos',
      fac_casa_title: 'Casa Avocados',
      fac_casa_li1: '7 personas mínimo y hasta 11 máximo',
      fac_casa_li2: '3 baños completos',
      fac_casa_li3: 'Aire acondicionado en todas las habitaciones',
      fac_casa_li4: 'Cocina equipada',
      fac_casa_li5: 'Lavadora y secadora',
      fac_apto_title: 'Apartamento Avocados',
      fac_apto_li1: '6 personas máximo',
      fac_apto_li2: '2 baños completos',
      fac_apto_li3: 'Aire acondicionado en todas las habitaciones',
      fac_apto_li4: 'Cocina equipada',
      fac_rates_title: 'Tarifas por noche',
      fac_rates_li1: '₡20 000 -  Personas mayores de 10 años',
      fac_rates_li2: '₡10 000 - Niños de 6 a 10 años',
      fac_rates_li3: 'Gratis - Niños de 0 a 5 años',
      fac_gear_title: 'Alquiler de Menaje de Playa',
      fac_gear_includes: 'Incluye:',
      fac_gear_li1: 'Instalación gratis en Playa Mantas',
      fac_gear_li2: 'Toldo',
      fac_gear_li3: 'Mesa y 7 sillas',
      fac_gear_li4: 'Hamaca',
      fac_gear_li5: 'Parrilla',
      contact_title: 'Contáctenos',
      contact_body: 'No dude en contactarnos para reservar sus próximas vacaciones de playa.',
      contact_waze: 'Ubicación en Waze',
      footer_copy: 'Copyright © 2025 Avocados\' Pool',
      doc_title: 'Avocados\' Pool — Alquiler vacacional en Punta Leona'
    },
    en: {
      nav_about: 'About us',
      nav_gallery: 'Gallery',
      nav_facilities: 'Our Facilities',
      nav_contact: 'Contact',
      hero_title: 'Between the beach and the jungle',
      hero_subtitle: 'Rest, beach, and a private pool in Punta Leona',
      intro_title: 'About us',
      intro_body: 'Located in Punta Leona, Avocado\'s Pool is a beach vacation complex with a house and an apartment with a private pool, very close to <strong>Playa Mantas</strong> and <strong>Playa Blanca</strong>.',
      intro_cta: 'View gallery',
      feat_pool_title: 'Private pool',
      feat_pool_body: 'Exclusively for guests and completely private.',
      feat_ac_title: 'Air conditioning',
      feat_ac_body: 'For your comfort, every room has air conditioning.',
      feat_beach_title: 'Beach access',
      feat_beach_body: 'Enjoy Playa Mantas and Playa Blanca with our beach gear service (canopy, table, chairs, hammock, grill).',
      feat_pet_title: 'Pet Friendly',
      feat_pet_body: 'Your pet is part of the family and is welcome too!',
      feat_capacity_title: 'Capacity',
      feat_capacity_body: 'We have two buildings: a house for 7 to 11 guests, and an apartment for up to 6 guests.',
      feat_checkin_title: 'Check-in, Check-out',
      feat_checkin_body: '<strong>Check-in: </strong> 3:00 pm <br/> <strong>Check-out: </strong> 12:00 pm',
      gallery_title: 'Facilities',
      gallery_casa: 'House',
      gallery_apto: 'Apartment',
      gcap_pool: '<i>Avocados\' <span>Pool</span></i>',
      gcap_entrance: '<i>Main <span>Entrance</span></i>',
      gcap_privatepool: '<i>Private <span>Pool</span></i>',
      gcap_poolterrace: '<i>Pool <span>Terrace</span></i>',
      gcap_petfriendly: '<i>Pet <span>Friendly</span></i>',
      gcap_nature: '<i>Enjoy <span>Nature</span></i>',
      gcap_mantas: '<i>Playa <span>Mantas</span></i>',
      gcap_blanca: '<i>Playa <span>Blanca</span></i>',
      gcap_kitchen: '<i>Kitchen</i>',
      gcap_livingroom: '<i><span>Living Room</span></i>',
      gcap_bedroom_ensuite: '<i>Room with <span>Private Bath</span></i>',
      gcap_bedroom_secondary: '<i>Secondary Bedroom</i>',
      gcap_groundfloor: '<i>Ground <span>Floor</span></i>',
      gcap_balcony: '<i>Balcony</i>',
      gcap_room: '<i>Bedroom</i>',
      gcap_mainbath: '<i>Main <span>Bathroom</span></i>',
      fac_title: 'Our Facilities',
      fac_li_pool: 'Private pool for exclusive use',
      fac_li_fiber: 'Fiber-optic internet',
      fac_li_cable: 'Cable television',
      fac_li_beach: '600 meters from the beach',
      fac_li_shops: '300 meters from a mini-market, a POPS and a pizzeria',
      fac_li_parking: 'Parking for 4 vehicles in front of the property',
      fac_li_security: 'Private gated community with roving night security',
      fac_li_jungle: 'Facing the jungle, with white-faced monkeys, macaws and iguanas as neighbors',
      fac_casa_title: 'Avocados House',
      fac_casa_li1: '7 guests minimum, up to 11 maximum',
      fac_casa_li2: '3 full bathrooms',
      fac_casa_li3: 'Air conditioning in every room',
      fac_casa_li4: 'Fully equipped kitchen',
      fac_casa_li5: 'Washer and dryer',
      fac_apto_title: 'Avocados Apartment',
      fac_apto_li1: '6 guests maximum',
      fac_apto_li2: '2 full bathrooms',
      fac_apto_li3: 'Air conditioning in every room',
      fac_apto_li4: 'Fully equipped kitchen',
      fac_rates_title: 'Rates per night',
      fac_rates_li1: '₡20,000 – Guests over 10 years old',
      fac_rates_li2: '₡10,000 – Children ages 6 to 10',
      fac_rates_li3: 'Free – Children ages 0 to 5',
      fac_gear_title: 'Beach Gear Rental',
      fac_gear_includes: 'Includes:',
      fac_gear_li1: 'Free setup at Playa Mantas',
      fac_gear_li2: 'Canopy',
      fac_gear_li3: 'Table and 7 chairs',
      fac_gear_li4: 'Hammock',
      fac_gear_li5: 'Grill',
      contact_title: 'Contact us',
      contact_body: 'Don\'t hesitate to reach out to book your next beach getaway.',
      contact_waze: 'Location on Waze',
      footer_copy: 'Copyright © 2025 Avocados\' Pool',
      doc_title: 'Avocados\' Pool — Vacation Rental in Punta Leona'
    }
  };

  // Keys whose translated string contains inline markup and must be
  // applied via innerHTML instead of textContent.
  var htmlKeys = ['intro_body', 'feat_checkin_body'];

  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = 'es';
    }
    var dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key];
      if (val == null) {
        return;
      }
      if (htmlKeys.indexOf(key) !== -1 || val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.documentElement.lang = lang;

    if (dict.doc_title) {
      document.title = dict.doc_title;
    }

    document.querySelectorAll('.tm-lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // localStorage may be unavailable (private mode, disabled storage, etc.) — ignore.
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tm-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
        var details = btn.closest('details');
        if (details) {
          details.removeAttribute('open');
        }
      });
    });

    var stored = null;
    try {
      stored = localStorage.getItem('lang');
    } catch (e) {
      // ignore
    }

    var initial = stored || (navigator.language && navigator.language.indexOf('en') === 0 ? 'en' : 'es');
    setLanguage(initial);
  });
})();
