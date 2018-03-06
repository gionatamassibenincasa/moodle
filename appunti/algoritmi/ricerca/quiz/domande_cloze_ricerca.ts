import * as handlebars from "handlebars";

class Quesito {
  titolo: string;
  testo: string;
  istanziaPersonaggi: boolean;
}

class QuesitiPerCategoria {
  categoria: string;
  quesiti: Quesito[];
}

class DepositoQuesiti {
  quesiti: QuesitiPerCategoria[];
}

const personaggi: string[] = [
  "Topolino",
  "Minni",
  "Pippo",
  "Pluto",
  "Clarabella",
  "Orazio Cavezza",
  "Pietro Gambadilegno",
  "Commissario Basettoni",
  "Ispettore Manetta",
  "Eta Beta"
];

const categoria_radice = "$course$/Algoritmi/Algoritmi di ricerca";
const nome_categoria = function(argomento: string): string {
  return categoria_radice + "/" + argomento;
};

const quizTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>

  {{#each this}}
  <question type="category">
    <category>
        <text>{{categoria}}</text>

    </category>
  </question>

  {{#each quesiti}}
  <question type="cloze">
    <name>
      <text>{{titolo}}</text>
    </name>
    <questiontext format="html">
      <text><![CDATA[{{{testo}}}]]></text>
    </questiontext>
    <generalfeedback format="html">
      <text></text>
    </generalfeedback>
    <penalty>0.3333333</penalty>
    <hidden>0</hidden>
  </question>
  {{/each}}

  {{/each}}

</quiz>`;

let deposito: DepositoQuesiti = {
  quesiti: [
    {
      categoria: nome_categoria("Binaria"),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca binaria",
          istanziaPersonaggi: true,
          testo: `<p>{{personaggio}} possiede quaderno di \( 2^n \) pagine che usa come rubrica telefonica. Le pagina contengono il nome e il
          numero di un amico oppure sono lasciate in bianco. Dati una coppia di nomi nel quaderno, quello che viene prima nell'ordinamento
          alfabetico è in una pagina precente quella dove è segnato l'altro.</p>
      
      <p>Le azioni che {{personaggio}} pu&ograve; realizzare e i tempi che impiega per portale a termine sono indicati nella seguente
          tabella:
      </p>
      
      <table>
          <caption>Operazioni e tempi</caption>
          <thead>
              <tr>
                  <th>Operazione</th>
                  <th>Tempo</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>aprire la rubrica alla pagina a metà di un qualsiasi gruppo di pagine consecutive</td>
                  <td>\( 0 \) s</td>
              </tr>
              <tr>
                  <td>leggere e confrontare il nome scritto nella pagina con quello da ricercare
                      <em>Nota: confrontare significa determinare se il nome da ricercare è scritto nelle pagine precedenti, in quella
                          pagina o nelle pagine successive;</em>
                  </td>
                  <td>\( 1 \) s</td>
              </tr>
              <tr>
                  <td>determinare che un gruppo di pagine è composto di una sola pagina</td>
                  <td>\( 0 \) s</td>
              </tr>
              <li>determinare che in un tempo trascurabile (0 s);</li>
          </tbody>
      </table>
      
      
      <p>
          <strong>Completare le seguenti affermazioni</strong>.</p>
      
      <ul>
          <li>{{personaggio}}, per ricercare nel modo pi&ugrave; efficiente possibile il numero di un amico, usa l'algoritmo di ricerca
              {1:MULTICHOICE:=binaria~indicizzata~lineare}.
          </li>
          <li>{{personaggio}}, nel caso pi&ugrave; fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:NUMERICAL:=1:0}
              s.
          </li>
      
          <li>{{personaggio}}, nel caso meno fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:SHORTANSWER:=n}
              s.
          </li>
          <li>{{personaggio}}. in media, riesce a trovare il numero di un amico presente nel quaderno in {1:SHORTANSWER:=n} s.</li>
          <li>Il tempo necessario per determinare che il nome di un amico non è presente nel quaderno è di {1:SHORTANSWER:=n} s.</li>
      
      </ul>`
        }
      ]
    },
    {
      categoria: nome_categoria("Indicizzata con hash perfetta"),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca hashing perfetto",
          istanziaPersonaggi: true,
          testo: `<p>{{personaggio}} possiede un quaderno che usa come rubrica telefonica. Le pagine contengono il nome e il numero di un amico
          oppure sono lasciate in bianco. {{personaggio}} pu&ograve; aprire il quaderno in corrispondenza di alcune pagine
          usando una linguetta con le prime due lettere del nome del contatto da ricercare. &Egrave; noto che {{personaggio}} non
          ha due o pi&ugrave; amici le cui prime due lettere del nome siano uguali.</p>
      
      <p>Le azioni che {{personaggio}} pu&ograve; realizzare e i tempi che impiega per portale a termine sono indicati nella seguente
          tabella:
      </p>
      
      <table>
          <caption>Operazioni e tempi</caption>
          <thead>
              <tr>
                  <th>Operazione</th>
                  <th>Tempo</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>aprire il quaderno alla pagina corrispondente alle prime due lettere di un nome</td>
                  <td>\( 0 \) s</td>
              </tr>
              <tr>
                  <td>leggere e confrontare il nome scritto nella pagina con quello da ricercare</td>
                  <td>\( 1 \) s</td>
              </tr>
              <tr>
                  <td>determinare che la pagina corrente &egrave; bianca</td>
                  <td>\( 0 \) s</td>
              </tr>
          </tbody>
      </table>
      
      
      <p>
          <strong>Completare le seguenti affermazioni</strong>.</p>
      
      <ul>
          <li>{{personaggio}}, per ricercare nel modo pi&ugrave; efficiente possibile il numero di un amico, usa l'algoritmo di ricerca
              {1:MULTICHOICE:binaria~=indicizzata~lineare}.
          </li>
          <li>{{personaggio}}, nel caso pi&ugrave; fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:NUMERICAL:=1:0}
              s.
          </li>
          <li>{{personaggio}}, nel caso meno fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:SHORTANSWER:=1}
              s.
          </li>
          <li>{{personaggio}} determina che il nome di un amico non &egrave; registrato nel quaderno in {1:SHORTANSWER:=1} s.
          </li>
      </ul>`
        }
      ]
    }
  ]
};

deposito.quesiti.forEach(quesitiCategoria => {
  console.log(quesitiCategoria.categoria);
  let quesitiIstanziati: Quesito[] = [];
  quesitiCategoria.quesiti.forEach(quesitoAnonimo => {
    if (quesitoAnonimo.istanziaPersonaggi)
      personaggi.forEach(personaggio => {
        quesitiIstanziati.push({
          titolo: quesitoAnonimo.titolo + " - " + personaggio,
          testo: quesitoAnonimo.testo.replace(/{{personaggio}}/g, personaggio),
          istanziaPersonaggi: true
        });
      });
    else quesitiIstanziati.push(quesitoAnonimo);
  });
  quesitiCategoria.quesiti = quesitiIstanziati;
});
let template = handlebars.compile(quizTemplate);
let quizXML = template(deposito.quesiti);
console.log(quizXML);
