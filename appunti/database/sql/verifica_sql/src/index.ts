import { Alunno } from "./alunno";
import { Quesito } from "./quesito";
import { Specifica } from "./specifica";
import { Verifica } from "./verifica";
import { Consegna } from "./consegna";
import { Pagina } from "./pagina";
import { Compito } from "./compito_20180317";
import * as CodeMirror from "codemirror";

//
// MAIN
//

let pagina: Pagina = new Pagina();
let generaListaSpecifiche = function (quesiti: Quesito[]): Specifica[] {
  let specifiche: Specifica[] = [];
  quesiti.forEach(function (quesito: Quesito, indice: number) {
    const specifica: Specifica = new Specifica(indice, quesito);
    specifiche.push(specifica);
  });
  return specifiche;
};

let configurazioneEditor: CodeMirror.EditorConfiguration = {
  value: '\n',
  mode: {
    name: "sql"
  },
  lineNumbers: true,
  lineWrapping: true,
  // viewportMargin: Infinity,
  extraKeys: {
    "Ctrl-Space": "autocomplete"
  }
};

let specifiche = generaListaSpecifiche(Compito.quesiti);
pagina.aggiungiSpecifiche(specifiche);

function editor(id: HTMLTextAreaElement) {
  return CodeMirror.fromTextArea(id, configurazioneEditor);
}

let codice: NodeListOf<HTMLTextAreaElement> = document.querySelectorAll(
  ".codice"
);
for (let j = 0; j < codice.length; j++) {
  editor(codice[j]).refresh();
}

var xhr: XMLHttpRequest = new XMLHttpRequest();
var db: any;
xhr.open('GET', './sakila.sqlite3', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function (e) {
  var uInt8Array = new Uint8Array(this.response);
  db = new SQL.Database(uInt8Array);
};
xhr.send();

let invia = function () {
  let classe = Compito.classe,
    inputNome: HTMLInputElement = document.querySelector("#alunno-nome"),
    inputCognome: HTMLInputElement = document.querySelector("#alunno-cognome"),
    alunno = new Alunno(inputNome.value, inputCognome.value);
  if (alunno.vuoto() && !window.location.href.match(/localhost|file/)) {
    alert(
      "Per continuare devi immettere il nome e il cognome nelle caselle in alto a destra."
    );
    return;
  }
  let artefatti: string[] = [];
  let editors: NodeListOf<Element> = document.querySelectorAll(".CodeMirror");
  for (let j = 0; j < editors.length; j++) {
    let e: any = editors[j];
    artefatti.push(e.CodeMirror.getValue());
  }
  let artefatto: string = JSON.stringify(artefatti);
  let punteggio = artefatti.reduce((acc, sqlStatement, index) => {
    if (sqlStatement === "") return acc;
    try {
      var res = db.exec(sqlStatement);
      var ref = db.exec(Compito.quesiti[index].modello_query);
      console.log(res, ref, JSON.stringify(res) === JSON.stringify(ref));

      return ((JSON.stringify(res).toLocaleLowerCase() === JSON.stringify(ref).toLocaleLowerCase()) ?
        Compito.quesiti[index].punteggio : 0
      ) + acc;
    } catch (e) {
      console.log(e);
      return acc;
    }
  }, 0);
  console.log("Punteggio totale: " + punteggio);

  let consegna: Consegna = new Consegna(classe, alunno, artefatto, punteggio);
  consegna.invia();
};
document.querySelector("#invia").addEventListener("click", invia);
