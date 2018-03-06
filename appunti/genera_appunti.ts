import * as markdownIt from "markdown-it";
import * as fs from "fs";
import { genera_html } from "./genera_html";
import { risolvi_dipendenza } from "./risolvi_dipendenza";

enum Formato {
  ASCIIDOC,
  HTML,
  MARKDOWN
}

class Pagina {
  formato: Formato;
  titolo: string;
  sorgente: string;
  destinazione: string;
}

class Contenuto {
  directory: string;
  pagine: Pagina[];
  titolo: string;
}

class Argomento {
  contenuti: Contenuto[];
  directory: string;
  titolo: string;
}

class Appunti {
  argomenti: Argomento[];
}

const appunti: Appunti = {
  argomenti: [
    {
      titolo: "Algoritmi",
      directory: "algoritmi",
      contenuti: [
        {
          titolo: "Algoritmi di ricerca",
          directory: "algoritmi/ricerca",
          pagine: [
            {
              formato: Formato.MARKDOWN,
              titolo: "Ricerca lineare",
              sorgente: "ricerca_lineare.md",
              destinazione: "ricerca_lineare.html"
            },
            {
              formato: Formato.MARKDOWN,
              titolo: "Ricerca binaria",
              sorgente: "ricerca_binaria.md",
              destinazione: "ricerca_binaria.html"
            },
            {
              formato: Formato.MARKDOWN,
              titolo: "Ricerca indicizzata",
              sorgente: "ricerca_indicizzata.md",
              destinazione: "ricerca_indicizzata.html"
            }
          ]
        },
        {
          titolo: "Riconoscitore di sequenze ordinate",
          directory: "algoritmi/riconoscitore_ordinamento",
          pagine: [
            {
              formato: Formato.MARKDOWN,
              titolo: "Riconoscimento di una sequenza ordinata",
              sorgente: "riconoscitore_ordinamento.md",
              destinazione: "riconoscitore_ordinamento.html"
            }
          ]
        }
      ]
    }
  ]
};

let indenta = function(spazi: number): string {
  let riga: string = "";
  for (let n = 0; n < spazi; n++) {
    riga += " ";
  }
  return riga;
};

const main = function(): void {
  process.chdir(__dirname);
  let indice: string = "# Indice\n";

  appunti.argomenti.forEach(function(argomento: Argomento) {
    indice += "* " + argomento.titolo + "\n";
    argomento.contenuti.forEach(function(contenuto) {
      indice += indenta(4) + "* " + contenuto.titolo + "\n";
      contenuto.pagine.forEach(function(pagina) {
        const sorgente = contenuto.directory + "/" + pagina.sorgente;
        const destinazione = contenuto.directory + "/" + pagina.destinazione;
        indice +=
          indenta(8) + "* [" + pagina.titolo + "](" + destinazione + ")" + "\n";
        if (!risolvi_dipendenza(sorgente, destinazione, pagina.titolo)) {
          console.error("ERRORE");
        }
      });
    });
  });

  const mdi = markdownIt();
  mdi.set({
    html: true,
    linkify: true,
    typographer: true
  });

  console.log(mdi.render(indice));
};

main();
