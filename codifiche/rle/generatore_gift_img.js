'use strict';

let handlebars = require('handlebars');
let fs = require('fs');

let main = () => {
    let fonte = {
        griglia: {
            larghezza: 5,
            altezza: 5
        },
        a: {
            disegno: [0, 5,
                      0, 1, 3, 1,
                      0, 5,
                      0, 1, 3, 1,
                      0, 1, 3, 1
                     ]
        },
        b: {
            disegno: [0, 5,
                      0, 1, 3, 1,
                      0, 4, 1,
                      0, 1, 3, 1,
                      0, 5
                     ]
        },
        c: {
            disegno: [0, 5,
                      0, 1, 4,
                      0, 1, 4,
                      0, 1, 4,
                      0, 5
                     ]
        },
        d: {
            disegno: [0, 4, 1,
                      0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 4, 1
                     ]
        },
        e: {
            disegno: [0, 5,
                      0, 1, 4,
                      0, 4, 1,
                      0, 1, 4,
                      0, 5
                     ]
        },
        f: {
            disegno: [0, 5,
                      0, 1, 4,
                      0, 4, 1,
                      0, 1, 4,
                      0, 1, 4
                     ]
        },
        g: {
            disegno: [0, 5,
                      0, 1, 4,
                      0, 1, 1, 3,
                      0, 1, 3, 1,
                      0, 5
                     ]
        },
        h: {
            disegno: [0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 5,
                      0, 1, 3, 1,
                      0, 1, 3, 1
                     ]
        },
        i: {
            disegno: [0, 5,
                      2, 1, 2,
                      2, 1, 2,
                      2, 1, 2,
                      0, 5
                     ]
        },
        j: {
            disegno: [0, 5,
                      2, 1, 2,
                      2, 1, 2,
                      0, 1, 1, 1, 2,
                      0, 3, 2
                     ]
        },
        k: {
            disegno: [0, 1, 2, 1, 1,
                      0, 1, 1, 1, 2,
                      0, 2, 3,
                      0, 1, 1, 1, 2,
                      0, 1, 2, 1, 1
                     ]
        },
        l: {
            disegno: [0, 1, 4,
                      0, 1, 4,
                      0, 1, 4,
                      0, 1, 4,
                      0, 4, 1
                     ]
        },
        m: {
            disegno: [0, 1, 3, 1,
                      0, 2, 1, 2,
                      0, 1, 1, 1, 1, 1,
                      0, 1, 3, 1,
                      0, 1, 3, 1
                     ]
        },
        n: {
            disegno: [0, 1, 3, 1,
                      0, 2, 2, 1,
                      0, 1, 1, 1, 1, 1,
                      0, 1, 2, 2,
                      0, 1, 3, 1
                     ]
        },
        o: {
            disegno: [0, 5,
                      0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 5
                     ]
        },
        p: {
            disegno: [0, 4, 1,
                      0, 1, 2, 1, 1,
                      0, 4, 1,
                      0, 1, 4,
                      0, 1, 4
                     ]
        },
        q: {
            disegno: [0, 4, 1,
                      0, 1, 2, 1, 1,
                      0, 1, 2, 1, 1,
                      0, 4, 1,
                      4, 1
                     ]
        },
        r: {
            disegno: [0, 4, 1,
                      0, 1, 2, 1, 1,
                      0, 4, 1,
                      0, 1, 1, 1, 2,
                      0, 1, 2, 1, 1
                     ]
        },
        s: {
            disegno: [0, 5,
                      0, 1, 4,
                      0, 5,
                      4, 1,
                      0, 5
                     ]
        },
        t: {
            disegno: [0, 5,
                      2, 1, 2,
                      2, 1, 2,
                      2, 1, 2,
                      2, 1, 2
                     ]
        },
        u: {
            disegno: [0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 1, 3, 1,
                      0, 5
                     ]
        },
        v: {
            disegno: [0, 1, 3, 1,
                      0, 1, 3, 1,
                      1, 1, 1, 1, 1,
                      1, 1, 1, 1, 1,
                      2, 1, 2
                     ]
        },
        w: {
            disegno: [0, 1, 1, 1, 1, 1,
                      0, 1, 1, 1, 1, 1,
                      0, 1, 1, 1, 1, 1,
                      1, 1, 1, 1, 1,
                      1, 1, 1, 1, 1
                     ]
        },
        x: {
            disegno: [0, 1, 3, 1,
                      1, 1, 1, 1, 1,
                      2, 1, 2,
                      1, 1, 1, 1, 1,
                      0, 1, 3, 1
                     ]
        },
        y: {
            disegno: [0, 1, 3, 1,
                      1, 1, 1, 1, 1,
                      2, 1, 2,
                      2, 1, 2,
                      2, 1, 2
                     ]
        },
        z: {
            disegno: [0, 5,
                      3, 1, 1,
                      2, 1, 2,
                      1, 1, 3,
                      0, 5
                     ]
        }
    };

    let unCarattere = function (str) {
        return str.length === 1;
    };
    let lettere = Object.getOwnPropertyNames(fonte).filter(unCarattere);
    let numero_lettere = lettere.length;

    let esercizi = [];
    for (let indice = 0; indice < numero_lettere; indice++) {
        let esercizio = {};
        esercizio.lettera = lettere[indice];
        esercizio.codifica = fonte[esercizio.lettera].disegno;
        esercizi.push(esercizio);
    }
    let templateCloze = process.argv[2];
    fs.readFile(templateCloze, 'utf-8', function (error, source) {
        let template = handlebars.compile(source);
        let gift = template(esercizi);
        gift = gift.replace(/\s+}/g, '}');
        console.log(gift);
    });
};

main();
