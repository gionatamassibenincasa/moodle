NON_PRESENTE = -1


def ricerca_binaria(A, n, v):
    sinistra = 0
    destra = n
    while (sinistra <= destra):
        somma = sinistra + destra
        centro = somma / 2 if (somma % 2 == 0) else (somma - 1) / 2
        if (A[centro] > v):
            destra = centro - 1
        elif (A[centro] < v):
            sinistra = centro + 1
        else:
            return centro
    return NON_PRESENTE


# Esempi
seq = [1, 2, 3, 5, 7, 11, 13, 17]
n = len(seq)
ricerca_binaria(seq, n, 5)
ricerca_binaria(seq, n, 2)
ricerca_binaria(seq, n, 4)
