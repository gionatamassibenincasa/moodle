def ordinata(A, n):
    def passo_ordinata(A, n, coppia):
        if (coppia >= n - 1):
            return True
        elif (A[coppia] > A[coppia + 1]):
            return False
        else:
            return passo_ordinata(A, n, coppia + 1)

    if (n < 2):
        return True
    else:
        return passo_ordinata(A, n, 0)


# Esempi
sequenza = [5, 1, 4, 2, 3]
dimensione = len(sequenza)
ordinata(sequenza, dimensione)
ordinata(sorted(sequenza), dimensione)
