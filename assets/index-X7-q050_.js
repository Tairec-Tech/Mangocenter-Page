(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`584226264623`,t=46.85,n=[{id:`ferreteria`,name:`Ferretería`,slug:`ferreteria`,subtitle:`Herramientas eléctricas, manuales y cerrajería`,badge:`Profesional`,tone:`blue`,image:`https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=700&q=80`,accentColor:`from-[#09569A]/95 via-[#09569A]/60 to-transparent`,pillColor:`bg-[#09569A] text-white`,iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`},{id:`construccion`,name:`Construcción`,slug:`construccion`,subtitle:`Pinturas, impermeabilizantes, plomería y obra`,badge:`Obra y Remodelación`,tone:`red`,image:`https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80`,accentColor:`from-[#E62E2D]/95 via-[#E62E2D]/55 to-transparent`,pillColor:`bg-[#E62E2D] text-white`,iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`},{id:`agro`,name:`Agro y Jardinería`,slug:`agro`,subtitle:`Desmalezadoras, riego, bombas de agua y campo`,badge:`Campo y Jardín`,tone:`teal`,image:`https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80`,accentColor:`from-[#2A786D]/95 via-[#3B9B8E]/60 to-transparent`,pillColor:`bg-[#3B9B8E] text-white`,iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`},{id:`hogar`,name:`Hogar y Baños`,slug:`hogar`,subtitle:`Grifería, organizadores, muebles, cocina y confort`,badge:`Para la Familia`,tone:`red`,image:`https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80`,accentColor:`from-[#C81E23]/95 via-[#E62E2D]/55 to-transparent`,pillColor:`bg-[#E62E2D] text-white`,iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`},{id:`tecnologia`,name:`Tecnología`,slug:`tecnologia`,subtitle:`Domótica, seguridad CCTV, audio, TV y respaldo UPS`,badge:`Innovación`,tone:`blue`,image:`https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80`,accentColor:`from-[#063B6B]/95 via-[#09569A]/60 to-transparent`,pillColor:`bg-[#09569A] text-white`,iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`},{id:`electricidad`,name:`Iluminación LED`,slug:`electricidad`,subtitle:`Reflectores LED, cableado, breakers y energía`,badge:`Eco Ahorro`,tone:`teal`,image:`https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80`,accentColor:`from-[#2A786D]/95 via-[#3B9B8E]/60 to-transparent`,pillColor:`bg-[#3B9B8E] text-white`,iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`}],r=[{id:`prod-1`,sku:`MC-FER-0104`,name:`Disco de Corte Fino para Metal y Acero Inox 4-1/2" x 1.0mm`,brand:`Total Tools Pro`,category:`ferreteria`,categoryLabel:`Ferretería`,tone:`blue`,price:1.15,oldPrice:1.65,isOffer:!0,offerLabel:`Oferta -30%`,rating:4.9,reviews:214,stockStatus:`Disponible en nuestras sedes`,unit:`Unidad`,image:`https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80`,specs:[`Medida: 115mm (4-1/2")`,`Corte ultra limpio sin rebaba`,`Máx. 13,300 RPM`]},{id:`prod-2`,sku:`MC-FER-2088`,name:`Taladro Percutor Industrial 1/2" 750W Velocidad Variable + Maletín`,brand:`Ingco Industrial`,category:`ferreteria`,categoryLabel:`Ferretería`,tone:`blue`,price:38,oldPrice:49.5,isOffer:!0,offerLabel:`Ahorra $11.50`,rating:4.8,reviews:148,stockStatus:`Retiro en tienda disponible`,unit:`Kit Completo`,image:`https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80`,specs:[`Potencia: 750W Cobre Puro`,`Mandril metálico 13mm (1/2")`,`Incluye 5 mechas + mango auxiliar`]},{id:`prod-3`,sku:`MC-CON-3310`,name:`Cuñete Pintura Caucho Mate Clase A Lavable Antihongos (4 Galones)`,brand:`MangoColor Premium`,category:`construccion`,categoryLabel:`Construcción`,tone:`red`,price:42.5,oldPrice:54,isOffer:!0,offerLabel:`Oferta Apertura`,rating:4.9,reviews:312,stockStatus:`Alta Disponibilidad`,unit:`Cuñete 4 Gal`,image:`https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80`,specs:[`Acabado mate de alta cobertura`,`Uso Interior / Exterior`,`Secado al tacto: 30 min`]},{id:`prod-4`,sku:`MC-ELE-0891`,name:`Bombillo LED Bulbo Alta Potencia 15W Luz Blanca Fría 6500K E27`,brand:`LuminaTech`,category:`electricidad`,categoryLabel:`Iluminación LED`,tone:`teal`,price:1.85,oldPrice:2.5,isOffer:!0,offerLabel:`Eco Precio`,rating:4.7,reviews:420,stockStatus:`Disponible en tienda`,unit:`Unidad`,image:`https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80`,specs:[`Multivoltaje 85V-265V`,`Ahorro energético del 85%`,`25,000 horas de vida útil`]},{id:`prod-5`,sku:`MC-AGR-4412`,name:`Bomba de Agua Periférica 1/2 HP Embobinado 100% Cobre 110V`,brand:`AquaForce Pro`,category:`agro`,categoryLabel:`Agro y Jardinería`,tone:`teal`,price:29.9,oldPrice:38,isOffer:!0,offerLabel:`Oferta -21%`,rating:4.8,reviews:97,stockStatus:`Disponible en las 9 sedes`,unit:`Unidad`,image:`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80`,specs:[`Altura máx: 35 metros`,`Caudal máx: 36 L/min`,`Impulsor de bronce anticorrosivo`]},{id:`prod-6`,sku:`MC-HOG-7720`,name:`Grifería Monomando Alta para Lavaplatos Acero Inoxidable 304`,brand:`Venzia Home`,category:`hogar`,categoryLabel:`Hogar y Baños`,tone:`red`,price:24.5,oldPrice:32,isOffer:!0,offerLabel:`Favorito Hogar`,rating:4.9,reviews:184,stockStatus:`En Stock`,unit:`Set Completo`,image:`https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80`,specs:[`Cuello flexible y rociador dual`,`Acabado cepillado antihuellas`,`Incluye mangueras de acero`]},{id:`prod-7`,sku:`MC-TEC-9015`,name:`Cámara de Seguridad Smart WiFi 360° Exterior Full HD 1080p Visión Nocturna`,brand:`SmartGuard`,category:`tecnologia`,categoryLabel:`Tecnología`,tone:`blue`,price:34.99,oldPrice:45,isOffer:!0,offerLabel:`Oferta Smart`,rating:4.8,reviews:129,stockStatus:`Disponible en tienda`,unit:`Unidad`,image:`https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80`,specs:[`Certificación IP66 contra lluvia`,`Audio bidireccional + Alarma`,`Control desde App iOS / Android`]},{id:`prod-8`,sku:`MC-FER-5102`,name:`Juego de Herramientas Mecánicas 108 Piezas Cromo Vanadio Dados y Ratchet`,brand:`Total Tools Pro`,category:`ferreteria`,categoryLabel:`Ferretería`,tone:`blue`,price:68,oldPrice:85,isOffer:!0,offerLabel:`Combo -$17.00`,rating:5,reviews:276,stockStatus:`En Stock`,unit:`Maletín 108 Pzs`,image:`https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80`,specs:[`Acero Cr-V alta resistencia`,`Ratchets de 1/2" y 1/4"`,`Estuche rígido organizador`]},{id:`prod-9`,sku:`MC-CON-6044`,name:`Manto Líquido Impermeabilizante Elastomérico Fibrado Galón (Blanco/Rojo)`,brand:`ImperMax`,category:`construccion`,categoryLabel:`Construcción`,tone:`red`,price:16.75,isOffer:!1,rating:4.7,reviews:88,stockStatus:`En Stock`,unit:`Galón 3.78L`,image:`https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80`,specs:[`Fibras sintéticas integradas`,`No requiere tela de refuerzo`,`Sellado de alta elasticidad`]},{id:`prod-10`,sku:`MC-AGR-8821`,name:`Desmalezadora a Gasolina 52cc 2 Tiempos + Cuchilla y Yoyo de Nylon`,brand:`AgroMaster`,category:`agro`,categoryLabel:`Agro y Jardinería`,tone:`teal`,price:118,oldPrice:142,isOffer:!0,offerLabel:`Especial Agro`,rating:4.9,reviews:64,stockStatus:`Retiro en Tienda`,unit:`Equipo Completo`,image:`https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5?auto=format&fit=crop&w=600&q=80`,specs:[`Motor 2.2 HP alto torque`,`Arnés ergonómico doble hombro`,`Kit de herramientas y mezclador`]},{id:`prod-11`,sku:`MC-ELE-7120`,name:`Reflector LED Exterior Slim 100W IP65 Protección Sobretensión`,brand:`LuminaTech`,category:`electricidad`,categoryLabel:`Iluminación LED`,tone:`teal`,price:14.25,oldPrice:18.5,isOffer:!0,offerLabel:`Oferta -23%`,rating:4.8,reviews:152,stockStatus:`En Stock`,unit:`Unidad`,image:`https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80`,specs:[`Chasis aluminio disipador`,`Resiste lluvia e intemperie IP65`,`9,000 Lúmenes reales`]},{id:`prod-12`,sku:`MC-HOG-9940`,name:`Estante Organizador Multiuso Metálico 5 Niveles Carga Pesada 180x90x40cm`,brand:`MangoHome`,category:`hogar`,categoryLabel:`Hogar y Baños`,tone:`red`,price:49.9,isOffer:!1,rating:4.9,reviews:112,stockStatus:`En Stock`,unit:`Unidad`,image:`https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80`,specs:[`Soporta hasta 175 kg por nivel`,`Armado fácil sin tornillos`,`Pintura electrostática anticorrosión`]}],i=[{id:`maracaibo`,city:`Maracaibo`,stateFilter:`Zulia`,name:`MangoCenter Maracaibo (9na y Nueva Sede)`,state:`Estado Zulia`,isNewFlagship:!0,tone:`red`,address:`Maracaibo, Estado Zulia (Nueva Sede en Expansión Occidente).`,reference:`Nuestra novena sede que lleva toda la experiencia MangoCenter a la familia zuliana.`,hoursWeek:`Lun a Sáb: 8:00 AM - 8:00 PM`,hoursSunday:`Domingos: 9:00 AM - 5:00 PM`,openHour:8,closeHour:20,phone:`0422-6264623`,whatsappNumber:`584226264623`,mapsQuery:`Maracaibo, Zulia, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Maracaibo+Zulia+Venezuela`,lat:10.6545,lng:-71.6406,image:`https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=900&q=80`,services:[`9na Sede`,`5 Departamentos`,`Atención Familiar`,`Estacionamiento`],highlightBadge:`¡NUEVA 9na SEDE!`},{id:`maracay`,city:`Maracay`,stateFilter:`Aragua`,name:`MangoCenter Maracay (Av. Las Delicias)`,state:`Estado Aragua`,tone:`blue`,address:`Av. Las Delicias, con Calle Vicente Lecuna, Maracay, Edo. Aragua.`,reference:`Pasando el Polideportivo Las Delicias, al lado de Farmatodo, Ciudad Jardín.`,hoursWeek:`Lun a Sáb: 8:00 AM - 8:00 PM`,hoursSunday:`Domingos: 9:00 AM - 5:00 PM`,openHour:8,closeHour:20,phone:`0422-6264623`,whatsappNumber:`584226264623`,mapsQuery:`Av. Las Delicias con Calle Vicente Lecuna, Maracay, Aragua, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+Las+Delicias+con+Calle+Vicente+Lecuna+Maracay+Aragua`,lat:10.2762,lng:-67.5786,image:`./Maracay apertura.jpg`,services:[`Hogar y Tecnología`,`Ferretería y Construcción`,`Estacionamiento`,`WhatsApp Directo`],highlightBadge:`SEDE ARAGUA`},{id:`barinas-cuatricentenaria`,city:`Barinas (Cuatricentenaria)`,stateFilter:`Barinas`,name:`MangoCenter Barinas (Av. Cuatricentenaria)`,state:`Estado Barinas`,tone:`teal`,address:`Av. Cuatricentenaria, Sector El Cambio, Barinas, Edo. Barinas.`,reference:`A 100 metros del Terminal de Pasajeros de Barinas.`,hoursWeek:`Lun a Sáb: 7:30 AM - 7:30 PM`,hoursSunday:`Domingos: 8:30 AM - 4:30 PM`,openHour:7,closeHour:19,phone:`0424-5956627`,whatsappNumber:`584245956627`,mapsQuery:`Av. Cuatricentenaria, Barinas, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+Cuatricentenaria+Sector+El+Cambio+Barinas`,lat:8.6186,lng:-70.2175,image:`https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80`,services:[`Sede Principal Barinas`,`Construcción y Agro`,`Ferretería`,`Estacionamiento`],highlightBadge:`SEDE CUATRICENTENARIA`},{id:`alto-barinas`,city:`Alto Barinas`,stateFilter:`Barinas`,name:`MangoCenter Alto Barinas`,state:`Estado Barinas`,tone:`blue`,address:`Av. Alberto Arvelo Torrealba, Sector Alto Barinas Norte, Barinas.`,reference:`Corredor comercial de Alto Barinas Norte.`,hoursWeek:`Lun a Sáb: 8:00 AM - 8:00 PM`,hoursSunday:`Domingos: 9:00 AM - 5:00 PM`,openHour:8,closeHour:20,phone:`0424-5956627`,whatsappNumber:`584245956627`,mapsQuery:`Alto Barinas Norte, Barinas, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+Alberto+Arvelo+Torrealba+Alto+Barinas+Norte`,lat:8.6042,lng:-70.2498,image:`https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80`,services:[`Hogar y Remodelación`,`Tecnología`,`Iluminación LED`,`Estacionamiento`],highlightBadge:`SEDE ALTO BARINAS`},{id:`barinas-centro`,city:`Barinas Centro`,stateFilter:`Barinas`,name:`MangoCenter Barinas Centro`,state:`Estado Barinas`,tone:`red`,address:`Av. Cruz Paredes, Sector Centro, Barinas, Edo. Barinas.`,reference:`Pleno casco central comercial de la ciudad de Barinas.`,hoursWeek:`Lun a Sáb: 8:00 AM - 7:00 PM`,hoursSunday:`Domingos: 8:30 AM - 3:30 PM`,openHour:8,closeHour:19,phone:`0424-5956627`,whatsappNumber:`584245956627`,mapsQuery:`Av. Cruz Paredes, Barinas, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+Cruz+Paredes+Centro+Barinas`,lat:8.6289,lng:-70.2031,image:`https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80`,services:[`Formato Express Centro`,`Ferretería y Eléctricos`,`Hogar`,`Compra Rápida`],highlightBadge:`SEDE BARINAS CENTRO`},{id:`guanare`,city:`Guanare`,stateFilter:`Portuguesa`,name:`MangoCenter Guanare`,state:`Estado Portuguesa`,tone:`teal`,address:`Carrera 5ta con Calle 11, Guanare, Edo. Portuguesa.`,reference:`Zona central y comercial de Guanare.`,hoursWeek:`Lun a Sáb: 8:00 AM - 7:30 PM`,hoursSunday:`Domingos: 9:00 AM - 4:00 PM`,openHour:8,closeHour:19,phone:`0422-6264623`,whatsappNumber:`584226264623`,mapsQuery:`Carrera 5 con Calle 11, Guanare, Portuguesa, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Carrera+5+con+Calle+11+Guanare+Portuguesa`,lat:9.0418,lng:-69.7421,image:`https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80`,services:[`Agro y Jardinería`,`Ferretería General`,`Hogar`,`Asesoría Técnica`],highlightBadge:`SEDE GUANARE`},{id:`araure`,city:`Araure`,stateFilter:`Portuguesa`,name:`MangoCenter Araure`,state:`Estado Portuguesa`,tone:`blue`,address:`Av. Trino Meleán con Calle 5, Zona Industrial, Araure, Edo. Portuguesa.`,reference:`Eje comercial e industrial Araure - Acarigua con amplio estacionamiento.`,hoursWeek:`Lun a Sáb: 8:00 AM - 7:30 PM`,hoursSunday:`Domingos: 9:00 AM - 4:30 PM`,openHour:8,closeHour:19,phone:`0422-6264623`,whatsappNumber:`584226264623`,mapsQuery:`Av. Trino Melean, Araure, Portuguesa, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+Trino+Melean+Araure+Portuguesa`,lat:9.5604,lng:-69.2145,image:`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80`,services:[`Construcción y Agro`,`Amplio Estacionamiento`,`Hogar y Tecnología`,`Retiro en Tienda`],highlightBadge:`SEDE ARAURE`},{id:`cabudare`,city:`Cabudare`,stateFilter:`Lara`,name:`MangoCenter Cabudare`,state:`Estado Lara`,tone:`teal`,address:`Av. El Placer, C.C. Hipermercado Multimall, Cabudare, Edo. Lara.`,reference:`Sector El Placer, Centro Comercial Multimall en Cabudare.`,hoursWeek:`Lun a Sáb: 8:00 AM - 8:00 PM`,hoursSunday:`Domingos: 9:00 AM - 5:00 PM`,openHour:8,closeHour:20,phone:`0422-6264623`,whatsappNumber:`584226264623`,mapsQuery:`Av. El Placer, Cabudare, Lara, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+El+Placer+Cabudare+Lara`,lat:10.0268,lng:-69.2571,image:`https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80`,services:[`Hogar y Baños`,`Jardinería`,`Pinturas y Ferretería`,`Estacionamiento`],highlightBadge:`SEDE CABUDARE`},{id:`barquisimeto`,city:`Barquisimeto`,stateFilter:`Lara`,name:`MangoCenter Barquisimeto`,state:`Estado Lara`,tone:`red`,address:`Av. Venezuela con Av. Morán, Barquisimeto, Edo. Lara.`,reference:`Intersección estratégica de la Av. Venezuela con Av. Morán.`,hoursWeek:`Lun a Sáb: 8:00 AM - 8:00 PM`,hoursSunday:`Domingos: 9:00 AM - 5:00 PM`,openHour:8,closeHour:20,phone:`0422-6264623`,whatsappNumber:`584226264623`,mapsQuery:`Av. Venezuela con Av. Moran, Barquisimeto, Lara, Venezuela`,mapsUrl:`https://www.google.com/maps/search/?api=1&query=Av+Venezuela+con+Av+Moran+Barquisimeto+Lara`,lat:10.0678,lng:-69.3082,image:`https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80`,services:[`Ferretería y Herramientas`,`Tecnología`,`Hogar`,`Estacionamiento`],highlightBadge:`SEDE BARQUISIMETO`}],a=[{id:`evt-1`,title:`Gran Apertura 9na Sede: ¡Llegamos a Maracaibo!`,category:`Inauguración`,tone:`red`,date:`Próximamente • Temporada de Apertura`,time:`9:00 AM - 7:00 PM`,branch:`Sede #9 Maracaibo (Zulia)`,instructorOrHost:`Equipo MangoCenter & Marcas Aliadas`,spotsAvailable:`Entrada Libre Familiar`,isFree:!0,description:`Celebra con nosotros la apertura de nuestra novena supertienda en la capital zuliana. Música en vivo, premios instantáneos y ofertas especiales para toda la familia.`,image:`./Banner Eventos 2.jpg`},{id:`evt-2`,title:`Taller Práctico: Impermeabilización y Soluciones para Techos`,category:`Taller Técnico`,tone:`blue`,date:`Sábados de Capacitación`,time:`10:00 AM - 12:30 PM`,branch:`Sedes Maracay, Barquisimeto y Araure`,instructorOrHost:`Especialistas Técnicos Aliados`,spotsAvailable:`Cupos con Certificado Digital`,isFree:!0,description:`Aprende a preparar superficies, sellar filtraciones y aplicar mantos líquidos fibrados como un profesional para proteger tu hogar.`,image:`https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80`},{id:`evt-3`,title:`Escuela de Pequeños Constructores: Bricolaje en Familia`,category:`Familiar`,tone:`teal`,date:`Domingos Familiares`,time:`2:00 PM - 5:00 PM`,branch:`Todas las Sedes MangoCenter`,instructorOrHost:`Team Recreativo MangoCenter`,spotsAvailable:`Actividad Gratuita para Niños`,isFree:!0,description:`¡Somos para toda la familia! Los niños aprenden a armar y pintar su primer proyecto en madera junto a sus padres de forma 100% segura.`,image:`https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=700&q=80`},{id:`evt-4`,title:`Academia MangoCenter: Seguridad Laboral y Manejo de Herramientas`,category:`Cursos E-Learning`,tone:`blue`,date:`Disponible en Línea y Presencial`,time:`Formación Continua`,branch:`Plataforma E-Learning & Sedes Barinas`,instructorOrHost:`Academia Corporativa MangoCenter`,spotsAvailable:`Inscripciones Abiertas`,isFree:!0,description:`Capacítate en seguridad laboral, manejo de herramientas eléctricas y gestión de proyectos para contratistas y emprendedores.`,image:`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80`}],o=[{caption:`Sede Maracay (Av. Las Delicias) y expansión nacional a 9 sedes`,image:`./Maracay apertura.jpg`,activeBtnClass:`bg-[#E62E2D] text-white`},{caption:`¡Ubícanos! Nuestras sedes en Barinas, Portuguesa, Lara, Aragua y Zulia`,image:`./Banner Tiendas actualizado.jpg`,activeBtnClass:`bg-[#09569A] text-white`},{caption:`Somos Tecnología, Hogar, Ferretería, Construcción y Agro y Jardinería`,image:`./Banner Categorias 2.jpg`,activeBtnClass:`bg-[#3B9B8E] text-white`},{caption:`Eventos, talleres gratuitos y actividades ¡Para toda la Familia!`,image:`./Banner Eventos 2.jpg`,activeBtnClass:`bg-[#E62E2D] text-white`},{caption:`Síguenos en nuestras redes sociales @mangocenter • WhatsApp 0422-6264623`,image:`./Banner REDES.jpg`,activeBtnClass:`bg-[#09569A] text-white`}],s=`both`,c=t,l={category:`all`,maxPrice:150,onlyOffers:!1,searchQuery:``,sortBy:`featured`},u=`all`,d=i[0].id,f=[{product:r[0],quantity:2},{product:r[1],quantity:1}];function p(e){return`$${e.toFixed(2)}`}function m(e){return`Bs. ${(e*c).toLocaleString(`es-VE`,{minimumFractionDigits:2,maximumFractionDigits:2})}`}async function h(){try{let e=await fetch(`https://ve.dolarapi.com/v1/dolares/oficial`);if(!e.ok)return;let t=await e.json();typeof t.promedio==`number`&&t.promedio>0&&(c=t.promedio,g(!0),T(),j(),I())}catch{g(!1)}}function g(e){let t=c.toLocaleString(`es-VE`,{minimumFractionDigits:2,maximumFractionDigits:2}),n=document.getElementById(`top-bcv-rate`),r=document.getElementById(`store-header-bcv-val`),i=document.getElementById(`bcv-status-tag`),a=document.getElementById(`cart-bcv-subtitle`);n&&(n.textContent=`Bs. ${t} / $1.00`),r&&(r.textContent=`Bs. ${t}`),i&&(i.textContent=e?`Tasa Oficial BCV (En Vivo)`:`Tasa BCV Referencial`),a&&(a.textContent=`Tasa BCV aplicada: Bs. ${t} / $1.00`)}function _(e){try{let t=new Date(new Date().toLocaleString(`en-US`,{timeZone:`America/Caracas`})).getHours(),n=t>=e.openHour&&t<e.closeHour;return{isOpen:n,label:n?`Abierto ahora`:`Cerrado • Abre ${e.openHour}:00 AM`}}catch{return{isOpen:!0,label:`Horario habitual activo`}}}function v(e){return e===`red`?{badgeBg:`bg-[#E62E2D] text-white`,borderTop:`border-t-4 border-t-[#E62E2D]`,textAccent:`text-[#E62E2D]`,softBg:`bg-red-50 text-[#E62E2D] border-red-200`,btnBg:`bg-[#E62E2D] hover:bg-[#c81e23] text-white`}:e===`teal`?{badgeBg:`bg-[#3B9B8E] text-white`,borderTop:`border-t-4 border-t-[#3B9B8E]`,textAccent:`text-[#2A786D]`,softBg:`bg-emerald-50 text-[#2A786D] border-emerald-200`,btnBg:`bg-[#3B9B8E] hover:bg-[#2A786D] text-white`}:{badgeBg:`bg-[#09569A] text-white`,borderTop:`border-t-4 border-t-[#09569A]`,textAccent:`text-[#09569A]`,softBg:`bg-blue-50 text-[#09569A] border-blue-200`,btnBg:`bg-[#09569A] hover:bg-[#063B6B] text-white`}}function y(e,t,n=`teal`){let r=document.getElementById(`toast-container`);if(!r)return;let i=v(n),a=document.createElement(`div`);a.className=`pointer-events-auto bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-200 ${i.borderTop} flex items-start gap-3 transition-all duration-300 translate-y-2 opacity-0`,a.innerHTML=`
    <div class="w-7 h-7 rounded-xl ${i.badgeBg} flex items-center justify-center shrink-0 font-black text-xs">
      ✓
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-xs font-extrabold text-slate-900 truncate">${e}</p>
      <p class="text-[11px] text-slate-600 mt-0.5 leading-snug">${t}</p>
    </div>
  `,r.appendChild(a),requestAnimationFrame(()=>{a.classList.remove(`translate-y-2`,`opacity-0`)}),setTimeout(()=>{a.classList.add(`translate-y-2`,`opacity-0`),setTimeout(()=>a.remove(),300)},3e3)}function b(e,t=!0){[`inicio`,`nosotros`,`contacto`,`tienda`].forEach(t=>{let n=document.getElementById(`view-${t}`);n&&(t===e?n.classList.remove(`hidden`):n.classList.add(`hidden`))});let n=`#/${e}`;window.location.hash!==n&&history.pushState(null,``,n),document.querySelectorAll(`header nav [data-nav-view]`).forEach(t=>{let n=t.dataset.navView;t.className=n===`tienda`?e===`tienda`?`nav-view-trigger ml-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-extrabold bg-[#E62E2D] text-white shadow-md transition-all cursor-pointer`:`nav-view-trigger ml-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-extrabold bg-[#09569A] hover:bg-[#063B6B] text-white shadow-md hover:-translate-y-0.5 transition-all cursor-pointer`:n===e?`nav-view-trigger px-4 py-2 rounded-full text-sm font-extrabold transition-all cursor-pointer bg-[#E62E2D] text-white shadow-xs`:`nav-view-trigger px-4 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-[#09569A] hover:bg-slate-100 transition-all cursor-pointer`}),t&&window.scrollTo({top:0,behavior:`smooth`})}function x(){let e=window.location.hash.replace(`#/`,``).replace(`#`,``);(e===`nosotros`||e===`contacto`||e===`tienda`||e===`inicio`)&&b(e,!1)}function S(){document.querySelectorAll(`.nav-view-trigger`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),b(e.dataset.navView??`inicio`),document.getElementById(`mobile-menu-drawer`)?.classList.add(`hidden`)})}),window.addEventListener(`hashchange`,x);let e=document.getElementById(`mobile-menu-btn`),t=document.getElementById(`mobile-menu-drawer`);e?.addEventListener(`click`,()=>{t?.classList.toggle(`hidden`)}),document.getElementById(`mobile-bottom-sedes-btn`)?.addEventListener(`click`,e=>{e.preventDefault(),b(`inicio`,!1),document.getElementById(`landing-mapa-sedes`)?.scrollIntoView({behavior:`smooth`})})}function C(){let e=document.getElementById(`landing-hero-img`),t=document.getElementById(`landing-hero-caption`),n=document.querySelectorAll(`.landing-banner-btn`);function r(r){let i=o[r];i&&e&&(e.src=i.image,t&&(t.textContent=i.caption),n.forEach((e,t)=>{e.className=t===r?`landing-banner-btn px-3.5 py-2 rounded-xl text-xs font-extrabold ${i.activeBtnClass} shadow-xs transition-all cursor-pointer whitespace-nowrap`:`landing-banner-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all cursor-pointer whitespace-nowrap`}))}n.forEach(e=>{e.addEventListener(`click`,()=>{r(Number(e.dataset.landingBanner??0))})})}function w(){let e=document.getElementById(`landing-categories-grid`);e&&(e.innerHTML=n.map(e=>{let t=v(e.tone);return`
      <button
        type="button"
        data-landing-cat="${e.id}"
        class="group relative h-56 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 text-left flex flex-col justify-between p-4 cursor-pointer focus:outline-none ${t.borderTop}"
      >
        <img
          src="${e.image}"
          alt="${e.name}"
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t ${e.accentColor} via-slate-950/35 to-slate-950/10"></div>

        <div class="relative z-10 flex items-center justify-between w-full">
          <div class="w-10 h-10 rounded-2xl bg-white/95 text-slate-900 flex items-center justify-center shadow-sm">
            ${e.iconSvg}
          </div>
          <span class="${e.pillColor} text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow-xs">
            ${e.badge??`Ver`}
          </span>
        </div>

        <div class="relative z-10 text-white">
          <h3 class="text-base sm:text-lg font-black leading-tight">${e.name}</h3>
          <p class="text-[11px] text-white/90 line-clamp-2 mt-1 leading-snug">${e.subtitle}</p>
        </div>
      </button>
    `}).join(``),e.querySelectorAll(`[data-landing-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{l.category=e.dataset.landingCat??`all`,A(),j(),b(`tienda`)})}))}function T(){let e=document.getElementById(`landing-featured-products`);e&&(e.innerHTML=r.slice(0,4).map(e=>{let t=v(e.tone),n=p(e.price),r=e.oldPrice?p(e.oldPrice):null,i=m(e.price);return`
        <article class="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 ${t.borderTop} p-4 flex flex-col justify-between hover:shadow-lg transition-all group">
          <div>
            <div class="relative h-40 rounded-2xl overflow-hidden bg-white mb-3">
              <img
                src="${e.image}"
                alt="${e.name}"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-2.5 left-2.5 ${t.badgeBg} text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                ${e.offerLabel??e.categoryLabel}
              </span>
            </div>
            <p class="text-[10px] font-extrabold uppercase tracking-wider ${t.textAccent}">${e.brand}</p>
            <h3 class="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2 mt-0.5">${e.name}</h3>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-200/80 flex items-end justify-between gap-2">
            <div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-xl font-black text-slate-900">${n}</span>
                ${r?`<span class="text-[11px] text-slate-400 line-through">${r}</span>`:``}
              </div>
              <p class="text-[11px] font-bold text-[#2A786D]">≈ ${i}</p>
            </div>

            <button
              type="button"
              data-landing-add="${e.id}"
              class="${t.btnBg} text-xs font-extrabold px-3 py-2 rounded-xl cursor-pointer transition-all"
            >
              + Carrito
            </button>
          </div>
        </article>
      `}).join(``),e.querySelectorAll(`[data-landing-add]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=r.find(t=>t.id===e.dataset.landingAdd);t&&P(t)})}))}async function E(){}function D(e){d=e;let t=i.find(t=>t.id===e)??i[0],n=document.getElementById(`store-map-iframe`);n&&(n.src=`https://maps.google.com/maps?q=${encodeURIComponent(t.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`),O()}function O(){let e=document.getElementById(`store-tabs-container`),t=document.getElementById(`stores-locator-list`),n=document.getElementById(`selected-store-detail`);if(!e||!t||!n)return;e.innerHTML=[{id:`all`,label:`Todas (9)`,tone:`red`},{id:`Zulia`,label:`★ Zulia (9na Sede)`,tone:`red`},{id:`Aragua`,label:`Aragua`,tone:`blue`},{id:`Barinas`,label:`Barinas (3)`,tone:`teal`},{id:`Portuguesa`,label:`Portuguesa (2)`,tone:`blue`},{id:`Lara`,label:`Lara (2)`,tone:`red`}].map(e=>{let t=u===e.id,n=e.tone===`red`?`bg-[#E62E2D] text-white`:e.tone===`teal`?`bg-[#3B9B8E] text-white`:`bg-[#09569A] text-white`;return`
        <button
          type="button"
          data-state-tab="${e.id}"
          class="px-3.5 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${t?`${n} shadow-xs`:`bg-white text-slate-700 hover:bg-slate-100 border border-slate-200`}"
        >
          ${e.label}
        </button>
      `}).join(``);let r=u===`all`?i:i.filter(e=>e.stateFilter===u);!r.some(e=>e.id===d)&&r.length>0&&(d=r[0].id);let a=i.find(e=>e.id===d)??i[0];t.innerHTML=r.map(e=>{let t=e.id===a.id,n=v(e.tone),r=_(e);return`
        <button
          type="button"
          data-select-store="${e.id}"
          class="w-full text-left bg-white rounded-2xl p-4 border transition-all cursor-pointer flex items-start justify-between gap-3 ${t?`border-2 border-[#09569A] shadow-md ring-2 ring-[#09569A]/15`:`border-slate-200/90 hover:border-slate-300 shadow-2xs`}"
        >
          <div class="space-y-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="${n.badgeBg} text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                ${e.highlightBadge}
              </span>
              <span class="text-[11px] font-bold ${r.isOpen?`text-[#15803D]`:`text-amber-600`}">
                ● ${r.label}
              </span>
            </div>
            <h3 class="font-black text-slate-900 text-sm sm:text-base truncate">${e.name}</h3>
            <p class="text-xs text-slate-600 line-clamp-2">📍 ${e.address}</p>
            <p class="text-[11px] text-slate-400">${e.hoursWeek}</p>
          </div>

          <span class="shrink-0 w-8 h-8 rounded-xl ${t?`bg-[#09569A] text-white`:`bg-slate-100 text-slate-600`} flex items-center justify-center text-xs font-bold">
            →
          </span>
        </button>
      `}).join(``);let o=_(a),s=v(a.tone),c=`https://wa.me/${a.whatsappNumber}?text=${encodeURIComponent(`Hola MangoCenter! Consulto por la sede *${a.name}* (${a.address}).`)}`;n.innerHTML=`
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="${s.badgeBg} text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
            ${a.state}
          </span>
          <span class="text-xs font-extrabold ${o.isOpen?`text-[#15803D]`:`text-amber-600`}">
            ● ${o.label}
          </span>
        </div>
        <h3 class="text-lg sm:text-xl font-black text-slate-900">${a.name}</h3>
        <p class="text-xs text-slate-600">📍 <strong>Dirección:</strong> ${a.address}</p>
        <p class="text-xs text-slate-500">${a.reference} • ⏰ ${a.hoursWeek}</p>
      </div>

      <div class="flex sm:flex-col gap-2 shrink-0">
        <a
          href="${c}"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all"
        >
          WhatsApp Sede
        </a>
        <a
          href="${a.mapsUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#09569A] hover:bg-[#063B6B] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all"
        >
          Abrir en Google Maps ↗
        </a>
      </div>
    </div>
  `,e.querySelectorAll(`[data-state-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{u=e.dataset.stateTab??`all`,D((u===`all`?i[0]:i.find(e=>e.stateFilter===u)??i[0]).id)})}),t.querySelectorAll(`[data-select-store]`).forEach(e=>{e.addEventListener(`click`,()=>{D(e.dataset.selectStore??i[0].id)})})}function k(){let t=document.getElementById(`events-showcase-layout`);if(!t)return;let n=a[0],r=a.slice(1),i=`https://wa.me/${e}?text=${encodeURIComponent(`Hola MangoCenter! Quiero información sobre: *${n.title}*.`)}`;t.innerHTML=`
    <!-- Featured Main Event -->
    <div class="lg:col-span-6 bg-[#F8FAFC] rounded-3xl border border-slate-200/90 border-t-4 border-t-[#E62E2D] overflow-hidden flex flex-col justify-between shadow-xs">
      <div>
        <div class="bg-[#042442] p-2">
          <img
            src="${n.image}"
            alt="${n.title}"
            loading="lazy"
            class="w-full h-auto max-h-64 object-contain mx-auto rounded-xl"
          />
        </div>
        <div class="p-6 space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="bg-[#E62E2D] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
              ${n.category}
            </span>
            <span class="text-xs font-bold text-[#09569A]">${n.date}</span>
          </div>
          <h3 class="text-xl font-black text-slate-900">${n.title}</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${n.description}</p>
          <p class="text-xs text-slate-500 pt-1">📍 <strong>Sede:</strong> ${n.branch} • 🎟️ ${n.spotsAvailable}</p>
        </div>
      </div>
      <div class="px-6 pb-6">
        <a
          href="${i}"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-[#E62E2D] hover:bg-[#c81e23] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl inline-flex items-center justify-center transition-colors"
        >
          Consultar Detalles vía WhatsApp
        </a>
      </div>
    </div>

    <!-- 3 Compact Workshops & Courses List -->
    <div class="lg:col-span-6 flex flex-col justify-between gap-4">
      ${r.map(t=>{let n=v(t.tone),r=`https://wa.me/${e}?text=${encodeURIComponent(`Hola MangoCenter! Quiero inscribirme gratis en: *${t.title}*.`)}`;return`
            <article class="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 ${n.borderTop} p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-all">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="${n.badgeBg} text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    ${t.category}
                  </span>
                  <span class="text-[11px] font-bold text-slate-500">📍 ${t.branch}</span>
                </div>
                <h4 class="font-extrabold text-slate-900 text-sm sm:text-base">${t.title}</h4>
                <p class="text-xs text-slate-600 line-clamp-2">${t.description}</p>
              </div>
              <a
                href="${r}"
                target="_blank"
                rel="noopener noreferrer"
                class="${n.btnBg} text-xs font-extrabold px-4 py-2.5 rounded-xl shrink-0 transition-all"
              >
                Inscribirme
              </a>
            </article>
          `}).join(``)}
    </div>
  `}function A(){let e=document.getElementById(`sidebar-category-filters`);e&&(e.innerHTML=[{id:`all`,name:`Todos los Departamentos`,tone:`red`},...n.map(e=>({id:e.id,name:e.name,tone:e.tone}))].map(e=>{let t=l.category===e.id,n=e.tone===`red`?`bg-[#E62E2D] text-white`:e.tone===`teal`?`bg-[#3B9B8E] text-white`:`bg-[#09569A] text-white`,r=e.tone===`red`?`bg-[#E62E2D]`:e.tone===`teal`?`bg-[#3B9B8E]`:`bg-[#09569A]`;return`
        <button
          type="button"
          data-sidebar-cat="${e.id}"
          class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${t?`${n} shadow-xs`:`bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 border border-slate-200/60`}"
        >
          <span class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full ${t?`bg-white`:r}"></span>
            <span>${e.name}</span>
          </span>
          <span>→</span>
        </button>
      `}).join(``),e.querySelectorAll(`[data-sidebar-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{l.category=e.dataset.sidebarCat??`all`,A(),j()})}))}function j(){let t=document.getElementById(`products-grid`),i=document.getElementById(`active-category-pill`);if(!t)return;let a=r.filter(e=>{if(l.category!==`all`&&e.category!==l.category||e.price>l.maxPrice||l.onlyOffers&&!e.isOffer)return!1;if(l.searchQuery.trim()!==``){let t=l.searchQuery.toLowerCase(),n=e.name.toLowerCase().includes(t),r=e.brand.toLowerCase().includes(t),i=e.sku.toLowerCase().includes(t),a=e.categoryLabel.toLowerCase().includes(t);if(!n&&!r&&!i&&!a)return!1}return!0});a=[...a].sort((e,t)=>l.sortBy===`price-asc`?e.price-t.price:l.sortBy===`price-desc`?t.price-e.price:l.sortBy===`offers`?Number(t.isOffer)-Number(e.isOffer):0),i&&(l.category===`all`?i.classList.add(`hidden`):(i.textContent=n.find(e=>e.id===l.category)?.name??l.category,i.classList.remove(`hidden`))),a.length===0?(t.innerHTML=`
      <div class="col-span-full bg-white border border-slate-200 rounded-3xl p-10 text-center space-y-3">
        <p class="text-base font-black text-slate-800">No encontramos productos con esos filtros</p>
        <p class="text-xs text-slate-500">Restablece los filtros para ver el catálogo de MangoCenter.</p>
        <button id="empty-reset-btn" type="button" class="bg-[#E62E2D] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl cursor-pointer">
          Restablecer Filtros
        </button>
      </div>
    `,document.getElementById(`empty-reset-btn`)?.addEventListener(`click`,M)):(t.innerHTML=a.map(t=>{let n=v(t.tone),r=p(t.price),i=t.oldPrice?p(t.oldPrice):null,a=m(t.price),o=`https://wa.me/${e}?text=${encodeURIComponent(`Hola MangoCenter! Me interesa el producto: *${t.name}* (SKU: ${t.sku}) — Precio: *${r}* (${a} a tasa BCV).`)}`;return`
        <article class="bg-white rounded-3xl border border-slate-200/90 ${n.borderTop} shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
          <div>
            <div class="relative h-48 bg-slate-100 overflow-hidden">
              <img
                src="${t.image}"
                alt="${t.name}"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute top-3 left-3 flex flex-col gap-1">
                ${t.isOffer?`<span class="bg-[#E62E2D] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-xs">
                        ${t.offerLabel??`Oferta`}
                      </span>`:``}
                <span class="${n.badgeBg} text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs w-fit">
                  ${t.categoryLabel}
                </span>
              </div>

              <span class="absolute top-3 right-3 bg-white/95 text-slate-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">
                ${t.sku}
              </span>
            </div>

            <div class="p-5">
              <div class="flex items-center justify-between text-[11px] mb-1.5">
                <span class="font-extrabold uppercase tracking-wider ${n.textAccent}">${t.brand}</span>
                <span class="text-amber-500 font-bold">★ ${t.rating.toFixed(1)}</span>
              </div>

              <h3 class="font-extrabold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 min-h-[2.6rem]">
                ${t.name}
              </h3>

              <ul class="mt-3 space-y-1 text-[11px] text-slate-500">
                ${t.specs.map(e=>`
                  <li class="flex items-center gap-1.5 truncate">
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                    <span>${e}</span>
                  </li>
                `).join(``)}
              </ul>

              <div class="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border ${n.softBg}">
                <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                ${t.stockStatus}
              </div>
            </div>
          </div>

          <div class="p-5 pt-3.5 border-t border-slate-100 bg-[#F8FAFC]/70">
            <div class="flex items-end justify-between mb-3.5">
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400 block">Precio (${t.unit})</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl font-black text-slate-900">${r}</span>
                  ${i?`<span class="text-xs font-bold text-slate-400 line-through">${i}</span>`:``}
                </div>
                ${s===`both`?`<p class="text-[11px] font-extrabold text-[#2A786D] mt-0.5">
                        ≈ ${a} <span class="font-normal text-slate-400">(BCV)</span>
                      </p>`:``}
              </div>

              ${t.oldPrice?`<span class="text-[10px] font-extrabold text-[#E62E2D] bg-red-50 px-2 py-1 rounded-lg border border-red-100">
                      -${p(t.oldPrice-t.price)}
                    </span>`:``}
            </div>

            <div class="grid grid-cols-1 gap-2">
              <button
                type="button"
                data-add-to-cart="${t.id}"
                class="w-full ${n.btnBg} font-extrabold text-xs py-2.5 px-3 rounded-xl inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
              >
                <span>+ Añadir al Carrito (${r})</span>
              </button>

              <a
                href="${o}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full bg-white hover:bg-[#25D366] text-slate-700 hover:text-slate-950 font-bold text-xs py-2 px-3 rounded-xl inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#25D366] transition-all"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </article>
      `}).join(``),t.querySelectorAll(`[data-add-to-cart]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=r.find(t=>t.id===e.dataset.addToCart);t&&P(t)})}))}function M(){l.category=`all`,l.maxPrice=150,l.onlyOffers=!1,l.searchQuery=``,l.sortBy=`featured`;let e=document.getElementById(`price-range-slider`),t=document.getElementById(`price-range-label`),n=document.getElementById(`filter-only-offers`),r=document.getElementById(`catalog-search-input`),i=document.getElementById(`catalog-sort-select`);e&&(e.value=`150`),t&&(t.textContent=`Hasta $150.00`),n&&(n.checked=!1),r&&(r.value=``),i&&(i.value=`featured`),A(),j()}function N(){let e=document.getElementById(`price-range-slider`),t=document.getElementById(`price-range-label`),n=document.getElementById(`filter-only-offers`),r=document.getElementById(`catalog-search-input`),i=document.getElementById(`catalog-sort-select`),a=document.getElementById(`reset-filters-btn`);e?.addEventListener(`input`,()=>{let n=Number(e.value);l.maxPrice=n,t&&(t.textContent=`Hasta ${p(n)}`),j()}),document.querySelectorAll(`.price-tier-btn`).forEach(n=>{n.addEventListener(`click`,()=>{let r=Number(n.dataset.priceMax??150);l.maxPrice=r,e&&(e.value=String(r)),t&&(t.textContent=`Hasta ${p(r)}`),j()})}),n?.addEventListener(`change`,()=>{l.onlyOffers=n.checked,j()}),r?.addEventListener(`input`,()=>{l.searchQuery=r.value,j()}),i?.addEventListener(`change`,()=>{l.sortBy=i.value,j()}),a?.addEventListener(`click`,()=>{M(),y(`Filtros Limpiados`,`Mostrando todos los productos del catálogo.`,`blue`)});let o=document.querySelectorAll(`.currency-mode-btn`);o.forEach(e=>{e.addEventListener(`click`,()=>{s=e.dataset.currencyMode??`both`,o.forEach(e=>{e.className=e.dataset.currencyMode===s?`currency-mode-btn px-2.5 py-1.5 rounded-lg text-[11px] font-extrabold bg-[#09569A] text-white cursor-pointer transition-all`:`currency-mode-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer transition-all`}),j()})})}function P(e){let t=f.find(t=>t.product.id===e.id);t?t.quantity+=1:f.push({product:e,quantity:1}),I(),y(`Añadido al Carrito`,`${e.name} — ${p(e.price)} (${m(e.price)})`,e.tone)}function F(e,t){let n=f.findIndex(t=>t.product.id===e);n!==-1&&(f[n].quantity+=t,f[n].quantity<=0&&f.splice(n,1),I())}function I(){let e=document.getElementById(`cart-count-badge`),t=document.getElementById(`cart-items-container`),n=document.getElementById(`cart-total-amount`),r=document.getElementById(`cart-total-bs`),i=document.getElementById(`cart-savings-amount`),a=f.reduce((e,t)=>e+t.quantity,0),o=f.reduce((e,t)=>e+t.product.price*t.quantity,0),s=f.reduce((e,t)=>e+(t.product.oldPrice?t.product.oldPrice-t.product.price:0)*t.quantity,0);e&&(e.textContent=String(a)),n&&(n.textContent=p(o)),r&&(r.textContent=m(o)),i&&(i.textContent=`-${p(s)}`),t&&(f.length===0?t.innerHTML=`
      <div class="text-center py-12 space-y-2">
        <p class="text-sm font-black text-slate-800">Tu carrito está vacío</p>
        <p class="text-xs text-slate-500">Explora la Tienda para añadir productos con precios a 2 decimales y tasa BCV.</p>
      </div>
    `:(t.innerHTML=f.map(({product:e,quantity:t})=>{let n=p(e.price*t),r=m(e.price*t);return`
        <div class="flex items-center gap-3 bg-[#F8FAFC] p-3 rounded-2xl border border-slate-200/80">
          <img src="${e.image}" alt="${e.name}" class="w-14 h-14 rounded-xl object-cover shrink-0 bg-white border border-slate-200" />
          <div class="flex-1 min-w-0">
            <p class="text-[10px] font-mono text-slate-400">${e.sku}</p>
            <h4 class="text-xs font-extrabold text-slate-900 truncate">${e.name}</h4>
            <p class="text-xs font-bold text-[#09569A] mt-0.5">
              ${p(e.price)} x ${t} = <strong class="text-slate-900">${n}</strong>
            </p>
            <p class="text-[10px] font-bold text-[#2A786D]">${r}</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <button type="button" data-cart-qty="${e.id}" data-delta="1" class="w-6 h-6 rounded-lg bg-white border border-slate-300 hover:bg-[#09569A] hover:text-white text-xs font-black cursor-pointer">+</button>
            <span class="text-xs font-extrabold">${t}</span>
            <button type="button" data-cart-qty="${e.id}" data-delta="-1" class="w-6 h-6 rounded-lg bg-white border border-slate-300 hover:bg-[#E62E2D] hover:text-white text-xs font-black cursor-pointer">-</button>
          </div>
        </div>
      `}).join(``),t.querySelectorAll(`[data-cart-qty]`).forEach(e=>{e.addEventListener(`click`,()=>{F(e.dataset.cartQty??``,Number(e.dataset.delta??0))})})))}function L(){let t=document.getElementById(`cart-open-btn`),n=document.getElementById(`cart-close-btn`),r=document.getElementById(`cart-drawer-backdrop`),i=document.getElementById(`cart-clear-btn`),a=document.getElementById(`cart-whatsapp-checkout-btn`);t?.addEventListener(`click`,()=>r?.classList.remove(`hidden`)),n?.addEventListener(`click`,()=>r?.classList.add(`hidden`)),r?.addEventListener(`click`,e=>{e.target===r&&r.classList.add(`hidden`)}),i?.addEventListener(`click`,()=>{f=[],I(),y(`Carrito vaciado`,`Se eliminaron los productos.`,`red`)}),a?.addEventListener(`click`,()=>{if(f.length===0){y(`Carrito vacío`,`Añade productos desde la Tienda antes de enviar.`,`red`);return}let t=f.reduce((e,t)=>e+t.product.price*t.quantity,0),n=[`¡Hola *MangoCenter Hiperferretería*! 🛒`,`Deseo solicitar el siguiente pedido desde la Tienda Online:`,``,...f.map(e=>`• ${e.quantity}x ${e.product.name} (${e.product.sku}) — ${p(e.product.price*e.quantity)} (${m(e.product.price*e.quantity)})`),``,`*TOTAL USD: ${p(t)}*`,`*EQUIVALENTE BCV (Bs. ${c.toFixed(2)}): ${m(t)}*`].join(`
`);window.open(`https://wa.me/${e}?text=${encodeURIComponent(n)}`,`_blank`,`noopener,noreferrer`)});let o=document.getElementById(`contact-page-form`);o?.addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`contact-name`)?.value??``,r=document.getElementById(`contact-branch`)?.value??``,i=document.getElementById(`contact-message`)?.value??``;y(`¡Gracias, ${n}!`,`Redirigiendo tu solicitud para ${r} vía WhatsApp oficial.`,`teal`);let a=`Hola MangoCenter! Soy *${n}*, escribo para la sede *${r}*: ${i}`;setTimeout(()=>{window.open(`https://wa.me/${e}?text=${encodeURIComponent(a)}`,`_blank`,`noopener,noreferrer`)},700),o.reset()});let s=document.getElementById(`newsletter-form`),l=document.getElementById(`newsletter-email`);s?.addEventListener(`submit`,e=>{e.preventDefault(),l?.value&&(y(`¡Suscripción Exitosa!`,`Recibirás nuestras ofertas en ${l.value}`,`blue`),l.value=``)})}document.addEventListener(`DOMContentLoaded`,()=>{S(),x(),C(),w(),T(),O(),k(),A(),j(),N(),I(),L(),h(),E()});