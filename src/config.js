import {
    marcas1,
    marcas2,
    marcas3,
    marcas4,
    marcas5,
    marcas6,
    marcas7,
    marcas8,
    marcas9,
    marcas10,
    marcas11,
    marcas12,
    perfume1,
    perfume2,
    perfume3,
    perfume4,
    perfume5,
    perfume6,
    tratamiento1,
    tratamiento2,
    tratamiento3,
    tratamiento4,
    tratamiento5,
    tratamiento6,
} from './components/images';

export const marcasMap = {
    marcas1: {
        id: 'marcas1',
        name: 'CHANEL',
        icon: marcas1,
    },
    marcas2: {
        id: 'marcas2',
        name: 'DIOR',
        icon: marcas2,
    },
    marcas3: {
        id: 'marcas3',
        name: 'LANCOME',
        icon: marcas3,
    },
    marcas4: {
        id: 'marcas4',
        name: 'KERASTASE',
        icon: marcas4,
    },
    marcas5: {
        id: 'marcas5',
        name: 'CAROLINA HERRERA',
        icon: marcas5,
    },
    marcas6: {
        id: 'marcas6',
        name: 'GIORGIO ARMANI',
        icon: marcas6,
    },
    marcas7: {
        id: 'marcas7',
        name: 'GIVENCHY',
        icon: marcas7,
    },
    marcas8: {
        id: 'marcas8',
        name: 'ESTEE LAUDER',
        icon: marcas8,
    },
    marcas9: {
        id: 'marcas9',
        name: 'GUERLAIN',
        icon: marcas9,
    },
    marcas10: {
        id: 'marcas10',
        name: 'MAC',
        icon: marcas10,
    },
    marcas11: {
        id: 'marcas11',
        name: 'CALVIN KLEIN',
        icon: marcas11,
    },
    marcas12: {
        id: 'marcas12',
        name: 'PACO RABANNE',
        icon: marcas12,
    },
};

export const perfumesMap = {
    perfume1: {
        id: 'perfume1',
        name: '"CAROLINA | HERRERA 212 HEROES FOR HER EDP"',
        icon: perfume1,
        price: 65000,
    },
    perfume2: {
        id: 'perfume2',
        name: '"HALLOWEN | HALLOWEN EDT"',
        icon: perfume2,
        price: 40000,
    },
    perfume3: {
        id: 'perfume3',
        name: '"PACO RABANNE | INVICTUS PLATINUM END"',
        icon: perfume3,
        price: 52000,
    },
    perfume4: {
        id: 'perfume4',
        name: '"DIOR | JADORE EDP"',
        icon: perfume4,
        price: 83000,
    },
    perfume5: {
        id: 'perfume5',
        name: '"ARMANI | MY WAY EDP REFILLIABLE"',
        icon: perfume5,
        price: 52000,
    },
    perfume6: {
        id: 'perfume6',
        name: '"CALVIN KLEIN | CK ONE EDT"',
        icon: perfume6,
        price: 41000,
    },
};

export const tratamientosMap = {
    tratamiento1: {
        id: 'tratamiento1',
        name: '"CLINIQUE | DAILY ESSENTIALS"',
        icon: tratamiento1,
        price: 0,
    },
    tratamiento2: {
        id: 'tratamiento2',
        name: '"CLINIQUE | 3 STEP 1 Y 2"',
        icon: tratamiento2,
        price: 3000,
    },
    tratamiento3: {
        id: 'tratamiento3',
        name: '"L OREAL | REVITALIFT ACIDO HIALURONICO SERUM"',
        icon: tratamiento3,
        price: 5000,
    },
    tratamiento4: {
        id: 'tratamiento4',
        name: '"THE CHEMIST LOOK | BOOSTER VIT C/FERULICO"',
        icon: tratamiento4,
        price: 12000,
    },
    tratamiento5: {
        id: 'tratamiento5',
        name: '"THE CHEMIST LOOK | EXFOLIANTE RENOVADOR GA"',
        icon: tratamiento5,
        price: 7500,
    },
    tratamiento6: {
        id: 'tratamiento6',
        name: '"BIOTHERM | BLUE THERAPY PRO RETINIOL CREAM"',
        icon: tratamiento6,
        price: 50000,
    },
};

export const itemsMap = {
    ...marcasMap,
    ...perfumesMap,
    ...tratamientosMap,
};