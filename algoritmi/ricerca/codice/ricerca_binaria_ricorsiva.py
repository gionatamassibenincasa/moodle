NON_PRESENTE = -1


def ricerca_binaria(A, n, v):
    def ricerca_binaria_passo(A, n, sinistra, destra):
        while (sinistra <= destra):
            somma = sinistra + destra
            centro = somma / 2 if (somma % 2 == 0) else (somma - 1) / 2
            if (A[centro] > v):
                return ricerca_binaria_passo(A, v, sinistra, centro - 1)
            elif (A[centro] < v):
                return ricerca_binaria_passo(A, v, centro + 1, destra)
            else:
                return centro
        return NON_PRESENTE

    return ricerca_binaria_passo(A, v, 0, n - 1)
