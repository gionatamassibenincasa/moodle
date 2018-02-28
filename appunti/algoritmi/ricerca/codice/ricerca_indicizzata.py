def ricerca_indicizzata(A, n, v, h):
  i = h(v)
  if (A[i] == v):
      return i
  else:
      return 'NON_PRESENTE'
