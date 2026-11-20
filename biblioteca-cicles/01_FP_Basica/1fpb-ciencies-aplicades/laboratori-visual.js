/**
 * Laboratori Visual i Trencaclosques Tècnics — PDI (1r FPB Ciències Aplicades I)
 * Motor d'interactivitat tàctil i PDI amb Web Audio, snapping magnètic i fitxes d'aprenentatge.
 */

(function() {
  'use strict';

  // --- CONFIGURACIÓ DELS 14 REPTES VISUALS ---
  const CHALLENGES = [
    // 1. ANATOMIA UD7: TORSO HUMÀ
    {
      id: 'torso',
      title: 'Torso Anatòmic i Aparell Digestiu',
      category: 'anatomia',
      unit: 'UD7',
      badge: 'UD7 · Nutrició Humana',
      icon: '🫀',
      desc: 'Acobla els òrgans vitals del tronc humà: cor, pulmons, fetge, estómac, pàncrees, intestins i renyons.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Silueta del tronc humà -->
        <path d="M 320 70 Q 400 90 480 70 Q 560 110 540 220 Q 520 300 500 370 Q 480 430 490 530 L 310 530 Q 320 430 300 370 Q 280 300 260 220 Q 240 110 320 70 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="4" stroke-dasharray="8 6"/>
        <!-- Línia clavicular i costelles de fons -->
        <path d="M 330 110 Q 400 130 470 110" stroke="#cbd5e1" stroke-width="3" fill="none"/>
        <path d="M 310 160 Q 400 190 490 160" stroke="#cbd5e1" stroke-width="2" fill="none"/>
        <path d="M 305 210 Q 400 240 495 210" stroke="#cbd5e1" stroke-width="2" fill="none"/>
        <path d="M 310 260 Q 400 290 490 260" stroke="#cbd5e1" stroke-width="2" fill="none"/>
        <text x="400" y="565" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#64748b">CAVITAT TORÀCICA I ABDOMINAL</text>
      `,
      pieces: [
        {
          id: 'pulmo-dret',
          name: 'Pulmó Dret',
          icon: '🫁',
          targetX: 345,
          targetY: 185,
          tolerance: 50,
          desc: 'Òrgan de l\'aparell respiratori format per 3 lòbuls. Realitza l\'intercanvi d\'oxigen i diòxid de carboni.',
          svg: `<g>
            <path d="M 345 135 C 310 135 305 200 310 235 C 325 245 365 245 375 235 C 385 200 380 135 345 135 Z" fill="#fda4af" stroke="#e11d48" stroke-width="3"/>
            <path d="M 320 180 Q 350 185 365 180" stroke="#e11d48" stroke-width="1.5" fill="none"/>
            <path d="M 320 210 Q 350 215 365 205" stroke="#e11d48" stroke-width="1.5" fill="none"/>
            <text x="345" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#881337">Pulmó D.</text>
          </g>`
        },
        {
          id: 'pulmo-esq',
          name: 'Pulmó Esquerre',
          icon: '🫁',
          targetX: 455,
          targetY: 185,
          tolerance: 50,
          desc: 'Lleugerament més xicotet que el dret (2 lòbuls) per a deixar espai a la cavitat cardíaca.',
          svg: `<g>
            <path d="M 455 135 C 490 135 495 200 490 235 C 475 245 435 245 425 235 C 415 200 420 135 455 135 Z" fill="#fda4af" stroke="#e11d48" stroke-width="3"/>
            <path d="M 480 185 Q 450 190 435 185" stroke="#e11d48" stroke-width="1.5" fill="none"/>
            <text x="455" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#881337">Pulmó E.</text>
          </g>`
        },
        {
          id: 'cor',
          name: 'Cor Humà',
          icon: '❤️',
          targetX: 405,
          targetY: 205,
          tolerance: 50,
          desc: 'Bomba muscular que batega 100.000 vegades al dia impel·lint la sang a través del doble circuit circulatori.',
          svg: `<g>
            <path d="M 405 235 C 385 210 375 190 385 175 C 395 160 405 170 405 175 C 405 170 415 160 425 175 C 435 190 425 210 405 235 Z" fill="#e11d48" stroke="#881337" stroke-width="3"/>
            <circle cx="395" cy="180" r="4" fill="#fb7185"/>
            <circle cx="415" cy="180" r="4" fill="#fb7185"/>
            <text x="405" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Cor</text>
          </g>`
        },
        {
          id: 'fetge',
          name: 'Fetge',
          icon: '🥩',
          targetX: 350,
          targetY: 285,
          tolerance: 50,
          desc: 'La glàndula més gran del cos humà: sintetitza la bilis, emmagatzema glucogen i neteja toxines de la sang.',
          svg: `<g>
            <path d="M 315 265 Q 370 250 395 270 Q 395 305 340 315 Q 315 315 315 265 Z" fill="#b45309" stroke="#78350f" stroke-width="3"/>
            <text x="355" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Fetge</text>
          </g>`
        },
        {
          id: 'estomac',
          name: 'Estómac',
          icon: '🥣',
          targetX: 440,
          targetY: 295,
          tolerance: 50,
          desc: 'Òrgan muscular en forma de "J" que barreja els aliments amb sucs gàstrics (HCl i pepsina) per formar el quim.',
          svg: `<g>
            <path d="M 425 265 Q 460 260 470 280 Q 475 320 445 330 Q 425 330 425 295 Z" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
            <text x="445" y="300" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350f">Estómac</text>
          </g>`
        },
        {
          id: 'pancrees',
          name: 'Pàncrees',
          icon: '🥖',
          targetX: 405,
          targetY: 345,
          tolerance: 50,
          desc: 'Glàndula mixta: segrega suc pancreàtic digestiu i hormones clau per al sucre: insulina i glucagó.',
          svg: `<g>
            <rect x="370" y="335" width="70" height="20" rx="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
            <text x="405" y="350" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">Pàncrees</text>
          </g>`
        },
        {
          id: 'renyons',
          name: 'Renyons (Ronyons)',
          icon: '🫘',
          targetX: 400,
          targetY: 390,
          tolerance: 55,
          desc: 'Filtren la sang contínuament per a eliminar residus nitrogenats (urea) formant l\'orina.',
          svg: `<g>
            <path d="M 330 380 Q 320 395 330 410 Q 345 405 345 390 Q 345 380 330 380 Z" fill="#991b1b" stroke="#450a0a" stroke-width="2.5"/>
            <path d="M 470 380 Q 480 395 470 410 Q 455 405 455 390 Q 455 380 470 380 Z" fill="#991b1b" stroke="#450a0a" stroke-width="2.5"/>
            <text x="338" y="400" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">R.D.</text>
            <text x="462" y="400" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">R.E.</text>
          </g>`
        },
        {
          id: 'intestins',
          name: 'Intestí Prim i Gros',
          icon: '🌀',
          targetX: 400,
          targetY: 450,
          tolerance: 60,
          desc: 'El prim absorbeix nutrients mitjançant vellositats; el gros absorbeix aigua i forma els excrements.',
          svg: `<g>
            <!-- Intestí Gros (exterior) -->
            <rect x="340" y="405" width="120" height="85" rx="20" fill="none" stroke="#ea580c" stroke-width="12" stroke-linecap="round"/>
            <!-- Intestí Prim (interior sinuós) -->
            <rect x="355" y="420" width="90" height="55" rx="12" fill="#fed7aa" stroke="#f97316" stroke-width="3"/>
            <text x="400" y="452" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">Intestins</text>
          </g>`
        }
      ]
    },

    // 2. ANATOMIA UD8: L'ESQUELET HUMÀ
    {
      id: 'esquelet',
      title: "L'Esquelet Humà i Principals Ossos",
      category: 'anatomia',
      unit: 'UD8',
      badge: 'UD8 · Aparell Locomotor',
      icon: '💀',
      desc: 'Munta l\'estructura òssia fonamental: crani, columna, costelles, pelvis, húmer, ràdio, fèmur i tíbia.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <line x1="400" y1="50" x2="400" y2="550" stroke="#e2e8f0" stroke-width="3" stroke-dasharray="6 6"/>
        <text x="400" y="580" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">ESQUELET AXIAL I APENDICULAR (206 OSSOS)</text>
      `,
      pieces: [
        {
          id: 'crani',
          name: 'Crani (Cap)',
          icon: '💀',
          targetX: 400,
          targetY: 90,
          tolerance: 45,
          desc: 'Caixa òssia articulada mitjançant sutures immòbils que protegeix el cervell i allotja els sentits.',
          svg: `<g>
            <circle cx="400" cy="85" r="32" fill="#f1f5f9" stroke="#334155" stroke-width="3"/>
            <rect x="385" y="105" width="30" height="15" rx="4" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
            <circle cx="390" cy="85" r="5" fill="#334155"/>
            <circle cx="410" cy="85" r="5" fill="#334155"/>
            <text x="400" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Crani</text>
          </g>`
        },
        {
          id: 'columna',
          name: 'Columna Vertebral',
          icon: '🦴',
          targetX: 400,
          targetY: 260,
          tolerance: 45,
          desc: 'Eix central de 33 vèrtebres que protegeix la medul·la espinal i sosté el pes del tronc.',
          svg: `<g>
            <rect x="393" y="140" width="14" height="180" rx="5" fill="#e2e8f0" stroke="#475569" stroke-width="2.5"/>
            <line x1="390" y1="165" x2="410" y2="165" stroke="#475569" stroke-width="2"/>
            <line x1="390" y1="195" x2="410" y2="195" stroke="#475569" stroke-width="2"/>
            <line x1="390" y1="225" x2="410" y2="225" stroke="#475569" stroke-width="2"/>
            <line x1="390" y1="255" x2="410" y2="255" stroke="#475569" stroke-width="2"/>
            <line x1="390" y1="285" x2="410" y2="285" stroke="#475569" stroke-width="2"/>
            <text x="400" y="240" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b" transform="rotate(-90 400 240)">Columna Vertebral</text>
          </g>`
        },
        {
          id: 'costelles',
          name: 'Caixa Toràcica (Costelles)',
          icon: '🩻',
          targetX: 400,
          targetY: 200,
          tolerance: 50,
          desc: '12 parells de costelles unides a l\'estèrnum que formen la gàbia protectora de pulmons i cor.',
          svg: `<g>
            <ellipse cx="400" cy="200" rx="60" ry="45" fill="none" stroke="#64748b" stroke-width="4" stroke-dasharray="16 8"/>
            <line x1="400" y1="160" x2="400" y2="235" stroke="#334155" stroke-width="5"/>
            <text x="400" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Costelles</text>
          </g>`
        },
        {
          id: 'pelvis',
          name: 'Pelvis / Cintura Pèlvica',
          icon: '🩲',
          targetX: 400,
          targetY: 335,
          tolerance: 45,
          desc: 'Conjunt ossi (ilió, ísquion i pubis) que transfereix el pes del cos cap a les cames.',
          svg: `<g>
            <path d="M 345 320 Q 400 350 455 320 Q 440 365 400 375 Q 360 365 345 320 Z" fill="#f1f5f9" stroke="#334155" stroke-width="3"/>
            <ellipse cx="375" cy="340" rx="10" ry="7" fill="#cbd5e1"/>
            <ellipse cx="425" cy="340" rx="10" ry="7" fill="#cbd5e1"/>
            <text x="400" y="355" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">Pelvis</text>
          </g>`
        },
        {
          id: 'humer',
          name: 'Húmer (Braç)',
          icon: '🦾',
          targetX: 310,
          targetY: 220,
          tolerance: 45,
          desc: 'L\'os més llarg de l\'extremitat superior; connecta l\'escàpula (muscle) amb el colze.',
          svg: `<g>
            <line x1="330" y1="175" x2="290" y2="265" stroke="#cbd5e1" stroke-width="12" stroke-linecap="round"/>
            <line x1="330" y1="175" x2="290" y2="265" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
            <circle cx="330" cy="175" r="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
            <circle cx="290" cy="265" r="7" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
            <text x="300" y="225" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Húmer</text>
          </g>`
        },
        {
          id: 'cubit-radio',
          name: 'Cúbit i Ràdio (Avantbraç)',
          icon: '🖐️',
          targetX: 265,
          targetY: 330,
          tolerance: 45,
          desc: 'Parella d\'ossos que permeten el gir de la mà (pronació i supinació).',
          svg: `<g>
            <line x1="285" y1="275" x2="250" y2="380" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
            <line x1="275" y1="275" x2="240" y2="380" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>
            <text x="250" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Ràdio/Cúbit</text>
          </g>`
        },
        {
          id: 'femur',
          name: 'Fèmur (Cuixa)',
          icon: '🦵',
          targetX: 360,
          targetY: 430,
          tolerance: 50,
          desc: 'L\'os més fort, dens i llarg de tot el cos humà; suporta fins a 30 vegades el pes corporal.',
          svg: `<g>
            <line x1="380" y1="365" x2="345" y2="490" stroke="#e2e8f0" stroke-width="15" stroke-linecap="round"/>
            <line x1="380" y1="365" x2="345" y2="490" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
            <circle cx="380" cy="365" r="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
            <circle cx="345" cy="490" r="9" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
            <text x="355" y="435" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Fèmur</text>
          </g>`
        },
        {
          id: 'tibia',
          name: 'Tíbia i Peroné (Cama)',
          icon: '🦶',
          targetX: 345,
          targetY: 535,
          tolerance: 50,
          desc: 'Ossos de la cama que sostenen el peu; la tíbia és l\'os que suporta la càrrega principal.',
          svg: `<g>
            <line x1="345" y1="495" x2="345" y2="575" stroke="#cbd5e1" stroke-width="12" stroke-linecap="round"/>
            <line x1="345" y1="495" x2="345" y2="575" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
            <line x1="332" y1="500" x2="332" y2="570" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
            <text x="350" y="540" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Tíbia/Peroné</text>
          </g>`
        }
      ]
    },

    // 3. ANATOMIA UD8: L'ULL HUMÀ
    {
      id: 'ull',
      title: "Anatomia de l'Ull Humà",
      category: 'anatomia',
      unit: 'UD8',
      badge: 'UD8 · Òrgans dels Sentits',
      icon: '👁️',
      desc: 'Munta les lents i capes oculars: còrnia, iris, nineta, cristal·lí, humor vitri, retina i nervi òptic.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Globus ocular buit -->
        <circle cx="420" cy="300" r="170" fill="#ffffff" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="8 6"/>
        <text x="420" y="520" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">SECCIÓ SAGITAL DE L'ULL (FOTORECEPTORS)</text>
      `,
      pieces: [
        {
          id: 'cornea',
          name: 'Còrnia',
          icon: '🛡️',
          targetX: 250,
          targetY: 300,
          tolerance: 45,
          desc: 'Finestra transparent corbada davantera que proporciona dos terços de la potència focal de l\'ull.',
          svg: `<g>
            <path d="M 260 220 Q 220 300 260 380" stroke="#38bdf8" stroke-width="12" fill="none" stroke-linecap="round"/>
            <text x="235" y="305" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">Còrnia</text>
          </g>`
        },
        {
          id: 'iris-nineta',
          name: 'Iris i Nineta (Pupil·la)',
          icon: '🧿',
          targetX: 285,
          targetY: 300,
          tolerance: 45,
          desc: 'Diafragma muscular amb color que regula la quantitat de llum que entra a l\'ull dilatant o contraient la nineta.',
          svg: `<g>
            <line x1="285" y1="230" x2="285" y2="280" stroke="#0284c7" stroke-width="10" stroke-linecap="round"/>
            <line x1="285" y1="320" x2="285" y2="370" stroke="#0284c7" stroke-width="10" stroke-linecap="round"/>
            <circle cx="285" cy="300" r="14" fill="#0f172a"/>
            <text x="290" y="275" font-size="10" font-weight="bold" fill="#ffffff">Iris</text>
          </g>`
        },
        {
          id: 'cristalli',
          name: 'Cristal·lí (Lent Biconvexa)',
          icon: '🔍',
          targetX: 325,
          targetY: 300,
          tolerance: 45,
          desc: 'Lent flexible que canvia de curvatura (acomodació) per enfocar objectes pròxims o llunyans.',
          svg: `<g>
            <ellipse cx="325" cy="300" rx="16" ry="45" fill="#bae6fd" stroke="#0ea5e9" stroke-width="3"/>
            <text x="325" y="305" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Cristal·lí</text>
          </g>`
        },
        {
          id: 'humor-vitri',
          name: 'Humor Vitri',
          icon: '💧',
          targetX: 420,
          targetY: 300,
          tolerance: 55,
          desc: 'Substància gelatinosa i transparent que omple la major part del globus ocular mantenint la seua forma esfèrica.',
          svg: `<g>
            <circle cx="420" cy="300" r="95" fill="rgba(224, 242, 254, 0.65)" stroke="#38bdf8" stroke-width="2"/>
            <text x="420" y="305" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">Humor Vitri</text>
          </g>`
        },
        {
          id: 'retina',
          name: 'Retina (Fons d\'ull)',
          icon: '🌈',
          targetX: 550,
          targetY: 300,
          tolerance: 45,
          desc: 'Capa sensorial posterior amb milions de bastons (visió nocturna) i cons (visió en color de detall).',
          svg: `<g>
            <path d="M 520 170 Q 590 300 520 430" stroke="#f59e0b" stroke-width="12" fill="none" stroke-linecap="round"/>
            <text x="560" y="305" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Retina</text>
          </g>`
        },
        {
          id: 'nervi-optic',
          name: 'Nervi Òptic',
          icon: '⚡',
          targetX: 630,
          targetY: 300,
          tolerance: 45,
          desc: 'Cable biològic d\'un milió de fibres nervioses que transmet els impulsos visuals fins al lòbul occipital del cervell.',
          svg: `<g>
            <path d="M 580 290 Q 640 290 680 320" stroke="#fbbf24" stroke-width="16" fill="none" stroke-linecap="round"/>
            <text x="635" y="305" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350f">Nervi Òptic</text>
          </g>`
        }
      ]
    },

    // 4. ANATOMIA UD9: APARELLS REPRODUCTORS
    {
      id: 'reproductor',
      title: 'Aparells Reproductors Humà',
      category: 'anatomia',
      unit: 'UD9',
      badge: 'UD9 · Reproducció Humana',
      icon: '🧬',
      desc: 'Distingeix els òrgans clau de la reproducció: ovaris, trompes, úter, testicles, conducte deferent i pròstata.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <line x1="400" y1="40" x2="400" y2="540" stroke="#cbd5e1" stroke-width="2"/>
        <text x="240" y="80" text-anchor="middle" font-size="16" font-weight="800" fill="#ec4899">APARELL FEMENÍ</text>
        <text x="560" y="80" text-anchor="middle" font-size="16" font-weight="800" fill="#0284c7">APARELL MASCULÍ</text>
      `,
      pieces: [
        {
          id: 'uter',
          name: 'Úter (Matriu)',
          icon: '🍐',
          targetX: 240,
          targetY: 300,
          tolerance: 45,
          desc: 'Òrgan buit en forma de pera on s\'implanta l\'embrió i es desenvolupa el fetus durant la gestació.',
          svg: `<g>
            <path d="M 210 260 Q 240 270 270 260 L 255 340 L 225 340 Z" fill="#f472b6" stroke="#db2777" stroke-width="3"/>
            <text x="240" y="305" text-anchor="middle" font-size="11" font-weight="bold" fill="#831843">Úter</text>
          </g>`
        },
        {
          id: 'ovaris',
          name: 'Ovaris i Trompes',
          icon: '🥚',
          targetX: 240,
          targetY: 235,
          tolerance: 45,
          desc: 'Les trompes condueixen l\'òvul des de l\'ovari fins a l\'úter; és on habitualment es produeix la fecundació.',
          svg: `<g>
            <path d="M 160 240 Q 240 210 320 240" stroke="#f43f5e" stroke-width="6" fill="none"/>
            <circle cx="160" cy="245" r="14" fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
            <circle cx="320" cy="245" r="14" fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
            <text x="240" y="215" text-anchor="middle" font-size="10" font-weight="bold" fill="#9f1239">Trompes i Ovaris</text>
          </g>`
        },
        {
          id: 'vagina',
          name: 'Vagina / Canal del Part',
          icon: '🚪',
          targetX: 240,
          targetY: 395,
          tolerance: 45,
          desc: 'Conducte musculoelàstic que connecta el coll de l\'úter amb l\'exterior.',
          svg: `<g>
            <rect x="225" y="355" width="30" height="80" rx="8" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
            <text x="240" y="400" text-anchor="middle" font-size="11" font-weight="bold" fill="#831843">Vagina</text>
          </g>`
        },
        {
          id: 'testicles',
          name: 'Testicles (Gònades)',
          icon: '🥜',
          targetX: 560,
          targetY: 420,
          tolerance: 45,
          desc: 'Gònades masculines allotjades a l\'escrot; produeixen espermatozoides i testosterona.',
          svg: `<g>
            <ellipse cx="540" cy="420" rx="16" ry="22" fill="#93c5fd" stroke="#2563eb" stroke-width="2.5"/>
            <ellipse cx="580" cy="420" rx="16" ry="22" fill="#93c5fd" stroke="#2563eb" stroke-width="2.5"/>
            <text x="560" y="425" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">Testicles</text>
          </g>`
        },
        {
          id: 'conducte-def',
          name: 'Conductes Deferents',
          icon: '〰️',
          targetX: 560,
          targetY: 320,
          tolerance: 45,
          desc: 'Tubs que transporten els espermatozoides des de l\'epidídim fins a la uretra.',
          svg: `<g>
            <path d="M 540 400 Q 500 320 545 270" stroke="#38bdf8" stroke-width="5" fill="none"/>
            <path d="M 580 400 Q 620 320 575 270" stroke="#38bdf8" stroke-width="5" fill="none"/>
            <text x="560" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">C. Deferents</text>
          </g>`
        },
        {
          id: 'prostata',
          name: 'Pròstata i Vesícules Seminals',
          icon: '🌰',
          targetX: 560,
          targetY: 250,
          tolerance: 45,
          desc: 'Glàndules que segreguen el líquid seminal nutritiu que acompanya i protegeix els gàmetes.',
          svg: `<g>
            <circle cx="560" cy="250" r="22" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
            <text x="560" y="255" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">Pròstata</text>
          </g>`
        }
      ]
    },

    // 5. QUÍMICA UD1: DESTIL·LACIÓ SIMPLE
    {
      id: 'destil',
      title: 'Muntatge de Destil·lació Simple',
      category: 'quimica',
      unit: 'UD1',
      badge: 'UD1 · Laboratori Químic',
      icon: '🧪',
      desc: 'Munta l\'equip de separació de mescles homogènies basat en els punts d\'ebullició dels líquids.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Taula de laboratori -->
        <rect x="80" y="490" width="640" height="25" fill="#475569" rx="4"/>
        <rect x="120" y="515" width="20" height="70" fill="#334155"/>
        <rect x="660" y="515" width="20" height="70" fill="#334155"/>
        <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">DESTIL·LACIÓ SIMPLE (SEPARACIÓ PER PUNTS D'EBULLICIÓ)</text>
      `,
      pieces: [
        {
          id: 'suport',
          name: 'Suport Universal i Pinça',
          icon: '🏗️',
          targetX: 200,
          targetY: 340,
          tolerance: 50,
          desc: 'Base de ferro massissa amb tija vertical i nous per sostenir el material de vidre a l\'altura desitjada.',
          svg: `<g>
            <rect x="150" y="480" width="100" height="12" fill="#1e293b"/>
            <rect x="195" y="160" width="10" height="320" fill="#64748b"/>
            <line x1="205" y1="310" x2="260" y2="310" stroke="#0f172a" stroke-width="5"/>
            <text x="200" y="220" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Suport</text>
          </g>`
        },
        {
          id: 'bunsen',
          name: 'Bec Bunsen (Font de Calor)',
          icon: '🔥',
          targetX: 260,
          targetY: 440,
          tolerance: 45,
          desc: 'Cremador de gas que regula l\'entrada d\'oxigen per obtenir una flama blava d\'alta temperatura.',
          svg: `<g>
            <rect x="245" y="450" width="30" height="38" fill="#475569" rx="3"/>
            <polygon points="260,400 250,448 270,448" fill="#38bdf8"/>
            <polygon points="260,410 254,448 266,448" fill="#f59e0b"/>
            <text x="260" y="475" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Bunsen</text>
          </g>`
        },
        {
          id: 'matras',
          name: 'Matràs de Destil·lació',
          icon: '🏺',
          targetX: 260,
          targetY: 320,
          tolerance: 45,
          desc: 'Recipient esfèric de vidre borosilicat amb tub lateral per a la sortida dels vapors escalfats.',
          svg: `<g>
            <circle cx="260" cy="340" r="32" fill="rgba(186, 230, 253, 0.45)" stroke="#0284c7" stroke-width="3"/>
            <rect x="253" y="270" width="14" height="45" fill="rgba(186, 230, 253, 0.45)" stroke="#0284c7" stroke-width="3"/>
            <line x1="267" y1="285" x2="310" y2="305" stroke="#0284c7" stroke-width="4"/>
            <text x="260" y="345" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Matràs</text>
          </g>`
        },
        {
          id: 'termometre',
          name: 'Termòmetre de Precisió',
          icon: '🌡️',
          targetX: 260,
          targetY: 225,
          tolerance: 40,
          desc: 'El bulb s\'ha de col·locar a l\'altura de l\'eixida lateral per mesurar la temperatura exacta del vapor.',
          svg: `<g>
            <line x1="260" y1="165" x2="260" y2="285" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
            <circle cx="260" cy="285" r="5" fill="#ef4444"/>
            <text x="280" y="200" font-size="10" font-weight="bold" fill="#b91c1c">Termòmetre</text>
          </g>`
        },
        {
          id: 'refrigerant',
          name: 'Tub Refrigerant (Liebig)',
          icon: '❄️',
          targetX: 430,
          targetY: 360,
          tolerance: 50,
          desc: 'Doble camisa de vidre: l\'aigua freda circula per fora i condensa el vapor intern de nou a líquid.',
          svg: `<g>
            <line x1="310" y1="305" x2="540" y2="415" stroke="#0284c7" stroke-width="14" stroke-linecap="round"/>
            <line x1="310" y1="305" x2="540" y2="415" stroke="#bae6fd" stroke-width="6" stroke-linecap="round"/>
            <!-- Preses d'aigua freda -->
            <line x1="510" y1="400" x2="510" y2="370" stroke="#0369a1" stroke-width="3"/>
            <line x1="350" y1="325" x2="350" y2="295" stroke="#0369a1" stroke-width="3"/>
            <text x="430" y="345" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Refrigerant Liebig</text>
          </g>`
        },
        {
          id: 'vas-recollidor',
          name: 'Vas Erlenmeyer (Recol·lector)',
          icon: '🧪',
          targetX: 575,
          targetY: 450,
          tolerance: 45,
          desc: 'Recull el destil·lat pur condensat gota a gota.',
          svg: `<g>
            <polygon points="550,478 600,478 585,420 565,420" fill="rgba(167, 243, 208, 0.45)" stroke="#059669" stroke-width="3"/>
            <text x="575" y="465" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Erlenmeyer</text>
          </g>`
        }
      ]
    },

    // 6. QUÍMICA UD2: ÀTOM DE CARBONI (BOHR)
    {
      id: 'atom',
      title: "Model Atòmic de Bohr (Carboni-12)",
      category: 'quimica',
      unit: 'UD2',
      badge: 'UD2 · Estructura de la Matèria',
      icon: '⚛️',
      desc: 'Construeix un àtom neutre de Carboni (Z=6): nucli central, capa K interna (2 e-) i capa L de valència (4 e-).',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Capa K (orbital intern) -->
        <circle cx="400" cy="300" r="90" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
        <!-- Capa L (orbital extern) -->
        <circle cx="400" cy="300" r="170" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
        <text x="400" y="70" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">ÀTOM DE CARBONI (Z=6, A=12)</text>
        <text x="400" y="555" text-anchor="middle" font-size="13" font-weight="600" fill="#475569">Capa K: màx 2 electrons · Capa L: 4 electrons de valència</text>
      `,
      pieces: [
        {
          id: 'nucli',
          name: 'Nucli (6 Protons + 6 Neutrons)',
          icon: '🔴',
          targetX: 400,
          targetY: 300,
          tolerance: 45,
          desc: 'Concentra el 99,9% de la massa de l\'àtom unit per la força nuclear forta.',
          svg: `<g>
            <circle cx="400" cy="300" r="38" fill="#ef4444" stroke="#b91c1c" stroke-width="3"/>
            <circle cx="390" cy="290" r="10" fill="#f87171"/>
            <circle cx="410" cy="290" r="10" fill="#94a3b8"/>
            <circle cx="400" cy="310" r="10" fill="#94a3b8"/>
            <text x="400" y="303" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">6p⁺ + 6n⁰</text>
          </g>`
        },
        {
          id: 'e-k1',
          name: 'Electró Capa K (Dalt)',
          icon: '🔵',
          targetX: 400,
          targetY: 210,
          tolerance: 40,
          desc: 'Electró del primer nivell d\'energia més pròxim al nucli atòmic.',
          svg: `<g>
            <circle cx="400" cy="210" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5"/>
            <text x="400" y="214" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">e⁻</text>
          </g>`
        },
        {
          id: 'e-k2',
          name: 'Electró Capa K (Baix)',
          icon: '🔵',
          targetX: 400,
          targetY: 390,
          tolerance: 40,
          desc: 'Completa la capa interna K (màxim 2 electrons admesos).',
          svg: `<g>
            <circle cx="400" cy="390" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5"/>
            <text x="400" y="394" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">e⁻</text>
          </g>`
        },
        {
          id: 'e-l1',
          name: 'Electró Capa L (Superior)',
          icon: '🟡',
          targetX: 400,
          targetY: 130,
          tolerance: 40,
          desc: 'Electró de valència del segon nivell; participa en la formació d\'enllaços covalents.',
          svg: `<g>
            <circle cx="400" cy="130" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2.5"/>
            <text x="400" y="134" text-anchor="middle" font-size="12" font-weight="bold" fill="#713f12">e⁻</text>
          </g>`
        },
        {
          id: 'e-l2',
          name: 'Electró Capa L (Dreta)',
          icon: '🟡',
          targetX: 570,
          targetY: 300,
          tolerance: 40,
          desc: 'Segon electró de la capa externa de valència del Carboni.',
          svg: `<g>
            <circle cx="570" cy="300" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2.5"/>
            <text x="570" y="304" text-anchor="middle" font-size="12" font-weight="bold" fill="#713f12">e⁻</text>
          </g>`
        },
        {
          id: 'e-l3',
          name: 'Electró Capa L (Inferior)',
          icon: '🟡',
          targetX: 400,
          targetY: 470,
          tolerance: 40,
          desc: 'Tercer electró perifèric de valència.',
          svg: `<g>
            <circle cx="400" cy="470" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2.5"/>
            <text x="400" y="474" text-anchor="middle" font-size="12" font-weight="bold" fill="#713f12">e⁻</text>
          </g>`
        },
        {
          id: 'e-l4',
          name: 'Electró Capa L (Esquerra)',
          icon: '🟡',
          targetX: 230,
          targetY: 300,
          tolerance: 40,
          desc: 'Quart electró de valència que atorga al Carboni la seua capacitat tetravalent per formar compostos orgànics.',
          svg: `<g>
            <circle cx="230" cy="300" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2.5"/>
            <text x="230" y="304" text-anchor="middle" font-size="12" font-weight="bold" fill="#713f12">e⁻</text>
          </g>`
        }
      ]
    },

    // 7. FÍSICA UD5: CIRCUIT DE REFRIGERACIÓ DEL MOTOR
    {
      id: 'calor',
      title: 'Circuit de Refrigeració del Motor',
      category: 'quimica',
      unit: 'UD5',
      badge: 'UD5 · Màquines i Energia Tèrmica',
      icon: '🚗',
      desc: 'Connecta el circuit tancat que manté la temperatura de servei del motor (90°C) i evita que gripe.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Conductes de líquid refrigerant -->
        <path d="M 330 250 L 530 250 L 530 380 L 330 380 Z" stroke="#cbd5e1" stroke-width="14" fill="none" stroke-linejoin="round"/>
        <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">CIRCUIT DE REFRIGERACIÓ PER LÍQUID (TALLER D'AUTOMOCIÓ)</text>
      `,
      pieces: [
        {
          id: 'bloc-motor',
          name: 'Bloc Motor (Font de Calor)',
          icon: '🏎️',
          targetX: 250,
          targetY: 315,
          tolerance: 50,
          desc: 'On es produeixen les explosions de gasolina/dièsel. Les càmeres interiors fan circular l\'anticongelant.',
          svg: `<g>
            <rect x="190" y="250" width="120" height="130" rx="8" fill="#334155" stroke="#0f172a" stroke-width="4"/>
            <circle cx="230" cy="290" r="14" fill="#64748b"/>
            <circle cx="270" cy="290" r="14" fill="#64748b"/>
            <circle cx="230" cy="340" r="14" fill="#64748b"/>
            <circle cx="270" cy="340" r="14" fill="#64748b"/>
            <text x="250" y="385" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Bloc Motor</text>
          </g>`
        },
        {
          id: 'termostat',
          name: 'Termòstat (Vàlvula Tèrmica)',
          icon: '🌡️',
          targetX: 370,
          targetY: 250,
          tolerance: 45,
          desc: 'S\'obri automàticament a 88-90°C deixant passar l\'anticongelant calent cap al radiador.',
          svg: `<g>
            <circle cx="370" cy="250" r="22" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
            <text x="370" y="254" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Termòstat</text>
          </g>`
        },
        {
          id: 'radiador',
          name: 'Radiador Frontal',
          icon: '🧊',
          targetX: 580,
          targetY: 315,
          tolerance: 50,
          desc: 'Bateria d\'aletes d\'alumini que refreda el líquid mitjançant l\'aire exterior de la marxa del vehicle.',
          svg: `<g>
            <rect x="540" y="240" width="80" height="150" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
            <!-- Aletes -->
            <line x1="550" y1="260" x2="610" y2="260" stroke="#bae6fd" stroke-width="2"/>
            <line x1="550" y1="280" x2="610" y2="280" stroke="#bae6fd" stroke-width="2"/>
            <line x1="550" y1="300" x2="610" y2="300" stroke="#bae6fd" stroke-width="2"/>
            <line x1="550" y1="320" x2="610" y2="320" stroke="#bae6fd" stroke-width="2"/>
            <line x1="550" y1="340" x2="610" y2="340" stroke="#bae6fd" stroke-width="2"/>
            <line x1="550" y1="360" x2="610" y2="360" stroke="#bae6fd" stroke-width="2"/>
            <text x="580" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Radiador</text>
          </g>`
        },
        {
          id: 'ventilador',
          name: 'Electroventilador',
          icon: '🪭',
          targetX: 670,
          targetY: 315,
          tolerance: 45,
          desc: 'Es dispara si el vehicle està aturat o puja una pendent forta per forçar un corrent d\'aire sobre el radiador.',
          svg: `<g>
            <circle cx="670" cy="315" r="32" fill="#0f172a" stroke="#334155" stroke-width="3"/>
            <circle cx="670" cy="315" r="8" fill="#38bdf8"/>
            <line x1="670" y1="290" x2="670" y2="340" stroke="#94a3b8" stroke-width="4"/>
            <line x1="645" y1="315" x2="695" y2="315" stroke="#94a3b8" stroke-width="4"/>
            <text x="670" y="360" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Ventilador</text>
          </g>`
        },
        {
          id: 'bomba-aigua',
          name: "Bomba d'Aigua Mecànica",
          icon: '🔄',
          targetX: 370,
          targetY: 380,
          tolerance: 45,
          desc: 'Moguda per la corretja de distribució, impulsa el cabal continu d\'anticongelant per tot el circuit.',
          svg: `<g>
            <circle cx="370" cy="380" r="22" fill="#64748b" stroke="#1e293b" stroke-width="3"/>
            <circle cx="370" cy="380" r="7" fill="#f8fafc"/>
            <text x="370" y="384" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Bomba</text>
          </g>`
        },
        {
          id: 'vas-expansio',
          name: "Vas d'Expansió (Dipòsit)",
          icon: '🏺',
          targetX: 470,
          targetY: 170,
          tolerance: 45,
          desc: 'Compensa els canvis de volum del líquid en escalfar-se i manté la pressió del circuit estable.',
          svg: `<g>
            <rect x="445" y="145" width="50" height="50" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
            <line x1="450" y1="175" x2="490" y2="175" stroke="#38bdf8" stroke-width="2"/>
            <text x="470" y="178" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">Expansió</text>
          </g>`
        }
      ]
    },

    // 8. GEOLOGIA UD3: ESTRUCTURA D'UN VOLCÀ
    {
      id: 'volca',
      title: "Estructura d'un Volcà Actiu",
      category: 'geologia',
      unit: 'UD3',
      badge: 'UD3 · Dinàmica Interna de la Terra',
      icon: '🌋',
      desc: 'Munta l\'anatomia volcànica: cambra magmàtica profunda, xemeneia, con volcànic, cràter i colades.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Perfil del relleu terrestre -->
        <polygon points="100,480 340,240 460,240 700,480" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
        <line x1="50" y1="480" x2="750" y2="480" stroke="#64748b" stroke-width="4"/>
        <text x="400" y="565" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">VOLCANISME: RELACIÓ ENTRE MANTELL I SUPERFÍCIE</text>
      `,
      pieces: [
        {
          id: 'cambra',
          name: 'Cambra Magmàtica',
          icon: '🔥',
          targetX: 400,
          targetY: 510,
          tolerance: 50,
          desc: 'Bossa de roca fosa a alta pressió situada a quilòmetres sota terra a la litosfera.',
          svg: `<g>
            <ellipse cx="400" cy="510" rx="70" ry="35" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>
            <text x="400" y="515" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Cambra Magmàtica</text>
          </g>`
        },
        {
          id: 'xemeneia',
          name: 'Xemeneia Principal',
          icon: '🌪️',
          targetX: 400,
          targetY: 360,
          tolerance: 45,
          desc: 'Conducte vertical pel qual ascendeix el magma impulsat pels gasos dissolts.',
          svg: `<g>
            <rect x="385" y="270" width="30" height="190" fill="#ea580c" stroke="#c2410c" stroke-width="3"/>
            <text x="400" y="370" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff" transform="rotate(-90 400 370)">Xemeneia</text>
          </g>`
        },
        {
          id: 'crater',
          name: 'Cràter Volcànic',
          icon: '🕳️',
          targetX: 400,
          targetY: 235,
          tolerance: 45,
          desc: 'Obertura superior en forma d\'embut per on brollen la lava i els materials piroclàstics.',
          svg: `<g>
            <ellipse cx="400" cy="235" rx="45" ry="16" fill="#78350f" stroke="#451a03" stroke-width="3"/>
            <text x="400" y="240" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Cràter</text>
          </g>`
        },
        {
          id: 'con-volcanic',
          name: 'Con Volcànic',
          icon: '⛰️',
          targetX: 400,
          targetY: 330,
          tolerance: 50,
          desc: 'Muntanya formada per l\'acumulació successiva de capes de lava solidificada i cendres.',
          svg: `<g>
            <polygon points="310,430 400,260 490,430" fill="#b45309" stroke="#78350f" stroke-width="3" opacity="0.85"/>
            <text x="400" y="350" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Con Volcànic</text>
          </g>`
        },
        {
          id: 'fumerola',
          name: 'Fumerola i Núvol de Cendra',
          icon: '☁️',
          targetX: 400,
          targetY: 130,
          tolerance: 50,
          desc: 'Emissió de vapor d\'aigua, gasos de sofre i partícules piroclàstiques que poden formar una columna eruptiva.',
          svg: `<g>
            <ellipse cx="400" cy="130" rx="60" ry="30" fill="#64748b" stroke="#334155" stroke-width="2.5"/>
            <text x="400" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Cendres i Gasos</text>
          </g>`
        },
        {
          id: 'colada-lava',
          name: 'Colada de Lava',
          icon: '🌊',
          targetX: 520,
          targetY: 350,
          tolerance: 45,
          desc: 'Riu de magma fos a més de 900°C que llisca pel pendent del con volcànic.',
          svg: `<g>
            <path d="M 430 250 Q 480 320 560 430" stroke="#f97316" stroke-width="12" fill="none" stroke-linecap="round"/>
            <text x="520" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c">Colada Lava</text>
          </g>`
        }
      ]
    },

    // 9. GEOLOGIA UD3: CAPES DE LA TERRA
    {
      id: 'terra',
      title: 'Capes Internes de la Geosfera',
      category: 'geologia',
      unit: 'UD3',
      badge: 'UD3 · Estructura de la Geosfera',
      icon: '🌍',
      desc: 'Ordena concèntricament la Terra des de la superfície fins al centre: escorça, mantells i nuclis.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <line x1="400" y1="40" x2="400" y2="540" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="400" y="565" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">MODEL GEOQUÍMIC DE L'INTERIOR DE LA TERRA (R = 6.371 km)</text>
      `,
      pieces: [
        {
          id: 'escorca',
          name: 'Escorça Terrestre (Litosfera)',
          icon: '🏔️',
          targetX: 400,
          targetY: 100,
          tolerance: 45,
          desc: 'Capa sòlida més fina (entre 5 km a l\'oceà i 70 km a les serralades). On vivim i extraiem minerals.',
          svg: `<g>
            <rect x="250" y="80" width="300" height="40" rx="8" fill="#15803d" stroke="#166534" stroke-width="3"/>
            <text x="400" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Escorça (0 - 70 km)</text>
          </g>`
        },
        {
          id: 'mantell-sup',
          name: 'Mantell Superior',
          icon: '🪨',
          targetX: 400,
          targetY: 180,
          tolerance: 45,
          desc: 'Roca plàstica calenta (peridotita); els seus corrents de convecció mouen les plaques tectòniques.',
          svg: `<g>
            <rect x="250" y="155" width="300" height="50" rx="8" fill="#ca8a04" stroke="#a16207" stroke-width="3"/>
            <text x="400" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Mantell Superior (fins a 670 km)</text>
          </g>`
        },
        {
          id: 'mantell-inf',
          name: 'Mantell Inferior (Mesosfera)',
          icon: '🔥',
          targetX: 400,
          targetY: 270,
          tolerance: 45,
          desc: 'Capa massissa sotmesa a pressions enormes que representa més del 55% del volum de la Terra.',
          svg: `<g>
            <rect x="250" y="240" width="300" height="60" rx="8" fill="#ea580c" stroke="#c2410c" stroke-width="3"/>
            <text x="400" y="275" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Mantell Inferior (fins a 2.900 km)</text>
          </g>`
        },
        {
          id: 'nucli-ext',
          name: 'Nucli Extern (Líquid)',
          icon: '🌊',
          targetX: 400,
          targetY: 375,
          tolerance: 45,
          desc: 'Ferro i níquel líquids a 4.000°C en moviment continu. Genera el camp magnètic terrestre!',
          svg: `<g>
            <rect x="250" y="340" width="300" height="70" rx="8" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>
            <text x="400" y="380" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Nucli Extern Líquid (fins a 5.150 km)</text>
          </g>`
        },
        {
          id: 'nucli-int',
          name: 'Nucli Intern (Sòlid)',
          icon: '⚪',
          targetX: 400,
          targetY: 480,
          tolerance: 45,
          desc: 'Esfera metàl·lica sòlida a 6.000°C (temperatura de la superfície solar) mantinguda rígida per la pressió colossal.',
          svg: `<g>
            <rect x="250" y="450" width="300" height="60" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
            <text x="400" y="485" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">Nucli Intern Sòlid (Centre a 6.371 km)</text>
          </g>`
        }
      ]
    },

    // 10. ENERGIA UD4: CENTRAL HIDROELÈCTRICA
    {
      id: 'central',
      title: "Cadena d'una Central Hidroelèctrica",
      category: 'geologia',
      unit: 'UD4',
      badge: 'UD4 · Energies Renovables',
      icon: '⚡',
      desc: 'Munta la transformació energètica: Ep gravitatòria -> Ec de l\'aigua -> Ec de gir -> E elèctrica.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <text x="400" y="565" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">CADENA DE GENERACIÓ: HIDRÀULICA A ELÈCTRICA</text>
      `,
      pieces: [
        {
          id: 'embassament',
          name: "Presa i Embassament d'Aigua",
          icon: '🏞️',
          targetX: 180,
          targetY: 220,
          tolerance: 50,
          desc: 'Reté milions de litres d\'aigua a gran altura per acumular energia potencial gravitatòria (Ep = m·g·h).',
          svg: `<g>
            <path d="M 110 180 L 230 180 L 245 280 L 140 280 Z" fill="#0284c7" opacity="0.6"/>
            <polygon points="210,180 250,180 270,300 220,300" fill="#64748b" stroke="#334155" stroke-width="3"/>
            <text x="180" y="240" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Embassament</text>
          </g>`
        },
        {
          id: 'canonada',
          name: 'Canonada Forçada a Pressió',
          icon: '↘️',
          targetX: 320,
          targetY: 340,
          tolerance: 45,
          desc: 'Tub d\'acer inclinat que canalitza l\'aigua convertint l\'energia potencial en energia cinètica d\'alta velocitat.',
          svg: `<g>
            <line x1="250" y1="280" x2="390" y2="410" stroke="#334155" stroke-width="16" stroke-linecap="round"/>
            <line x1="250" y1="280" x2="390" y2="410" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
            <text x="320" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Canonada Forçada</text>
          </g>`
        },
        {
          id: 'turbina',
          name: 'Turbina Hidràulica (Francis/Pelton)',
          icon: '⚙️',
          targetX: 420,
          targetY: 420,
          tolerance: 45,
          desc: 'Els catúfols reben l\'impacte de l\'aigua i fan girar l\'eix central a gran velocitat mecànica.',
          svg: `<g>
            <circle cx="420" cy="420" r="28" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
            <line x1="420" y1="395" x2="420" y2="445" stroke="#78350f" stroke-width="4"/>
            <line x1="395" y1="420" x2="445" y2="420" stroke="#78350f" stroke-width="4"/>
            <text x="420" y="465" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Turbina</text>
          </g>`
        },
        {
          id: 'alternador',
          name: 'Alternador / Generador Elèctric',
          icon: '🔌',
          targetX: 420,
          targetY: 280,
          tolerance: 45,
          desc: 'Inducció electromagnètica: un rotor magnètic gira dins de bobines de coure generant corrent altern trifàsic.',
          svg: `<g>
            <rect x="390" y="250" width="60" height="60" rx="8" fill="#10b981" stroke="#047857" stroke-width="3"/>
            <line x1="420" y1="310" x2="420" y2="390" stroke="#0f172a" stroke-width="5"/>
            <text x="420" y="285" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Generador</text>
          </g>`
        },
        {
          id: 'transformador',
          name: 'Transformador i Línia AT',
          icon: '🗼',
          targetX: 600,
          targetY: 280,
          tolerance: 50,
          desc: 'Eleva la tensió a 220.000 V o 400.000 V per transportar l\'electricitat amb pèrdues mínimes per efecte Joule.',
          svg: `<g>
            <rect x="530" y="255" width="50" height="50" rx="6" fill="#6366f1" stroke="#4338ca" stroke-width="3"/>
            <!-- Torre d'alta tensió -->
            <line x1="640" y1="200" x2="620" y2="320" stroke="#334155" stroke-width="3"/>
            <line x1="640" y1="200" x2="660" y2="320" stroke="#334155" stroke-width="3"/>
            <line x1="615" y1="230" x2="665" y2="230" stroke="#334155" stroke-width="2"/>
            <text x="595" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e1b4b">Xarxa Elèctrica</text>
          </g>`
        }
      ]
    },

    // 11. MATEMÀTIQUES MAT 2: TREN D'ENGRANATGES
    {
      id: 'engranatges',
      title: "Tren d'Engranatges i Transmissió",
      category: 'mates',
      unit: 'MAT 2',
      badge: 'MAT 2 · Proporcionalitat i Taller',
      icon: '⚙️',
      desc: 'Acobla les rodes dentades segons la seua mida (Z=12, 24, 36, 48) per calcular relacions de transmissió.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Banc de transmissió amb eixos de fixació -->
        <line x1="100" y1="300" x2="700" y2="300" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round"/>
        <circle cx="180" cy="300" r="10" fill="#64748b"/>
        <circle cx="310" cy="300" r="10" fill="#64748b"/>
        <circle cx="460" cy="300" r="10" fill="#64748b"/>
        <circle cx="630" cy="300" r="10" fill="#64748b"/>
        <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">PROPORCIONALITAT INVERSA: N1 · Z1 = N2 · Z2</text>
      `,
      pieces: [
        {
          id: 'eng-12',
          name: 'Engranatge Conductor Z=12 (Petit)',
          icon: '⚙️',
          targetX: 180,
          targetY: 300,
          tolerance: 45,
          desc: 'Roda petita de 12 dents connectada al motor elèctric (gira ràpid).',
          svg: `<g>
            <circle cx="180" cy="300" r="32" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/>
            <circle cx="180" cy="300" r="10" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
            <text x="180" y="304" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Z = 12</text>
          </g>`
        },
        {
          id: 'eng-24',
          name: 'Engranatge Intermedi Z=24',
          icon: '⚙️',
          targetX: 310,
          targetY: 300,
          tolerance: 45,
          desc: 'Roda de 24 dents; gira a la meitat de velocitat que la de 12 dents (relació 1:2).',
          svg: `<g>
            <circle cx="310" cy="300" r="50" fill="#818cf8" stroke="#4f46e5" stroke-width="4"/>
            <circle cx="310" cy="300" r="12" fill="#f8fafc" stroke="#4f46e5" stroke-width="2"/>
            <text x="310" y="304" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">Z = 24</text>
          </g>`
        },
        {
          id: 'eng-36',
          name: 'Engranatge Conduït Z=36',
          icon: '⚙️',
          targetX: 460,
          targetY: 300,
          tolerance: 45,
          desc: 'Roda de 36 dents: redueix la velocitat a 1/3 però triplica el parell motor.',
          svg: `<g>
            <circle cx="460" cy="300" r="68" fill="#fb923c" stroke="#ea580c" stroke-width="4"/>
            <circle cx="460" cy="300" r="14" fill="#f8fafc" stroke="#ea580c" stroke-width="2"/>
            <text x="460" y="304" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c2d12">Z = 36</text>
          </g>`
        },
        {
          id: 'eng-48',
          name: 'Engranatge de Gran Força Z=48',
          icon: '⚙️',
          targetX: 630,
          targetY: 300,
          tolerance: 45,
          desc: 'Roda gran de 48 dents: redueix la velocitat per 4 oferint màxima força a l\'eix final del torn.',
          svg: `<g>
            <circle cx="630" cy="300" r="88" fill="#34d399" stroke="#059669" stroke-width="5"/>
            <circle cx="630" cy="300" r="16" fill="#f8fafc" stroke="#059669" stroke-width="2"/>
            <text x="630" y="305" text-anchor="middle" font-size="15" font-weight="bold" fill="#064e3b">Z = 48</text>
          </g>`
        }
      ]
    },

    // 12. MATEMÀTIQUES MAT 4: FRACCIONS MECÀNIQUES
    {
      id: 'fraccions',
      title: 'El Disc de les Fraccions Mecàniques',
      category: 'mates',
      unit: 'MAT 4',
      badge: 'MAT 4 · Nombres Fraccionaris',
      icon: '🍕',
      desc: 'Completa un disc sencer de 360° combinant sectors d\'1/2, 1/4, 1/8 i 1/8.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Contorn circular del disc sencer -->
        <circle cx="400" cy="300" r="160" fill="#ffffff" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="8 6"/>
        <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">1/2 + 1/4 + 1/8 + 1/8 = 8/8 = 1 UNITAT ENTERA</text>
      `,
      pieces: [
        {
          id: 'frac-1-2',
          name: 'Sector 1/2 (Mig Disc - 180°)',
          icon: '🌗',
          targetX: 320,
          targetY: 300,
          tolerance: 50,
          desc: 'La meitat de la peça (180° = 50% de l\'àrea total).',
          svg: `<g>
            <path d="M 400 140 A 160 160 0 0 0 400 460 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
            <text x="320" y="305" text-anchor="middle" font-size="18" font-weight="bold" fill="#0369a1">1/2 (50%)</text>
          </g>`
        },
        {
          id: 'frac-1-4',
          name: 'Sector 1/4 (Un Quart - 90°)',
          icon: '🌘',
          targetX: 470,
          targetY: 230,
          tolerance: 50,
          desc: 'Un quart de cercle (90° = 25% de la circumferència).',
          svg: `<g>
            <path d="M 400 140 A 160 160 0 0 1 560 300 L 400 300 Z" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
            <text x="470" y="240" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">1/4 (25%)</text>
          </g>`
        },
        {
          id: 'frac-1-8a',
          name: 'Sector 1/8 (Un Vuitè - 45°)',
          icon: '🍰',
          targetX: 510,
          targetY: 350,
          tolerance: 45,
          desc: 'La meitat d\'un quart (45° = 12,5% de la peça).',
          svg: `<g>
            <path d="M 560 300 A 160 160 0 0 1 513 413 L 400 300 Z" fill="#a7f3d0" stroke="#059669" stroke-width="3"/>
            <text x="495" y="355" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">1/8</text>
          </g>`
        },
        {
          id: 'frac-1-8b',
          name: 'Sector 1/8 (Últim Vuitè de Tancament)',
          icon: '🍰',
          targetX: 450,
          targetY: 410,
          tolerance: 45,
          desc: 'Completa exactament els 360° del disc sencer.',
          svg: `<g>
            <path d="M 513 413 A 160 160 0 0 1 400 460 L 400 300 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
            <text x="450" y="410" text-anchor="middle" font-size="14" font-weight="bold" fill="#831843">1/8</text>
          </g>`
        }
      ]
    },

    // 13. MATEMÀTIQUES MAT 3: NOMBRES ENTERS (ASCENSOR)
    {
      id: 'enters',
      title: "L'Ascensor Industrial del Taller",
      category: 'mates',
      unit: 'MAT 3',
      badge: 'MAT 3 · Nombres Enters',
      icon: '🏢',
      desc: 'Ordena la recta numèrica vertical: plantes positives superiors, planta zero i soterranis negatius.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <!-- Fossa de l'ascensor -->
        <rect x="250" y="60" width="300" height="490" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" rx="8"/>
        <line x1="250" y1="300" x2="550" y2="300" stroke="#ef4444" stroke-width="3"/>
        <text x="400" y="580" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">RECTA VERTICAL DELS ENTERS: Z = {..., -3, -2, -1, 0, +1, +2, +3}</text>
      `,
      pieces: [
        {
          id: 'p-pos3',
          name: 'Planta +3: Terrat i Panells Solars',
          icon: '☀️',
          targetX: 400,
          targetY: 90,
          tolerance: 40,
          desc: 'L\'alçada més alta sobre la cota zero (+3).',
          svg: `<g>
            <rect x="270" y="70" width="260" height="40" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.5"/>
            <text x="400" y="95" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Planta +3 (Panells Solars)</text>
          </g>`
        },
        {
          id: 'p-pos2',
          name: 'Planta +2: Laboratori Tècnic',
          icon: '🔬',
          targetX: 400,
          targetY: 155,
          tolerance: 40,
          desc: 'Segona planta en sentit positiu (+2).',
          svg: `<g>
            <rect x="270" y="135" width="260" height="40" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.5"/>
            <text x="400" y="160" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Planta +2 (Laboratori)</text>
          </g>`
        },
        {
          id: 'p-pos1',
          name: 'Planta +1: Magatzem de Recanvis',
          icon: '📦',
          targetX: 400,
          targetY: 220,
          tolerance: 40,
          desc: 'Primera planta sobre el nivell del carrer (+1).',
          svg: `<g>
            <rect x="270" y="200" width="260" height="40" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.5"/>
            <text x="400" y="225" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Planta +1 (Recanvis)</text>
          </g>`
        },
        {
          id: 'p-zero',
          name: 'Planta 0: Taller Principal i Carrer',
          icon: '🚪',
          targetX: 400,
          targetY: 285,
          tolerance: 40,
          desc: 'Cota de referència 0: ni positiu ni negatiu.',
          svg: `<g>
            <rect x="270" y="265" width="260" height="40" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
            <text x="400" y="290" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Planta 0 (Carrer / Taller)</text>
          </g>`
        },
        {
          id: 'p-neg1',
          name: 'Soterrani -1: Pàrquing i Fossa',
          icon: '🚗',
          targetX: 400,
          targetY: 350,
          tolerance: 40,
          desc: 'Primer nivell per davall de la terra (-1).',
          svg: `<g>
            <rect x="270" y="330" width="260" height="40" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
            <text x="400" y="355" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c2d12">Soterrani -1 (Fossa Tècnica)</text>
          </g>`
        },
        {
          id: 'p-neg2',
          name: 'Soterrani -2: Magatzem Pesant',
          icon: '🧱',
          targetX: 400,
          targetY: 415,
          tolerance: 40,
          desc: 'Segon nivell subterrani (-2 < -1).',
          svg: `<g>
            <rect x="270" y="395" width="260" height="40" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
            <text x="400" y="420" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c2d12">Soterrani -2 (Materials Pesants)</text>
          </g>`
        },
        {
          id: 'p-neg3',
          name: 'Soterrani -3: Fossa de Residus Tècnics',
          icon: '🕳️',
          targetX: 400,
          targetY: 480,
          tolerance: 40,
          desc: 'El nivell més profund del taller (-3 és el nombre més xicotet).',
          svg: `<g>
            <rect x="270" y="460" width="260" height="40" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
            <text x="400" y="485" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c2d12">Soterrani -3 (Residus Tècnics)</text>
          </g>`
        }
      ]
    },

    // 14. MATEMÀTIQUES MAT 1: SISTEMA DECIMAL POSICIONAL
    {
      id: 'posicional',
      title: 'Sistema Posicional Decimal al Taller',
      category: 'mates',
      unit: 'MAT 1',
      badge: 'MAT 1 · Numeració Decimal',
      icon: '📦',
      desc: 'Ordena les safates de caragols segons el seu ordre de magnitud: UM, C, D, U.',
      bgSvg: `
        <rect width="800" height="600" fill="#f8fafc" rx="16"/>
        <line x1="80" y1="380" x2="720" y2="380" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
        <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">VALOR POSICIONAL: 1 UM = 10 C = 100 D = 1.000 U</text>
      `,
      pieces: [
        {
          id: 'pos-um',
          name: 'Unitats de Miler (UM = 1.000)',
          icon: '📦',
          targetX: 180,
          targetY: 300,
          tolerance: 50,
          desc: 'Palet complet amb 1.000 caragols (10³). Cada unitat val 1.000 vegades una unitat bàsica.',
          svg: `<g>
            <rect x="120" y="220" width="120" height="150" rx="10" fill="#c084fc" stroke="#7e22ce" stroke-width="4"/>
            <text x="180" y="280" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">UM</text>
            <text x="180" y="320" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">1.000 Peces</text>
          </g>`
        },
        {
          id: 'pos-c',
          name: 'Centenes (C = 100)',
          icon: '📁',
          targetX: 330,
          targetY: 300,
          tolerance: 50,
          desc: 'Caixa de 100 caragols (10²).',
          svg: `<g>
            <rect x="280" y="240" width="100" height="130" rx="10" fill="#60a5fa" stroke="#1d4ed8" stroke-width="4"/>
            <text x="330" y="295" text-anchor="middle" font-size="20" font-weight="900" fill="#ffffff">C</text>
            <text x="330" y="330" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">100 Peces</text>
          </g>`
        },
        {
          id: 'pos-d',
          name: 'Desenes (D = 10)',
          icon: '✉️',
          targetX: 470,
          targetY: 300,
          tolerance: 50,
          desc: 'Paquet de 10 caragols (10¹).',
          svg: `<g>
            <rect x="425" y="260" width="90" height="110" rx="10" fill="#34d399" stroke="#047857" stroke-width="4"/>
            <text x="470" y="305" text-anchor="middle" font-size="18" font-weight="900" fill="#ffffff">D</text>
            <text x="470" y="335" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">10 Peces</text>
          </g>`
        },
        {
          id: 'pos-u',
          name: 'Unitats Soltes (U = 1)',
          icon: '🔩',
          targetX: 610,
          targetY: 300,
          tolerance: 50,
          desc: 'Caragol individual solt (10⁰ = 1).',
          svg: `<g>
            <rect x="570" y="280" width="80" height="90" rx="10" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>
            <text x="610" y="315" text-anchor="middle" font-size="18" font-weight="900" fill="#78350f">U</text>
            <text x="610" y="345" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">1 Peça</text>
          </g>`
        }
      ]
    }
,

    // UD6: LA CÈL·LULA HUMANA (EUCARIOTA ANIMAL)
    {
      id: 'celula',
      title: 'La Cèl·lula Humana (Eucariota Animal)',
      category: 'anatomia',
      unit: 'UD6',
      badge: 'UD6 · Base Cel·lular de la Salut',
      icon: '🔬',
      desc: 'Munta els orgànuls fonamentals: nucli amb ADN, mitocondris, aparell de Golgi, reticle endoplasmàtic, ribosomes i membrana.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Silueta citoplasmàtica de la cèl·lula eucariota -->
      <ellipse cx="400" cy="300" rx="310" ry="220" fill="rgba(240, 253, 250, 0.7)" stroke="#0d9488" stroke-width="4" stroke-dasharray="8 6"/>
      <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">CÈL·LULA EUCARIOTA ANIMAL (ORGANITZACIÓ CEL·LULAR)</text>`,
      pieces: [
        {
          id: 'cel-nucli',
          name: 'Nucli Cel·lular (amb ADN)',
          icon: '🟣',
          targetX: 350,
          targetY: 280,
          tolerance: 50,
          desc: 'Centre de control cel·lular envoltat per doble membrana; conté el material genètic (ADN/cromatina) que codifica les proteïnes.',
          svg: `<g>
          <circle cx="350" cy="280" r="55" fill="#c084fc" stroke="#7e22ce" stroke-width="3"/>
          <circle cx="350" cy="280" r="22" fill="#7e22ce"/>
          <text x="350" y="318" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Nucli + ADN</text>
        </g>`
        },
        {
          id: 'cel-mitocondri',
          name: 'Mitocondri (Central Energètica)',
          icon: '⚡',
          targetX: 540,
          targetY: 220,
          tolerance: 45,
          desc: 'Orgànul que realitza la respiració cel·lular oxidativa, produint la molècula d\'energia bàsica: ATP.',
          svg: `<g>
          <ellipse cx="540" cy="220" rx="42" ry="24" fill="#fb923c" stroke="#c2410c" stroke-width="2.5" transform="rotate(-20 540 220)"/>
          <path d="M 515 220 Q 530 210 540 220 Q 550 230 565 220" stroke="#7c2d12" stroke-width="2.5" fill="none"/>
          <text x="540" y="240" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Mitocondri</text>
        </g>`
        },
        {
          id: 'cel-golgi',
          name: 'Aparell de Golgi',
          icon: '🥞',
          targetX: 480,
          targetY: 370,
          tolerance: 45,
          desc: 'Conjunt de sacs aplanats que rep proteïnes del reticle, les modifica, les empaqueta en vesícules i les envia a destí.',
          svg: `<g>
          <path d="M 450 355 Q 480 345 510 355" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M 450 370 Q 480 360 510 370" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M 455 385 Q 480 375 505 385" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round"/>
          <text x="480" y="405" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">Ap. Golgi</text>
        </g>`
        },
        {
          id: 'cel-reticle',
          name: 'Reticle Endoplasmàtic',
          icon: '🕸️',
          targetX: 250,
          targetY: 340,
          tolerance: 45,
          desc: 'Xarxa de membranes connectades al nucli; sintetitza lípids (RE llis) i proteïnes mitjançant ribosomes adherits (RE rugós).',
          svg: `<g>
          <path d="M 220 320 Q 250 310 280 330 Q 250 360 220 350" stroke="#38bdf8" stroke-width="5" fill="none"/>
          <path d="M 230 360 Q 260 350 280 370" stroke="#38bdf8" stroke-width="5" fill="none"/>
          <text x="250" y="380" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">Reticle Endopl.</text>
        </g>`
        },
        {
          id: 'cel-membrana',
          name: 'Membrana Plasmàtica (Bicapa)',
          icon: '🛡️',
          targetX: 210,
          targetY: 180,
          tolerance: 45,
          desc: 'Bicapa lipídica amb proteïnes que delimita la cèl·lula i controla de forma semipermeable l\'entrada de nutrients i eixida de deixalles.',
          svg: `<g>
          <path d="M 180 160 Q 220 180 250 200" stroke="#0d9488" stroke-width="12" fill="none" stroke-linecap="round"/>
          <text x="210" y="165" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">Membrana</text>
        </g>`
        }
      ]
    },

    // UD6: DEFENSES DEL COS: SISTEMA IMMUNITARI
    {
      id: 'immunitat',
      title: 'Defenses del Cos: Sistema Immunitari',
      category: 'anatomia',
      unit: 'UD6',
      badge: 'UD6 · Immunitat i Vacunes',
      icon: '🛡️',
      desc: 'Munta la línia de defensa contra infeccions: pell, macròfag fagocitador, limfòcit T, limfòcit B i anticossos.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <path d="M 150 100 L 150 500" stroke="#cbd5e1" stroke-width="8" stroke-dasharray="12 8"/>
      <text x="110" y="300" text-anchor="middle" font-size="13" font-weight="700" fill="#94a3b8" transform="rotate(-90 110 300)">EXTERIOR (PATÒGENS)</text>
      <text x="450" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">RESPOSTA IMMUNITÀRIA INNATA I ADAPTATIVA</text>`,
      pieces: [
        {
          id: 'imm-pell',
          name: 'Barrera Cutània (Pell i Mucoses)',
          icon: '🧱',
          targetX: 150,
          targetY: 250,
          tolerance: 45,
          desc: 'Primera línia de defensa física i química innata que impedeix l\'entrada de bacteris i virus a l\'organisme.',
          svg: `<g>
          <rect x="135" y="180" width="30" height="140" rx="6" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
          <text x="150" y="255" text-anchor="middle" font-size="11" font-weight="bold" fill="#831843" transform="rotate(-90 150 255)">Pell / Barrera</text>
        </g>`
        },
        {
          id: 'imm-macrofag',
          name: 'Macròfag (Fagocitosi Innata)',
          icon: '👾',
          targetX: 300,
          targetY: 250,
          tolerance: 45,
          desc: 'Glòbul blanc gegant que engoleix i digereix bacteris invasors i deixalles cel·lulars de forma inespecífica.',
          svg: `<g>
          <path d="M 270 230 Q 300 210 330 230 Q 340 260 320 280 Q 280 290 270 260 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
          <circle cx="295" cy="245" r="5" fill="#9a3412"/>
          <circle cx="315" cy="255" r="4" fill="#9a3412"/>
          <text x="300" y="270" text-anchor="middle" font-size="10" font-weight="bold" fill="#7c2d12">Macròfag</text>
        </g>`
        },
        {
          id: 'imm-limf-t',
          name: 'Limfòcit T (Immunitat Cel·lular)',
          icon: '🥷',
          targetX: 450,
          targetY: 200,
          tolerance: 45,
          desc: 'Madura al tim; reconeix i destrueix directament cèl·lules pròpies infectades per virus o cèl·lules tumorals.',
          svg: `<g>
          <circle cx="450" cy="200" r="32" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
          <circle cx="450" cy="200" r="14" fill="#0284c7"/>
          <text x="450" y="222" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Limfòcit T</text>
        </g>`
        },
        {
          id: 'imm-limf-b',
          name: 'Limfòcit B (Fàbrica d'Anticossos)',
          icon: '🏭',
          targetX: 450,
          targetY: 350,
          tolerance: 45,
          desc: 'Produeix milers d\'anticossos específics i genera cèl·lules de memòria que ens protegeixen en futures infeccions o vacunes.',
          svg: `<g>
          <circle cx="450" cy="350" r="32" fill="#ddd6fe" stroke="#7c3aed" stroke-width="3"/>
          <circle cx="450" cy="350" r="14" fill="#7c3aed"/>
          <text x="450" y="372" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Limfòcit B</text>
        </g>`
        },
        {
          id: 'imm-anticossos',
          name: 'Anticossos (Immunoglobulines Y)',
          icon: '🎯',
          targetX: 620,
          targetY: 280,
          tolerance: 45,
          desc: 'Proteïnes en forma de \'Y\' que s\'uneixen específicament a l\'antigen del microbi per neutralitzar-lo o marcar-lo per a la seua destrucció.',
          svg: `<g>
          <path d="M 600 250 L 620 275 L 620 310 M 640 250 L 620 275" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
          <path d="M 640 290 L 655 310 L 655 335 M 670 290 L 655 310" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
          <text x="620" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">Anticossos (Y)</text>
        </g>`
        }
      ]
    },

    // UD7: LES 4 CAVITATS DEL COR I GRANS VASOS
    {
      id: 'cor-cavitats',
      title: 'Les 4 Cavitats del Cor i Grans Vasos',
      category: 'anatomia',
      unit: 'UD7',
      badge: 'UD7 · Aparell Circulatori',
      icon: '🫀',
      desc: 'Munta l\'interior de la bomba cardíaca: aurícules dreta/esquerra, ventricles dret/esquerre, artèria aorta i vena cava.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Silueta de la silueta cardíaca buida -->
      <path d="M 400 130 C 270 130 250 260 270 340 C 310 440 400 500 400 500 C 400 500 490 440 530 340 C 550 260 530 130 400 130 Z" fill="#fff1f2" stroke="#e11d48" stroke-width="4" stroke-dasharray="8 6"/>
      <line x1="400" y1="180" x2="400" y2="480" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4 4"/>
      <line x1="280" y1="290" x2="520" y2="290" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="400" y="555" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">ANATOMIA INTERNA DEL COR (CIRCULACIÓ DOBLE I COMPLETA)</text>`,
      pieces: [
        {
          id: 'cor-auricula-d',
          name: 'Aurícula Dreta (Sang Desoxigenada)',
          icon: '🔵',
          targetX: 335,
          targetY: 220,
          tolerance: 45,
          desc: 'Rep la sang pobra en oxigen provinent de tot el cos a través de les venes caves.',
          svg: `<g>
          <rect x="290" y="175" width="90" height="80" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
          <text x="335" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Aurícula Dreta</text>
          <text x="335" y="235" text-anchor="middle" font-size="9" fill="#1e40af">(Sang amb CO₂)</text>
        </g>`
        },
        {
          id: 'cor-ventricle-d',
          name: 'Ventricle Dret (Cap als Pulmons)',
          icon: '🔵',
          targetX: 335,
          targetY: 370,
          tolerance: 45,
          desc: 'Impulsa la sang pobra en oxigen cap als pulmons a través de l\'artèria pulmonar per oxigenar-la.',
          svg: `<g>
          <rect x="290" y="320" width="90" height="95" rx="12" fill="#93c5fd" stroke="#1d4ed8" stroke-width="3"/>
          <text x="335" y="365" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e3a8a">Ventricle Dret</text>
        </g>`
        },
        {
          id: 'cor-auricula-e',
          name: 'Aurícula Esquerra (Sang Oxigenada)',
          icon: '🔴',
          targetX: 465,
          targetY: 220,
          tolerance: 45,
          desc: 'Rep la sang neta i carregada d\'oxigen provinent dels pulmons per les 4 venes pulmonars.',
          svg: `<g>
          <rect x="420" y="175" width="90" height="80" rx="12" fill="#fecdd3" stroke="#e11d48" stroke-width="3"/>
          <text x="465" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">Aurícula Esq.</text>
          <text x="465" y="235" text-anchor="middle" font-size="9" fill="#9f1239">(Rica en O₂)</text>
        </g>`
        },
        {
          id: 'cor-ventricle-e',
          name: 'Ventricle Esquerre (Cap al Cos)',
          icon: '🔴',
          targetX: 465,
          targetY: 370,
          tolerance: 45,
          desc: 'Té la paret muscular més gruixuda (miocardi potent) per impulsar la sang amb força cap a tot l\'organisme per l\'aorta.',
          svg: `<g>
          <rect x="420" y="320" width="90" height="95" rx="12" fill="#fda4af" stroke="#be123c" stroke-width="3"/>
          <text x="465" y="365" text-anchor="middle" font-size="11" font-weight="bold" fill="#881337">Ventricle Esq.</text>
        </g>`
        },
        {
          id: 'cor-aorta',
          name: 'Artèria Aorta (Bastó Aòrtic)',
          icon: '🦯',
          targetX: 420,
          targetY: 95,
          tolerance: 45,
          desc: 'L\'artèria més gran del cos que es corba sobre el cor i distribueix la sang oxigenada a tots els teixits.',
          svg: `<g>
          <path d="M 430 140 Q 430 70 380 70 Q 350 70 350 95" stroke="#e11d48" stroke-width="14" fill="none" stroke-linecap="round"/>
          <line x1="390" y1="70" x2="390" y2="45" stroke="#e11d48" stroke-width="6"/>
          <line x1="410" y1="75" x2="415" y2="50" stroke="#e11d48" stroke-width="6"/>
          <text x="430" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#881337">Aorta</text>
        </g>`
        },
        {
          id: 'cor-cava',
          name: 'Vena Cava Superior i Inferior',
          icon: '💈',
          targetX: 250,
          targetY: 150,
          tolerance: 45,
          desc: 'Gran conducte venós que retorna tota la sang del cap, coll i braços cap a l\'aurícula dreta.',
          svg: `<g>
          <line x1="250" y1="90" x2="250" y2="210" stroke="#2563eb" stroke-width="14" stroke-linecap="round"/>
          <text x="250" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff" transform="rotate(-90 250 155)">Vena Cava</text>
        </g>`
        }
      ]
    },

    // UD7: ALVÈOL PULMONAR I INTERCANVI DE GASOS
    {
      id: 'alveol',
      title: 'Alvèol Pulmonar i Intercanvi de Gasos',
      category: 'anatomia',
      unit: 'UD7',
      badge: 'UD7 · Aparell Respiratori',
      icon: '🫁',
      desc: 'Acobla la microestructura respiratòria: bronquíol terminal, sac alveolar, capil·lar sanguini i molècules d\'O2 / CO2.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <circle cx="350" cy="300" r="160" fill="rgba(254, 205, 211, 0.3)" stroke="#fda4af" stroke-width="4" stroke-dasharray="8 6"/>
      <path d="M 520 120 C 580 300 580 350 520 500" stroke="#cbd5e1" stroke-width="26" fill="none"/>
      <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">HEMATOSI: INTERCANVI DE GASOS PER DIFUSIÓ A L'ALVÈOL</text>`,
      pieces: [
        {
          id: 'alv-bronquiol',
          name: 'Bronquíol Terminal (Entrada d'Aire)',
          icon: '🌿',
          targetX: 210,
          targetY: 180,
          tolerance: 45,
          desc: 'Última ramificació de l\'arbre bronquial que condueix l\'aire inspirat fins als sacs alveolars.',
          svg: `<g>
          <path d="M 140 120 Q 180 160 250 200" stroke="#0ea5e9" stroke-width="16" fill="none" stroke-linecap="round"/>
          <text x="200" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Bronquíol</text>
        </g>`
        },
        {
          id: 'alv-sac',
          name: 'Sac Alveolar (Mur Epitelial Fin)',
          icon: '🍇',
          targetX: 350,
          targetY: 300,
          tolerance: 50,
          desc: 'Fina paret d\'una sola capa de cèl·lules (epiteli monoestratificat) que permet el pas ràpid de gasos per difusió.',
          svg: `<g>
          <circle cx="350" cy="300" r="85" fill="#fecdd3" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="320" cy="270" r="28" fill="#fda4af"/>
          <circle cx="380" cy="280" r="30" fill="#fda4af"/>
          <circle cx="350" cy="335" r="32" fill="#fda4af"/>
          <text x="350" y="305" text-anchor="middle" font-size="12" font-weight="bold" fill="#881337">Alvèol</text>
        </g>`
        },
        {
          id: 'alv-capillar',
          name: 'Capil·lar Sanguini (Glòbuls Rojos)',
          icon: '🩸',
          targetX: 540,
          targetY: 300,
          tolerance: 45,
          desc: 'Vas microscòpic que envolta l\'alvèol; els eritròcits s\'alineen d\'un en un per captar oxigen.',
          svg: `<g>
          <path d="M 520 160 Q 565 300 520 450" stroke="#e11d48" stroke-width="18" fill="none" stroke-linecap="round"/>
          <circle cx="538" cy="240" r="8" fill="#881337"/>
          <circle cx="545" cy="300" r="8" fill="#881337"/>
          <circle cx="538" cy="360" r="8" fill="#881337"/>
          <text x="545" y="305" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff" transform="rotate(90 545 305)">Capil·lar Sanguini</text>
        </g>`
        },
        {
          id: 'alv-oxigen',
          name: 'Oxigen O₂ (Cap a la Sang)',
          icon: '🔵',
          targetX: 440,
          targetY: 240,
          tolerance: 40,
          desc: 'Gas inhalat que passa de l\'aire alveolar cap a l\'hemoglobina dels glòbuls rojos per difusió simple.',
          svg: `<g>
          <line x1="395" y1="240" x2="480" y2="240" stroke="#0284c7" stroke-width="4" stroke-dasharray="4 2"/>
          <polygon points="485,240 475,235 475,245" fill="#0284c7"/>
          <text x="440" y="230" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">O₂ ➔</text>
        </g>`
        },
        {
          id: 'alv-co2',
          name: 'Diòxid de Carboni CO₂ (Cap a l'Alvèol)',
          icon: '💨',
          targetX: 440,
          targetY: 360,
          tolerance: 40,
          desc: 'Gas de rebuig cel·lular que ix de la sang venosa per ser exhalat cap a l\'exterior.',
          svg: `<g>
          <line x1="480" y1="360" x2="395" y2="360" stroke="#ea580c" stroke-width="4" stroke-dasharray="4 2"/>
          <polygon points="390,360 400,355 400,365" fill="#ea580c"/>
          <text x="440" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c">⬅ CO₂</text>
        </g>`
        }
      ]
    },

    // UD8: LA NEURONA I LA TRANSMISSIÓ SINÀPTICA
    {
      id: 'neurona',
      title: 'La Neurona i la Transmissió Sinàptica',
      category: 'anatomia',
      unit: 'UD8',
      badge: 'UD8 · Sistema Nerviós',
      icon: '⚡',
      desc: 'Identifica l\'anatomia de la cèl·lula nerviosa: soma amb nucli, dendrites receptores, axó, beines de mielina i botons sinàptics.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <line x1="280" y1="300" x2="620" y2="300" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round"/>
      <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">IMPULS ELÈCTRIC: TRANSMISSIÓ DEL POTENCIAL D'ACCIÓ</text>`,
      pieces: [
        {
          id: 'neu-soma',
          name: 'Soma (Cos Cel·lular amb Nucli)',
          icon: '⭐',
          targetX: 230,
          targetY: 300,
          tolerance: 45,
          desc: 'Centre metabòlic de la neurona que conté el nucli cel·lular i integra els senyals rebuts.',
          svg: `<g>
          <polygon points="230,250 260,285 245,335 195,325 185,275" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
          <circle cx="225" cy="295" r="14" fill="#a16207"/>
          <text x="225" y="345" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">Soma</text>
        </g>`
        },
        {
          id: 'neu-dendrites',
          name: 'Dendrites (Branques Receptores)',
          icon: '🌿',
          targetX: 150,
          targetY: 300,
          tolerance: 45,
          desc: 'Ramificacions que reben els estímuls o neurotransmissors d\'altres neurones i els condueixen cap al cos cel·lular.',
          svg: `<g>
          <path d="M 190 270 L 130 230 M 185 300 L 115 300 M 190 330 L 130 370" stroke="#ca8a04" stroke-width="4" stroke-linecap="round"/>
          <text x="145" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">Dendrites</text>
        </g>`
        },
        {
          id: 'neu-axo',
          name: 'Axó (Cable de Transmissió)',
          icon: '➖',
          targetX: 430,
          targetY: 300,
          tolerance: 50,
          desc: 'Prolongació llarga que condueix el potencial d\'acció de forma unidireccional cap a la següent cèl·lula.',
          svg: `<g>
          <line x1="260" y1="300" x2="600" y2="300" stroke="#f59e0b" stroke-width="8" stroke-linecap="round"/>
          <text x="430" y="275" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Axó</text>
        </g>`
        },
        {
          id: 'neu-mielina',
          name: 'Beines de Mielina (Aïllant)',
          icon: '🌭',
          targetX: 430,
          targetY: 300,
          tolerance: 45,
          desc: 'Beines lipídiques formades per cèl·lules de Schwann que permeten la conducció saltatòria ultraràpida (fins a 120 m/s).',
          svg: `<g>
          <rect x="300" y="285" width="55" height="30" rx="8" fill="#fed7aa" stroke="#f97316" stroke-width="2.5"/>
          <rect x="380" y="285" width="55" height="30" rx="8" fill="#fed7aa" stroke="#f97316" stroke-width="2.5"/>
          <rect x="460" y="285" width="55" height="30" rx="8" fill="#fed7aa" stroke="#f97316" stroke-width="2.5"/>
          <text x="410" y="335" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Mielina</text>
        </g>`
        },
        {
          id: 'neu-sinapsi',
          name: 'Botons Terminals (Sinapsi)',
          icon: '🔌',
          targetX: 640,
          targetY: 300,
          tolerance: 45,
          desc: 'Extrems ramificats que alliberen neurotransmissors químics (com dopamina o acetilcolina) a l\'espai sinàptic.',
          svg: `<g>
          <path d="M 600 300 L 650 260 M 600 300 L 660 300 M 600 300 L 650 340" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
          <circle cx="650" cy="260" r="7" fill="#ef4444"/>
          <circle cx="660" cy="300" r="7" fill="#ef4444"/>
          <circle cx="650" cy="340" r="7" fill="#ef4444"/>
          <text x="650" y="365" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">Sinapsi</text>
        </g>`
        }
      ]
    },

    // UD8: L'ORELLA HUMANA I L'AUDICIÓ
    {
      id: 'orella',
      title: 'L\'Orella Humana i l\'Audició',
      category: 'anatomia',
      unit: 'UD8',
      badge: 'UD8 · Òrgans dels Sentits',
      icon: '👂',
      desc: 'Munta l\'òrgan de l\'oïda i l\'equilibri: pavelló auditiu, conducte, timpà, cadena d\'ossets, còclea i nervi auditiu.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <line x1="330" y1="120" x2="330" y2="480" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 4"/>
      <line x1="530" y1="120" x2="530" y2="480" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="230" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#64748b">ORELLA EXTERNA</text>
      <text x="430" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#64748b">ORELLA MITJANA</text>
      <text x="630" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#64748b">ORELLA INTERNA</text>
      <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">TRANSMISSIÓ MECÀNICA I TRANSDUCCIÓ DE L'ONA SONORA</text>`,
      pieces: [
        {
          id: 'ore-pave',
          name: 'Pavelló Auricular (Orella)',
          icon: '👂',
          targetX: 170,
          targetY: 300,
          tolerance: 45,
          desc: 'Cartílag extern que capta les ones sonores de l\'aire i les canalitza cap a l\'interior.',
          svg: `<g>
          <path d="M 140 220 Q 200 210 200 270 Q 200 320 180 350 Q 150 390 140 370" stroke="#f472b6" stroke-width="12" fill="none" stroke-linecap="round"/>
          <text x="170" y="300" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">Pavelló</text>
        </g>`
        },
        {
          id: 'ore-conducte',
          name: 'Conducte Auditiu Extern',
          icon: '🕳️',
          targetX: 270,
          targetY: 300,
          tolerance: 45,
          desc: 'Tub de 2,5 cm amb glàndules de cerumen que guia les ones sonores fins a fer vibrar el timpà.',
          svg: `<g>
          <rect x="220" y="285" width="100" height="30" rx="6" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
          <text x="270" y="305" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">Conducte</text>
        </g>`
        },
        {
          id: 'ore-timpa',
          name: 'Timpà (Membrana Vibrant)',
          icon: '🥁',
          targetX: 340,
          targetY: 300,
          tolerance: 40,
          desc: 'Fina membrana elàstica que vibra en rebre l\'impacte de les ones de pressió sonora.',
          svg: `<g>
          <line x1="340" y1="260" x2="340" y2="340" stroke="#e11d48" stroke-width="6" stroke-linecap="round"/>
          <text x="340" y="245" text-anchor="middle" font-size="10" font-weight="bold" fill="#9f1239">Timpà</text>
        </g>`
        },
        {
          id: 'ore-ossets',
          name: 'Cadena d'Ossets (Martell, Enclusa, Estrep)',
          icon: '🔨',
          targetX: 430,
          targetY: 300,
          tolerance: 45,
          desc: 'Els tres ossos més xicotets del cos humà: amplifiquen 20 vegades la vibració mecànica del timpà.',
          svg: `<g>
          <rect x="380" y="285" width="25" height="15" fill="#64748b"/>
          <rect x="415" y="285" width="25" height="15" fill="#475569"/>
          <path d="M 450 280 L 470 292 L 450 305 Z" fill="#334155"/>
          <text x="430" y="325" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Ossets</text>
        </g>`
        },
        {
          id: 'ore-coclea',
          name: 'Còclea / Cargol (Cèl·lules Ciliades)',
          icon: '🐌',
          targetX: 550,
          targetY: 300,
          tolerance: 45,
          desc: 'Estructura en espiral plena de líquid que transforma les vibracions físiques en impulsos elèctrics neuronals.',
          svg: `<g>
          <path d="M 525 315 A 25 25 0 0 1 565 290 A 18 18 0 0 1 545 275 A 12 12 0 0 1 535 285" stroke="#8b5cf6" stroke-width="12" fill="none" stroke-linecap="round"/>
          <text x="550" y="340" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">Còclea</text>
        </g>`
        },
        {
          id: 'ore-nervi',
          name: 'Nervi Auditiu',
          icon: '⚡',
          targetX: 660,
          targetY: 300,
          tolerance: 45,
          desc: 'Condueix els impulsos elèctrics directament cap a l\'escorça auditiva del cervell (lòbul temporal).',
          svg: `<g>
          <path d="M 590 300 L 710 300" stroke="#f59e0b" stroke-width="14" stroke-linecap="round"/>
          <text x="655" y="285" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Nervi Auditiu</text>
        </g>`
        }
      ]
    },

    // UD9: FECUNDACIÓ I GESTACIÓ FETAL
    {
      id: 'fecundacio',
      title: 'Fecundació i Gestació Fetal',
      category: 'anatomia',
      unit: 'UD9',
      badge: 'UD9 · Desenvolupament Embrionari',
      icon: '🤰',
      desc: 'Ordena les fites del desenvolupament biològic: òvul madur, espermatozoides, zigot, embrió i placenta amb cordó umbilical.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Silueta de la cavitat uterina gestant -->
      <ellipse cx="400" cy="300" rx="300" ry="210" fill="rgba(253, 242, 248, 0.7)" stroke="#f472b6" stroke-width="4" stroke-dasharray="8 6"/>
      <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">DEL GÀMETA A LA FORMACIÓ DEL NOU ÉSSER HUMÀ</text>`,
      pieces: [
        {
          id: 'fec-ovul',
          name: 'Òvul Madur (Gàmeta Femení)',
          icon: '🟡',
          targetX: 230,
          targetY: 230,
          tolerance: 45,
          desc: 'Cèl·lula esfèrica gran de 0,1 mm immòbil protegida per la corona radiada i la zona pel·lúcida.',
          svg: `<g>
          <circle cx="230" cy="230" r="38" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
          <circle cx="230" cy="230" r="14" fill="#facc15"/>
          <text x="230" y="235" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">Òvul</text>
        </g>`
        },
        {
          id: 'fec-espermatozoide',
          name: 'Espermatozoides (Gàmetes M.)',
          icon: 'たま',
          targetX: 150,
          targetY: 230,
          tolerance: 40,
          desc: 'Cèl·lules flagel·lades microscòpiques que neden cap a l\'òvul; només un aconsegueix fecundar-lo.',
          svg: `<g>
          <circle cx="170" cy="230" r="8" fill="#38bdf8"/>
          <path d="M 162 230 Q 140 220 120 230" stroke="#0284c7" stroke-width="3" fill="none"/>
          <text x="150" y="255" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">Espermatozoide</text>
        </g>`
        },
        {
          id: 'fec-zigot',
          name: 'Zigot (Primera Cèl·lula Diploid)',
          icon: '✨',
          targetX: 350,
          targetY: 230,
          tolerance: 45,
          desc: 'Cèl·lula resultant de la fusió dels 23 cromosomes de l\'òvul i els 23 de l\'espermatozoide (46 cromosomes en total).',
          svg: `<g>
          <circle cx="350" cy="230" r="32" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
          <circle cx="340" cy="230" r="8" fill="#ea580c"/>
          <circle cx="360" cy="230" r="8" fill="#ea580c"/>
          <text x="350" y="248" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Zigot (46 cr)</text>
        </g>`
        },
        {
          id: 'fec-placenta',
          name: 'Placenta Materna',
          icon: '🥩',
          targetX: 530,
          targetY: 210,
          tolerance: 50,
          desc: 'Òrgan temporal adherit a l\'úter que transfereix oxigen i nutrients de la mare al fetus i recull residus.',
          svg: `<g>
          <path d="M 470 170 Q 550 160 590 220 Q 560 250 480 230 Z" fill="#f43f5e" stroke="#9f1239" stroke-width="3"/>
          <text x="530" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Placenta</text>
        </g>`
        },
        {
          id: 'fec-cordo',
          name: 'Cordó Umbilical',
          icon: '➰',
          targetX: 450,
          targetY: 340,
          tolerance: 45,
          desc: 'Conté 2 artèries i 1 vena que connecten la circulació del fetus directament amb la placenta materna.',
          svg: `<g>
          <path d="M 520 230 Q 480 320 400 360" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          <path d="M 520 230 Q 480 320 400 360" stroke="#38bdf8" stroke-width="6" fill="none" stroke-linecap="round"/>
          <text x="450" y="325" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Cordó Umbilical</text>
        </g>`
        }
      ]
    },

    // UD2: MUNTATGE DE FILTRACIÓ PER GRAVETAT
    {
      id: 'filtracio',
      title: 'Muntatge de Filtració per Gravetat',
      category: 'quimica',
      unit: 'UD2',
      badge: 'UD2 · Tècniques de Separació',
      icon: '🧪',
      desc: 'Acobla el muntatge per separar sòlids insolubles de líquids: suport, cèrcol, embut de vidre, filtre prisat i vas col·lector.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <rect x="150" y="520" width="500" height="20" fill="#475569" rx="3"/>
      <text x="400" y="565" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">FILTRACIÓ DE MESCLES HETEROGÈNIES SÒLID-LÍQUID</text>`,
      pieces: [
        {
          id: 'fil-suport',
          name: 'Suport Universal amb Cèrcol',
          icon: '🏗️',
          targetX: 250,
          targetY: 330,
          tolerance: 50,
          desc: 'Base metàl·lica amb tija vertical i cèrcol per subjectar l\'embut a l\'alçada exacta sobre el vas de precipitats.',
          svg: `<g>
          <rect x="190" y="505" width="120" height="15" fill="#1e293b"/>
          <rect x="245" y="150" width="10" height="360" fill="#64748b"/>
          <line x1="255" y1="290" x2="360" y2="290" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="380" cy="290" rx="28" ry="10" fill="none" stroke="#0f172a" stroke-width="4"/>
          <text x="250" y="220" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Suport</text>
        </g>`
        },
        {
          id: 'fil-embut',
          name: 'Embut Cònic de Vidre',
          icon: '🍦',
          targetX: 380,
          targetY: 290,
          tolerance: 45,
          desc: 'Peça de vidre amb con de 60° i tija llarga que condueix el líquid filtrat net cap al vas.',
          svg: `<g>
          <polygon points="340,240 420,240 385,300 375,300" fill="rgba(186, 230, 253, 0.45)" stroke="#0284c7" stroke-width="3"/>
          <rect x="376" y="300" width="8" height="70" fill="rgba(186, 230, 253, 0.45)" stroke="#0284c7" stroke-width="2"/>
          <text x="380" y="265" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Embut</text>
        </g>`
        },
        {
          id: 'fil-paper',
          name: 'Paper de Filtre Prisat',
          icon: '📄',
          targetX: 380,
          targetY: 230,
          tolerance: 40,
          desc: 'Paper porós plegat que reté les partícules sòlides insolubles deixant passar exclusivament el líquid.',
          svg: `<g>
          <polygon points="345,215 415,215 380,270" fill="#f8fafc" stroke="#475569" stroke-width="2.5"/>
          <line x1="360" y1="215" x2="380" y2="270" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="400" y1="215" x2="380" y2="270" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="380" y="210" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">Filtre Prisat</text>
        </g>`
        },
        {
          id: 'fil-vas',
          name: 'Vas de Precipitats (Recol·lector)',
          icon: '🥃',
          targetX: 380,
          targetY: 440,
          tolerance: 45,
          desc: 'Recipient graduat que rep el filtrat net transparent lliure de sòlids en suspensió.',
          svg: `<g>
          <rect x="340" y="380" width="80" height="120" rx="6" fill="rgba(224, 242, 254, 0.45)" stroke="#0284c7" stroke-width="3"/>
          <rect x="345" y="440" width="70" height="55" fill="rgba(56, 189, 248, 0.3)"/>
          <text x="380" y="465" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Vas Filtrador</text>
        </g>`
        },
        {
          id: 'fil-vareta',
          name: 'Vareta Agitadora de Vidre',
          icon: '🥢',
          targetX: 450,
          targetY: 230,
          tolerance: 40,
          desc: 'Guia el doll de mescla sense esquitxar directament sobre el paper de filtre.',
          svg: `<g>
          <line x1="490" y1="170" x2="400" y2="280" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/>
          <text x="470" y="195" font-size="10" font-weight="bold" fill="#0369a1">Vareta</text>
        </g>`
        }
      ]
    },

    // UD2: METALLS DEL TALLER A LA TAULA PERIÒDICA
    {
      id: 'metalls-taula',
      title: 'Metalls del Taller a la Taula Periòdica',
      category: 'quimica',
      unit: 'UD2',
      badge: 'UD2 · Elements i Propietats',
      icon: '🔩',
      desc: 'Ubica els 5 elements clau de mecanitzat i manteniment: Ferro (Fe), Coure (Cu), Alumini (Al), Carboni (C) i Oxigen (O).',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Silueta simplificada de la Taula Periòdica -->
      <rect x="100" y="100" width="600" height="380" fill="none" stroke="#cbd5e1" stroke-width="3" rx="12" stroke-dasharray="8 6"/>
      <line x1="100" y1="200" x2="700" y2="200" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="450" y1="100" x2="450" y2="480" stroke="#e2e8f0" stroke-width="2"/>
      <text x="275" y="150" text-anchor="middle" font-size="14" font-weight="800" fill="#94a3b8">ZONA METÀL·LICA (BLOC D I TRANSICIÓ)</text>
      <text x="575" y="150" text-anchor="middle" font-size="14" font-weight="800" fill="#94a3b8">ZONA NO-METALLS (BLOC P)</text>
      <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">CLASSIFICACIÓ PER PROPIETATS MECÀNIQUES I CONDUCTIVITAT</text>`,
      pieces: [
        {
          id: 'tab-fe',
          name: 'Ferro Fe (Z=26, Grup 8)',
          icon: '⚙️',
          targetX: 250,
          targetY: 300,
          tolerance: 45,
          desc: 'El metall més utilitzat en la indústria: base dels acers i foses, magnètic i molt resistent.',
          svg: `<g>
          <rect x="210" y="260" width="80" height="80" rx="10" fill="#334155" stroke="#0f172a" stroke-width="3"/>
          <text x="250" y="295" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">Fe</text>
          <text x="250" y="325" text-anchor="middle" font-size="11" font-weight="bold" fill="#94a3b8">Ferro (26)</text>
        </g>`
        },
        {
          id: 'tab-cu',
          name: 'Coure Cu (Z=29, Grup 11)',
          icon: '🥉',
          targetX: 350,
          targetY: 300,
          tolerance: 45,
          desc: 'Excel·lent conductor elèctric i tèrmic, dúctil i mal·leable. Utilitzat en tot el cablejat del taller.',
          svg: `<g>
          <rect x="310" y="260" width="80" height="80" rx="10" fill="#b45309" stroke="#78350f" stroke-width="3"/>
          <text x="350" y="295" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">Cu</text>
          <text x="350" y="325" text-anchor="middle" font-size="11" font-weight="bold" fill="#fde68a">Coure (29)</text>
        </g>`
        },
        {
          id: 'tab-al',
          name: 'Alumini Al (Z=13, Grup 13)',
          icon: '🥈',
          targetX: 480,
          targetY: 250,
          tolerance: 45,
          desc: 'Metall molt lleuger (baixa densitat d = 2,7 g/cm³) i resistent a la corrosió gràcies a la seua capa d\'òxid.',
          svg: `<g>
          <rect x="440" y="210" width="80" height="80" rx="10" fill="#64748b" stroke="#334155" stroke-width="3"/>
          <text x="480" y="245" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">Al</text>
          <text x="480" y="275" text-anchor="middle" font-size="11" font-weight="bold" fill="#e2e8f0">Alumini (13)</text>
        </g>`
        },
        {
          id: 'tab-c',
          name: 'Carboni C (Z=6, Grup 14)',
          icon: '💎',
          targetX: 580,
          targetY: 210,
          tolerance: 45,
          desc: 'No-metall fonamental: s\'afegeix al ferro en petites proporcions (0,2% - 2%) per formar acers de gran duresa.',
          svg: `<g>
          <rect x="540" y="170" width="80" height="80" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
          <text x="580" y="205" text-anchor="middle" font-size="22" font-weight="900" fill="#38bdf8">C</text>
          <text x="580" y="235" text-anchor="middle" font-size="11" font-weight="bold" fill="#94a3b8">Carboni (6)</text>
        </g>`
        },
        {
          id: 'tab-o',
          name: 'Oxigen O (Z=8, Grup 16)',
          icon: '💨',
          targetX: 660,
          targetY: 210,
          tolerance: 45,
          desc: 'Gas comburent indispensable per a les combustions als motors tèrmics i la soldadura oxiacetilènica.',
          svg: `<g>
          <rect x="620" y="170" width="80" height="80" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
          <text x="660" y="205" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">O</text>
          <text x="660" y="235" text-anchor="middle" font-size="11" font-weight="bold" fill="#bae6fd">Oxigen (8)</text>
        </g>`
        }
      ]
    },

    // UD3: BLOC DIAGRAMA D'UNA FALLA TECTÒNICA
    {
      id: 'falles',
      title: 'Bloc Diagrama d\'una Falla Tectònica',
      category: 'geologia',
      unit: 'UD3',
      badge: 'UD3 · Riscos Sísmics',
      icon: '🪨',
      desc: 'Munta l\'origen d\'un terratrémol: pla de fractura, bloc caigut, bloc aixecat, hipocentre i epicentre en superfície.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <polygon points="120,480 350,150 680,150 450,480" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="6 4"/>
      <text x="400" y="560" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">FRACTURA TECTÒNICA I PROPAGACIÓ D'ONES SÍSMIQUES</text>`,
      pieces: [
        {
          id: 'fal-pla',
          name: 'Pla de Falla (Superfície de Ruptura)',
          icon: '📐',
          targetX: 400,
          targetY: 300,
          tolerance: 50,
          desc: 'Superfície inclinada sobre la qual es produeix el desplaçament brusc dels blocs rocosos.',
          svg: `<g>
          <line x1="330" y1="180" x2="470" y2="420" stroke="#dc2626" stroke-width="8" stroke-linecap="round"/>
          <text x="400" y="290" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c" transform="rotate(45 400 290)">Pla de Falla</text>
        </g>`
        },
        {
          id: 'fal-bloc-baix',
          name: 'Bloc Caigut (Graben)',
          icon: '⬇️',
          targetX: 260,
          targetY: 320,
          tolerance: 50,
          desc: 'Bloc de terreny que descendeix pel pla de falla a causa d\'esforços de distensió tectònica.',
          svg: `<g>
          <polygon points="160,370 290,190 340,370" fill="#b45309" stroke="#78350f" stroke-width="3"/>
          <text x="260" y="330" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Bloc Caigut</text>
        </g>`
        },
        {
          id: 'fal-bloc-alt',
          name: 'Bloc Aixecat (Horst)',
          icon: '⬆️',
          targetX: 540,
          targetY: 250,
          tolerance: 50,
          desc: 'Bloc que roman en una cota superior formant relleus i escarpaments a la superfície.',
          svg: `<g>
          <polygon points="460,370 510,190 640,190 590,370" fill="#15803d" stroke="#166534" stroke-width="3"/>
          <text x="550" y="270" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Bloc Aixecat</text>
        </g>`
        },
        {
          id: 'fal-hipo',
          name: 'Hipocentre (Focus Sísmic Profund)',
          icon: '💥',
          targetX: 420,
          targetY: 380,
          tolerance: 45,
          desc: 'Punt exacte sota terra on s\'inicia la ruptura i s\'allibera bruscament l\'energia acumulada en forma d\'ones sísmiques.',
          svg: `<g>
          <circle cx="420" cy="380" r="22" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
          <circle cx="420" cy="380" r="10" fill="#fef08a"/>
          <text x="420" y="420" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">Hipocentre</text>
        </g>`
        },
        {
          id: 'fal-epi',
          name: 'Epicentre (Punt en Superfície)',
          icon: '📍',
          targetX: 420,
          targetY: 150,
          tolerance: 45,
          desc: 'Punt de la superfície terrestre situat en la vertical de l\'hipocentre, on el terratrémol se sent amb màxima intensitat.',
          svg: `<g>
          <path d="M 420 120 C 405 120 395 135 420 165 C 445 135 435 120 420 120 Z" fill="#dc2626"/>
          <circle cx="420" cy="135" r="5" fill="#ffffff"/>
          <text x="420" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Epicentre</text>
        </g>`
        }
      ]
    },

    // UD4: AEROGENERADOR D'ENERGIA EÒLICA
    {
      id: 'eolica',
      title: 'Aerogenerador d\'Energia Eòlica',
      category: 'geologia',
      unit: 'UD4',
      badge: 'UD4 · Energies Renovables',
      icon: '🌬️',
      desc: 'Acobla els components de la turbina eòlica: fonamentació de formigó, torre d\'acer, gòndola, rotor amb pales i transformador.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <line x1="100" y1="520" x2="700" y2="520" stroke="#16a34a" stroke-width="8"/>
      <text x="400" y="565" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">CONVERSIÓ: ENERGIA CINÈTICA DEL VENT A ENERGIA ELÈCTRICA</text>`,
      pieces: [
        {
          id: 'eol-fonament',
          name: 'Fonamentació de Formigó Armat',
          icon: '🧱',
          targetX: 400,
          targetY: 505,
          tolerance: 45,
          desc: 'Base soterrada de centenars de tones que suporta les colossals forces de torsió del vent sobre la torre.',
          svg: `<g>
          <polygon points="320,520 480,520 450,475 350,475" fill="#64748b" stroke="#334155" stroke-width="3"/>
          <text x="400" y="505" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Fonaments</text>
        </g>`
        },
        {
          id: 'eol-torre',
          name: 'Torre Tubular d'Acer',
          icon: '🗼',
          targetX: 400,
          targetY: 340,
          tolerance: 50,
          desc: 'Estructura d\'acer de 80 a 120 metres que eleva el rotor a l\'altura on el vent bufa més fort i amb menys turbulències.',
          svg: `<g>
          <polygon points="370,475 430,475 415,190 385,190" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
          <text x="400" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b" transform="rotate(-90 400 340)">Torre d'Acer</text>
        </g>`
        },
        {
          id: 'eol-gondola',
          name: 'Gòndola (Multiplicador + Generador)',
          icon: '📦',
          targetX: 435,
          targetY: 180,
          tolerance: 45,
          desc: 'Allotja l\'eix de gir, el multiplicador d\'engranatges (puja de 15 rpm a 1.500 rpm) i l\'alternador que genera electricitat.',
          svg: `<g>
          <rect x="385" y="155" width="100" height="45" rx="8" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
          <circle cx="395" cy="177" r="12" fill="#0284c7"/>
          <text x="445" y="182" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Gòndola</text>
        </g>`
        },
        {
          id: 'eol-pales',
          name: 'Rotor amb 3 Pales Aerodinàmiques',
          icon: '🪭',
          targetX: 350,
          targetY: 175,
          tolerance: 45,
          desc: 'Pales de fibra de vidre amb perfil alar aerodinàmic que giren per sustentació en rebre el flux de vent.',
          svg: `<g>
          <line x1="350" y1="175" x2="350" y2="70" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          <line x1="350" y1="175" x2="260" y2="230" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          <line x1="350" y1="175" x2="430" y2="230" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          <circle cx="350" cy="175" r="14" fill="#0284c7"/>
          <text x="350" y="179" text-anchor="middle" font-size="8" font-weight="bold" fill="#ffffff">Rotor</text>
        </g>`
        },
        {
          id: 'eol-trans',
          name: 'Transformador de Base',
          icon: '⚡',
          targetX: 470,
          targetY: 485,
          tolerance: 40,
          desc: 'Eleva la tensió generada de 690 V a mitja tensió (20.000 V o 30.000 V) per enviar l\'energia a la xarxa elèctrica.',
          svg: `<g>
          <rect x="445" y="460" width="50" height="50" rx="6" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
          <text x="470" y="490" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Transfo</text>
        </g>`
        }
      ]
    },

    // UD4: CIRCUIT SOLAR FOTOVOLTAIC AÏLLAT
    {
      id: 'solar',
      title: 'Circuit Solar Fotovoltaic Aïllat',
      category: 'geologia',
      unit: 'UD4',
      badge: 'UD4 · Energia Solar',
      icon: '☀️',
      desc: 'Connecta el flux solar autònom: panell fotovoltaic, regulador de càrrega, bateria acumuladora i inversor 12V a 230V.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Línia de cablejat elèctric del circuit -->
      <path d="M 240 230 L 380 230 L 380 370 L 260 370 M 420 230 L 560 230 L 560 350" stroke="#cbd5e1" stroke-width="6" fill="none"/>
      <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">EFECTE FOTOVOLTAIC I EMMAGATZEMATGE D'ENERGIA</text>`,
      pieces: [
        {
          id: 'sol-panell',
          name: 'Panell Solar Fotovoltaic (Silici)',
          icon: '🟦',
          targetX: 180,
          targetY: 230,
          tolerance: 50,
          desc: 'Cèl·lules de silici que absorbeixen fotons de llum solar i alliberen electrons generant corrent continu (DC).',
          svg: `<g>
          <rect x="120" y="160" width="120" height="140" rx="6" fill="#1e3a8a" stroke="#172554" stroke-width="3"/>
          <line x1="160" y1="160" x2="160" y2="300" stroke="#38bdf8" stroke-width="2"/>
          <line x1="200" y1="160" x2="200" y2="300" stroke="#38bdf8" stroke-width="2"/>
          <line x1="120" y1="210" x2="240" y2="210" stroke="#38bdf8" stroke-width="2"/>
          <line x1="120" y1="250" x2="240" y2="250" stroke="#38bdf8" stroke-width="2"/>
          <text x="180" y="325" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">Panell Solar</text>
        </g>`
        },
        {
          id: 'sol-regulador',
          name: 'Regulador de Càrrega (PWM/MPPT)',
          icon: '🎛️',
          targetX: 380,
          targetY: 230,
          tolerance: 45,
          desc: 'Controla el voltatge d\'entrada per evitar la sobrecàrrega o descàrrega profunda de la bateria.',
          svg: `<g>
          <rect x="340" y="190" width="80" height="80" rx="8" fill="#10b981" stroke="#047857" stroke-width="3"/>
          <circle cx="365" cy="220" r="5" fill="#ffffff"/>
          <circle cx="395" cy="220" r="5" fill="#ffffff"/>
          <text x="380" y="250" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Regulador</text>
        </g>`
        },
        {
          id: 'sol-bateria',
          name: 'Bateria Acumuladora (12V Gel/Liti)',
          icon: '🔋',
          targetX: 380,
          targetY: 390,
          tolerance: 45,
          desc: 'Emmagatzema energia química per a disposar d\'electricitat a la nit o en dies ennuvolats.',
          svg: `<g>
          <rect x="330" y="350" width="100" height="80" rx="8" fill="#334155" stroke="#0f172a" stroke-width="3"/>
          <rect x="350" y="340" width="16" height="10" fill="#dc2626"/>
          <rect x="394" y="340" width="16" height="10" fill="#0284c7"/>
          <text x="380" y="395" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Bateria 12V</text>
        </g>`
        },
        {
          id: 'sol-inversor',
          name: 'Inversor DC / AC (12V a 230V)',
          icon: '🔄',
          targetX: 560,
          targetY: 230,
          tolerance: 45,
          desc: 'Transforma el corrent continu de 12V de la bateria en corrent altern sinusoïdal de 230V per als endolls de taller.',
          svg: `<g>
          <rect x="515" y="185" width="90" height="90" rx="10" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
          <text x="560" y="225" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Inversor</text>
          <text x="560" y="245" text-anchor="middle" font-size="9" fill="#ffffff">12V ➔ 230V</text>
        </g>`
        },
        {
          id: 'sol-consum',
          name: 'Consumidor Elèctric (Bombeta / Eina)',
          icon: '💡',
          targetX: 680,
          targetY: 230,
          tolerance: 45,
          desc: 'Receptor final de 230V que utilitza l\'energia verda neta generada pel sol.',
          svg: `<g>
          <circle cx="680" cy="220" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
          <rect x="670" y="248" width="20" height="16" fill="#64748b"/>
          <text x="680" y="225" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">230V AC</text>
        </g>`
        }
      ]
    },

    // UD5: CILINDRE I PISTÓ DEL MOTOR DE 4 TEMPS
    {
      id: 'motor-4t',
      title: 'Cilindre i Pistó del Motor de 4 Temps',
      category: 'quimica',
      unit: 'UD5',
      badge: 'UD5 · Màquines Tèrmiques',
      icon: '🏎️',
      desc: 'Munta el conjunt mòbil del motor tèrmic: cilindre, pistó amb segments, biela, cigonyal, vàlvules i bugia.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Silueta de la camisa del cilindre -->
      <rect x="320" y="110" width="160" height="340" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="8 6"/>
      <circle cx="400" cy="480" r="50" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="6 4"/>
      <text x="400" y="565" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">CICLE DE 4 TEMPS: ADMISSIÓ, COMPRESSIÓ, EXPLOSIÓ I ESCAPAMENT</text>`,
      pieces: [
        {
          id: 'mot-culata',
          name: 'Bugia d'Encès (Espurna)',
          icon: '⚡',
          targetX: 400,
          targetY: 95,
          tolerance: 40,
          desc: 'Genera una espurna d\'alta tensió (20.000 V) que inflama la barreja comprimida de gasolina i aire.',
          svg: `<g>
          <rect x="390" y="60" width="20" height="50" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="400" cy="115" r="4" fill="#38bdf8"/>
          <text x="400" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Bugia</text>
        </g>`
        },
        {
          id: 'mot-valvules',
          name: 'Vàlvules (Admissió i Escapament)',
          icon: '🍄',
          targetX: 350,
          targetY: 115,
          tolerance: 45,
          desc: 'S\'obrin i tanquen sincronitzades per l\'arbre de lleves per permetre l\'entrada de mescla fresca i l\'eixida de fums.',
          svg: `<g>
          <polygon points="340,130 360,130 353,90 347,90" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <polygon points="440,130 460,130 453,90 447,90" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <text x="350" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">Vàlvules</text>
        </g>`
        },
        {
          id: 'mot-pisto',
          name: 'Pistó d'Alumini (amb Segments)',
          icon: '🥫',
          targetX: 400,
          targetY: 210,
          tolerance: 45,
          desc: 'Reb l\'empenta de l\'explosió del gas i es desplaça amunt i avall entre el PMS (punt mort superior) i el PMI.',
          svg: `<g>
          <rect x="330" y="165" width="140" height="85" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
          <line x1="330" y1="180" x2="470" y2="180" stroke="#0f172a" stroke-width="2"/>
          <line x1="330" y1="195" x2="470" y2="195" stroke="#0f172a" stroke-width="2"/>
          <circle cx="400" cy="225" r="12" fill="#64748b"/>
          <text x="400" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">Pistó</text>
        </g>`
        },
        {
          id: 'mot-biela',
          name: 'Biela d'Acer Forjat',
          icon: '🦴',
          targetX: 400,
          targetY: 340,
          tolerance: 50,
          desc: 'Braç articulat que transmet el moviment lineal alternatiu del pistó cap al moviment circular del cigonyal.',
          svg: `<g>
          <line x1="400" y1="230" x2="400" y2="440" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
          <circle cx="400" cy="230" r="10" fill="#94a3b8"/>
          <circle cx="400" cy="440" r="16" fill="#94a3b8"/>
          <text x="400" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Biela</text>
        </g>`
        },
        {
          id: 'mot-cigonyal',
          name: 'Cigonyal (Eix Motor Rotatiu)',
          icon: '🔄',
          targetX: 400,
          targetY: 460,
          tolerance: 45,
          desc: 'Eix amb colzes que transforma l\'esforç de les bieles en rotació pura cap al volant d\'inèrcia i la caixa de canvis.',
          svg: `<g>
          <circle cx="400" cy="460" r="45" fill="#334155" stroke="#0f172a" stroke-width="4"/>
          <circle cx="400" cy="440" r="12" fill="#ef4444"/>
          <circle cx="400" cy="460" r="12" fill="#f8fafc"/>
          <text x="400" y="495" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Cigonyal</text>
        </g>`
        }
      ]
    },

    // MAT 1: BALANÇA DE PRECISIÓ: PESAR PECES DE TALLER
    {
      id: 'balanca',
      title: 'Balança de Precisió: Pesar Peces de Taller',
      category: 'mates',
      unit: 'MAT 1',
      badge: 'MAT 1 · Mesura i Càlcul',
      icon: '⚖️',
      desc: 'Equilibra el plat col·locant les peses homologades (1 kg, 500 g, 200 g, 100 g i 50 g) segons la seua tara.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Estructura de la balança de dos plats -->
      <line x1="200" y1="200" x2="600" y2="200" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
      <polygon points="400,180 370,480 430,480" fill="#475569" stroke="#1e293b" stroke-width="3"/>
      <!-- Plat esquerre (peça de motor coneguda de 1.850 g) -->
      <line x1="230" y1="205" x2="230" y2="330" stroke="#64748b" stroke-width="4"/>
      <ellipse cx="230" cy="330" rx="80" ry="20" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
      <rect x="180" y="270" width="100" height="50" rx="6" fill="#3b82f6"/>
      <text x="230" y="300" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Peça: 1.850 g</text>
      <!-- Plat dret (on van les peses) -->
      <line x1="570" y1="205" x2="570" y2="330" stroke="#64748b" stroke-width="4"/>
      <ellipse cx="570" cy="330" rx="80" ry="20" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
      <text x="400" y="555" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">SISTEMA MÈTRIC DECIMAL: 1 kg = 1.000 g</text>`,
      pieces: [
        {
          id: 'pes-1000',
          name: 'Pesa de 1 kg (1.000 g)',
          icon: '🏋️',
          targetX: 540,
          targetY: 300,
          tolerance: 45,
          desc: 'La massa estàndard del SI. Representa 1.000 grams exactes.',
          svg: `<g>
          <rect x="515" y="260" width="50" height="60" rx="6" fill="#334155" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="540" cy="255" r="8" fill="#334155"/>
          <text x="540" y="295" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1 kg</text>
        </g>`
        },
        {
          id: 'pes-500',
          name: 'Pesa de 500 g (Mig Quilo)',
          icon: '⚖️',
          targetX: 600,
          targetY: 305,
          tolerance: 45,
          desc: 'La meitat d\'un quilo (0,5 kg = 500 g).',
          svg: `<g>
          <rect x="580" y="275" width="40" height="50" rx="5" fill="#475569" stroke="#0f172a" stroke-width="2"/>
          <circle cx="600" cy="270" r="6" fill="#475569"/>
          <text x="600" y="305" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">500 g</text>
        </g>`
        },
        {
          id: 'pes-200',
          name: 'Pesa de 200 g',
          icon: '⚖️',
          targetX: 530,
          targetY: 240,
          tolerance: 40,
          desc: 'Pesa de calibratge de dos-cents grams (0,2 kg).',
          svg: `<g>
          <rect x="515" y="215" width="30" height="40" rx="4" fill="#64748b" stroke="#0f172a" stroke-width="2"/>
          <text x="530" y="240" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">200g</text>
        </g>`
        },
        {
          id: 'pes-100',
          name: 'Pesa de 100 g',
          icon: '⚖️',
          targetX: 575,
          targetY: 245,
          tolerance: 40,
          desc: 'Un decagram (0,1 kg = 100 g).',
          svg: `<g>
          <rect x="562" y="225" width="26" height="35" rx="4" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
          <text x="575" y="248" text-anchor="middle" font-size="8" font-weight="bold" fill="#0f172a">100g</text>
        </g>`
        },
        {
          id: 'pes-50',
          name: 'Pesa de 50 g',
          icon: '⚖️',
          targetX: 615,
          targetY: 250,
          tolerance: 40,
          desc: 'Completa els 1.850 g exactes (1.000 + 500 + 200 + 100 + 50 = 1.850 g) deixant la balança en perfecte equilibri horitzontal.',
          svg: `<g>
          <rect x="605" y="235" width="20" height="28" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
          <text x="615" y="253" text-anchor="middle" font-size="8" font-weight="bold" fill="#0f172a">50g</text>
        </g>`
        }
      ]
    },

    // MAT 2: ESCALA TÈRMICA D'ENTERS A LA CÀMERA FRIGORÍFICA
    {
      id: 'termometre-enters',
      title: 'Escala Tèrmica d\'Enters a la Càmera Frigorífica',
      category: 'mates',
      unit: 'MAT 2',
      badge: 'MAT 2 · Nombres Positius i Negatius',
      icon: '🌡️',
      desc: 'Ordena a la columna graduada les fites tèrmiques: +100°C, +20°C, 0°C, -18°C i -40°C.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Columna graduada del termòmetre -->
      <rect x="375" y="60" width="50" height="460" rx="25" fill="#e2e8f0" stroke="#475569" stroke-width="4"/>
      <circle cx="400" cy="510" r="40" fill="#ef4444" stroke="#475569" stroke-width="4"/>
      <line x1="330" y1="300" x2="470" y2="300" stroke="#0284c7" stroke-width="3"/>
      <text x="400" y="580" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">RECTA VERTICAL DELS ENTERS EN GRAUS CELSIUS (°C)</text>`,
      pieces: [
        {
          id: 'ter-100',
          name: 'Punt +100°C: Ebullició de l'Aigua',
          icon: '♨️',
          targetX: 400,
          targetY: 100,
          tolerance: 45,
          desc: 'Temperatura màxima a pressió atmosfèrica estàndard: l\'aigua bull i passa a vapor d\'aigua (+100).',
          svg: `<g>
          <rect x="270" y="80" width="260" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
          <text x="400" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">+100°C (Ebullició Aigua)</text>
        </g>`
        },
        {
          id: 'ter-20',
          name: 'Punt +20°C: Temperatura de Taller',
          icon: '🌤️',
          targetX: 400,
          targetY: 200,
          tolerance: 45,
          desc: 'Valor positiu moderat: ambient confortable de treball (+20).',
          svg: `<g>
          <rect x="270" y="180" width="260" height="40" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/>
          <text x="400" y="205" text-anchor="middle" font-size="13" font-weight="bold" fill="#9a3412">+20°C (Ambient Confortable)</text>
        </g>`
        },
        {
          id: 'ter-0',
          name: 'Punt 0°C: Fusió / Congelació',
          icon: '🧊',
          targetX: 400,
          targetY: 300,
          tolerance: 45,
          desc: 'El zero de referència: transició entre nombres positius i nombres negatius.',
          svg: `<g>
          <rect x="270" y="280" width="260" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
          <text x="400" y="305" text-anchor="middle" font-size="14" font-weight="bold" fill="#0369a1">0°C (Punt de Fusió / Gel)</text>
        </g>`
        },
        {
          id: 'ter-neg18',
          name: 'Punt -18°C: Congelador Industrial',
          icon: '❄️',
          targetX: 400,
          targetY: 390,
          tolerance: 45,
          desc: 'Nombre negatiu: temperatura reglamentària per a la conservació d\'aliments ultracongelats (-18).',
          svg: `<g>
          <rect x="270" y="370" width="260" height="40" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
          <text x="400" y="395" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">-18°C (Congelador Industrial)</text>
        </g>`
        },
        {
          id: 'ter-neg40',
          name: 'Punt -40°C: Límit Anticongelant',
          icon: '🥶',
          targetX: 400,
          targetY: 470,
          tolerance: 45,
          desc: 'El valor més baix de l\'escala (-40 < -18): límit de protecció dels líquids refrigerants d\'automoció d\'alta qualitat.',
          svg: `<g>
          <rect x="270" y="450" width="260" height="40" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
          <text x="400" y="475" text-anchor="middle" font-size="13" font-weight="bold" fill="#5b21b6">-40°C (Límit Anticongelant G12)</text>
        </g>`
        }
      ]
    },

    // MAT 3: CAIXA DE BROQUES: MÚLTIPLES I DIVISIBILITAT
    {
      id: 'caixa-broques',
      title: 'Caixa de Broques: Múltiples i Divisibilitat',
      category: 'mates',
      unit: 'MAT 3',
      badge: 'MAT 3 · Divisibilitat de Taller',
      icon: '🛠️',
      desc: 'Ordena les broques d\'acer ràpid (HSS) a l\'estoig segons el seu diàmetre de més prim a més gros: Ø 2, 4, 6, 8 i 10 mm.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <!-- Estoig de broques de xapa vermella de taller -->
      <rect x="120" y="100" width="560" height="400" rx="14" fill="#991b1b" stroke="#7f1d1d" stroke-width="6"/>
      <rect x="140" y="120" width="520" height="360" rx="8" fill="#1e293b"/>
      <line x1="140" y1="360" x2="660" y2="360" stroke="#475569" stroke-width="4"/>
      <text x="400" y="555" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">PROGRESSIÓ ARITMÈTICA: MÚLTIPLES DE 2 mm (DIVISIBILITAT PER 2)</text>`,
      pieces: [
        {
          id: 'broc-2',
          name: 'Broca Ø 2 mm (La més fina)',
          icon: '📍',
          targetX: 200,
          targetY: 280,
          tolerance: 45,
          desc: 'La broca més petita de la sèrie, diàmetre par mínim (2 = 2 · 1).',
          svg: `<g>
          <rect x="197" y="160" width="6" height="200" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
          <text x="200" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Ø 2</text>
        </g>`
        },
        {
          id: 'broc-4',
          name: 'Broca Ø 4 mm',
          icon: '📍',
          targetX: 300,
          targetY: 280,
          tolerance: 45,
          desc: 'Doble de diàmetre que la primera (4 = 2 · 2).',
          svg: `<g>
          <rect x="294" y="160" width="12" height="200" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
          <text x="300" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Ø 4</text>
        </g>`
        },
        {
          id: 'broc-6',
          name: 'Broca Ø 6 mm',
          icon: '📍',
          targetX: 400,
          targetY: 280,
          tolerance: 45,
          desc: 'Múltiple comú de 2 i de 3 (6 = 2 · 3). Molt habitual per a tacs de paret.',
          svg: `<g>
          <rect x="391" y="160" width="18" height="200" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
          <text x="400" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Ø 6</text>
        </g>`
        },
        {
          id: 'broc-8',
          name: 'Broca Ø 8 mm',
          icon: '📍',
          targetX: 500,
          targetY: 280,
          tolerance: 45,
          desc: 'Potència de 2 (8 = 2³). Perforació de forats de mida mitjana.',
          svg: `<g>
          <rect x="488" y="160" width="24" height="200" fill="#64748b" stroke="#0f172a" stroke-width="2"/>
          <text x="500" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Ø 8</text>
        </g>`
        },
        {
          id: 'broc-10',
          name: 'Broca Ø 10 mm (La més grossa)',
          icon: '📍',
          targetX: 600,
          targetY: 280,
          tolerance: 45,
          desc: 'Múltiple de 2 i de 5 (10 = 2 · 5). Broca gran per a caragols d\'ancoratge pesant.',
          svg: `<g>
          <rect x="585" y="160" width="30" height="200" fill="#475569" stroke="#0f172a" stroke-width="2"/>
          <text x="600" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Ø 10</text>
        </g>`
        }
      ]
    },

    // MAT 4: PEU DE REI / CALIBRE DE TALLER
    {
      id: 'calibre',
      title: 'Peu de Rei / Calibre de Taller',
      category: 'mates',
      unit: 'MAT 4',
      badge: 'MAT 4 · Nombres Decimals',
      icon: '📏',
      desc: 'Munta l\'instrument de mesura d\'alta precisió (0,05 mm): regle graduat, nonius, mordasses exteriors, orelles interiors i sonda.',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <rect x="100" y="270" width="600" height="50" fill="none" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="8 6"/>
      <text x="400" y="550" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">MESURA DECIMAL DE PRECISIÓ: DÈCIMES I CENTÈSIMES DE MIL·LÍMETRE</text>`,
      pieces: [
        {
          id: 'cal-regle',
          name: 'Regle Principal Fix (Escala en mm)',
          icon: '📏',
          targetX: 420,
          targetY: 295,
          tolerance: 50,
          desc: 'Cos massís d\'acer inoxidable amb l\'escala mil·limètrica principal de 0 a 150 mm.',
          svg: `<g>
          <rect x="180" y="275" width="480" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
          <line x1="220" y1="275" x2="220" y2="295" stroke="#0f172a" stroke-width="2"/>
          <line x1="260" y1="275" x2="260" y2="295" stroke="#0f172a" stroke-width="2"/>
          <line x1="300" y1="275" x2="300" y2="295" stroke="#0f172a" stroke-width="2"/>
          <line x1="340" y1="275" x2="340" y2="295" stroke="#0f172a" stroke-width="2"/>
          <line x1="380" y1="275" x2="380" y2="295" stroke="#0f172a" stroke-width="2"/>
          <line x1="420" y1="275" x2="420" y2="295" stroke="#0f172a" stroke-width="2"/>
          <text x="420" y="310" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Regle Principal (mm)</text>
        </g>`
        },
        {
          id: 'cal-mordasses',
          name: 'Mordassa Fixa per a Exteriors',
          icon: '📐',
          targetX: 150,
          targetY: 340,
          tolerance: 45,
          desc: 'Braç inferior fix perpendicular al regle per mesurar diàmetres exteriors i gruixos de xapa.',
          svg: `<g>
          <polygon points="120,275 180,275 180,390 120,440" fill="#cbd5e1" stroke="#334155" stroke-width="3"/>
          <text x="150" y="375" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Mordassa Fixa</text>
        </g>`
        },
        {
          id: 'cal-orelles',
          name: 'Orella Superior per a Interiors',
          icon: '🐰',
          targetX: 150,
          targetY: 230,
          tolerance: 45,
          desc: 'Puntes afilades superiors que entren dins de tubs o cilindres per mesurar diàmetres interns.',
          svg: `<g>
          <polygon points="120,275 180,275 160,180 130,180" fill="#cbd5e1" stroke="#334155" stroke-width="3"/>
          <text x="150" y="240" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Orelles Interiors</text>
        </g>`
        },
        {
          id: 'cal-nonius',
          name: 'Nonius / Cursó Mòbil Lliscant',
          icon: '🔍',
          targetX: 300,
          targetY: 320,
          tolerance: 45,
          desc: 'Peça lliscant amb 10 o 20 divisions que permet llegir fraccions decimals exactes de mil·límetre (0,1 mm o 0,05 mm).',
          svg: `<g>
          <rect x="250" y="270" width="100" height="90" rx="4" fill="#94a3b8" stroke="#0f172a" stroke-width="3"/>
          <polygon points="250,360 250,440 290,360" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
          <text x="300" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Nonius Decimal</text>
        </g>`
        },
        {
          id: 'cal-sonda',
          name: 'Sonda de Profunditat',
          icon: '🗡️',
          targetX: 680,
          targetY: 295,
          tolerance: 45,
          desc: 'Tija prima que surt per la part posterior per mesurar la profunditat de forats cecs o ranures estretes.',
          svg: `<g>
          <line x1="640" y1="295" x2="750" y2="295" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>
          <text x="700" y="285" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">Sonda Fons</text>
        </g>`
        }
      ]
    },

    // MAT 5: PALANCA DE PRIMER GÈNERE: LLEI DE LA PALANCA
    {
      id: 'politges',
      title: 'Palanca de Primer Gènere: Llei de la Palanca',
      category: 'mates',
      unit: 'MAT 5',
      badge: 'MAT 5 · Proporcionalitat i Forces',
      icon: '🏗️',
      desc: 'Munta la màquina simple de taller: barra graduada, fulcre de suport, càrrega resistent (R) i dinamòmetre de força (F).',
      bgSvg: `<rect width="800" height="600" fill="#f8fafc" rx="16"/>
      <line x1="100" y1="480" x2="700" y2="480" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
      <text x="400" y="555" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b">PROPORCIONALITAT INVERSA: FORÇA · BRAÇ_F = RESISTÈNCIA · BRAÇ_R</text>`,
      pieces: [
        {
          id: 'pal-barra',
          name: 'Barra Rígida Graduada (Balancí)',
          icon: '🪵',
          targetX: 400,
          targetY: 280,
          tolerance: 50,
          desc: 'Barra indeformable sobre la qual s\'equilibren els moments de les dues forces oposades.',
          svg: `<g>
          <rect x="150" y="270" width="500" height="20" rx="6" fill="#334155" stroke="#0f172a" stroke-width="3"/>
          <line x1="250" y1="270" x2="250" y2="290" stroke="#f8fafc" stroke-width="2"/>
          <line x1="350" y1="270" x2="350" y2="290" stroke="#f8fafc" stroke-width="2"/>
          <line x1="450" y1="270" x2="450" y2="290" stroke="#f8fafc" stroke-width="2"/>
          <line x1="550" y1="270" x2="550" y2="290" stroke="#f8fafc" stroke-width="2"/>
          <text x="400" y="260" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Barra de Palanca</text>
        </g>`
        },
        {
          id: 'pal-fulcre',
          name: 'Punt de Suport (Fulcre Central)',
          icon: '📐',
          targetX: 350,
          targetY: 370,
          tolerance: 45,
          desc: 'Vèrtex rígid triangular sobre el qual pivota tota la palanca.',
          svg: `<g>
          <polygon points="350,290 310,450 390,450" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
          <text x="350" y="470" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c2d12">Fulcre (Suport)</text>
        </g>`
        },
        {
          id: 'pal-resistencia',
          name: 'Càrrega Resistent (R = 100 kg)',
          icon: '📦',
          targetX: 200,
          targetY: 210,
          tolerance: 45,
          desc: 'Pes pesant situat molt a prop del fulcre (braç d = 1 m). Resistència R = 1.000 N.',
          svg: `<g>
          <rect x="160" y="170" width="80" height="80" rx="8" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
          <text x="200" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Càrrega (R)</text>
          <text x="200" y="225" text-anchor="middle" font-size="12" font-weight="900" fill="#ffffff">100 kg</text>
        </g>`
        },
        {
          id: 'pal-brac',
          name: 'Braç de Potència (d = 3 m)',
          icon: '📏',
          targetX: 500,
          targetY: 320,
          tolerance: 45,
          desc: 'Distància triple des del fulcre fins a la força aplicada. Com més llarg és el braç, menys esforç cal fer!',
          svg: `<g>
          <line x1="350" y1="320" x2="650" y2="320" stroke="#0284c7" stroke-width="4" stroke-dasharray="6 3"/>
          <text x="500" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Braç Triple (d₂ = 3 · d₁)</text>
        </g>`
        },
        {
          id: 'pal-forca',
          name: 'Força Aplicada (F = 33,3 kg)',
          icon: '⬇️',
          targetX: 630,
          targetY: 210,
          tolerance: 45,
          desc: 'Gràcies a la proporcionalitat inversa, amb només un terç de la força s\'aixeca tota la càrrega: \'Doneu-me un punt de suport i mouré el món\' (Arquimedes).',
          svg: `<g>
          <path d="M 630 160 L 630 240 M 615 225 L 630 245 L 645 225" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
          <text x="630" y="150" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Força F = 33,3 kg</text>
        </g>`
        }
      ]
    }
  ];

  // --- ESTAT GLOBAL DE L'APLICACIÓ ---
  let currentChallenge = null;
  let placedPieceIds = new Set();
  let timerInterval = null;
  let timerSeconds = 0;
  let soundEnabled = true;
  let selectedPieceId = null; // Suport tàctil selecció-toque
   // Mode Repte per defecte (sense pistes a la PDI)

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playPDISound = function(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'tap') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'correct') {
        // Acord ascendent de victòria parcial (Do - Mi - Sol)
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.18, now + idx * 0.07);
          gain.gain.linearRampToValueAtTime(0, now + idx * 0.07 + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.22);
        });
      } else if (type === 'error') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.18);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'win') {
        // Fanfàrria triomfal final
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.25, now + idx * 0.12);
          gain.gain.linearRampToValueAtTime(0, now + idx * 0.12 + 0.45);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.45);
        });
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  };

  // --- GESTIÓ DE SO I FULLSCREEN ---
  window.togglePDISound = function() {
    soundEnabled = !soundEnabled;
    const soundText = document.getElementById('sound-text');
    const soundIcon = document.getElementById('sound-icon');
    const gameSoundBtn = document.getElementById('game-sound-btn');
    if (soundText) soundText.textContent = soundEnabled ? 'So Activat' : 'So Silenciat';
    if (soundIcon) soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
    if (gameSoundBtn) gameSoundBtn.textContent = soundEnabled ? '🔊' : '🔇';
    if (soundEnabled) window.playPDISound('tap');
  };

  
  
  window.togglePDIFullscreen = function() {
    window.playPDISound('tap');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // --- FILTRE DEL TAULER DE REPTES ---
  window.filterChallenges = function(category, element) {
    window.playPDISound('tap');
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // --- RENDERITZACIÓ DEL TAULER DE REPTES ---
  function renderDashboard() {
    const grid = document.getElementById('challenges-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const catColors = {
      anatomia: '#e11d48',
      quimica: '#0284c7',
      geologia: '#059669',
      mates: '#7c3aed'
    };

    CHALLENGES.forEach(ch => {
      const card = document.createElement('div');
      card.className = 'pdi-challenge-card';
      card.setAttribute('data-category', ch.category);
      card.onclick = () => window.openChallenge(ch.id);

      const color = catColors[ch.category] || '#0284c7';
      const previewPills = ch.pieces.slice(0, 3).map(p => `<span class="part-pill-mini">${p.icon} ${p.name.split(' ')[0]}</span>`).join('');
      const extraCount = ch.pieces.length > 3 ? `<span class="part-pill-mini">+${ch.pieces.length - 3}</span>` : '';

      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-unit-badge" style="background: ${color};">${ch.badge}</span>
          <span class="card-diff-badge">🧩 ${ch.pieces.length} peces</span>
        </div>
        <h3>${ch.icon} ${ch.title}</h3>
        <p>${ch.desc}</p>
        <div class="card-parts-preview">
          ${previewPills}
          ${extraCount}
        </div>
        <button class="btn-launch-challenge" style="background: ${color};">▶️ Iniciar Repte</button>
      `;
      grid.appendChild(card);
    });

    const countAll = document.getElementById('count-all');
    if (countAll) countAll.textContent = CHALLENGES.length;
  }

  // --- NAVEGACIÓ ENTRE VISTES ---
  window.showPDIDashboard = function() {
    window.playPDISound('tap');
    clearInterval(timerInterval);
    const dash = document.getElementById('pdi-dashboard');
    const game = document.getElementById('pdi-game-view');
    const modal = document.getElementById('victory-modal');
    if (dash) dash.style.display = 'block';
    if (game) game.style.display = 'none';
    if (modal) modal.style.display = 'none';
    selectedPieceId = null;
    currentChallenge = null;
  };

  window.openChallenge = function(id) {
    const challenge = CHALLENGES.find(c => c.id === id);
    if (!challenge) return;
    currentChallenge = challenge;
    placedPieceIds.clear();
    selectedPieceId = null;
    window.playPDISound('tap');

    // Actualitza HUD i metadades
    const dash = document.getElementById('pdi-dashboard');
    const game = document.getElementById('pdi-game-view');
    const modal = document.getElementById('victory-modal');
    const tooltip = document.getElementById('organ-tooltip');

    if (dash) dash.style.display = 'none';
    if (game) game.style.display = 'block';
    if (modal) modal.style.display = 'none';
    if (tooltip) tooltip.style.display = 'none';

    document.getElementById('game-unit-badge').textContent = challenge.unit;
    document.getElementById('game-act-title').textContent = challenge.title;
    document.getElementById('hud-placed').textContent = '0';
    document.getElementById('hud-total').textContent = challenge.pieces.length;

    // Cronòmetre
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);

    buildGameArena();
  };

  function updateTimerDisplay() {
    const el = document.getElementById('hud-timer');
    if (!el) return;
    const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const secs = (timerSeconds % 60).toString().padStart(2, '0');
    el.textContent = `${mins}:${secs}`;
  }

  // --- CONSTRUCCIÓ DE L'ARENA DE JOC (CANVAS + DOCK) ---
  function buildGameArena() {
    const blueprint = document.getElementById('blueprint-area');
    const dockWrapper = document.getElementById('dock-items-wrapper');
    if (!blueprint || !dockWrapper) return;

    // 1. DIBUIX DEL CANVAS SVG AMB ZONES OBJECTIU
    let targetsSvg = '';
    currentChallenge.pieces.forEach(p => {
      targetsSvg += `
        <g class="drop-target-group" data-target-id="${p.id}" onclick="handleTargetClick('${p.id}')">
          <!-- Zona d'acoblament a cegues: sense text ni nom que done la pista -->
          <circle cx="${p.targetX}" cy="${p.targetY}" r="${p.tolerance}" fill="rgba(148, 163, 184, 0.04)" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4" class="target-halo"/>
          <circle cx="${p.targetX}" cy="${p.targetY}" r="4" fill="#94a3b8" opacity="0.35"/>
        </g>
        <g id="placed-slot-${p.id}"></g>
      `;
    });

    blueprint.innerHTML = `
      <svg id="game-svg" viewBox="0 0 800 600" width="100%" height="100%" style="display:block; touch-action: none;">
        ${currentChallenge.bgSvg}
        ${targetsSvg}
      </svg>
    `;

    // 2. EMBASSAMENT DE PECES SOLTES AL DOCK
    dockWrapper.innerHTML = '';
    // Barreja l'ordre de les peces per fer-ho més dinàmic
    const shuffledPieces = [...currentChallenge.pieces].sort(() => Math.random() - 0.5);

    shuffledPieces.forEach(p => {
      const pieceCard = document.createElement('div');
      pieceCard.className = 'pdi-part-item';
      pieceCard.id = `dock-piece-${p.id}`;
      pieceCard.setAttribute('data-piece-id', p.id);

      pieceCard.innerHTML = `
        <span class="part-icon-box">${p.icon}</span>
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.95rem; font-weight:700; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
          <div style="font-size:0.75rem; color:#64748b;">Toca per seleccionar</div>
        </div>
      `;

      pieceCard.onclick = () => selectPiece(p.id);

      pieceCard.setAttribute('draggable', 'true');
      pieceCard.ondragstart = (e) => {
        selectPiece(p.id);
        e.dataTransfer.setData('text/plain', p.id);
      };

      dockWrapper.appendChild(pieceCard);
    });

    setupSvgDragAndDrop();
  }

  // --- LÒGICA D'ACOBLAMENT (SNAP) ---
  function selectPiece(pieceId) {
    if (placedPieceIds.has(pieceId)) return;
    selectedPieceId = pieceId;
    window.playPDISound('tap');

    // Ressenya visual de la peça seleccionada
    document.querySelectorAll('.dock-piece-card').forEach(el => el.classList.remove('selected'));
    const targetCard = document.getElementById(`dock-piece-${pieceId}`);
    if (targetCard) targetCard.classList.add('selected');

    // Només il·lumina la zona destí si el professor/a activa expressament el Mode Ajuda
    document.querySelectorAll('.drop-target-group').forEach(el => el.classList.remove('highlight-zone'));
  }

  window.handleTargetClick = function(targetId) {
    if (!selectedPieceId) {
      window.playPDISound('tap');
      return;
    }
    if (selectedPieceId === targetId) {
      snapPiece(selectedPieceId);
    } else {
      window.playPDISound('error');
      flashErrorTarget(targetId);
    }
  };

  function flashErrorTarget(targetId) {
    const group = document.querySelector(`.drop-target-group[data-target-id="${targetId}"] circle.target-halo`);
    if (group) {
      group.setAttribute('stroke', '#ef4444');
      group.setAttribute('fill', 'rgba(239, 68, 68, 0.15)');
      setTimeout(() => {
        group.setAttribute('stroke', '#0284c7');
        group.setAttribute('fill', 'rgba(14, 165, 233, 0.04)');
      }, 500);
    }
  }

  function snapPiece(pieceId) {
    if (placedPieceIds.has(pieceId)) return;
    const piece = currentChallenge.pieces.find(p => p.id === pieceId);
    if (!piece) return;

    placedPieceIds.add(pieceId);
    selectedPieceId = null;

    // So d'èxit
    window.playPDISound('correct');

    // Inserció gràfica a l'SVG
    const slot = document.getElementById(`placed-slot-${pieceId}`);
    if (slot) {
      slot.innerHTML = `
        <g class="snapped-piece-anim" style="animation: snap-pop 0.35s ease-out;">
          ${piece.svg}
        </g>
      `;
    }

    // Oculta/Desactiva la zona objectiu
    const targetGroup = document.querySelector(`.drop-target-group[data-target-id="${pieceId}"]`);
    if (targetGroup) targetGroup.style.display = 'none';

    // Marca la targeta del dock com a completada
    const dockCard = document.getElementById(`dock-piece-${pieceId}`);
    if (dockCard) {
      dockCard.classList.remove('selected');
      dockCard.classList.add('placed');
      dockCard.onclick = null;
      dockCard.setAttribute('draggable', 'false');
    }

    // Actualitza HUD
    document.getElementById('hud-placed').textContent = placedPieceIds.size;

    // Mostra Fitxa Tècnica / Tooltip
    showOrganTooltip(piece);

    // Comprovació de Victòria Total
    if (placedPieceIds.size === currentChallenge.pieces.length) {
      triggerVictory();
    }
  }

  function showOrganTooltip(piece) {
    const tooltip = document.getElementById('organ-tooltip');
    const icon = document.getElementById('tooltip-icon');
    const title = document.getElementById('tooltip-title');
    const text = document.getElementById('tooltip-text');

    if (tooltip && title && text) {
      icon.textContent = piece.icon || '✨';
      title.textContent = piece.name;
      text.textContent = piece.desc;
      tooltip.style.display = 'flex';
      tooltip.classList.remove('pop-anim');
      void tooltip.offsetWidth; // Force reflow
      tooltip.classList.add('pop-anim');
    }
  }

  // --- ARROSSEGAR I SOLTAR SOBRE L'SVG (HTML5 DRAG & DROP + TOUCH) ---
  function setupSvgDragAndDrop() {
    const svg = document.getElementById('game-svg');
    if (!svg) return;

    svg.ondragover = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    };

    svg.ondrop = (e) => {
      e.preventDefault();
      const pieceId = e.dataTransfer.getData('text/plain') || selectedPieceId;
      if (!pieceId) return;

      const pt = getSvgCoordinates(svg, e.clientX, e.clientY);
      const piece = currentChallenge.pieces.find(p => p.id === pieceId);
      if (!piece) return;

      const dist = Math.hypot(pt.x - piece.targetX, pt.y - piece.targetY);
      if (dist <= piece.tolerance + 30) {
        snapPiece(pieceId);
      } else {
        window.playPDISound('error');
      }
    };
  }

  function getSvgCoordinates(svg, clientX, clientY) {
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  // --- VICTÒRIA I CONFETI ---
  function triggerVictory() {
    clearInterval(timerInterval);
    setTimeout(() => {
      window.playPDISound('win');
      const modal = document.getElementById('victory-modal');
      const timeVal = document.getElementById('victory-time-val') || document.getElementById('vic-time');
      if (modal) {
        if (timeVal) {
          const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
          const secs = (timerSeconds % 60).toString().padStart(2, '0');
          timeVal.textContent = `${mins}:${secs}`;
        }
        modal.style.display = 'flex';
      }
    }, 450);
  }

  window.resetCurrentChallenge = function() {
    if (currentChallenge) {
      window.openChallenge(currentChallenge.id);
    }
  };

  window.nextChallenge = window.playNextChallenge = function() {
    if (!currentChallenge) return;
    const currentIndex = CHALLENGES.findIndex(c => c.id === currentChallenge.id);
    const nextIndex = (currentIndex + 1) % CHALLENGES.length;
    window.openChallenge(CHALLENGES[nextIndex].id);
  };

  // --- INICIALITZACIÓ EN CARREGAR LA PÀGINA ---
  document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();

    // Comprova si la URL té paràmetre d'un repte concret: ?challenge=torso
    const urlParams = new URLSearchParams(window.location.search);
    const requestedChallenge = urlParams.get('challenge');
    if (requestedChallenge && CHALLENGES.some(c => c.id === requestedChallenge)) {
      window.openChallenge(requestedChallenge);
    }
  });

})();
