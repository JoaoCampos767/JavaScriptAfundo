const valores = [7, 11, 2, 5];

console.log(valores);
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);


console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);