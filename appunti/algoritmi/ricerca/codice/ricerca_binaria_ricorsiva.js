const NON_PRESENTE = Symbol("non presente");

const ricerca_binaria = function(A, n, v) {
  const ricerca_binaria_passo = function(A, v, sinistra, destra) {
    if (sinistra <= destra) {
      let somma = sinistra + destra;
      let centro = somma % 2 === 0 ? somma / 2 : (somma - 1) / 2;
      if (A[centro] > v) {
        return ricerca_binaria_passo(A, v, sinistra, centro - 1);
      } else if (A[centro] < v) {
        return ricerca_binaria_passo(A, v, centro + 1, destra);
      } else {
        return centro;
      }
    }

    return NON_PRESENTE;
  };

  return ricerca_binaria_passo(A, v, 0, n - 1);
};
