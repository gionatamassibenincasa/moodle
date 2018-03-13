import * as handlebars from "handlebars";

enum TipoQuesito {
  CLOZE = "cloze",
  MULTICHOICE = "multichoice",
  TRUEFALSE = "truefalse",
  shortanswer = "shortanswer",
  matching = "matching",
  essay = "essay",
  numerical = "numerical",
  description = "description"
}

class Quesito {
  titolo: string;
  testo: string;
  tipo: TipoQuesito;
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

  <!-- Formato Moodle XML - quiz sugli algoritmi di ricerca -->
 
  {{#each this}}
  <question type="category">
    <category>
        <text>{{categoria}}</text>

    </category>
  </question>

  {{#each quesiti}}
  <question type="{{tipo}}">
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
      categoria: nome_categoria(
        "Ricerca lineare/Ricerca lineare - Cloze quaderno-rubrica"
      ),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca lineare",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: true,
          testo: `
<p>{{personaggio}} possiede un quaderno di \\( n \\) pagine che usa come rubrica telefonica. Le pagine contengono il nome e il
numero di un amico e sono tutte piene. Tra i nomi scritti su due pagine consecutive, comunque prese, non sussiste nessun
criterio di ordinamento. Non sono note funzioni che mappano un nome in un indice.</p>

<p>Le azioni che {{personaggio}} pu&ograve; realizzare e i tempi che impiega per portarle a termine sono indicati nella seguente
    tabella:</p>

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
            <td>aprire il quaderno alla prima pagina</td>
            <td>\\( 0 \\) s</td>
        </tr>
        <tr>
            <td>leggere e confrontare il nome scritto nella pagina con quello da ricercare
            </td>
            <td>\\( 1 \\) s</td>
        </tr>
        <tr>
            <td>voltare pagina dalla precedente alla successiva</td>
            <td>\\( 0 \\) s</td>
        </tr>
        <tr>
            <td>determinare che sta analizzando l'ultima pagina</td>
            <td>\\( 0 \\) s</td>
        </tr>
    </tbody>
</table>

<p>
    <strong>Completare le seguenti affermazioni con la miglior approssimazione</strong>.</p>

<ul>
    <li>{{personaggio}} per cercare il numero di un amico nel sua quaderno nel modo pi&ugrave; efficiente possibile pu&ograve;
        usare l'algoritmo di ricerca {1:MULTICHOICE:=lineare~binaria~indicizzata}.</li>
    <li>Nel caso pi&ugrave; fortunato, {{personaggio}} riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:=1~10~(n+1)/2~n}
        s.
    </li>
    <li>Il tempo medio per trovare il numero di un amico presente nel quaderno &egrave; di {1:MULTICHOICE:1~10~=(n+1)/2~n} s.
        <em>Aiuto: coincide con il valor medio tra il caso migliore e quello peggiore.</em>
    </li>
    <li>Nel caso meno fortunato, {{personaggio}} riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:1~10~(n+1)/2~=n}
        s.
    </li>
    <li>Il tempo necessario per determinare che il nome di un amico non &egrave; presente nel quaderno &egrave; di {1:MULTICHOICE:1~10~(n+1)/2~=n}
        s.
    </li>
    <li>Il tempo necessario per trovare il numero dell'amico il cui numero &egrave; scritto nella decima pagina &egrave; di {1:MULTICHOICE:1~=10~(n+1)/2~n}
        s.
    </li>
</ul>
`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca binaria/Ricerca binaria - Cloze quaderno-rubrica"
      ),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca binaria - Cloze quaderno-rubrica",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: true,
          testo: `
<p>{{personaggio}} possiede quaderno di \\( p \\) pagine che usa come rubrica telefonica. Il numero \\( p \\) soddisfa la relazione
\\( 2^{n - 1} < p \\leq 2^{n} \\).
Le pagina contengono il nome e il numero di un amico oppure sono lasciate in bianco. Dati una coppia di nomi nel quaderno, quello che
viene prima nell'ordinamento alfabetico &egrave; in una pagina precente quella dove &egrave; l'altro.</p>
      
<p>Le azioni che {{personaggio}} pu&ograve; realizzare e i tempi che impiega per portarle a termine sono indicati nella seguente
tabella:</p>
      
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
            <td>aprire la rubrica alla pagina a met&agrave; di un qualsiasi gruppo di pagine consecutive</td>
            <td>\\( 0 \\) s</td>
        </tr>
        <tr>
            <td>leggere e confrontare il nome scritto nella pagina con quello da ricercare
                <em>Nota: confrontare significa determinare se il nome da ricercare &egrave; scritto nelle pagine precedenti, in quella
                    pagina o nelle pagine successive;</em>
            </td>
            <td>\\( 1 \\) s</td>
        </tr>
        <tr>
            <td>determinare che un gruppo di pagine &egrave; composto di una sola pagina</td>
            <td>\\( 0 \\) s</td>
        </tr>
    </tbody>
</table>
      
      
<p><strong>Completare le seguenti affermazioni con la miglior approssimazione</strong>.</p>
      
<ul>
    <li>{{personaggio}}, per ricercare nel modo pi&ugrave; efficiente possibile il numero di un amico, usa l'algoritmo di ricerca
        {1:MULTICHOICE:~lineare~=binaria~indicizzata}.
    </li>
    <li>{{personaggio}}, nel caso pi&ugrave; fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:=1~10~(n+1)/2~n}
        s.
    </li>

    <li>{{personaggio}}, nel caso meno fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:1~10~(n+1)/2~=n}
        s.
    </li>
    <li>{{personaggio}}. in media, riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:1~10~(n+1)/2~=n} s.</li>
    <li>Il tempo necessario per determinare che il nome di un amico non &egrave; presente nel quaderno &egrave; di {1:MULTICHOICE:1~10~(n+1)/2~=n} s.</li>

</ul>
`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca indicizzata/Hash perfetto/Ricerca indicizzata, hashing perfetto - Cloze quaderno-rubrica"
      ),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca hashing perfetto",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: true,
          testo: `
<p>{{personaggio}} possiede un quaderno di \\( n \\) pagine che usa come rubrica telefonica.
Le pagine contengono il nome e il numero di un amico oppure sono lasciate in bianco.
{{personaggio}} pu&ograve; aprire il quaderno in corrispondenza di alcune pagine usando una linguetta
con le prime due lettere del nome del contatto da ricercare.
&Egrave; noto che {{personaggio}} non ha due o pi&ugrave; amici le cui prime due lettere del nome siano uguali.</p>

<p>Le azioni che {{personaggio}} pu&ograve; realizzare e i tempi che impiega per portarle a termine sono indicati nella seguente
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
            <td>\\( 0 \\) s</td>
        </tr>
        <tr>
            <td>leggere e confrontare il nome scritto nella pagina con quello da ricercare ovvero determinare che la pagina corrente &egrave; bianca</td>
            <td>\\( 1 \\) s</td>
        </tr>
    </tbody>
</table>

<p><strong>Completare le seguenti affermazioni con la miglior approssimazione</strong>.</p>

<ul>
    <li>{{personaggio}}, per ricercare nel modo pi&ugrave; efficiente possibile il numero di un amico, usa l'algoritmo di ricerca
    {1:MULTICHOICE:binaria~=indicizzata~lineare}.
    </li>
    <li>{{personaggio}}, nel caso pi&ugrave; fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:=1~10~(n+1)/2~n}
    s.
    </li>
    <li>{{personaggio}}, nel caso meno fortunato, riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:=1~10~(n+1)/2~n}
    s.
    </li>
    <li>{{personaggio}} determina che il nome di un amico non &egrave; registrato nel quaderno in {1:MULTICHOICE:=1~10~(n+1)/2~n} s.
    </li>
</ul>`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca indicizzata/Hash con collisioni/Ricerca indicizzata, hashing con collisioni - Cloze quaderno-rubrica"
      ),
      quesiti: [
        {
          titolo:
            "Algoritmo di ricerca indicizzata con collisioni - Cloze quaderno-rubrica",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: true,
          testo: `
  <p>{{personaggio}} possiede un quaderno che usa come rubrica telefonica. Le pagine contengono il nome e il numero di un amico
      oppure sono lasciate in bianco. La prima pagina ha una linguetta che permette di aprire la rubrica sul primo nome che
      inizia con la lettera
      <em>A</em>. La pagina \\( m \\) ha la linguetta che permette di accedere al primo nome che inizia con la lettera
      <em>B</em> e così via. Il fatto che ci siano solo \\( m \\) pagine per ogni lettera non preoccupa {{personaggio}}
      perché lui non ha pi&ugrave; di \\( m \\) amici il cui nome inizia con la stessa lettera.</p>
  
<p>Le azioni che {{personaggio}} pu&ograve; realizzare e i tempi che impiega per portarle a termine sono indicati nella seguente
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
            <td>aprire il quaderno alla pagina corrispondente alla lettera iniziale di un nome</td>
            <td>\\( 0 \\) s</td>
        </tr>
        <tr>
            <td>leggere e confrontare il nome scritto nella pagina con quello da ricercare ovvero determinare che la pagina corrente &egrave; bianca</td>
            <td>\\( 1 \\) s</td>
        </tr>
        <tr>
          <td>determinare che sta analizzando l'ultima pagina corrispondente ad una lettera</td>
          <td>\\( 0 \\) s</td>
        </tr>
        <tr>
          <td>determinare che la pagina corrente &egrave; bianca</td>
          <td>\\( 0 \\) s</td>
        </tr>
    </tbody>
</table>
  
  <p><strong>Completare le seguenti affermazioni con la miglior approssimazione</strong>.</p>
  
  <ul>
      <li>Per ricercare nel modo pi&ugrave; efficiente possibile il numero di un amico {{personaggio}} usa l'algoritmo di ricerca
          {1:MULTICHOICE:lineare~binaria~=indicizzata}.
      </li>
      <li>Nel caso pi&ugrave; fortunato, {{personaggio}} riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:=1~10~m~n}
          s.
      </li>
      <li>Nel caso meno fortunato, {{personaggio}} riesce a trovare il numero di un amico presente nel quaderno in {1:MULTICHOICE:1~10~=m~n}
          s.
      </li>
      <li>Il tempo massimo necessario per determinare che il nome di un amico non &egrave; presente nel quaderno &egrave; di {1:MULTICHOICE:1~10~=m~n}
          s.
      </li>
  </ul>
  `
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca lineare/Ricerca lineare - Decodifica dello pseudo-codice"
      ),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca lineare - iterativo",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>Quale algoritmo può essere descritto nel modo seguente?</p>
<pre>
algoritmo (A, n, v):
    sia i := 1
    finché i <= n:
        se A[i] = v:
            restituisci i
        altrimenti:
            i := i + 1
    
    restituisci NON_PRESENTE</pre>

<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:=Ricerca lineare~Ricerca binaria~Ricerca indicizzata~Riconoscimento dell'ordinamento}

<p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em></p>
<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:=Iterativa~Ricorsiva}
`
        },
        {
          titolo: "Algoritmo di ricerca lineare - ricorsivo",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
  <p>Quale algoritmo può essere descritto nel modo seguente?</p>
  <pre>
algoritmo (A, n, v):
  restituisci algoritmo_ausiliare (A, n, v, 1)

algoritmo_ausiliare (A, n, v, indice):
  se indice > n:
      restituisci NON_PRESENTE
  altrimenti se A[indice] = v:
      restituisci indice
  altrimenti:
      restituisci algoritmo_ausiliare (A, n, v, indice + 1)</pre>
  
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:=Ricerca lineare~Ricerca binaria~Ricerca indicizzata~Riconoscimento dell'ordinamento}
  
  <p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:Iterativa~=Ricorsiva}
`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca binaria/Ricerca binaria - Decodifica dello pseudo-codice"
      ),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca binaria - iterativo",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
  <p>Quale algoritmo può essere descritto nel modo seguente?</p>
  <pre>
algoritmo (A, n, v):
    sia sinistra := 0
    sia destra := n
    finché (sinistra <= destra):
        sia centro := (sinistra + destra) / 2
        se (A[centro] > v):
            destra = centro - 1
        altrimenti se (A[centro] < v):
            sinistra = centro + 1
        altrimenti:
            restituisci centro

    restituisci NON_PRESENTE</pre>
  
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:Ricerca lineare~=Ricerca binaria~Ricerca indicizzata~Riconoscimento dell'ordinamento}
  
<p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:=Iterativa~Ricorsiva}
`
        },
        {
          titolo: "Algoritmo di ricerca binaria - ricorsivo",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
    <p>Quale algoritmo può essere descritto nel modo seguente?</p>
    <pre>
algoritmo (A, n, v):
  restituisci algoritmo_ausiliario (A, v, 1, n)

  algoritmo_ausiliario (A, v, sinistra, destra):
    se (sinistra <= destra):
        sia centro := (sinistra + destra) / 2
        se (A[centro] > v):
            restituisci algoritmo_ausiliario(A, v, sinistra, centro - 1)
        altrimenti se (A[centro] < v):
            restituisci algoritmo_ausiliario(A, v, centro + 1, destra)
        altrimenti:
            restituisci centro
    altrimenti:
        restituisci NON_PRESENTE  
    </pre>
    
    <p><strong>Scegli un'alternativa</strong></p>
    {1:MULTICHOICE_V:Ricerca lineare~=Ricerca binaria~Ricerca indicizzata~Riconoscimento dell'ordinamento}
  
    <p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
    <p><strong>Scegli un'alternativa</strong></p>
    {1:MULTICHOICE_V:Iterativa~=Ricorsiva}
`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca indicizzata/Ricerca indicizzata, hashing perfetto - Decodifica dello pseudo-codice"
      ),
      quesiti: [
        {
          titolo: "Algoritmo di ricerca indicizzata",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
  <p>Quale algoritmo può essere descritto nel modo seguente?</p>
  <pre>
algoritmo (A, n, v, h):
    sia i := h(v)
    se A[i] = v:
        restituisci A[i]
    altrimenti:
        restituisci NON_PRESENTE</pre>
  
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:Ricerca lineare~Ricerca binaria~=Ricerca indicizzata~Riconoscimento dell'ordinamento}
  
<p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:=Iterativa~Ricorsiva}
`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Riconoscimento di una sequenza ordinata/Riconoscimento ordinamento - Decodifica dello pseudo-codice"
      ),
      quesiti: [
        {
          titolo: "Riconoscimento di una sequenza ordinata - iterativo",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
  <p>Quale algoritmo può essere descritto nel modo seguente?</p>
  <pre>
algoritmo (A, n):
    sia i := 1
    finché i < n:
        se A[i] > A[i + 1]:
            restituisci Falso
        altrimenti:
            i := i + 1
    
    restituisci Vero</pre>
  
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:Ricerca lineare~Ricerca binaria~Ricerca indicizzata~=Riconoscimento dell'ordinamento}

<p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:=Iterativa~Ricorsiva}
  `
        },
        {
          titolo: "Riconoscimento di una sequenza ordinata - ricorsivo",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
    <p>Quale algoritmo può essere descritto nel modo seguente?</p>
    <pre>
algoritmo (A, n):
    se n < 2:
        restituisci Vero
    altrimenti:
        restituisci algoritmo_ausiliario(A, n, 1)

algoritmo_ausiliario (A, n , coppia)
    se coppia >= n:
        restituisci Vero
    altrimenti se A[coppia] > A[coppia + 1]:
        restituisci Falso
    altrimenti:
      restituisci algoritmo_ausiliario (A, n, coppia + 1)</pre>
    
    <p><strong>Scegli un'alternativa</strong></p>
    {1:MULTICHOICE_V:Ricerca lineare~Ricerca binaria~Ricerca indicizzata~=Riconoscimento dell'ordinamento}
  
<p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:Iterativa~=Ricorsiva}
    `
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca binaria/Ricerca binaria - Esercizi di comprensione"
      ),
      quesiti: [
        {
          titolo:
            "Comprendere ed applicare l'algoritmo di ricerca binaria - dizionario",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>
          Uno studente deve tradurre un testo dal latino usando un dizionario
          latino/italiano di 512 pagine. I lemmi sono scritti nell'ordine alfabetico.
          Lo studente conosce l'ordinamento dei lemmi e, dato un gruppo di pagine,
          riesce ad aprire il dizionario nella pagina esattamente a met&agrave;.
          Quante pagine dovrà aprire, al pi&ugrave;, per trovare il lemma che
          sta cercando?

          <br><em>Si suppone che usi la strategia pi&ugrave; efficiente</em>          
</p>
          
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:8~=9~10~512}

  `
        },
        {
          titolo:
            "Comprendere ed applicare l'algoritmo di ricerca binaria - indovina numero",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>
          Un sedicente mago si dice in grado di indovinare il numero pensato da
          una persona tra il suo pubblico in \\( n \\) domande.
          Il gioco segue sempre lo stesso schema: il mago chiede all'altra persona di
          pensare un numero intero tra 1 e 1024. Poi pone \\( n \\) domande del tipo: 
          \"Il numero che hai pensato &egrave; inferiore a ...?\" e quindi termina
          dicendo il numero che l'altra persona aveva pensato.

          Se il mago non ha poteri magici ma conosce e sa applicare gli algoritmi,
          quanto vale \\( n \\)?

          <br><em>Si suppone che usi la strategia pi&ugrave; efficiente</em>          
</p>
          
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:8~9~10~=11}

  `
        },
        {
          titolo:
            "Comprendere ed applicare l'algoritmo di ricerca binaria - ladro",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>
          Un ladro cerca di aprire una cassaforte che ha un milione di possibili
          combinazioni numeriche. La sua particolare tecnica gli consente di stabilire
          se la combinazione che sta provando precede o segue, nell'ordine numerico,
          quella corretta. Per aprire la cassaforte avr&agrave; al pi&ugrave; bisogno di
          provare al pi&ugrave; quante combinazioni?
          
          <br><em>Si suppone che usi la strategia pi&ugrave; efficiente</em>
</p>
          
  <p><strong>Scegli un'alternativa</strong></p>
  {1:MULTICHOICE_V:=20~100~500000~1000000}

  <p><span style="color: gray; font-size: 50%">Da un testo di Mauro Torelli</span></p>
  `
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Riconoscimento di una sequenza ordinata/Riconoscimento ordinamento - Definizione"
      ),
      quesiti: [
        {
          titolo: "Definizione ricorsiva di ordinamento di una sequenza",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>Quale delle seguenti definizioni descrive una procedura effettiva di calcolo per determinare se la sequenza numerica 
   \\( S \\) &egrave; ordinata?</p>

  <p><strong>Scegli un'alternativa</strong></p>

  {1:MULTICHOICE_V:=\\(\\mathrm{ordinato?\\}(S) = \\begin{cases\\}    \\mathrm{vero\\} & \\text{se \\}\\mathrm{lunghezza\\}(S)\\leq 1\\\\    \\mathrm{falso\\} & \\text{se \\}\\mathrm{primo\\}(S) \\succ \\mathrm{secondo\\}(S)\\\\    \\mathrm{ordinato?\\}(\\mathrm{resto\\}(S)) & \\text{altrimenti\\}\\end{cases\\}\\)~\\(\\mathrm{ordinato?\\}(S) = \\begin{cases\\}    \\mathrm{vero\\} & \\text{se \\}\\mathrm{lunghezza\\}(S)\\leq 1\\\\    \\mathrm{falso\\} & \\text{se \\}\\mathrm{primo\\}(S) \\succ \\mathrm{secondo\\}(S)\\\\    \\mathrm{ordinato?\\}(S) &\\text{altrimenti\\}\\end{cases\\}\\)~\\(\\mathrm{ordinato?\\}(S) = \\begin{cases\\}    \\mathrm{vero\\} & \\text{se \\}\\mathrm{lunghezza\\}(S)\\leq 1\\\\    \\mathrm{falso\\}& \\text{se \\}\\mathrm{primo\\}(S)\\preccurlyeq\\mathrm{secondo\\}(S)\\\\    \\mathrm{ordinato?\\}(\\mathrm{resto\\}(S)) & \\text{altrimenti\\}\\end{cases\\}\\)~\\(\\mathrm{ordinato?\\}(S) = \\begin{cases\\}    \\mathrm{falso\\} & \\text{se \\}\\mathrm{lunghezza\\}(S)\\leq 1\\\\    \\mathrm{falso\\} & \\text{se \\}\\mathrm{primo\\}(S)\\succ\\mathrm{secondo\\}(S)\\\\    \\mathrm{ordinato?\\}(\\mathrm{resto\\}(S)) & \\text{altrimenti\\}\\end{cases\\}\\)}

  <p>Nota: 
     \\( \\mathrm{lunghezza}(S) \\) restituisce il numero di elementi della sequenza \\( S \\) (e.g. \\( \\mathrm{lunghezza}([s_1, s_2, s_3]) = 3 \\)); <br>
     \\( \\mathrm{primo}(S) \\) restituisce il primo elemento della sequenza \\( S \\) (e.g. \\( \\mathrm{primo}([s_1, s_2, s_3]) = s_1 \\)); <br>
     \\( \\mathrm{secondo}(S) \\) restituisce il secondo elemento della sequenza \\( S \\) (e.g. \\( \\mathrm{secondo}([s_1, s_2, s_3]) = s_2 \\)); <br>
     \\( \\mathrm{resto}(S) \\) produce una sequenza \\(S^\\prime\\) che include gli elementi di \\(S\\) dal secondo all'ultimo, nello stesso ordine (e.g. \\( \\mathrm{resto}([s_1, s_2, s_3]) = [s_2, s_3] \\)). <br>
     \\(a \\preccurlyeq b\\) indica che \\(a\\) non segue \\(b\\) nell'ordinamento considerato mentre \\(a \\succ b\\) indica che \\(a\\)  segue \\(b\\).
  
<p>La definizione precedente &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
<p><strong>Scegli un'alternativa</strong></p>
     {1:MULTICHOICE_V:Iterativa~=Ricorsiva}
`
        },
        {
          titolo: "Definizione iterativa di ordinamento di una sequenza",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>Quale delle seguenti definizioni descrive una procedura effettiva di calcolo per determinare se la sequenza numerica 
   \\( S = [s_1, s_2,\\ldots, s_n]\\) &egrave; ordinata?</p>

  <p><strong>Scegli un'alternativa</strong></p>

  {1:MULTICHOICE_V:=\\(s_i \\preccurlyeq s_{i+1\\} \\text{ per \\} i = 1, 2, \\ldots, n - 1\\)~\\(s_i \\preccurlyeq s_{i+1\\} \\text{ per \\} i = 1, 2, \\ldots, n\\)~\\(s_i \\succ s_{i+1\\} \\text{ per \\} i = 1, 2, \\ldots, n - 1\\)~\\(s_i \\succ s_{i+1\\} \\text{ per \\} i = 1, 2, \\ldots, n\\)}

  <p>Nota: \\(a \\preccurlyeq b\\) indica che \\(a\\) non segue \\(b\\) nell'ordinamento considerato mentre \\(a \\succ b\\) indica che \\(a\\)  segue \\(b\\).
  
<p>L'algoritmo sopra descritto &egrave; in forma <em>iterativa</em> o <em>ricorsiva</em>?</p>
<p><strong>Scegli un'alternativa</strong></p>
{1:MULTICHOICE_V:=Iterativa~Ricorsiva}
`
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Elementi di matematica per il calcolo della complessità computazionale"
      ),
      quesiti: [
        {
          titolo: "Formula di Gauss bambino",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>La somma di tutti gli interi compresi tra \\(1\\) e \\(n\\) vale?</p>

  <p><strong>Scegli un'alternativa</strong></p>

  {1:MULTICHOICE_V:=\\(\\frac{(1+n)\\cdot n\\}{2\\}\\)~\\(\\frac{(1+n)\\cdot n\\}{2\\cdot n\\}\\)~\\(\\frac{(1+n)\\}{2\\}\\)~\\(\\frac{n^2\\}{2\\}\\)}
  `
        }
      ]
    },
    {
      categoria: nome_categoria(
        "Ricerca indicizzata/Ricerca indicizzata - Esercizi di valutazione"
      ),
      quesiti: [
        {
          titolo: "Valutare le prestazioni - hashing perfetto",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>Le tecniche di ricerca <em>indicizzata</em> con <em>hashing perfetto</em> hanno prestazioni</p>

  <p><strong>Scegli un'alternativa</strong></p>

  {1:MULTICHOICE_V:che dipendono dal rapporto tra numero delle posizioni occupate e numero delle posizioni disponibili~che dipendono dal rapporto tra numero di scambi e numero di confronti~=costanti, ossia indipendenti dai dati~peggiori di quelle dell'algoritmo di ricerca lineare}
  `
        },
        {
          titolo: "Valutare le prestazioni - hashing con collisioni",
          tipo: TipoQuesito.CLOZE,
          istanziaPersonaggi: false,
          testo: `
<p>Le tecniche di ricerca <em>indicizzata</em> che prevedono <em>collisioni</em> hanno prestazioni</p>

  <p><strong>Scegli un'alternativa</strong></p>

  {1:MULTICHOICE_V:=che dipendono dal rapporto tra numero delle posizioni occupate e numero delle posizioni disponibili~che dipendono dal rapporto tra numero di scambi e numero di confronti~costanti, ossia indipendenti dai dati~peggiori di quelle dell'algoritmo di ricerca lineare}
  `
        }
      ]
    }
  ]
};

deposito.quesiti.forEach(quesitiCategoria => {
  let quesitiIstanziati: Quesito[] = [];
  quesitiCategoria.quesiti.forEach(quesitoAnonimo => {
    if (quesitoAnonimo.istanziaPersonaggi) {
      personaggi.forEach(personaggio => {
        quesitiIstanziati.push({
          titolo: quesitoAnonimo.titolo + " - " + personaggio,
          testo: quesitoAnonimo.testo.replace(/{{personaggio}}/g, personaggio),
          tipo: quesitoAnonimo.tipo,
          istanziaPersonaggi: true
        });
      });
    } else {
      quesitiIstanziati.push(quesitoAnonimo);
    }
  });
  quesitiCategoria.quesiti = quesitiIstanziati;
});
let template = handlebars.compile(quizTemplate);
let quizXML = template(deposito.quesiti);
console.log(quizXML);
