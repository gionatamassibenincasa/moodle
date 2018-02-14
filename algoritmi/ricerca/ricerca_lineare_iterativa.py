NON_PRESENTE = -1

def ricerca_lineare(A, n, v):
    posizione = 0
    while (posizione < n):
        elemento_corrente = A[posizione]
        if (elemento_corrente == v):
            return posizione
            
        posizione = posizione + 1
        
    return NON_PRESENTE
    
sequenza =  [5, 1, 4, 2, 3]
dimensione = len(sequenza)
ricerca_lineare(sequenza, dimensione, 2)
ricerca_lineare(sequenza, dimensione, 9)
