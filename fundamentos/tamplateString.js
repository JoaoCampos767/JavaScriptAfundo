const nome = 'Joao';
const concatenacao = 'Ola ' + nome + '!';
const templete = ` 
    Ola
    ${nome}!`;

console.log(concatenacao, templete);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);