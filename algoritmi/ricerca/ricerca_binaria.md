### Problema

### 

Determinare se un valore  *v* dato è presente in una sequenza
**ordinata**   *A*  di  *n* valori. Se il valore  *v* è presente,
restituirne la posizione.  
  

#### Input

### 

Una sequenza ordinata  *A* di  *n* valori  *A* = \[ *a* 1,  *a* 2, ..., 
*a* n\] e un valore  *v*. La sequenza si dice ordinata se, per ogni
coppia di valori adiacenti, quello di sinistra è non maggiore di quello
di destra. Formalmente, usa sequenza \\( A = \[a\_1, a\_2, \\ldots,
a\_n\] \\) è ordinata se \\( a\_i \\leq a\_j \\) per \\( i = 1, 2,
\\ldots, n - 1 \\).

#### Output:

### 

Un indice  *i* tale che l'elemento in posizione  *i-esima* della
sequenza, A\[ *i*\] sia uguale a  *v*, oppure un valore speciale che
indica che  *v *non compare nella sequenza  *A*.

### Algoritmo di ricerca binaria

L'algoritmo di ricerca binaria consiste cercare un dato valore al centro
di un intervallo che potrebbe includerlo. Se il valore dato è al centro,
allora restituisce l'indice, altrimenti ripete la ricerca nella
sotto-sequenza a sinistra del centro, se il valore cercato è minore del
valore nel centro, nella sotto-sequenza di destra altrimenti

##### In pseudo-codice - Realizzazione iterativa

    ricerca_binaria (A, v):
          sinistra = 1
          destra = n
          finché (sinistra <= destra):
              centro = (sinistra + destra) / 2
              se (A[centro] > v):
                  destra = centro - 1
              altrimenti se (A[centro] < v):
                  sinistra = centro + 1
              altrimenti:
                  restituisci centro
          
          restituisci -1

##### Come diagramma di flusso (di esecuzione)

FlowChart terminator\_block\_1 i = 1 nop\_block\_2
terminator\_block\_1-\>nop\_block\_2 ifs\_block\_3 i \<= n
nop\_block\_2-\>ifs\_block\_3 ifs\_block\_4 A\[i\] == v
ifs\_block\_3-\>ifs\_block\_4  True  terminator\_block\_7 -1
ifs\_block\_3-\>terminator\_block\_7  False  terminator\_block\_5 i
ifs\_block\_4-\>terminator\_block\_5  True  process\_block\_6 i = i + 1
ifs\_block\_4-\>process\_block\_6  False 
process\_block\_6-\>nop\_block\_2

##### In JavaScript

#### In pseudo-codice - versione ricorsiva

    ricerca_binaria (A, v):
          ricerca_binaria_passo (A, v, 0, n)
     
    ricerca_binaria_passo (A, v, sinistra, destra):
          se (destra < sinistra):
              restituisci -1
          centro = (low + high) / 2
          se (A[centro] > v):
              restituisci ricerca_binaria_passo(A, v, sinistra, centro - 1)
          altrimenti se (A[centro] < v):
              restituisci ricerca_binaria_passo(A, v, centro + 1, destra)
          altrimenti:
              restituisci centro

#### Come diagramma di flusso

FlowChart cluster\_block\_1 ricerca\_lineare (A, v) cluster\_block\_3
passo\_ricerca\_lineare (A, v, indice) terminator\_block\_2
passo\_ricerca\_lineare (A, v, 0) ifs\_block\_4 numero\_di\_elementi(A)
= 0 terminator\_block\_5 -1 ifs\_block\_4-\>terminator\_block\_5  True 
ifs\_block\_6 A\[1\] = v ifs\_block\_4-\>ifs\_block\_6  False 
terminator\_block\_7 indice ifs\_block\_6-\>terminator\_block\_7  True 
process\_block\_8 B = A - a ifs\_block\_6-\>process\_block\_8  False 
terminator\_block\_9 passo\_ricerca\_lineare (B, v, indice + 1)
process\_block\_8-\>terminator\_block\_9  1 

#### In JavaScript

#### Complessità

##### Caso migliore

Numero confronti: 1

##### Caso peggiore

Numero confronti: \\( p \\) tale che \\( 2^{p-1} \< n \\leq 2^p \\)  

##### Caso medio

Numero confronti:  \\( p \\) tale che \\( 2^{p-1} \< n \\leq 2^p \\)  

