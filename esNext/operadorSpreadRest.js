// operador... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionario = { nome: "Joao", salario: 1254.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com Array
const grupoA = ["Joao", "Pedro", "Campos"];
const grupoFinal = ["Alessa", ...grupoA, "Jose"];
console.log(grupoFinal);
