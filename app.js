let nomes_amigos = []; 

function adicionarAmigo() { 
    let campoNome = document.getElementById("amigo");
    let nome = campoNome.value;
    if (nome == ""){
        alert("Insira um nome!");
        return;
    }
    else{
        nomes_amigos.push(nome);
        atualizarLista();
        campoNome.value = "";
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    for (const nomes of nomes_amigos) {
        lista.innerHTML += "<li>" + nomes + "</li>"
    }
}

function sortearAmigo() {
    if (nomes_amigos.length == 0){
        alert("Nenhum nome foi inserido!");
        return;
    }
    else{
        let indice = Math.floor(Math.random()*nomes_amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = nomes_amigos[indice]
    }
}

function resetarLista() {
    if (!confirm("Deseja realmente limpar a lista de nomes?")) {
        return; 
    }
    nomes_amigos = [];
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = "";
}