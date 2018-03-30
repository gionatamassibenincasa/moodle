export class Prestazioni {
  private confronti: number;
  private scambi: 0;
  constructor() {
    this.confronti = this.scambi = 0;
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
  private prestazioni: Prestazioni;
  private ultimo_ordinato: number;
  private scambi: Array<[number, number]>;
  constructor(
    sequenza: number[],
    iterazione: number = 0,
    ultimo_ordinato: number = 0,
    scambi: Array<[number, number]>,
    prestazioni: Prestazioni
  ) {
    this.iterazione = iterazione;
    this.sequenza = Object.assign([], sequenza);
    this.ultimo_ordinato = ultimo_ordinato;
    this.scambi = scambi;
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

interface SortingAlgorithm {
  ordina(): void;
  traccia(): Registro;
  nome(): string;
}

export class SelectionSort implements SortingAlgorithm {
  private sequenza: number[];
  private prestazioni: Prestazioni;
  private registro: Registro;
  constructor(sequenza: number[]) {
    this.sequenza = sequenza;
    this.prestazioni = new Prestazioni();
    this.registro = new Registro();
  }

  public nome() {
    return "Selection sort";
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

  private seleziona_indice_minimo(v: number[], i: number): number {
    let indice_minimo_corrente = i;
    for (i++; i < v.length; i++) {
      if (this.precede(v[i], v[indice_minimo_corrente])) {
        indice_minimo_corrente = i;
      }
    }
    return indice_minimo_corrente;
  }

  public ordina(): void {
    let v: number[] = this.sequenza;
    this.registro.aggiungiRiga(
      new RigaRegistro(v, 0, -1, [], this.prestazioni)
    );

    for (
      let primo_disordinato = 0;
      primo_disordinato < v.length - 1;
      primo_disordinato++
    ) {
      const indice_minimo = this.seleziona_indice_minimo(v, primo_disordinato);
      this.scambia(v, primo_disordinato, indice_minimo);
      this.registro.aggiungiRiga(
        new RigaRegistro(
          v,
          primo_disordinato + 1,
          primo_disordinato,
          [[primo_disordinato, indice_minimo]],
          this.prestazioni
        )
      );
    }
  }

  public traccia() {
    return this.registro;
  }
}

export class InsertionSort implements SortingAlgorithm {
  private sequenza: number[];
  private prestazioni: Prestazioni;
  private registro: Registro;
  constructor(sequenza: number[]) {
    this.sequenza = sequenza;
    this.prestazioni = new Prestazioni();
    this.registro = new Registro();
  }

  public nome() {
    return "Insertion sort";
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

  private inserisci(v: number[], i: number): Array<[number, number]> {
    let scambi = [];
    for (; i > 0 && this.precede(v[i], v[i - 1]); i--) {
      this.scambia(v, i - 1, i);
      scambi.push([i - 1, i]);
    }
    return scambi;
  }

  public ordina(): void {
    let v: number[] = this.sequenza;
    this.registro.aggiungiRiga(new RigaRegistro(v, 0, 0, [], this.prestazioni));

    for (
      let primo_disordinato = 1;
      primo_disordinato < v.length;
      primo_disordinato++
    ) {
      let scambi = this.inserisci(v, primo_disordinato);
      this.registro.aggiungiRiga(
        new RigaRegistro(
          v,
          primo_disordinato,
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

let sequenze = [
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
];

let soluzioni = [];
sequenze.forEach(v => {
  let algoritmi = [SelectionSort, InsertionSort, BubbleSort];
  algoritmi.forEach(algoritmo => {
    let istanzaAlgoritmo = new algoritmo(v);
    istanzaAlgoritmo.ordina();
    soluzioni.push({
      algoritmo: istanzaAlgoritmo.nome(),
      sequenza: v,
      traccia: istanzaAlgoritmo.traccia()
    });
  });
});

console.log(JSON.stringify(soluzioni));
