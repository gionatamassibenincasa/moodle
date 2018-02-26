NON_PRESENTE = -1


def ricerca_lineare(A, n, v):
    posizione = 0
    while (posizione < n):
        elemento_corrente = A[posizione]
        if (elemento_corrente == v):
            return posizione
        else:
            posizione = posizione + 1
    return NON_PRESENTE


# Esempi
sequenza = [5, 1, 4, 2, 3]
dimensione = len(sequenza)
posizione = 0
posizione = ricerca_lineare(sequenza, dimensione, 2)
posizione = ricerca_lineare(sequenza, dimensione, 9)
