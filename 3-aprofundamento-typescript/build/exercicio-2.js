const obterEstatisticas = (numeros) => {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
};
console.log(obterEstatisticas([100, 50, 10, 25, 50, 250]));
const amostraDeDados = {
    numeros: [100, 50, 10, 25, 50, 250],
    obterEstatisticas(numeros) { }
};
//# sourceMappingURL=exercicio-2.js.map