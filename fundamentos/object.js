const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 5825.3;
prod1['Desconto Legal'] = 0.40 // EVITAR ATRIBUTOS COM ESPAÇOS

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 89.9
}

console.log(prod2);

'{ "nome": "Camisa Polo", "preco": 89.9}'