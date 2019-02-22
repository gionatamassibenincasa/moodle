import { Alunno } from "./alunno";

export class Consegna {
  private _classe: string;
  private _alunno: Alunno;
  private _artefatto: string;

  constructor(classe: string, alunno: Alunno, artefatto: string, punteggio: number) {
    this._classe = classe;
    this._alunno = alunno;
    this._artefatto = artefatto;
  }

  invia() {
    ///*
    console.log(this);
    let form = document.createElement("form");

    let classe = document.createElement("input");
    classe.value = this._classe;
    classe.name = "classe";
    form.appendChild(classe);

    let nome = document.createElement("input");
    nome.value = this._alunno.nome;
    nome.name = "nome";
    form.appendChild(nome);

    let cognome = document.createElement("input");
    cognome.value = this._alunno.cognome;
    cognome.name = "cognome";
    form.appendChild(cognome);

    let artefatto = document.createElement("textarea");
    artefatto.value = this._artefatto;
    artefatto.name = "artefatto";
    form.appendChild(artefatto);

    let json = document.createElement("textarea");
    json.value = JSON.stringify({
      classe: this._classe,
      alunno: this._alunno,
      artefatto: this._artefatto
    });
    json.name = "json";
    form.appendChild(json);

    let punti = document.createElement("input");
    punti.value = "punteggio";
    punti.name = "punti";
    form.appendChild(punti);

    form.method = "POST";
    form.action =
      "https://script.google.com/a/savoiabenincasa.it/macros/s/AKfycbwCadXpofT_08X9n0O-CXqLvm08EvZ9M0BcbplgwQjimBYAwVn1/exec";

    document.body.appendChild(form);
    if (window.location.href.match(/localhost|file/)) {
      console.log(form);
    } else {
      form.submit();
    }
  }
}
