
//------ 1 FETCH/THEN Buscar dados do CEP usando  fetch().then().then().catch().

// fetch(url).then(resposta => resposta.json()).then(dados => { console.log(dados.)})


// ASYNC/AWAIT - FETCH
// async function BuscarCEP() {
//     try {
//         const resposta = await fetch(url)
//         const dados = await resposta.json()

//         console.log(dados.cep)
//         console.log(dados.logradouro)
//         DarAlert()

//     }catch(erro){
//         console.log(erro.mensagem)
//     }


// }

// BuscarCEP()


// function DarAlert(){
//     alert("Carregou os dados!!")
// }





//VARIAVEIS
const resultado = document.getElementById("resultado")
const btnPesquisar = document.getElementById("Pesquisar")




//FUNÇÕES
function CriarEndereço(cep, rua, bairro, cidade, estado){
const container = document.createElement("div")
const ul= document.createElement("ul")
const el_cep = document.createElement("li")
const el_rua = document.createElement("li")
const el_bairro = document.createElement("li")
const el_cidade = document.createElement("li")
const el_estado = document.createElement("li")


el_cep.textContent = "CEP" + cep
el_rua.textContent = "RUA" + rua
el_bairro.textContent = "BAiRRO" + bairro
el_cidade.textContent = "CIDADE" + cidade
el_estado.textContent = "ESTADO" + estado

ul.append(el_cep,el_rua,el_bairro,el_cidade,el_estado)
container.append(ul)
resultado.append(container)
}

async function PesquisarCEP() {
    const dados = await ResgatarDados()
      console.log(dados)
  
      const cep = dados.cep
      const rua = dados.logradouro
      const bairro = dados.bairro
      const cidade = dados.cidade
      const estado = dados.estado
      
      CriarEndereço(cep,rua,bairro,cidade,estado)
  
      
  }



async function ResgatarDados() {
    try {
        const respostaServidor = await fetch("https://viacep.com.br/ws/88132857/json/")

        if (!respostaServidor.ok) {
            console.log("Falha ao tentar resgatar os dados da APL de CEP")
            return null
        }
        const dados = await respostaServidor.json()
        return dados
    } catch (erro){
        console.log(erro.message)
        return null
    }

}
// PesquisarCEP()