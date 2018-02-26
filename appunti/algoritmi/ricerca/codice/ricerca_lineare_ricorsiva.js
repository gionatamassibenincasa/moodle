const NON_PRESENTE = Symbol("non presente");

const ricerca_lineare = function(A, n, v) {
  const passo_ricerca_lineare = function(A, n, v, posizione) {
    if (posizione >= n) {
      return NON_PRESENTE;
    } else if (A[posizione] === v) {
      return posizione;
    } else {
      return passo_ricerca_lineare(A, n, v, posizione + 1);
    }
  };

  return passo_ricerca_lineare(A, n, v, 0);
};
