// // 1 - Exercicio
// let textoNumero = prompt("Digite um número:");
// let numeroConvertido = Number(textoNumero);
// console.log("Número convertido:", numeroConvertido);

// // 2 - Exercicio
// let textoBooleano = prompt("Digite algo (true ou false):");
// let booleanConvertido = (textoBooleano.toLowerCase() === "true");
// console.log("Boolean convertido:", booleanConvertido);

// // 3 - Exercicio
// let num = 42;
// let numString = String(num);
// console.log("Número convertido para string:", numString);

// // 4 - Exercicio
// let palavra = prompt("Digite uma palavra:");
// console.log("A palavra digitada foi:", palavra);

// // 5 - Exercicio
// let inteiro = Number(prompt("Digite um número inteiro:"));
// console.log("Você digitou o número:", inteiro);

// // 6 - Exercicio
// let n1 = Number(prompt("Digite o primeiro número inteiro:"));
// let n2 = Number(prompt("Digite o segundo número inteiro:"));

// console.log("Soma:", n1 + n2);
// console.log("Diferença:", n1 - n2);
// console.log("Produto:", n1 * n2);
// console.log("Quociente:", n1 / n2);
// console.log("Resto da divisão:", n1 % n2);

// // 7 - Exercicio
// let nome = prompt("Digite seu nome:");
// let idade = Number(prompt("Digite sua idade:"));

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.");
// }
// // 8 - Exercicio
// let numero = Number(prompt("Digite um número real:"));

// console.log("Número digitado:", numero.toFixed(2));
// console.log("O dobro:", (numero * 2).toFixed(2));
// console.log("A metade:", (numero / 2).toFixed(2));


// //FIM



//Faça um algoritmo que leia o preço de um produto e
//  calcule o valor com desconto de 12%, 
// mostrando o valor original e o valor com desconto.  


// let Usuário = parseFloat(prompt("Digite um numero:"))
// let desconto = Usuário * 0.12

// console.log(`original ${Usuário} e com desconto ${desconto}`)


// exercicio 2
//coleta de informações
// let tempogasto = parseFloat(prompt(" informe a o tempo gasto: "))
// let VelocidadeMedia = parseFloat(prompt(" informe a velodidade media: "))

// //calculos
// let distancia, qtdlitrosUsada ;
// distancia = VelocidadeMedia/tempogasto
// qtdlitrosUsada = distancia/12
// alert(`A distancia percorrida é de ${distancia}km.
//     Quantidadede litros utilizadas ${qtdlitrosUsada.toFixed(2)} litros`)

// exercicio 3

// let valojantar, taxaGarçom
// valojantar = parseFloat(prompt("informe o valor do jantar: "))
// taxaGarçom = valojantar * 10/100

// alert(`O valor total a ser pago pe de R$ ${valojantar + taxaGarçom}`)

// exercicio 4 
// let minutos = Number(prompt("Minutos utilizados:"));
// let total = minutos > 100 ? 50 + (minutos - 100) * 2 : 50;

// console.log("Valor total da conta: R$ " + total);

// exercicio 5
// let n1 = Number(prompt("Nota 1:"));
// let n2 = Number(prompt("Nota 2:"));
// let n3 = Number(prompt("Nota 3:"));

// let media = (n1 + n2 + n3) / 3;

// console.log("Média final = " + media);


//exercicio 6 
// let p1 = Number(prompt("Preço 1:"));
// let p2 = Number(prompt("Preço 2:"));
// let p3 = Number(prompt("Preço 3:"));

// let total = p1 + p2 + p3 - Math.min(p1, p2, p3);

// console.log("Total a pagar: R$ " + total);

//exercicio 7
// let distancia = Number(prompt("Distância total (km):"));
// let kmDia = Number(prompt("Km percorridos por dia:"));

// let dias = distancia / kmDia;

// console.log("Dias necessários: " + dias);


//exercicio 8
// let salarioMin = Number(prompt("Salário mínimo:"));
// let salarioFunc = Number(prompt("Salário do funcionário:"));

// let qtd = salarioFunc / salarioMin;

// console.log("Ele ganha " + qtd + " salários mínimos.");


//exercicio 9
// let c = Number(prompt("Temperatura em °C:"));
// let f = (c * 9/5) + 32;

// console.log("Temperatura em °F: " + f);


// exercicio 10
// let precoDolar = Number(prompt("Preço em dólares:"));
// let cotacao = Number(prompt("Cotação do dólar:"));

// let valorReal = precoDolar * cotacao;

// console.log("Valor em reais: R$ " + valorReal);

// // exercicio 11
// let peso = Number(prompt("Peso (kg):"));
// let altura = Number(prompt("Altura (m):"));

// let imc = peso / (altura * altura);

// console.log("IMC = " + imc);

// exercicio 12
// let copias = Number(prompt("Quantidade de cópias:"));
// let total = copias * 0.08;

// console.log("Valor total: R$ " + total);

// exercicio 13
// let comprimento = Number(prompt("Comprimento (m):"));
// let largura = Number(prompt("Largura (m):"));

// let perimetro = 2 * (comprimento + largura);

// console.log("Perímetro: " + perimetro + " m");

// exercicio 14
// let custo = Number(prompt("Preço de custo:"));
// let venda = Number(prompt("Preço de venda:"));

// let lucro = venda - custo;
// let porcentagem = (lucro / custo) * 100;

// console.log("Lucro em reais: R$ " + lucro);
// console.log("Lucro em porcentagem: " + porcentagem + "%");

