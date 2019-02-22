import { Quesito } from "./quesito";

export class Specifica {
  private _indice: number;
  private _quesito: Quesito;
  constructor(indice: number, quesito: Quesito) {
    this._indice = indice;
    this._quesito = quesito;
  }

  get indice() {
    return this._indice;
  }
  get quesito() {
    return this._quesito;
  }
}
