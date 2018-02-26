def ordinata(A, n):
    posizione = 0
    while (posizione < n - 1):
        if (A[posizione] > A[posizione + 1]):
            return False
        else:
            posizione = posizione + 1
    return True


# Esempi
sequenza = [5, 1, 4, 2, 3]
dimensione = len(sequenza)
ordinata(sequenza, dimensione)
ordinata(sorted(sequenza), dimensione)
