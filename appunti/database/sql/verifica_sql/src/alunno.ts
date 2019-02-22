export class Alunno {
  private _nome: string;
  private _cognome: string;

  constructor(nome: string, cognome: string) {
    this._nome = nome;
    this._cognome = cognome;
  }

  static capitalizza(nome: string): string {
    let nomi: string[] = nome.split(" ");
    let nomiMaiscolo: string[] = nomi.map(nome => {
      return (
        nome.charAt(0).toUpperCase() + nome.substring(1).toLocaleLowerCase()
      );
    });
    return nomiMaiscolo.join();
  }

  toString(): string {
    return (
      Alunno.capitalizza(this._cognome) + " " + Alunno.capitalizza(this._nome)
    );
  }

  vuoto() {
    return this._cognome === "" || this._nome === "";
  }

  get nome(): string {
    return Alunno.capitalizza(this._nome);
  }

  get cognome(): string {
    return Alunno.capitalizza(this._cognome);
  }
}
