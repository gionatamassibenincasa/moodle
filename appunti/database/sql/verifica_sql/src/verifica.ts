import { Alunno } from "./alunno";
import { Quesito } from "./quesito";

export class Verifica {
  private _classe: string;
  private _alunno: Alunno;
  private _quesiti: Quesito[];
  private _punteggio: number;
  private _artefatto: string;

  constructor(classe: string, alunno: Alunno, quesiti: Quesito[], punteggio: number, artefatto: string) {
    this._classe = "";
    this._alunno = undefined;
    this._quesiti = quesiti;
    this._punteggio = 0;
    this._artefatto = "";
  }
}
