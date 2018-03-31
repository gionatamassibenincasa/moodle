export class Prestazioni {
  private confronti: number;
  private scambi: number;
  constructor(confronti = 0, scambi = 0) {
    this.confronti = confronti;
    this.scambi = scambi;
  }
  incrementaConfronti() {
    this.confronti++;
  }
  incrementaScambi() {
    this.scambi++;
  }
}

export class RigaRegistro {
  private iterazione: number;
  private sequenza: number[];
  private prestazioniIterazione: Prestazioni;
  private prestazioni: Prestazioni;
  private ultimo_ordinato: number;
  private confronti: Array<[number, number]>;
  private scambi: Array<[number, number]>;
  constructor(
    sequenza: number[],
    iterazione: number = 0,
    ultimo_ordinato: number = 0,
    confronti: Array<[number, number]>,
    scambi: Array<[number, number]>,
    prestazioni: Prestazioni
  ) {
    this.iterazione = iterazione;
    this.sequenza = Object.assign([], sequenza);
    this.ultimo_ordinato = ultimo_ordinato;
    this.confronti = confronti;
    this.scambi = scambi;
    this.prestazioniIterazione = new Prestazioni(
      confronti.length,
      scambi.length
    );
    this.prestazioni = prestazioni
      ? Object.assign({}, prestazioni)
      : new Prestazioni();
  }
}

export class Registro {
  private riga: RigaRegistro[];
  constructor() {
    this.riga = [];
  }
  public aggiungiRiga(riga: RigaRegistro) {
    this.riga.push(riga);
  }
}

type CoppiaIndici = [number, number];

abstract class BaseSort {
  protected sequenza: number[];
  protected prestazioni: Prestazioni;
  protected registro: Registro;
  protected cfr: CoppiaIndici[];
  protected scb: CoppiaIndici[];
  protected readonly nomeAlgoritmo: string;

  constructor(sequenza: number[], nome: string) {
    this.sequenza = sequenza;
    this.prestazioni = new Prestazioni();
    this.registro = new Registro();
    this.nomeAlgoritmo = nome;
  }

  protected precede(v: number[], i: number, j: number): boolean {
    if (this.prestazioni) {
      this.prestazioni.incrementaConfronti();
      this.cfr.push([i, j]);
    }
    return v[i] <= v[j];
  }

  protected scambia(v: number[], i: number, j: number): void {
    if (i == j) return;
    if (this.prestazioni) {
      this.prestazioni.incrementaScambi();
      this.scb.push([i, j]);
    }
    const tmp: number = v[i];
    v[i] = v[j];
    v[j] = tmp;
  }

  public traccia() {
    return this.registro;
  }

  public nome() {
    return this.nomeAlgoritmo;
  }

  abstract ordina(): void;
}

export class SelectionSort extends BaseSort {
  constructor(sequenza: number[]) {
    super(sequenza, "Selection sort");
  }

  private seleziona_indice_minimo(v: number[], i: number): number {
    let indice_minimo_corrente = i;
    for (i++; i < v.length; i++) {
      if (this.precede(v, i, indice_minimo_corrente)) {
        indice_minimo_corrente = i;
      }
    }
    return indice_minimo_corrente;
  }

  public ordina(): void {
    let v: number[] = this.sequenza;
    this.registro.aggiungiRiga(
      new RigaRegistro(v, 0, -1, [], [], this.prestazioni)
    );

    for (
      let primo_disordinato = 0;
      primo_disordinato < v.length - 1;
      primo_disordinato++
    ) {
      this.cfr = [];
      this.scb = [];
      const indice_minimo = this.seleziona_indice_minimo(v, primo_disordinato);
      this.scambia(v, primo_disordinato, indice_minimo);
      this.registro.aggiungiRiga(
        new RigaRegistro(
          v,
          primo_disordinato + 1,
          primo_disordinato,
          this.cfr,
          this.scb,
          this.prestazioni
        )
      );
    }
  }
}

export class InsertionSort extends BaseSort {
  constructor(sequenza: number[]) {
    super(sequenza, "Insertion sort");
  }

  private inserisci(v: number[], i: number): void {
    let confronti = [];
    let scambi = [];
    let scambiato: boolean = true;
    for (; i > 0 && scambiato; i--) {
      scambiato = this.precede(v, i, i - 1);
      if (scambiato) {
        this.scambia(v, i - 1, i);
      }
    }
  }

  public ordina(): void {
    let v: number[] = this.sequenza;
    this.registro.aggiungiRiga(
      new RigaRegistro(v, 0, 0, [], [], this.prestazioni)
    );

    for (
      let primo_disordinato = 1;
      primo_disordinato < v.length;
      primo_disordinato++
    ) {
      this.cfr = [];
      this.scb = [];

      this.inserisci(v, primo_disordinato);
      this.registro.aggiungiRiga(
        new RigaRegistro(
          v,
          primo_disordinato,
          primo_disordinato,
          this.cfr,
          this.scb,
          this.prestazioni
        )
      );
    }
  }
}

/*
export class BubbleSort implements SortingAlgorithm {
  private sequenza: number[];
  private prestazioni: Prestazioni;
  private registro: Registro;
  constructor(sequenza: number[]) {
    this.sequenza = sequenza;
    this.prestazioni = new Prestazioni();
    this.registro = new Registro();
  }

  public nome() {
    return "Bubble sort";
  }

  private precede(a: number, b: number): boolean {
    if (this.prestazioni) {
      this.prestazioni.incrementaConfronti();
    }
    return a <= b;
  }

  private scambia(v: number[], i: number, j: number): void {
    if (i == j) return;
    if (this.prestazioni) {
      this.prestazioni.incrementaScambi();
    }
    const tmp: number = v[i];
    v[i] = v[j];
    v[j] = tmp;
  }

  private sposta(v: number[], i: number): Array<[number, number]> {
    let scambi = [];
    for (let j = v.length - 1; j > i; j--) {
      if (this.precede(v[j], v[j - 1])) {
        this.scambia(v, j - 1, j);
        scambi.push([j - 1, j]);
      }
    }
    return scambi;
  }

  public ordina(): void {
    let v: number[] = this.sequenza;
    this.registro.aggiungiRiga(new RigaRegistro(v, 0, 0, [], this.prestazioni));

    for (
      let primo_disordinato = 0;
      primo_disordinato < v.length - 1;
      primo_disordinato++
    ) {
      let scambi = this.sposta(v, primo_disordinato);
      this.registro.aggiungiRiga(
        new RigaRegistro(
          v,
          primo_disordinato + 1,
          primo_disordinato,
          scambi,
          this.prestazioni
        )
      );
    }
  }

  public traccia() {
    return this.registro;
  }
}
*/

let sequenze = [
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
];

let soluzioni = [];
sequenze.forEach(v => {
  let algoritmi = [SelectionSort, InsertionSort]; //, BubbleSort];
  algoritmi.forEach(algoritmo => {
    let istanzaAlgoritmo = new algoritmo(Object.assign([], v));
    istanzaAlgoritmo.ordina();
    soluzioni.push({
      algoritmo: istanzaAlgoritmo.nome(),
      sequenza: v,
      traccia: istanzaAlgoritmo.traccia()
    });
  });
});

console.log(JSON.stringify(soluzioni));
