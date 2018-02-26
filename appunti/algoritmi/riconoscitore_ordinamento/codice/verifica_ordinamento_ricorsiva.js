const ordinata = function(A, n) {
  const passo_ordinata = function(A, n, coppia) {
    if (coppia >= n - 1) {
      return true;
    } else if (A[coppia] > A[coppia + 1]) {
      return false;
    } else {
      return passo_ordinata(A, n, coppia + 1);
    }
  };

  if (n < 2) {
    return true;
  } else {
    return passo_ordinata(A, n, 0);
  }
};
