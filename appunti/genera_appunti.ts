import { genera_html } from "./genera_html";

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

class Argomento {
  titolo: string;
  pagine: Pagina[];
  directory: string;
}

class Appunti {
  argomenti: Argomento[];
}

const appunti: Appunti = {
  argomenti: [
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
      titolo: "Algoritmi di ricerca - riconoscimento",
      directory: "algoritmi/verifica_ordinamento",
      pagine: [
        {
          formato: Formato.MARKDOWN,
          titolo: "Riconoscimento di una sequenza ordinata",
          sorgente: "verifica_ordinamento.md",
          destinazione: "riconoscimento_ordinamento.html"
        }
      ]
    }
  ]
};

appunti.argomenti.forEach(function(argomento: Argomento) {
  console.log(argomento.titolo);
});

const pagina_html = genera_html(
  "algoritmi/ricerca/ricerca_lineare.md",
  "Ricerca lineare"
);
console.log(pagina_html);
