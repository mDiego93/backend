// Exercicio 1

// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)


// Exercicio 2

// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7} anos`)


// Exercicio 3

// const x = Number(process.argv[3])
// const y = Number(process.argv[4])

// switch(process.argv[2]){
//     case "soma":
//         console.log(`Resultado da soma: ${x+y}`)
//         break;
//     case "subt":
//         console.log(`Resultado da soma: ${x-y}`)
//         break;
//     case "mult":
//         console.log(`Resultado da soma: ${x*y}`)
//         break;
//     case "div":
//         console.log(`Resultado da soma: ${x/y}`)
//         break;
// }


// Exercicio 4

const tarefas = ['Limpar casa'];
tarefas.push(process.argv[2])
console.log(`Tarefa adicionada com sucesso! ${tarefas}`)