let NON_PRESENTE = Symbol('non presente');

const ricerca_lineare = function(A, n, v) {
	  let posizione = 0;
	  let elemento_corrente;
	  while (posizione < n) {
		      elemento_corrente = A[posizione];
		      if (elemento_corrente === v) {
			            return posizione;
			          } else {
					        posizione = posizione + 1;
					      }
		    }
	  
	  return NON_PRESENTE;
}

let sequenza = [5, 1, 4, 2, 3];
let dimensione = sequenza.length;
let posizione;
posizione = ricerca_lineare(sequenza, dimensione, 2);
posizione = ricerca_lineare(sequenza, dimensione, 9);
