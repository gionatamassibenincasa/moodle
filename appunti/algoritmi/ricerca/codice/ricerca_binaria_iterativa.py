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
