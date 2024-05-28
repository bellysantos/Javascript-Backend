/* 1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console. */

function saudacao(nome) {
    return `Boas vindas, ${nome}`
}

console.log(saudacao('Beatriz'))

const exibirSaudacao = (nome) => `Boas vindas, ${nome}` // arrow function

console.log(exibirSaudacao('Beatriz'))

/* 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console. */

function maiorIdade(idade) {
    if (idade >= 18) {
        console.log(`Sua idade é ${idade}, você é maior de idade!`)
    } else {
        console.log(`Sua idade é ${idade}, você é menor de idade!`)
    }
}

maiorIdade(18)

/* 3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console. */

function verificaStr(palavra) {
    if(palavra.split("").reverse().join("") === palavra) {
        console.log(`A palavra ${palavra} é um palíndromo!`)
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`)
    }
}

verificaStr('mirim')


/* 4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console. */

function verificaNumero(a, b, c) {
    if(a > b && a > c) {
        console.log(`O número ${a} é o maior!`)
    } else if (b > a && b > c) {
        console.log(`O número ${b} é o maior!`)
    } else {
        console.log(`O número ${c} é o maior!`)
    }
}

verificaNumero(10, 30, 300)

/* 5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado. */

const calculaPotencia = (base, exp) => { return Math.pow(base, exp) }

console.log(calculaPotencia(3, 2))