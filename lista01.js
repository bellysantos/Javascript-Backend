/* 1. Declare três variáveis diferentes (uma para cada tipo: string, número e boolean) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console. */

const tipoString = 'Texto'
const tipoNumero = 10
const tipoBool = true

console.log(`O tipo da variável ${tipoString} é`, typeof(tipoString))
console.log(`O tipo da variável ${tipoNumero} é`, typeof(tipoNumero))
console.log(`O tipo da variável ${tipoBool} é`, typeof(tipoBool))

/* 2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console. */ 

const primeiroNome = 'Isabelly'
const ultimoNome = 'Silva'
const nomeCompleto = primeiroNome + ' ' + ultimoNome
const nomeFormatado = `Meu nome completo é ${nomeCompleto}`

console.log(primeiroNome)
console.log(ultimoNome)
console.log(nomeCompleto)
console.log(nomeFormatado)

/* 3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console. */

const idade = 22
const texto = 'idade'
const frase = `A minha ${texto} é ${idade}`

console.log(frase)

/* 4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los. */

let variavel = 'Luiza'
console.log(variavel)

variavel = 'Marcos'
console.log(variavel)

/* 5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores. */

var variavelGlobal = 'Teresa'

if(1 > 0) {
    var variavelBloco = 'Joana'
    console.log(variavelGlobal) // Possível acessar dentro do bloco
    console.log(variavelBloco) // Possível acessar dentro do bloco
}

console.log(variavelGlobal) // Possível acessar fora do bloco por ser global
console.log(variavelBloco) // Possível acessar fora do bloco, mesmo sendo local, o que gera falta de segurança 

let variavelEscopoGlobal = 'Gabriel'

if(1 > 0) {
    let variavelEscopoBloco = 'Leticia'
    console.log(variavelEscopoGlobal) // Possível acessar dentro do bloco por ser global
    console.log(variavelEscopoBloco) // Possível acessar dentro DESTE bloco por ser local 
}

console.log(variavelEscopoGlobal) // Possível acessar fora do bloco por ser global
// console.log(variavelEscopoBloco) // Impossível acessar fora do bloco por ser LOCAL, logo não existe fora do bloco e gera erro

/* 6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável. */ 

let estaChovendo = true

if(estaChovendo == true) {
    console.log('Hoje está chovendo, então leve guarda-chuva!')
} else {
    console.log('Hoje não está chovendo, não é preciso levar guarda-chuva!')
}