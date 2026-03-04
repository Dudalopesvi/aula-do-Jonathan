// Estrutura de dados
let participantes = [];

// Função adicionarParticipante
function adicionarParticipante() {
    const input = document.getElementById('nomeInput');
    const nome = input.value.trim();

    // Validação de campo vazio
    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    // Criar objeto e adicionar ao array
    const novoParticipante = {
        nome: nome,
        sorteado: null
    };
    participantes.push(novoParticipante);

    input.value = ""; // Limpar campo
    renderizarLista();
}

// Função auxiliar para renderizar a lista
function renderizarLista() {
    const listaUI = document.getElementById('listaNomes');
    listaUI.innerHTML = "";

    // Uso do for of
    for (const p of participantes) {
        const li = document.createElement('li');
        li.textContent = p.nome;
        listaUI.appendChild(li);
    }
}

// Função realizarSorteio
function realizarSorteio() {
    if (participantes.length < 3) {
        alert("Adicione pelo menos 3 participantes!");
        return;
    }

    let nomesEmbaralhados;
    let autoSorteio = true;

    // While para garantir que ninguém tire a si mesmo
    while (autoSorteio) {
        // Criar cópia dos nomes
        nomesEmbaralhados = participantes.map(p => p.nome);
        
        // Embaralhar
        nomesEmbaralhados.sort(() => Math.random() - 0.5);

        autoSorteio = false;
        for (let i = 0; i < participantes.length; i++) {
            if (participantes[i].nome === nomesEmbaralhados[i]) {
                autoSorteio = true;
            }
        }
    }

    // Percorrer com for e atribuir propriedade sorteado
    for (let i = 0; i < participantes.length; i++) {
        // Atribuição de valor a uma propriedade de objeto
        participantes[i].sorteado = nomesEmbaralhados[i];
    }

    // Montar cartões
    montarCartoes();
}

// Função que monta os cartões
function montarCartoes() {
    const grid = document.getElementById('gridCartoes');
    grid.innerHTML = "";

    // Uso do for of percorrendo os objetos
    for (const participante of participantes) {
        const cartaoDiv = document.createElement('div');
        cartaoDiv.className = "cartao";

        cartaoDiv.innerHTML = `
            <div class="cartao-corpo">
                <div class="face frente">
                    <strong>${participante.nome}</strong>
                    <p>Clique para revelar</p>
                </div>
                <div class="face verso">
                    <p>Você tirou:</p>
                    <strong>${participante.sorteado}</strong>
                </div>
            </div>
        `;

        // Ativar animação de virar com classList.toggle()
        cartaoDiv.onclick = function() {
            const corpo = this.querySelector('.cartao-corpo');
            corpo.classList.toggle('virado');
        };

        grid.appendChild(cartaoDiv);
    }
}