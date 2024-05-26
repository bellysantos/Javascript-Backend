/* 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas. */

const frase = 'Essa frase é muito top'
console.log(frase.length)
console.log(frase.toUpperCase())

/* 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console. */

const variavelNull = null
let variavelUndefined

console.log(variavelNull)
console.log(variavelUndefined)

/* 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console. */

let variavelNumber = 10
let variavelString = 'texto'
let variavelBool = true

console.log(`Esse ${variavelString} é ${variavelNumber}, muito ${variavelBool}`)

/* 4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console. */

let variavelNum = 10
let variavelStr = 'texto'

let variavelStrConv = Number.parseInt(variavelStr)
let variavelNumConv = variavelNum.toString()

// forma mais simples: String(variavel) e Number(variavel)

console.log(`Variável original: ${variavelNum}\nVariável convertida: ${variavelNumConv}`)
console.log(`Variável original: ${variavelStr}\nVariável convertida: ${variavelStrConv}`)

console.log(typeof variavelStrConv)
console.log(typeof variavelNumConv)

/* 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console. */

const varStr = 'Esse texto eh muito top'

console.log(varStr.toUpperCase()) // deixa tudo em caixa alta
console.log(varStr.toLowerCase()) // deixa tudo em caixa baixa
console.log(varStr.slice(0, 4)) // corta de acordo com os parâmetros
console.log(varStr.length) // realiza a contagem de caracteres da frase
console.log(varStr.split('muito')) // separa o item indicaado da string
