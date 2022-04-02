const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funAtual) => {
    return func.salario < func.menorSalario ? func : funAtual;
};

axios.get(url).then(response => {
    const funcionarios = response.data;
    // console.log(funcionarios);

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .filter(menorSalario);

    console.log(func);
});