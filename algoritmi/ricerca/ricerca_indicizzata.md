# Ricerca indicizzata con accesso diretto

## Problema

Determinare se un valore \\( v \\) dato è presente in una sequenza \\( A \\) di \\( n \\) valori. Se il valore \\( v \\) è presente, restituirne
la posizione, nota la distribuzione dei valori e determinata una funzione \\( h(v) \\) che produce valori interi.

### Input

Una sequenza \\( A \\) di \\( n \\) valori, \\( A = \[a_1, a_2, \ldots, a_n\] \\) e un valore \\( v \\).

### Output

Un indice \\( i \\) tale che l'elemento in posizione \\( i \\)-esima
della sequenza, \\( a_i \\) sia uguale a \\( v \\), oppure un valore
speciale che indica che \\( v \\) non compare nella sequenza \\( A \\).

### Esempio

#### Input

La sequenza \\( A = [Cip, Gastone, Minnie, Pluto, Topolino ] \\) di \\( n = 5 \\) elementi e il valore \\( v = Pluto \\).
Sia data anche una procedura \\( h \\) che dato un valore di tipo stringa \\( [c_1, c_2, \\ldots, c_k_v]\\) restituisce il numero intero dato da:

    sia posizione := posizione del primo carattere di v
    sia indice_frazionario := posizione / 4
    restituisci il valore arrotondato all'intero più vicino di indice_frazionario

#### Output

L'indice \\( i = 4 \\) tale che \\( a_4 \\) è l'elemento \\( "Pluto" \\).

## Algoritmo di ricerca indicizzata con accesso diretto

L'algoritmo di ricerca indicizzata con accesso diretto consiste nella produzione del
valore dell'indice a partire dal valore stesso.
Se il valore è nella posizione dell'indice, allora restituisci l'indice, altrimenti
`NON_PRESENTE` per indicare che il valore non è presente nella sequenza.

## Realizzazione iterativa

### In pseudo-codice

<pre><code class="pseudo" algo="ricerca_indicizzata_esempio"></code></pre>

### Come diagramma di flusso (di esecuzione)

![](./codice/ricerca_indicizzata_esempio.fc.svg)

<!--![](https://code2flow.com/Hrzixh.svg)-->

### In JavaScript

<pre><code class="javascript" algo="ricerca_indicizzata_esempio"></code></pre>

### In Python

<pre><code class="python" algo="ricerca_indicizzata_esempio"></code></pre>

#### Traccia dell'esecuzione

<div class="pytutorVisualizer" data-tracefile="./tracce/ricerca_indicizzata_esempio_tracce.json" data-params="{'embeddedMode': true,'startingInstruction': 5}" id="ricerca_indicizzata_esempio_tracce"> </div>

## Complessità computazionale

### Caso migliore

Numero accessi: \\( 1 \\)

### Caso peggiore

Numero accessi: \\( 1 \\)

### Caso medio

Numero accessi: \\( 1 \\)
