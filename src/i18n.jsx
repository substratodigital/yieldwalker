import { createContext, useContext, useEffect, useState } from 'react'

export const WA_NUMBER = '5511982023271' // TODO: substituir pelo número real antes de publicar

const waTexts = {
  pt: {
    generic: 'Olá, vim pelo site da Yieldwalker.',
    locacao: 'Olá, quero saber mais sobre a locação do A2-Pro.',
    locacao2: 'Olá, quero consultar disponibilidade e condições de locação do A2-Pro.',
    assistencia: 'Olá, preciso de assistência técnica para um A2-Pro.',
    pilotos: 'Olá, temos interesse em estruturar um piloto de corte de vegetação autônomo.',
  },
  en: {
    generic: 'Hi, I came from the Yieldwalker website.',
    locacao: "Hi, I'd like to know more about renting the A2-Pro.",
    locacao2: "Hi, I'd like to check availability and rental terms for the A2-Pro.",
    assistencia: 'Hi, I need technical service for an A2-Pro.',
    pilotos: "Hi, we're interested in setting up an autonomous grass-cutting pilot.",
  },
  es: {
    generic: 'Hola, vengo del sitio web de Yieldwalker.',
    locacao: 'Hola, quiero saber más sobre el alquiler del A2-Pro.',
    locacao2: 'Hola, quiero consultar disponibilidad y condiciones de alquiler del A2-Pro.',
    assistencia: 'Hola, necesito asistencia técnica para un A2-Pro.',
    pilotos: 'Hola, tenemos interés en estructurar un piloto de corte de vegetación autónomo.',
  },
}

export function waLink(lang, key) {
  const text = (waTexts[lang] && waTexts[lang][key]) || waTexts.pt[key] || waTexts.pt.generic
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

export const translations = {
  pt: {
    htmlLang: 'pt-BR',
    title: 'Yieldwalker — Robótica de Campo',
    nav: { locacao: 'Locação', assistencia: 'Assistência', pilotos: 'Pilotos', sobre: 'Sobre', menu: 'Menu', close: 'Fechar' },
    hero: {
      eyebrow: 'Robótica de campo — Brasil',
      h1a: 'Quatro pernas para o terreno que',
      h1b: 'nenhuma máquina vence.',
      lede: 'A Yieldwalker aluga e dá assistência técnica para o robô quadrúpede Unitree A2-Pro e desenvolve pilotos pagos de corte de grama autônomo em terrenos complexos, onde o corte convencional não chega.',
      cta1: 'Falar sobre locação',
      cta2: 'Ver pilotos pagos',
      stats: [
        { num: '37 kg', lbl: 'Peso com baterias' },
        { num: '45°', lbl: 'Inclinação superada' },
        { num: 'IP56', lbl: 'Proteção em campo' },
      ],
      scroll: 'Role para descer',
      unit: 'Unidade — A2 Pro',
      config: 'Configuração padrão',
    },
    pillars: {
      eyebrow: 'O que fazemos',
      h2: 'Três formas de colocar um quadrúpede para trabalhar.',
      items: [
        { idx: '01 / Locação', chip: 'Sob consulta', h3: 'Locação do A2-Pro', p: 'Robô quadrúpede Unitree, na configuração padrão de fábrica, disponível por hora, diária, semana, mês ou ano.', link: 'Ver especificações', href: '#locacao' },
        { idx: '02 / Manutenção', chip: 'Orçamento', h3: 'Assistência técnica', p: 'Diagnóstico, reparo, calibração e suporte especializado para robôs quadrúpedes A2-Pro em operação.', link: 'Solicitar orçamento', href: '#assistencia' },
        { idx: '03 / Pilotos', chip: 'Projeto pago', h3: 'Pilotos de corte autônomo', p: 'Corte de grama autônomo em terrenos complexos. Da simulação à autonomia total, em quatro frentes validadas.', link: 'Conhecer a metodologia', href: '#pilotos' },
      ],
    },
    locacao: {
      eyebrow: '01 — Locação',
      h2: 'Unitree A2-Pro, na configuração original.',
      lede: 'Locamos a plataforma quadrúpede A2-Pro na sua configuração padrão de fábrica. Planos flexíveis, do turno ao ano — converse com a gente para entender o melhor formato para sua operação.',
      feats: [
        { b: 'Mobilidade em qualquer terreno', rest: ': transpõe inclinações de até 45° e degraus de até 30 cm, onde rodas e esteiras não passam.' },
        { b: 'Percepção de fábrica', rest: ': LiDAR duplo (frontal e traseiro) com cobertura 360° e câmera HD, padrão da plataforma Unitree.' },
        { b: 'Autonomia de campo', rest: ': até 5 h e 20 km sem carga; até 3 h e 12,5 km com 25 kg de payload.' },
        { b: 'Robustez certificada', rest: ': grau de proteção IP56, estrutura em alumínio e plástico de engenharia, de -20°C a 55°C.' },
      ],
      cta: 'Consultar disponibilidade',
      ssTitle: 'Datasheet',
      specs: [
        { k: 'Peso (com baterias)', v: '≈ 37 kg (≈ 31 kg sem bateria)' },
        { k: 'Carga útil em caminhada', v: '25 kg (até 100 kg parado)' },
        { k: 'Autonomia', v: '5h · 20km sem carga / 3h · 12,5km com 25kg' },
        { k: 'Grau de proteção', v: 'IP56' },
        { k: 'Sensoriamento', v: 'LiDAR duplo 360° + câmera HD' },
        { k: 'Inclinação superada', v: 'até 45°' },
        { k: 'Degrau superado', v: 'até 30 cm' },
        { k: 'Velocidade máxima', v: '5 m/s' },
        { k: 'Compatibilidade', v: 'ROS2, NVIDIA Isaac' },
        { k: 'Conectividade', v: 'Wi-Fi 6, Bluetooth 5.2, Ethernet, USB-C' },
      ],
    },
    assist: {
      eyebrow: '02 — Assistência técnica',
      h2: 'Seu A2-Pro de volta ao campo, rápido.',
      lede: 'Fazemos manutenção, reparo e calibração especializada para robôs quadrúpedes A2-Pro, seja um equipamento alugado com a gente ou de propriedade do seu time.',
      items: [
        'Diagnóstico técnico completo de hardware e software',
        'Reparo, substituição de peças e calibração de sensores',
        'Recalibração de módulos de percepção e navegação',
        'Suporte remoto e visita técnica em campo',
      ],
      ctaTitle: 'Orçamento sob consulta',
      ctaP: 'Cada reparo depende do diagnóstico. Manda o problema pra gente no WhatsApp e respondemos com os próximos passos.',
      cta: 'Solicitar orçamento',
    },
    pilotos: {
      eyebrow: '03 — Pilotos pagos',
      h2a: 'Uma linha da simulação',
      h2b: 'à autonomia total.',
      lede: 'Para empresas e instituições que lidam com corte de grama em terrenos complexos, estruturamos pilotos pagos que avançam de forma progressiva, da simulação à autonomia total.',
      stages: [
        { num: 'Fase 01', h4: 'Simulação', p: 'Digital twin do ambiente real, parametrizado com dados de campo, para validar percepção, navegação e evasão de obstáculos antes de qualquer operação física.', mode: 'Ambiente virtual' },
        { num: 'Fase 02', h4: 'Teleoperação total', p: 'Operador remoto controla a locomoção e o braço de corte. Primeira validação em campo real, com dados basais de produtividade e segurança.', mode: 'Controle humano' },
        { num: 'Fase 03', h4: 'Modo híbrido', p: 'O operador controla a locomoção enquanto o braço robótico corta de forma autônoma — ganho de produtividade com supervisão direta.', mode: 'Semi-autônomo' },
        { num: 'Fase 04', h4: 'Autonomia total', p: 'Plataforma e braço operam de forma independente dentro de um perímetro definido por GPS. O trabalhador supervisiona à distância.', mode: 'Totalmente autônomo' },
      ],
      cta: 'Conversar sobre um piloto',
    },
    why: {
      eyebrow: 'Por que isso importa',
      h2: 'Resolvemos três problemas ao mesmo tempo.',
      reasons: [
        { h4: 'Falta de mão de obra', p: 'Empresas têm cada vez mais dificuldade de contratar e manter trabalhadores dispostos a operar roçadeira em campo, sob sol e em terrenos difíceis.' },
        { h4: 'Trabalho insalubre', p: 'A operação manual de roçadeira é classificada pela NR-15 como atividade insalubre: vibração, ruído, esforço repetitivo e exposição solar prolongada adoecem o trabalhador ao longo dos anos.' },
        { h4: 'Risco de vida', p: 'Em terrenos complexos e próximos a áreas de risco, o corte manual expõe o trabalhador a acidentes graves, muitas vezes sem rota de fuga.' },
      ],
      closing: 'Nosso protocolo de operação remota permite que o trabalhador que hoje executa o corte manual assuma a função de operador do robô — preservando o vínculo de trabalho e tirando o corpo de cima do risco.',
    },
    story: {
      eyebrow: 'Sobre a marca',
      h2: 'De onde vem o nosso símbolo.',
      lede: 'O nome Yieldwalker carrega o próprio robô dentro dele. A marca nasce do "Y" — virado de cabeça para baixo, ele ganha corpo e duas pernas, e termina em um braço articulado: a mesma geometria de um quadrúpede equipado para o trabalho de campo.',
      evo: ['Y de Yieldwalker', 'Invertido', 'Corpo + pernas', '+ braço robótico'],
    },
    cta: {
      eyebrow: 'Pronto pra colocar o robô pra trabalhar?',
      h2a: 'Locação, manutenção ou um piloto,',
      h2b: 'chama no WhatsApp.',
      btn: '+55 11 98202-3271',
    },
    foot: {
      tagline: 'Robótica quadrúpede para terrenos complexos. Locação, assistência técnica e pilotos de corte de grama.',
      servicesTitle: 'Serviços',
      services: ['Locação A2-Pro', 'Assistência técnica', 'Pilotos pagos'],
      contactTitle: 'Contato',
      location: 'Brasil',
      rights: 'Plataforma base: Unitree A2-Pro',
    },
  },

  en: {
    htmlLang: 'en',
    title: 'Yieldwalker — Field Robotics',
    nav: { locacao: 'Rental', assistencia: 'Service', pilotos: 'Pilots', sobre: 'About', menu: 'Menu', close: 'Close' },
    hero: {
      eyebrow: 'Field robotics — Brazil',
      h1a: 'Four legs for the terrain',
      h1b: 'no machine can beat.',
      lede: "Yieldwalker rents and services the Unitree A2-Pro quadruped robot — and runs paid pilots for autonomous grass-cutting in complex terrain where conventional mowing can't reach.",
      cta1: 'Talk about rental',
      cta2: 'See paid pilots',
      stats: [
        { num: '37 kg', lbl: 'Weight with batteries' },
        { num: '45°', lbl: 'Incline handled' },
        { num: 'IP56', lbl: 'Field protection' },
      ],
      scroll: 'Scroll to descend',
      unit: 'Unit — A2 Pro',
      config: 'Standard configuration',
    },
    pillars: {
      eyebrow: 'What we do',
      h2: 'Three ways to put a quadruped to work.',
      items: [
        { idx: '01 / Rental', chip: 'On request', h3: 'A2-Pro rental', p: 'Unitree quadruped robot, standard factory configuration, available by the hour, day, week, month or year.', link: 'See specifications', href: '#locacao' },
        { idx: '02 / Maintenance', chip: 'Quote', h3: 'Technical service', p: 'Diagnostics, repair, calibration and specialized support for A2-Pro quadruped robots in operation.', link: 'Request a quote', href: '#assistencia' },
        { idx: '03 / Pilots', chip: 'Paid project', h3: 'Autonomous mowing pilots', p: 'Autonomous grass-cutting in complex terrain. From simulation to full autonomy, across four validated stages.', link: 'See the methodology', href: '#pilotos' },
      ],
    },
    locacao: {
      eyebrow: '01 — Rental',
      h2: 'Unitree A2-Pro, original configuration.',
      lede: 'We rent the A2-Pro quadruped platform in its standard factory configuration. Flexible plans, from a single shift to a full year — talk to us to find the best fit for your operation.',
      feats: [
        { b: 'Mobility on any terrain', rest: " — handles inclines up to 45° and steps up to 30 cm, where wheels and tracks can't go." },
        { b: 'Factory-standard perception', rest: ' — dual front/rear LiDAR with 360° coverage and HD camera, standard on the Unitree platform.' },
        { b: 'Field endurance', rest: ' — up to 5 h and 20 km unloaded; up to 3 h and 12.5 km with a 25 kg payload.' },
        { b: 'Certified ruggedness', rest: ' — IP56 protection rating, aluminum and engineering-plastic build, from -20°C to 55°C.' },
      ],
      cta: 'Check availability',
      ssTitle: 'Datasheet',
      specs: [
        { k: 'Weight (with batteries)', v: '≈ 37 kg (≈ 31 kg without battery)' },
        { k: 'Payload while walking', v: '25 kg (up to 100 kg standing)' },
        { k: 'Endurance', v: '5h · 20km unloaded / 3h · 12.5km with 25kg' },
        { k: 'Protection rating', v: 'IP56' },
        { k: 'Sensing', v: 'Dual LiDAR 360° + HD camera' },
        { k: 'Incline capability', v: 'up to 45°' },
        { k: 'Step height', v: 'up to 30 cm' },
        { k: 'Top speed', v: '5 m/s' },
        { k: 'Compatibility', v: 'ROS2, NVIDIA Isaac' },
        { k: 'Connectivity', v: 'Wi-Fi 6, Bluetooth 5.2, Ethernet, USB-C' },
      ],
    },
    assist: {
      eyebrow: '02 — Technical service',
      h2: 'Your A2-Pro back in the field, fast.',
      lede: 'We provide maintenance, repair and specialized calibration for A2-Pro quadruped robots — whether rented from us or owned by your team.',
      items: [
        'Full hardware and software diagnostics',
        'Repair, parts replacement and sensor calibration',
        'Recalibration of perception and navigation modules',
        'Remote support and on-site technical visits',
      ],
      ctaTitle: 'Quote on request',
      ctaP: "Every repair depends on diagnosis. Send us the issue on WhatsApp and we'll reply with next steps.",
      cta: 'Request a quote',
    },
    pilotos: {
      eyebrow: '03 — Paid pilots',
      h2a: 'One line from simulation',
      h2b: 'to full autonomy.',
      lede: 'For companies and institutions dealing with grass-cutting in complex terrain, we structure paid pilots that progress step by step, from simulation to full autonomy.',
      stages: [
        { num: 'Stage 01', h4: 'Simulation', p: 'A digital twin of the real environment, built from field data, to validate perception, navigation and obstacle avoidance before any physical operation.', mode: 'Virtual environment' },
        { num: 'Stage 02', h4: 'Full teleoperation', p: 'A remote operator controls locomotion and the cutting arm. The first real-field validation, producing baseline productivity and safety data.', mode: 'Human control' },
        { num: 'Stage 03', h4: 'Hybrid mode', p: 'The operator controls locomotion while the robotic arm cuts autonomously — productivity gains with direct supervision.', mode: 'Semi-autonomous' },
        { num: 'Stage 04', h4: 'Full autonomy', p: 'Platform and arm operate independently within a GPS-defined perimeter. The worker supervises remotely.', mode: 'Fully autonomous' },
      ],
      cta: 'Talk about a pilot',
    },
    why: {
      eyebrow: 'Why this matters',
      h2: 'We solve three problems at once.',
      reasons: [
        { h4: 'Labor shortage', p: 'Companies are finding it harder to hire and keep workers willing to operate brush cutters in the field, under the sun, on difficult terrain.' },
        { h4: 'Hazardous-to-health work', p: 'Manual brush-cutter operation is classified as hazardous to health under Brazilian regulation NR-15: vibration, noise, repetitive strain and prolonged sun exposure wear the worker down over the years.' },
        { h4: 'Life-threatening risk', p: 'In complex terrain near hazardous areas, manual cutting exposes the worker to serious accidents, often with no escape route.' },
      ],
      closing: "Our remote-operation protocol lets the worker who currently does the manual cutting become the robot's operator — preserving the job while taking the body out of harm's way.",
    },
    story: {
      eyebrow: 'About the brand',
      h2: 'Where our symbol comes from.',
      lede: 'The name Yieldwalker carries the robot inside it. The mark starts from the "Y" — flipped upside down, it gains a body and two legs, and ends in an articulated arm: the same geometry as a quadruped rigged for field work.',
      evo: ['The Y in Yieldwalker', 'Flipped', 'Body + legs', '+ robotic arm'],
    },
    cta: {
      eyebrow: 'Ready to put the robot to work?',
      h2a: 'Rental, maintenance or a pilot —',
      h2b: 'message us on WhatsApp.',
      btn: '+55 11 98202-3271',
    },
    foot: {
      tagline: 'Quadruped robotics for complex terrain. Rental, technical service and grass-cutting pilots.',
      servicesTitle: 'Services',
      services: ['A2-Pro rental', 'Technical service', 'Paid pilots'],
      contactTitle: 'Contact',
      location: 'Brazil',
      rights: 'Base platform: Unitree A2-Pro',
    },
  },

  es: {
    htmlLang: 'es',
    title: 'Yieldwalker — Robótica de Campo',
    nav: { locacao: 'Alquiler', assistencia: 'Asistencia', pilotos: 'Pilotos', sobre: 'Sobre', menu: 'Menú', close: 'Cerrar' },
    hero: {
      eyebrow: 'Robótica de campo — Brasil',
      h1a: 'Cuatro patas para el terreno que',
      h1b: 'ninguna máquina vence.',
      lede: 'Yieldwalker alquila y brinda asistencia técnica para el robot cuadrúpedo Unitree A2-Pro — y desarrolla pilotos pagos de corte de césped autónomo en terrenos complejos donde el corte convencional no llega.',
      cta1: 'Hablar sobre alquiler',
      cta2: 'Ver pilotos pagos',
      stats: [
        { num: '37 kg', lbl: 'Peso con baterías' },
        { num: '45°', lbl: 'Inclinación superada' },
        { num: 'IP56', lbl: 'Protección en campo' },
      ],
      scroll: 'Desplázate para descender',
      unit: 'Unidad — A2 Pro',
      config: 'Configuración estándar',
    },
    pillars: {
      eyebrow: 'Qué hacemos',
      h2: 'Tres formas de poner un cuadrúpedo a trabajar.',
      items: [
        { idx: '01 / Alquiler', chip: 'Bajo consulta', h3: 'Alquiler del A2-Pro', p: 'Robot cuadrúpedo Unitree, en configuración estándar de fábrica, disponible por hora, día, semana, mes o año.', link: 'Ver especificaciones', href: '#locacao' },
        { idx: '02 / Mantenimiento', chip: 'Presupuesto', h3: 'Asistencia técnica', p: 'Diagnóstico, reparación, calibración y soporte especializado para robots cuadrúpedos A2-Pro en operación.', link: 'Solicitar presupuesto', href: '#assistencia' },
        { idx: '03 / Pilotos', chip: 'Proyecto pago', h3: 'Pilotos de corte autónomo', p: 'Corte de césped autónomo en terrenos complejos. De la simulación a la autonomía total, en cuatro etapas validadas.', link: 'Conocer la metodología', href: '#pilotos' },
      ],
    },
    locacao: {
      eyebrow: '01 — Alquiler',
      h2: 'Unitree A2-Pro, en su configuración original.',
      lede: 'Alquilamos la plataforma cuadrúpeda A2-Pro en su configuración estándar de fábrica. Planes flexibles, desde un turno hasta un año — hable con nosotros para encontrar el mejor formato para su operación.',
      feats: [
        { b: 'Movilidad en cualquier terreno', rest: ' — supera inclinaciones de hasta 45° y escalones de hasta 30 cm, donde ruedas y orugas no pasan.' },
        { b: 'Percepción de fábrica', rest: ' — LiDAR doble (frontal y trasero) con cobertura 360° y cámara HD, estándar de la plataforma Unitree.' },
        { b: 'Autonomía de campo', rest: ' — hasta 5 h y 20 km sin carga; hasta 3 h y 12,5 km con 25 kg de carga.' },
        { b: 'Robustez certificada', rest: ' — grado de protección IP56, estructura de aluminio y plástico de ingeniería, de -20°C a 55°C.' },
      ],
      cta: 'Consultar disponibilidad',
      ssTitle: 'Datasheet',
      specs: [
        { k: 'Peso (con baterías)', v: '≈ 37 kg (≈ 31 kg sin batería)' },
        { k: 'Carga útil en marcha', v: '25 kg (hasta 100 kg de pie)' },
        { k: 'Autonomía', v: '5h · 20km sin carga / 3h · 12,5km con 25kg' },
        { k: 'Grado de protección', v: 'IP56' },
        { k: 'Sensórica', v: 'LiDAR doble 360° + cámara HD' },
        { k: 'Inclinación superada', v: 'hasta 45°' },
        { k: 'Escalón superado', v: 'hasta 30 cm' },
        { k: 'Velocidad máxima', v: '5 m/s' },
        { k: 'Compatibilidad', v: 'ROS2, NVIDIA Isaac' },
        { k: 'Conectividad', v: 'Wi-Fi 6, Bluetooth 5.2, Ethernet, USB-C' },
      ],
    },
    assist: {
      eyebrow: '02 — Asistencia técnica',
      h2: 'Su A2-Pro de vuelta al campo, rápido.',
      lede: 'Realizamos mantenimiento, reparación y calibración especializada para robots cuadrúpedos A2-Pro — sea un equipo alquilado con nosotros o propiedad de su equipo.',
      items: [
        'Diagnóstico técnico completo de hardware y software',
        'Reparación, sustitución de piezas y calibración de sensores',
        'Recalibración de módulos de percepción y navegación',
        'Soporte remoto y visita técnica en campo',
      ],
      ctaTitle: 'Presupuesto bajo consulta',
      ctaP: 'Cada reparación depende del diagnóstico. Cuéntenos el problema por WhatsApp y le respondemos con los próximos pasos.',
      cta: 'Solicitar presupuesto',
    },
    pilotos: {
      eyebrow: '03 — Pilotos pagos',
      h2a: 'Una línea de la simulación',
      h2b: 'a la autonomía total.',
      lede: 'Para empresas e instituciones que enfrentan el corte de césped en terrenos complejos, estructuramos pilotos pagos que avanzan de forma progresiva, de la simulación a la autonomía total.',
      stages: [
        { num: 'Etapa 01', h4: 'Simulación', p: 'Gemelo digital del entorno real, parametrizado con datos de campo, para validar percepción, navegación y evasión de obstáculos antes de cualquier operación física.', mode: 'Entorno virtual' },
        { num: 'Etapa 02', h4: 'Teleoperación total', p: 'Un operador remoto controla la locomoción y el brazo de corte. Primera validación en campo real, con datos base de productividad y seguridad.', mode: 'Control humano' },
        { num: 'Etapa 03', h4: 'Modo híbrido', p: 'El operador controla la locomoción mientras el brazo robótico corta de forma autónoma — ganancia de productividad con supervisión directa.', mode: 'Semiautónomo' },
        { num: 'Etapa 04', h4: 'Autonomía total', p: 'Plataforma y brazo operan de forma independiente dentro de un perímetro definido por GPS. El trabajador supervisa a distancia.', mode: 'Totalmente autónomo' },
      ],
      cta: 'Hablar sobre un piloto',
    },
    why: {
      eyebrow: 'Por qué esto importa',
      h2: 'Resolvemos tres problemas a la vez.',
      reasons: [
        { h4: 'Falta de mano de obra', p: 'A las empresas les cuesta cada vez más contratar y retener trabajadores dispuestos a operar desbrozadoras en campo, bajo el sol y en terrenos difíciles.' },
        { h4: 'Trabajo insalubre', p: 'La operación manual de desbrozadora está clasificada como actividad insalubre por la norma NR-15: vibración, ruido, esfuerzo repetitivo y exposición solar prolongada enferman al trabajador con los años.' },
        { h4: 'Riesgo de vida', p: 'En terrenos complejos y cercanos a zonas de riesgo, el corte manual expone al trabajador a accidentes graves, muchas veces sin ruta de escape.' },
      ],
      closing: 'Nuestro protocolo de operación remota permite que el trabajador que hoy realiza el corte manual pase a ser el operador del robot — preservando el vínculo laboral y alejando el cuerpo del riesgo.',
    },
    story: {
      eyebrow: 'Sobre la marca',
      h2: 'De dónde viene nuestro símbolo.',
      lede: 'El nombre Yieldwalker lleva al propio robot dentro. La marca nace de la "Y" — invertida, gana cuerpo y dos patas, y termina en un brazo articulado: la misma geometría de un cuadrúpedo equipado para el trabajo de campo.',
      evo: ['La Y de Yieldwalker', 'Invertida', 'Cuerpo + patas', '+ brazo robótico'],
    },
    cta: {
      eyebrow: '¿Listo para poner el robot a trabajar?',
      h2a: 'Alquiler, mantenimiento o un piloto —',
      h2b: 'escríbanos por WhatsApp.',
      btn: '+55 11 98202-3271',
    },
    foot: {
      tagline: 'Robótica cuadrúpeda para terrenos complejos. Alquiler, asistencia técnica y pilotos de corte de césped.',
      servicesTitle: 'Servicios',
      services: ['Alquiler A2-Pro', 'Asistencia técnica', 'Pilotos pagos'],
      contactTitle: 'Contacto',
      location: 'Brasil',
      rights: 'Plataforma base: Unitree A2-Pro',
    },
  },
}

const LangContext = createContext({ lang: 'pt', t: translations.pt, setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('yw-lang')
    return saved && translations[saved] ? saved : 'pt'
  })

  useEffect(() => {
    const t = translations[lang]
    document.documentElement.lang = t.htmlLang
    document.title = t.title
    localStorage.setItem('yw-lang', lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
