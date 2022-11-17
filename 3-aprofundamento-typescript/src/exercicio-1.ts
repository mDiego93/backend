// Exercicio 1

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

enum ArcoIris {
    violeta = "Violeta",
    indigo = "Índigo",
    azul = "Azul",
    verde = "Verde",
    amarelo = "Amarelo",
    laranja = "Laranja",
    vermelho = "Vermelho"
}

const diego: Pessoa = {
    nome: "Diego Motta",
    idade: 29,
    corFavorita: ArcoIris.indigo
}

const jordana: Pessoa = {
    nome: "Jordana Jordan",
    idade: 57,
    corFavorita: ArcoIris.violeta
}

const lucca: Pessoa = {
    nome: "Lucca Lucceta",
    idade: 11,
    corFavorita: ArcoIris.laranja
}