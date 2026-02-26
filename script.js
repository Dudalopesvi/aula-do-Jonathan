// //Arrow Function
// const CalcularArea = (L,A) =>  L * A
// console.log(CalcularArea(5,6))


// const numeros = [2,3,4,5];

// // map: Dobrar valores
// const dobrados = numeros.map(n=> n * 2);

// //filter: Maiores que 5
// const maiores = dobrados.filter(n => n > 5 );
// //rsultado: [6,8,10]

// console.log(`array original ${numeros}`)
// console.log(`array com map ${dobrados}`)
// console.log(`array filtrado ${maiores}`)


// let arrayNomes = ["Ana","bia"]

// const NomesM = arrayNomes.map(n => n.toUpperCase());

// console.log(`array original ${NomesM}`)


// const idades = [16,19,23,12];

// //filter: Maiores que 5
// const maiores = idades.filter(n => n >= 18  );
// //resultado: [6,8,10]

// console.log(`os maoires e idade são ${maiores}`)

// const apagador = {
//     nome: "Joaquim",
//     cor: "azul",
//     condicao:"usado",
//     apagar:() =>{
//         console.log("Apagou o quadro")
//         return
//     }

// }

// console.log(apagador.nome)
// console.log(apagador.cor)
// console.log(apagador.condicao)
// console.log(apagador.apagar)

// const aluno = {
//     nome: "Eduarda",
//     curso: "informática para internet",
//     idade:"16",
  


// }
// aluno.curso ="Engenharia de Software"

// console.log(aluno.nome)
// console.log(aluno.curso)

// const calopisita = {
//     nome: "Caco",
//     cantr: () => {
//         return "Piu Piu"
//     },
//     apresentar: () =>{
//         return this.nome + "Diz oi"
       
//     }
// } 

// console.log(calopisita.apresentar)

// const calculadora = {
  
//     somar: (a,b) => {
//         return a + b
//     },
//     subtrair: (a,b) =>{
//         return a - b
       
//     },
//     multiplicacao: (a,b) =>{
//         return a * b
       
//     },
//     divisao: (a,b) =>{
//         return a / b
       
//     },
// } 

// console.log(calculadora.somar(2, 3))
// console.log(calculadora.subtrair(2, 3))
// console.log(calculadora.multiplicacao(6,3))
// console.log(calculadora.divisao(2, 3))

const Fulano = {
    nome: "fulano",

    oi: () =>{
        return this.nome + "Diz oi"
       
    }
} 
console.log(Fulano.oi)


