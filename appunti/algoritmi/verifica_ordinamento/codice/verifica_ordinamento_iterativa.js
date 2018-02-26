const ordinata = function(A, n) {
  let posizione = 0;
  while (posizione < n - 1) {
    if (A[posizione] > A[posizione + 1]) {
      return false;
    } else {
      posizione = posizione + 1;
    }
  }

  return true;
};
