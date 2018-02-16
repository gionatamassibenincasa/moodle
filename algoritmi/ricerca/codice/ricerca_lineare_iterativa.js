const NON_PRESENTE = Symbol("non presente");

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
};
