def ricerca_indicizzata(A, n, v, h):
  i = h(v)
  if (A[i] == v):
      return i
  else:
      return 'NON_PRESENTE'
        

def h(nome):
  return ((ord(nome[0]) - 63) // 4) - 1

A = ["Cip", "Gastone", "Minnie", "Pluto", "Topolino"]
ricerca_indicizzata(A, len(A), "Pluto", h)
