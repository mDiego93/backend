const checaTriangulo = (a, b, c) => {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isóceles";
    }
};
console.log(checaTriangulo(5, 10, 50));
const imprimeTresCoresFavoritas = () => {
    const cor1 = prompt("Insira sua primeira cor favorita");
    const cor2 = prompt("Insira sua segunda cor favorita");
    const cor3 = prompt("Insira sua terceira cor favorita");
    console.log([cor1, cor2, cor3]);
};
const checaAnoBissexto = (ano) => {
    const cond1 = ano % 400 === 0;
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
};
console.log(checaAnoBissexto(1993));
const comparaDoisNumeros = (num1, num2) => {
    let maiorNumero;
    let menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    const diferenca = maiorNumero - menorNumero;
    return diferenca;
};
console.log(comparaDoisNumeros(5, 50));
const checaRenovacao = (anoAtual, anoNascimento, anoEmissao) => {
    let idade = anoAtual - anoNascimento;
    let tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "Passou dos 5 anos, precisa renovar" : "Ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "Passou dos 10 anos, precisa renovar" : "Ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "Passou dos 15 anos, precisa renovar" : "Ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
};
console.log(checaRenovacao(2022, 1993, 2021));
//# sourceMappingURL=index.js.map