import unicodedata

def remover_acentos(palavra):
    return ''.join(
        letra for letra in unicodedata.normalize('NFD', palavra)
        if unicodedata.category(letra) != 'Mn'
    )

def contator(texto):
    texto = texto.lower()
    palavras = texto.split()
    contagem = {}
    for palavra in palavras:
        palavra = remover_acentos(palavra)
        if palavra in contagem:
            contagem[palavra] += 1
        else:
            contagem[palavra] = 1
    return contagem 

frase = input('digite a sua frase: ')
print(contator(frase))
