def contator(texto):
    texto = texto.lower()
    palavras = texto.split()
    contagem = {}
    for palavra in palavras:
        if palavra in contagem:
            contagem[palavra] += 1
        else:
            contagem[palavra] = 1
    return contagem 

frase = input('digite a sua frase: ')
print(contator(frase))
