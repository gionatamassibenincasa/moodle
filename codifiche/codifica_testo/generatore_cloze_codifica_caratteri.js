'use strict';

let handlebars = require('handlebars');
let fs = require('fs');

let main = () => {
    let parole = [
        "ANCORATA",
        "APPOSITI",
        "APPROCCI",
        "ARTICOLO",
        "ASSUMERE",
        "ASSUMONO",
        "ASSUNTO",
        "AUTONOMA",
        "BISOGNO",
        "BRETAGNA",
        "CAPOFILA",
        "CARDINE",
        "CERVELLO",
        "CHIAMATA",
        "CHIAMATO",
        "CHIARIRE",
        "CHIUNQUE",
        "CIASCUNO",
        "CITANDO",
        "CLASSICO",
        "CODIFICA",
        "COLETTI",
        "COMINCIA",
        "COMPITI",
        "COMPITO",
        "COMPOSTE",
        "COMPOSTO",
        "COMPUTER",
        "CONCETTI",
        "CONCLUDE",
        "CONCRETO",
        "CONIATO",
        "CONNESSA",
        "CONNESSI",
        "CONSENTE",
        "CONSISTE",
        "CONSOLE",
        "CONTIENE",
        "CONTINUE",
        "CORRENTE",
        "CREANDO",
        "CREATIVE",
        "CRUCIALI",
        "DANIELE",
        "DATABASE",
        "DAVVERO",
        "DEFINITI",
        "DICEMBRE",
        "DICENDO",
        "DIFFUSA",
        "DIGITALE",
        "DIREMMO",
        "DIRETTA",
        "DISCRETE",
        "DISCUTE",
        "DIVERSE",
        "DIVERSI",
        "DIVERSO",
        "DOBBIAMO",
        "DOMANDE",
        "DOVREBBE",
        "DURANTE",
        "ELABORA",
        "ELEMENTI",
        "ELEMENTO",
        "ESEGUIRE",
        "ESEGUITA",
        "ESEGUITE",
        "ESEGUITO",
        "ESEMPIO",
        "ESPANSO",
        "ESPERTI",
        "EUROPEA",
        "EVITARE",
        "FACENTI",
        "FEBBRAIO",
        "FENOMENI",
        "FINESTRE",
        "FISICHE",
        "FONDATO",
        "FORENSE",
        "FORMALI",
        "FORMANO",
        "FORMATO",
        "FORMULE",
        "FORNIRE",
        "FRANCESE",
        "FUNZIONE",
        "FUNZIONI",
        "GENERALE",
        "GENERALI",
        "GENNAIO",
        "GENUINO",
        "GESTIONE",
        "GESTITA",
        "GIORNALI",
        "GIOVANNI",
        "GRADUATE",
        "GRAFICA",
        "GUIDARE",
        "INCONTRO",
        "INDICARE",
        "INDICATI",
        "INGRESSO",
        "INOLTRE",
        "INTERNA",
        "INTERNO",
        "ITALIANO",
        "LADDOVE",
        "LAUREATI",
        "LAVORANO",
        "LEONARDO",
        "LETTURA",
        "LEZIONI",
        "LIBERO",
        "LICENZA",
        "LINGUE",
        "LOGICHE",
        "MACCHINA",
        "MACCHINE",
        "MANIERA",
        "MANUALI",
        "MATERIA",
        "MATERIE",
        "MEDIANTE",
        "MEDICA",
        "MEMORIA",
        "MERCATO",
        "MERCURIO",
        "MESSAGGI",
        "MODELLI",
        "MODERNA",
        "MODERNO",
        "MODIFICA",
        "MOTIVATA",
        "NATURALE",
        "NORMALE",
        "NOTEVOLE",
        "NOTEVOLI",
        "NUMERICA",
        "NUMERICO",
        "NUMEROSE",
        "NUMEROSI",
        "ODIERNI",
        "OFFRENDO",
        "OPERANO",
        "ORIGINE",
        "PANNELLI",
        "PANORAMA",
        "PARTENDO",
        "PARTENZA",
        "PARTIRE",
        "PENSIAMO",
        "PENSIERI",
        "PENSIERO",
        "PERSIANO",
        "PERSONE",
        "PERTANTO",
        "PERVASO",
        "PILASTRO",
        "PORTALE",
        "PORTARE",
        "PORTATI",
        "POSSIAMO",
        "POSSIEDE",
        "POTENDO",
        "POTREBBE",
        "PRATICA",
        "PRATICHE",
        "PRATICI",
        "PRECISO",
        "PRESTAVA",
        "PROBLEMA",
        "PROBLEMI",
        "PROCESSI",
        "PUNTANO",
        "QUALCHE",
        "QUARANTA",
        "QUATTRO",
        "QUESITO",
        "RELATIVA",
        "RELATIVI",
        "RICHIEDE",
        "RIENTRA",
        "RIGUARDA",
        "RIGUARDO",
        "RIMANDI",
        "RIMANERE",
        "RIMASTA",
        "RIMASTO",
        "RISOLVE",
        "RISPARMI",
        "RISPETTO",
        "RISPOSTE",
        "RISULTA",
        "ROBUSTI",
        "SCHERMO",
        "SCIENZA",
        "SCIENZE",
        "SCRITTO",
        "SECONDA",
        "SECONDO",
        "SEGNALE",
        "SEGNALI",
        "SEGUIRE",
        "SEGUITO",
        "SEMPLICE",
        "SEMPLICI",
        "SEQUENZA",
        "SERVIZI",
        "SERVIZIO",
        "SETTORI",
        "SEZIONE",
        "SIMBOLI",
        "SIMULARE",
        "SISTEMA",
        "SOGGIACE",
        "SPECIALI",
        "STRINGA",
        "STUDIATI",
        "STUDIATO",
        "SUPPORTO",
        "SVARIATE",
        "SVILUPPA",
        "SVILUPPO",
        "TECNICA",
        "TECNICHE",
        "TELEFONO",
        "TEORIA",
        "TEORICA",
        "TEORICI",
        "TEORICO",
        "TERMINE",
        "TERMINI",
        "TIPICHE",
        "TROVARE",
        "UTILIZZO",
        "VALUTARE",
        "VENGANO",
        "VERIDICA",
        "VERIFICA",
        "VERSIONE",
        "VETRINA",
        "VIRTUALI",
        "VISIBILE",
        "VISIONE",
        "VISUALI"
    ];

    let codifica5bit = function (n) {
        let coeff = 16;
        let str = '';
        for (let j = 4; j >= 0; j--) {
            if (n >= coeff) {
                str += '1';
                n -= coeff;
            } else {
                str += '0';
            }
            coeff /= 2;
        }
        return str;
    };

    let codificaCarattere = function (carattere) {
        let simbolo = [
            ' ',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'Z'
        ];
        let numero = simbolo.indexOf(carattere);
        return codifica5bit(numero);
    };

    let codificaParola = function (parola) {
        let seq = [];
        for (let j = 0; j < parola.length; j++) {
            seq.push(codificaCarattere(parola.charAt(j)))
        }
        return seq;
    }

    /***/
    let istogramma = function (parola) {
        let freqs = {};
        for (let j = 0; j < parola.length; j++) {
            if (freqs.hasOwnProperty(parola[j]))
                freqs[parola[j]] += 1;
            else
                freqs[parola[j]] = 1;
        }
        return freqs;
    };
    /***/

    let paroleCodificate = [];
    parole.forEach(function (parola) {
        let p = {};
        p.testo = parola;
        p.caratteri = parola.split('');
        p.codifica = codificaParola(parola);
        paroleCodificate.push(p);
    });
    let templateCloze = process.argv[2];
    fs.readFile(templateCloze, 'utf-8', function (error, source) {
        let template = handlebars.compile(source);
        let moodle_xml = template(paroleCodificate);
        moodle_xml = moodle_xml.replace(/\s+}/g, '}')
        console.log(moodle_xml);
    });
};

main();
