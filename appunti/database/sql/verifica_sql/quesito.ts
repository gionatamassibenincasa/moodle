export class Quesito {
  private _descrizione_breve: string;
  private _descrizione: string;
  private _punteggio: number;

  constructor(
    descrizione_breve: string,
    descrizione: string,
    punteggio: number
  ) {
    this._descrizione_breve = descrizione_breve;
    this._descrizione = descrizione;
    this._punteggio = punteggio;
  }

  get descrizione_breve() {
    return this._descrizione_breve;
  }

  get descrizione() {
    return this._descrizione;
  }
}
