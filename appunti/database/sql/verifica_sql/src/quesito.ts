export class Quesito {
  private _descrizione_breve: string;
  private _descrizione: string;
  private _punteggio: number;
  private _modello_query: string;

  constructor(
    descrizione_breve: string,
    descrizione: string,
    punteggio: number,
    modello_query: string = ""
  ) {
    this._descrizione_breve = descrizione_breve;
    this._descrizione = descrizione;
    this._punteggio = punteggio;
    this._modello_query = modello_query;
  }

  get descrizione_breve() {
    return this._descrizione_breve;
  }

  get descrizione() {
    return this._descrizione;
  }

  get punteggio() {
    return this._punteggio;
  }

  get modello_query() {
    return this._modello_query;
  }
}
