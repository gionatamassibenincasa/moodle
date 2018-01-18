'use strict';

let handlebars = require('handlebars');
let fs = require('fs');

function numberToString(n, base = 10) {
    let result = "",
        sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        let reminder = n % base;
        result = String(reminder) + result;
        n = (n - reminder) / base;
    } while (n > 0);
    return sign + result;
}

let main = () => {
    let esercizi = [];
    for (let numero = 32; numero < 128; numero++) {
        let esercizio = {};
        esercizio.numero = numero;
        esercizio.base2 = numberToString(numero, 2);
        esercizi.push(esercizio);
    }
    let templateCloze = process.argv[2];
    fs.readFile(templateCloze, 'utf-8', function (error, source) {
        var template = handlebars.compile(source);
        var gift = template(esercizi);
        console.log(gift);
    });
};

main();
