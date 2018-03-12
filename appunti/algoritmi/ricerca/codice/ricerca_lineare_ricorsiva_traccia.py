NON_PRESENTE = -1


def passo_ricerca_lineare(A, n, v, posizione):
    if (posizione >= n):
        return NON_PRESENTE
    elif (A[posizione] == v):
        return posizione
    else:
        return passo_ricerca_lineare(A, n, v, posizione + 1)


def ricerca_lineare(A, n, v):
    return passo_ricerca_lineare(A, n, v, 0)


# Esempi
sequenza = [5, 1, 4, 2, 3]
dimensione = len(sequenza)
posizione = 0
posizione = ricerca_lineare(sequenza, dimensione, 2)
posizione = ricerca_lineare(sequenza, dimensione, 9)
