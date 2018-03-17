import { Quesito } from "./quesito";

export class Compito {
  public static classe: string = "S-3D";
  public static quesiti: Quesito[] = [
    // 1
    new Quesito(
      "π<sub>Nome</sub>(Attore)",
      "Proietta l'attributo <strong>nome</strong> della relazione <strong>Attore</strong>",
      0
    ),
    // 2
    new Quesito(
      "π<sub>Titolo, Anno</sub>(Film)",
      "Proietta gli attributi <strong>titolo</strong> e <strong>anno</strong> della relazione <strong>Film</strong>",
      0
    ),
    // 3
    new Quesito(
      "π<sub>*</sub>(Film)",
      "Proietta <strong>tutti gli attributi</strong> della relazione <strong>Film</strong>",
      0
    ),
    // 4
    new Quesito(
      "σ<sub>Nome LIKE 'G%', Cognome LIKE 'M%'</sub>(Attore)",
      "Seleziona le ennuple della relazione <strong>Attore</strong> che soddisfano la condizione composta <strong>nome inizia per G E cognome inizia per M</strong>",
      0
    ),
    // 5
    new Quesito(
      "σ<sub>Nome LIKE 'Comedy'</sub>(Categoria)",
      "Seleziona le ennuple della relazione <strong>Categoria</strong> che soddisfano la condizione <strong>nome = 'Comedy'</strong>",
      0
    ),
    // 6
    new Quesito(
      "σ<sub>categoria_id = 15</sub>(Categoria)",
      "Seleziona le ennuple della relazione <strong>Categoria</strong> che soddisfano la condizione <strong>categoria_id = 15</strong>",
      0
    ),
    // 7
    new Quesito(
      "π<sub>Nome</sub>(σ<sub>attore_id >= 150</sub>(Attore))",
      "Proietta il <strong>nome<strong> della selezione dele ennuple della relazione <strong>Attore</strong> che soddisfano la condizione <strong>attore_id >= 150</strong>",
      0
    ),
    // 8
    new Quesito(
      "π<sub>Titolo</sub>(σ<sub>anno = 2006</sub>(Film))",
      "Proietta il <strong>titolo<strong> della selezione dele ennuple della relazione <strong>Film</strong> che soddisfano la condizione <strong>anno = 2006</strong>",
      0
    ),
    // 9
    new Quesito(
      "Film × Categoria",
      "Calcola il prodotto cartesiano di <strong>Film</strong> per <strong>Categoria</strong>",
      0
    ),
    // 10
    new Quesito(
      "Film × Film_Categoria",
      "Calcola il prodotto cartesiano di <strong>Film</strong> per <strong>Film_Categoria</strong>",
      0
    ),
    // 11
    new Quesito(
      "Film ⨝<sub>film_id</sub> Film_Categoria",
      "Calcola la giunzione di <strong>Film</strong> e <strong>Film_Categoria</strong> dove gli attributi <strong>film_id</strong> assumono lo stesso valore",
      0
    ),
    // 12
    new Quesito(
      "Film ⨝<sub>film_id</sub> Film_Categoria ⨝<sub>categoria_id</sub> Categoria",
      "Calcola la giunzione di <strong>Film</strong>, <strong>Film_Categoria</strong> e <strong>Categoria</strong> dove gli attributi <strong>film_id</strong> e <strong>categoria_id</strong> assumono lo stesso valore",
      0
    ),
    // 13
    new Quesito(
      "π<sub>Titolo, Nome</sub>(Film ⨝<sub>film_id</sub> Film_Categoria ⨝<sub>categoria_id</sub> Categoria)",
      "Proietta il <strong>titolo</strong> del film e il <strong>nome</strong> della categoria della giunzione di <strong>Film</strong>, <strong>Film_Categoria</strong> e <strong>Categoria</strong> dove gli attributi <strong>film_id</strong> e <strong>categoria_id</strong> assumono lo stesso valore",
      0
    ),
    // 14
    new Quesito(
      "π<sub>Titolo, Nome, Anno</sub>(σ<sub>anno <= 2010</sub>(Film ⨝<sub>film_id</sub> Film_Categoria ⨝<sub>categoria_id</sub> Categoria))",
      "Proietta il <strong>titolo</strong> del film, il <strong>nome</strong> della categoria e l'<strong>anno</strong> di produzione della giunzione di <strong>Film</strong>, <strong>Film_Categoria</strong> e <strong>Categoria</strong> dove gli attributi <strong>film_id</strong> e <strong>categoria_id</strong> assumono lo stesso valore e dove &egrave soddisfatta la condizione <strong>anno <= 2010</strong>",
      0
    ),
    // 15
    new Quesito(
      "π<sub>Nome</sub>(Attore) ∪ π<sub>Cognome → Nome</sub>(Attore)",
      "Unisci la proiezione del <strong>nome</strong> con quella del <strong>cognome</strong> ridenominato in <strong>nome</strong> della relazione <strong>Attore</strong>",
      0
    ),
    // 16
    new Quesito(
      "π<sub>Nome</sub>(Attore) ∩ π<sub>Cognome → Nome</sub>(Attore)",
      "Interseca la proiezione del <strong>nome</strong> con quella del <strong>cognome</strong> ridenominato in <strong>nome</strong> della relazione <strong>Attore</strong>",
      0
    ),
    // 17
    new Quesito(
      "π<sub>Nome</sub>(Attore) - π<sub>Cognome → Nome</sub>(Attore)",
      "Sottrai dalla proiezione del <strong>nome</strong> della relazione <strong>Attori</strong> quella del <strong>cognome</strong> ridenominato in <strong>nome</strong> della stessa relazione <strong>Attore</strong>",
      0
    )
  ];
}
