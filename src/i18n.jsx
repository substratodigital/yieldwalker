import { createContext, useContext, useEffect, useState } from 'react'

export const WA_NUMBER = '5511982023271' // TODO: substituir pelo número real antes de publicar

const waTexts = {
  pt: {
    generic: 'Olá, vim pelo site da Yieldwalker.',
    locacao: 'Olá, quero saber mais sobre a locação do QPD 2DoF BCN 1.',
    locacao2: 'Olá, quero consultar disponibilidade e condições de locação do QPD 2DoF BCN 1.',
    assistencia: 'Olá, preciso de assistência técnica para um QPD 2DoF BCN 1.',
    pilotos: 'Olá, temos interesse em estruturar um piloto de corte de vegetação autônomo.',
  },
  en: {
    generic: 'Hi, I came from the Yieldwalker website.',
    locacao: "Hi, I'd like to know more about renting the QPD 2DoF BCN 1.",
    locacao2: "Hi, I'd like to check availability and rental terms for the QPD 2DoF BCN 1.",
    assistencia: 'Hi, I need technical service for an QPD 2DoF BCN 1.',
    pilotos: "Hi, we're interested in setting up an autonomous grass-cutting pilot.",
  },
  es: {
    generic: 'Hola, vengo del sitio web de Yieldwalker.',
    locacao: 'Hola, quiero saber más sobre el alquiler del QPD 2DoF BCN 1.',
    locacao2: 'Hola, quiero consultar disponibilidad y condiciones de alquiler del QPD 2DoF BCN 1.',
    assistencia: 'Hola, necesito asistencia técnica para un QPD 2DoF BCN 1.',
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
    title: 'Yieldwalker · Robótica de Campo',
    nav: { rocagem: 'Áreas Difíceis', seguranca: 'Dor do Roçador', concessao: 'Dor da Concessionária', pilotos: 'Tipos de Solução', contato: 'Contato', menu: 'Menu', close: 'Fechar' },
    hero: {
      eyebrow: 'Potencializando Robôs Quadrúpedes em Infraestrutura',
      eyebrowA: 'Potencializando Robôs ',
      eyebrowB: 'Quadrúpedes',
      eyebrowC: ' em ',
      eyebrowD: 'Infraestrutura',
      tag: 'Uma empresa de Singapura com operação nos países latinos',
      h1_1a: 'Quatro ',
      h1_1b: 'pernas',
      h1_1c: ' para onde',
      h1_2: 'a roçagem mais sofre:',
      h1_3: 'guard-rails e aceiro.',
      lede: 'A Yieldwalker implementa pilotos pagos de corte de grama na faixa de domínio de rodovias. Além disso, aluga e fornece assistência técnica para robôs quadrúpedes.',
      cta1: 'Pedir Piloto Pago',
      cta2: 'Falar sobre locação ou assistência',
      stats: [
        { num: '37 kg', lbl: 'Peso com baterias' },
        { num: '30°', lbl: 'Inclinação superada' },
        { num: 'IP56', lbl: 'Proteção em campo' },
      ],
      scroll: 'Role para descer',
      unit: 'Unidade · QPD 2DoF BCN 1',
      config: 'Configuração padrão',
    },
    pillars: {
      eyebrow: '0 - Modelo de gestão de corte de grama',
      h2a: 'Monitorar, planejar, ',
      h2b: 'executar',
      h2c: ': o ciclo que mantém a ',
      h2d: 'faixa de domínio',
      h2e: ' sob controle.',
      items: [
        {
          h3: 'Monitoramento',
          items: [
            'Inspeção visual e fotográfica periódica do estado da vegetação em campo',
            'Registro visual e manual de altura estimada, tipo de cobertura e localização por trecho',
            'Laudo técnico de conformidade com o PER entregue ao regulador',
            'Identificação de árvores de risco, arbustos invasivos e áreas críticas',
          ],
        },
        {
          h3: 'Planejamento',
          items: [
            'Definição de equipes, turnos, equipamentos e cronograma por trecho',
            'Priorização por criticidade: curvas, interseções e faixas de visibilidade',
            'Gestão de frota de caminhões, tratores e equipamentos manuais',
            'Logística de combustível fóssil em campo e EPIs para cada operação',
          ],
        },
        {
          h3: 'Execução & Controle',
          items: [
            'Roçada em campo com equipes multidisciplinares e maquinário variado',
            'Registro diário de produção: m² trabalhados por equipe e por trecho',
            'Supervisão de segurança conforme NR-31 (agricultura), NR-12 (equipamentos), NR-6 (EPI), NR-21 (céu aberto) e NR-35 (altura)',
            'Retrabalho frequente em áreas de crescimento rápido e alta pluviosidade',
          ],
        },
      ],
    },
    locacao: {
      eyebrow: '1 - Onde a Roçagem mais sofre',
      h2a: 'Quatro frentes onde ',
      h2b: 'a roçagem convencional trava.',
      lede: 'Bordas de drenagem, dispositivos viários, áreas pequenas e bordas de faixa de domínio com obstáculos como guard-rails e aceiro concentram o maior custo e risco da manutenção manual, exatamente aí que o QPD 2DoF BCN 1 rende mais.',
      imgHint: 'Espaço para foto',
      challenges: [
        { title: 'Bordas de Drenagem', p: 'Áreas onde a vegetação cresce próxima a estruturas de drenagem. Tratores podem operar nessas regiões, mas frequentemente causam danos pela pressão do equipamento ou contato das ferramentas de corte. O acabamento final é normalmente feito de forma manual.' },
        { title: 'Dispositivos Viários', p: 'Pequenos fragmentos de vegetação onde não é possível operar com braços articulados ou implementos de trator. Robôs tradicionais também enfrentam limitações de acabamento. O custo de mobilizar equipamentos muitas vezes não se justifica pela baixa densidade da vegetação.' },
        { title: 'Pequenas Áreas', p: 'Grandes áreas com múltiplas características que exigem combinação de equipamentos: tratores para seções extensas, robôs tradicionais em terrenos inclinados e trabalho manual para acabamento e áreas de difícil acesso.' },
        { title: 'Guard-Rails Metálicos', p: 'Áreas onde a vegetação cresce embaixo e ao redor de guard-rails metálicos. A própria estrutura impede o acesso de implementos de trator e robôs tradicionais. Nessas regiões, a intervenção é feita exclusivamente de forma manual.' },
      ],
      cta: 'Pedir Piloto Pago',
    },
    assist: {
      eyebrow: '2 - A dor do roçador',
      h2a: 'O ',
      h2b: 'corpo',
      h2c: ' de quem corta manualmente ',
      h2d: 'paga a conta',
      h2e: ' todos os dias.',
      lede: 'Antes de ser um problema de produtividade, a roçagem manual é um problema de saúde e segurança do trabalhador. Duas frentes de risco que o QPD 2DoF BCN 1 tira de cena:',
      groups: [
        {
          title: 'Risco ocupacional',
          items: [
            'Distúrbios osteomusculares (DORT): túnel do carpo, tendinite e lombalgias pelo esforço repetitivo com a roçadeira',
            'Exposição solar intensa e risco de insolação, agravado pelo uso obrigatório de EPI',
            'Exposição prolongada a ruído intenso do motor e da lâmina de corte',
          ],
        },
        {
          title: 'Risco de vida',
          items: [
            'Acidentes por impacto da ferramenta com objetos ocultos no mato: pedras, entulho, fragmentos metálicos',
            'Contato com animais peçonhentos escondidos na vegetação alta',
            'Proximidade de veículos a mais de 100 km/h, sem barreira física de proteção',
            'Manuseio de combustível: troca de gasolina em campo pelo líder da equipe',
          ],
        },
      ],
      ctaTitle: 'Tire o seu time do risco',
      ctaP: 'Se hoje sua operação depende de corte manual em trechos críticos, dá pra estruturar um piloto pago e migrar esse risco pro robô, mantendo o time no comando, à distância.',
      cta: 'Pedir Piloto Pago',
    },
    conc: {
      eyebrow: '3 - A dor da concessionária',
      h2a: 'A ',
      h2b: 'maior parte',
      h2c: ' do ',
      h2d: 'esforço',
      h2e: ' ainda vai pra ',
      h2f: 'menor parte',
      h2g: ' da ',
      h2h: 'faixa de domínio',
      h2i: '.',
      lede: 'A mecanização já resolveu grande parte do problema: trator com implemento, robô com rodas, soprador industrial e bombona de combustível. Entretanto, a maioria do esforço em custo e operação ainda continua destinada à menor área de corte.',
      areaLabel: 'Área coberta',
      effortLabel: 'Esforço',
      rows: [
        { method: 'Trator', area: { label: 'Alta', level: 'high' }, effort: { label: 'Baixo', level: 'low' } },
        { method: 'Cortador com rodas', area: { label: 'Média', level: 'mid' }, effort: { label: 'Médio', level: 'mid' } },
        { method: 'Roçagem Manual', area: { label: 'Baixa', level: 'low' }, effort: { label: 'Alto', level: 'high' } },
      ],
      benefitsH2: 'Benefícios que não aparecem na planilha de custo.',
      benefits: [
        { h4: '100% elétrico', p: 'Reduz o consumo de combustível fóssil em campo, sem emissões diretas na operação de corte.' },
        { h4: 'Crédito de descarbonização', p: 'Gera dado real de operação para relatórios ESG, relevante para stakeholders e critério de pontuação em licitações.' },
        { h4: 'Mais previsibilidade', p: 'Menos dependência de mão de obra volátil, menos turn-over e monitoramento contínuo da via.' },
      ],
    },
    pilotos: {
      eyebrow: '4 - Pilotos pagos',
      h2a: 'A ',
      h2b: 'Solução.',
      lede: 'Três configurações. Uma jornada de adoção progressiva.',
      imgHint: 'Espaço para foto',
      stages: [
        {
          num: '01', h4: 'Full Operado',
          date: '1ª versão em campo: julho de 2027',
          p: 'Operador remoto controla locomoção e braço robótico. Trabalhador sai da pista. Toda decisão passa pelo humano.',
          tags: ['Segurança imediata', 'sem ruptura operacional'],
        },
        {
          num: '02', h4: 'Híbrido',
          date: '1ª versão em campo: dezembro de 2027',
          p: 'Humano navega. Braço robótico detecta e corta de forma autônoma.',
          tags: ['Redução de OPEX', 'com autonomia parcial'],
        },
        {
          num: '03', h4: 'Full Autônomo',
          date: '1ª versão em campo: julho de 2028',
          p: 'Plataforma e braço operam de forma independente. Operador define missão via GPS e consegue realizar múltiplas funções.',
          tags: ['Máxima escala', 'custo por m² mínimo'],
        },
      ],
      cta: 'Pedir Piloto Pago',
    },
    cta: {
      eyebrow: 'Pronto pra colocar o quadrúpede pra trabalhar?',
      h2a: 'Enquanto você lê isso, ',
      h2b: 'um trabalhador está em perigo ',
      h2c: 'roçando',
      h2d: ' à beira da pista.',
      btn: 'Pedir Piloto Pago',
    },
    foot: {
      tagline: 'Robótica quadrúpede com braço robótico e atuador para a indústria de infraestrutura.',
      servicesTitle: 'Serviços',
      services: ['Pedir piloto pago', 'Locação de quadrúpede', 'Assistência técnica'],
    },
  },

  en: {
    htmlLang: 'en',
    title: 'Yieldwalker · Field Robotics',
    nav: { rocagem: 'Difficult Areas', seguranca: "Mower's Pain", concessao: "Concessionaire's Pain", pilotos: 'Solution Types', contato: 'Contact', menu: 'Menu', close: 'Close' },
    hero: {
      eyebrow: 'Empowering Quadruped Robots in Infrastructure',
      eyebrowA: 'Empowering ',
      eyebrowB: 'Quadruped',
      eyebrowC: ' Robots in ',
      eyebrowD: 'Infrastructure',
      tag: 'A Singapore company operating across Latin countries',
      h1_1a: 'Four ',
      h1_1b: 'legs',
      h1_1c: ' for where',
      h1_2: 'roadside mowing struggles most:',
      h1_3: 'guardrails and firebreaks.',
      lede: 'Yieldwalker deploys paid pilots for autonomous grass-cutting in the highway right-of-way. We also rent out and provide technical service for quadruped robots.',
      cta1: 'Request a Paid Pilot',
      cta2: 'Talk about rental or service',
      stats: [
        { num: '37 kg', lbl: 'Weight with batteries' },
        { num: '30°', lbl: 'Incline handled' },
        { num: 'IP56', lbl: 'Field protection' },
      ],
      scroll: 'Scroll to descend',
      unit: 'Unit · QPD 2DoF BCN 1',
      config: 'Standard configuration',
    },
    pillars: {
      eyebrow: '0 - Grass Mowing Management Model',
      h2a: 'Monitor, plan, ',
      h2b: 'execute',
      h2c: ': the cycle that keeps the ',
      h2d: 'right-of-way',
      h2e: ' under control.',
      items: [
        {
          h3: 'Monitoring',
          items: [
            'Periodic visual and photographic inspection of vegetation conditions in the field',
            'Visual and manual logging of estimated height, cover type and location by section',
            'Technical compliance report (PER) submitted to the regulator',
            'Identification of at-risk trees, invasive shrubs and critical areas',
          ],
        },
        {
          h3: 'Planning',
          items: [
            'Defining crews, shifts, equipment and schedule by section',
            'Prioritization by criticality: curves, intersections and sightline zones',
            'Fleet management for trucks, tractors and manual equipment',
            'Field fossil-fuel logistics and PPE for each operation',
          ],
        },
        {
          h3: 'Execution & Control',
          items: [
            'Field mowing with multidisciplinary crews and varied machinery',
            'Daily production logging: m² worked per crew and per section',
            'Safety oversight under Brazilian regulations NR-31 (agriculture), NR-12 (equipment), NR-6 (PPE), NR-21 (open-air work) and NR-35 (work at height)',
            'Frequent rework in fast-growth, high-rainfall areas',
          ],
        },
      ],
    },
    locacao: {
      eyebrow: '1 - Where Mowing Suffers Most',
      h2a: 'Four fronts where ',
      h2b: 'conventional mowing gets stuck.',
      lede: "Drainage edges, road furniture, small areas and right-of-way edges with obstacles like guardrails and firebreaks carry the highest cost and risk in manual upkeep, exactly where the QPD 2DoF BCN 1 performs best.",
      imgHint: 'Space for photo',
      challenges: [
        { title: 'Drainage Edges', p: "Areas where vegetation grows close to drainage structures. Tractors can operate here, but often cause damage from equipment pressure or contact with cutting tools. Final finishing is usually done by hand." },
        { title: 'Road Furniture', p: "Small fragments of vegetation where articulated arms or tractor implements can't operate. Traditional robots also struggle with finish quality here. Mobilizing equipment often isn't worth it given the low vegetation density." },
        { title: 'Small Areas', p: 'Large areas with mixed characteristics that require a combination of equipment: tractors for long sections, traditional robots on sloped terrain, and manual work for finishing and hard-to-reach spots.' },
        { title: 'Metal Guardrails', p: 'Areas where vegetation grows under and around metal guardrails. The structure itself blocks access for tractor implements and traditional robots. In these spots, intervention is done exclusively by hand.' },
      ],
      cta: 'Request a Paid Pilot',
    },
    assist: {
      eyebrow: "2 - The mower operator's toll",
      h2a: 'The ',
      h2b: 'body',
      h2c: ' of the person mowing by hand ',
      h2d: 'pays the bill',
      h2e: ' every day.',
      lede: "Before it's a productivity problem, manual mowing is a worker health and safety problem. Two risk fronts the QPD 2DoF BCN 1 takes off the table:",
      groups: [
        {
          title: 'Occupational risk',
          items: [
            'Musculoskeletal disorders: carpal tunnel, tendinitis and lower-back pain from repetitive strain with the brush cutter',
            'Intense sun exposure and heatstroke risk, made worse by mandatory PPE',
            'Prolonged exposure to loud engine and cutting-blade noise',
          ],
        },
        {
          title: 'Life-threatening risk',
          items: [
            'Accidents from the tool striking objects hidden in the grass: rocks, debris, metal fragments',
            'Contact with venomous animals hidden in tall vegetation',
            'Proximity to vehicles traveling over 100 km/h, with no physical barrier',
            'Fuel handling: refueling in the field, usually done by the crew leader',
          ],
        },
      ],
      ctaTitle: "Take your crew out of harm's way",
      ctaP: 'If your operation still depends on manual cutting in critical stretches, we can structure a paid pilot and shift that risk to the robot, your team stays in command, remotely.',
      cta: 'Request a Paid Pilot',
    },
    conc: {
      eyebrow: "3 - The Concessionaire's Dilemma",
      h2a: '',
      h2b: 'Most',
      h2c: ' of the ',
      h2d: 'effort',
      h2e: ' still goes to the ',
      h2f: 'smallest part',
      h2g: ' of the ',
      h2h: 'right-of-way',
      h2i: '.',
      lede: 'Mechanization has already solved most of the problem: tractor with implement, wheeled robot, industrial blower, fuel canister. Yet most of the cost and operational effort is still spent on the smallest share of the cutting area.',
      areaLabel: 'Area Covered',
      effortLabel: 'Effort',
      rows: [
        { method: 'Tractor', area: { label: 'High', level: 'high' }, effort: { label: 'Low', level: 'low' } },
        { method: 'Wheeled Cutter', area: { label: 'Medium', level: 'mid' }, effort: { label: 'Medium', level: 'mid' } },
        { method: 'Manual Mowing', area: { label: 'Low', level: 'low' }, effort: { label: 'High', level: 'high' } },
      ],
      benefitsH2: "Benefits that don't show up in the cost spreadsheet.",
      benefits: [
        { h4: '100% Electric', p: 'Cuts fossil-fuel consumption in the field, no direct emissions from the mowing operation.' },
        { h4: 'Decarbonization Credit', p: 'Generates real operational data for ESG reporting, relevant for stakeholders and scoring criteria in public tenders.' },
        { h4: 'More Predictability', p: 'Less dependence on volatile labor, lower turnover, and continuous monitoring of the road.' },
      ],
    },
    pilotos: {
      eyebrow: '4 - Paid pilots',
      h2a: 'The ',
      h2b: 'Solution.',
      lede: 'Three configurations. One journey of progressive adoption.',
      imgHint: 'Space for photo',
      stages: [
        {
          num: '01', h4: 'Full Operated',
          date: 'First field version: July 2027',
          p: 'A remote operator controls locomotion and the robotic arm. The worker leaves the shoulder. Every decision goes through a human.',
          tags: ['Immediate safety', 'no operational disruption'],
        },
        {
          num: '02', h4: 'Hybrid',
          date: 'First field version: December 2027',
          p: 'A human navigates. The robotic arm detects and cuts autonomously.',
          tags: ['Lower OPEX', 'with partial autonomy'],
        },
        {
          num: '03', h4: 'Full Autonomous',
          date: 'First field version: July 2028',
          p: 'Platform and arm operate independently. The operator sets the mission via GPS and can run multiple jobs at once.',
          tags: ['Maximum scale', 'lowest cost per m²'],
        },
      ],
      cta: 'Request a Paid Pilot',
    },
    cta: {
      eyebrow: 'Ready to put the quadruped to work?',
      h2a: 'While you read this, ',
      h2b: 'a worker is in danger ',
      h2c: 'mowing',
      h2d: ' roadside.',
      btn: 'Request a Paid Pilot',
    },
    foot: {
      tagline: 'Quadruped robotics with a robotic arm and actuator for the infrastructure industry.',
      servicesTitle: 'Services',
      services: ['Request a paid pilot', 'Quadruped rental', 'Technical service'],
    },
  },

  es: {
    htmlLang: 'es',
    title: 'Yieldwalker · Robótica de Campo',
    nav: { rocagem: 'Áreas Difíciles', seguranca: 'Dolor del Operador', concessao: 'Dolor de la Concesionaria', pilotos: 'Tipos de Solución', contato: 'Contacto', menu: 'Menú', close: 'Cerrar' },
    hero: {
      eyebrow: 'Potenciando Robots Cuadrúpedos en Infraestructura',
      eyebrowA: 'Potenciando Robots ',
      eyebrowB: 'Cuadrúpedos',
      eyebrowC: ' en ',
      eyebrowD: 'Infraestructura',
      tag: 'Una empresa de Singapur con operación en los países latinos',
      h1_1a: 'Cuatro ',
      h1_1b: 'patas',
      h1_1c: ' para donde',
      h1_2: 'el corte de césped más sufre:',
      h1_3: 'guardarraíles y cortafuegos.',
      lede: 'Yieldwalker implementa pilotos pagos de corte de césped en la franja de dominio de carreteras. Además, alquila y brinda asistencia técnica para robots cuadrúpedos.',
      cta1: 'Solicitar Piloto Pago',
      cta2: 'Hablar sobre alquiler o asistencia',
      stats: [
        { num: '37 kg', lbl: 'Peso con baterías' },
        { num: '30°', lbl: 'Inclinación superada' },
        { num: 'IP56', lbl: 'Protección en campo' },
      ],
      scroll: 'Desplázate para descender',
      unit: 'Unidad · QPD 2DoF BCN 1',
      config: 'Configuración estándar',
    },
    pillars: {
      eyebrow: '0 - Modelo de gestión de corte de césped',
      h2a: 'Monitorear, planificar, ',
      h2b: 'ejecutar',
      h2c: ': el ciclo que mantiene la ',
      h2d: 'franja de dominio',
      h2e: ' bajo control.',
      items: [
        {
          h3: 'Monitoreo',
          items: [
            'Inspección visual y fotográfica periódica del estado de la vegetación en campo',
            'Registro visual y manual de altura estimada, tipo de cobertura y ubicación por tramo',
            'Informe técnico de conformidad (PER) entregado al regulador',
            'Identificación de árboles de riesgo, arbustos invasivos y áreas críticas',
          ],
        },
        {
          h3: 'Planificación',
          items: [
            'Definición de equipos, turnos, maquinaria y cronograma por tramo',
            'Priorización por criticidad: curvas, intersecciones y franjas de visibilidad',
            'Gestión de flota de camiones, tractores y equipos manuales',
            'Logística de combustible fósil en campo y EPP para cada operación',
          ],
        },
        {
          h3: 'Ejecución y Control',
          items: [
            'Corte en campo con equipos multidisciplinarios y maquinaria variada',
            'Registro diario de producción: m² trabajados por equipo y por tramo',
            'Supervisión de seguridad según las normas brasileñas NR-31 (agricultura), NR-12 (equipos), NR-6 (EPP), NR-21 (cielo abierto) y NR-35 (trabajo en altura)',
            'Retrabajo frecuente en áreas de crecimiento rápido y alta pluviosidad',
          ],
        },
      ],
    },
    locacao: {
      eyebrow: '1 - Donde el Corte Más Sufre',
      h2a: 'Cuatro frentes donde ',
      h2b: 'el corte convencional se traba.',
      lede: 'Bordes de drenaje, dispositivos viales, áreas pequeñas y bordes de la franja de dominio con obstáculos como guardarraíles y cortafuegos concentran el mayor costo y riesgo del mantenimiento manual, justo donde el QPD 2DoF BCN 1 rinde más.',
      imgHint: 'Espacio para foto',
      challenges: [
        { title: 'Bordes de Drenaje', p: 'Áreas donde la vegetación crece cerca de estructuras de drenaje. Los tractores pueden operar en estas zonas, pero suelen causar daños por la presión del equipo o el contacto de las herramientas de corte. El acabado final normalmente se hace de forma manual.' },
        { title: 'Dispositivos Viales', p: 'Pequeños fragmentos de vegetación donde no es posible operar con brazos articulados o implementos de tractor. Los robots tradicionales también enfrentan limitaciones de acabado. El costo de movilizar equipos muchas veces no se justifica por la baja densidad de la vegetación.' },
        { title: 'Áreas Pequeñas', p: 'Grandes áreas con múltiples características que exigen una combinación de equipos: tractores para tramos extensos, robots tradicionales en terrenos inclinados y trabajo manual para el acabado y zonas de difícil acceso.' },
        { title: 'Guardarraíles Metálicos', p: 'Áreas donde la vegetación crece debajo y alrededor de guardarraíles metálicos. La propia estructura impide el acceso de implementos de tractor y robots tradicionales. En estas zonas, la intervención se realiza exclusivamente de forma manual.' },
      ],
      cta: 'Solicitar Piloto Pago',
    },
    assist: {
      eyebrow: '2 - El dolor del que corta el pasto',
      h2a: 'El ',
      h2b: 'cuerpo',
      h2c: ' de quien corta a mano ',
      h2d: 'paga la cuenta',
      h2e: ' todos los días.',
      lede: 'Antes de ser un problema de productividad, el corte manual es un problema de salud y seguridad del trabajador. Dos frentes de riesgo que el QPD 2DoF BCN 1 saca de escena:',
      groups: [
        {
          title: 'Riesgo ocupacional',
          items: [
            'Trastornos musculoesqueléticos: túnel carpiano, tendinitis y lumbalgia por el esfuerzo repetitivo con la desbrozadora',
            'Exposición solar intensa y riesgo de insolación, agravado por el uso obligatorio de EPP',
            'Exposición prolongada al ruido intenso del motor y de la cuchilla de corte',
          ],
        },
        {
          title: 'Riesgo de vida',
          items: [
            'Accidentes por impacto de la herramienta con objetos ocultos en el pasto: piedras, escombros, fragmentos metálicos',
            'Contacto con animales venenosos escondidos en la vegetación alta',
            'Cercanía de vehículos a más de 100 km/h, sin barrera física de protección',
            'Manipulación de combustible: cambio de gasolina en campo, a cargo del líder del equipo',
          ],
        },
      ],
      ctaTitle: 'Saque a su equipo del riesgo',
      ctaP: 'Si hoy su operación depende del corte manual en tramos críticos, podemos estructurar un piloto pago y trasladar ese riesgo al robot, su equipo sigue al mando, a distancia.',
      cta: 'Solicitar Piloto Pago',
    },
    conc: {
      eyebrow: '3 - El Dilema de la Concesionaria',
      h2a: 'La ',
      h2b: 'mayor parte',
      h2c: ' del ',
      h2d: 'esfuerzo',
      h2e: ' todavía va a la ',
      h2f: 'menor parte',
      h2g: ' de la ',
      h2h: 'franja de dominio',
      h2i: '.',
      lede: 'La mecanización ya resolvió gran parte del problema: tractor con implemento, robot con ruedas, soplador industrial y bidón de combustible. Sin embargo, la mayor parte del esfuerzo en costo y operación sigue destinada a la menor área de corte.',
      areaLabel: 'Área Cubierta',
      effortLabel: 'Esfuerzo',
      rows: [
        { method: 'Tractor', area: { label: 'Alta', level: 'high' }, effort: { label: 'Bajo', level: 'low' } },
        { method: 'Cortadora con Ruedas', area: { label: 'Media', level: 'mid' }, effort: { label: 'Medio', level: 'mid' } },
        { method: 'Corte Manual', area: { label: 'Baja', level: 'low' }, effort: { label: 'Alto', level: 'high' } },
      ],
      benefitsH2: 'Beneficios que no aparecen en la planilla de costos.',
      benefits: [
        { h4: '100% Eléctrico', p: 'Reduce el consumo de combustible fósil en campo, sin emisiones directas en la operación de corte.' },
        { h4: 'Crédito de Descarbonización', p: 'Genera datos reales de operación para informes ESG, relevante para stakeholders y criterios de puntuación en licitaciones.' },
        { h4: 'Más Previsibilidad', p: 'Menos dependencia de mano de obra volátil, menos rotación de personal y monitoreo continuo de la vía.' },
      ],
    },
    pilotos: {
      eyebrow: '4 - Pilotos pagos',
      h2a: 'La ',
      h2b: 'Solución.',
      lede: 'Tres configuraciones. Un camino de adopción progresiva.',
      imgHint: 'Espacio para foto',
      stages: [
        {
          num: '01', h4: 'Full Operado',
          date: '1ª versión en campo: julio de 2027',
          p: 'Un operador remoto controla la locomoción y el brazo robótico. El trabajador sale de la vía. Toda decisión pasa por el humano.',
          tags: ['Seguridad inmediata', 'sin ruptura operativa'],
        },
        {
          num: '02', h4: 'Híbrido',
          date: '1ª versión en campo: diciembre de 2027',
          p: 'El humano navega. El brazo robótico detecta y corta de forma autónoma.',
          tags: ['Reducción de OPEX', 'con autonomía parcial'],
        },
        {
          num: '03', h4: 'Full Autónomo',
          date: '1ª versión en campo: julio de 2028',
          p: 'Plataforma y brazo operan de forma independiente. El operador define la misión vía GPS y puede realizar múltiples funciones.',
          tags: ['Máxima escala', 'costo por m² mínimo'],
        },
      ],
      cta: 'Solicitar Piloto Pago',
    },
    cta: {
      eyebrow: '¿Listo para poner el cuadrúpedo a trabajar?',
      h2a: 'Mientras usted lee esto, ',
      h2b: 'un trabajador está en peligro ',
      h2c: 'cortando',
      h2d: ' al borde de la vía.',
      btn: 'Solicitar Piloto Pago',
    },
    foot: {
      tagline: 'Robótica cuadrúpeda con brazo robótico y actuador para la industria de infraestructura.',
      servicesTitle: 'Servicios',
      services: ['Solicitar piloto pago', 'Alquiler de cuadrúpedo', 'Asistencia técnica'],
    },
  },
}

const LangContext = createContext({ lang: 'pt', t: translations.pt, setLang: () => {} })

function readCookie(name) {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

function writeCookie(name, value, days) {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=${value}; Path=/; Max-Age=${days * 86400}; SameSite=Lax`
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('yw-lang')
    if (saved && translations[saved]) return saved
    // Sem escolha salva: usa o idioma sugerido pelo middleware de geolocalização (cookie yw-lang)
    const geo = readCookie('yw-lang')
    return geo && translations[geo] ? geo : 'pt'
  })

  useEffect(() => {
    const t = translations[lang]
    document.documentElement.lang = t.htmlLang
    document.title = t.title
  }, [lang])

  const setLang = (next) => {
    // Escolha manual: só ela fica salva pra sempre. A sugestão por geolocalização
    // não é persistida aqui, pra continuar sendo reavaliada a cada visita.
    writeCookie('yw-lang', next, 365)
    writeCookie('yw-lang-explicit', '1', 365)
    localStorage.setItem('yw-lang', next)
    setLangState(next)
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
