NON_PRESENTE = -1


def ricerca_lineare(A, n, v):
    def passo_ricerca_lineare(A, n, v, posizione):
        if (posizione >= n):
            return NON_PRESENTE
        elif (A[posizione] == v):
            return posizione
        else:
            return passo_ricerca_lineare(A, n, v, posizione + 1)

    return passo_ricerca_lineare(A, n, v, 0)
