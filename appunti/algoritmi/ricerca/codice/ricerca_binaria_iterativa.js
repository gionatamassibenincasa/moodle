const NON_PRESENTE = Symbol("non presente");

const ricerca_binaria = function(A, n, v) {
  let sinistra = 0,
    destra = n - 1;
  while (sinistra <= destra) {
    let somma = sinistra + destra;
    let centro = somma % 2 === 0 ? somma / 2 : (somma - 1) / 2;
    if (A[centro] > v) {
      destra = centro - 1;
    } else if (A[centro] < v) {
      sinistra = centro + 1;
    } else {
      return centro;
    }
  }

  return NON_PRESENTE;
};
