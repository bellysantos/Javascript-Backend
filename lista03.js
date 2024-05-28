/* 1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console. */

let saldo = 2000
let deposito = 300
let saque = 1200

let operacao = (saldo + deposito) - saque

console.log(`O saldo original é ${saldo}`)
console.log(`O saldo após saque é ${operacao}`);


/* 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console. */

let num = 7
num ? par = num % 2 == 0 : impar = num % 2 != 0 // Pode ser substituido por num % 2 === 0 ? 'par' : 'impar'
par ? console.log(`O número ${num} é par`) : console.log(`O número ${num} é ímpar`) 


/* 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras. */

let usuarioLogado = true 
let temPermissao = true 

let verificacao = (usuarioLogado == true && temPermissao == true) ? console.log(`Possível acessar a funcionalidade`) : console.log(`Impossível acessar a funcionalidade`)

/* 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console. */

let primeiraVar = false
let segundaVar = false

let verificaVar = (primeiraVar == true || segundaVar == true) ? console.log(`Há variável verdadeira`) : console.log(`Não há varirável verdadeira`);

/* 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra. */

let idadeMin = 18
let idadeUser = 16 

if(idadeUser >= idadeMin) {
    console.log(`Usuário possui ${idadeUser}, pode realizar a compra!`)
} else {
    console.log(`A idade do usuário é ${idadeUser}, não pode realizar a compra!`)
}