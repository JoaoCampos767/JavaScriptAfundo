// tagged templates 0 processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra String";
}

const aluno = "Joao";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}`);
