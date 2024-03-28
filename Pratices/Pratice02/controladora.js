const Contato = require("./modelo.js");
const contatos = [];

export function adicionarContato(nome, email, telefone){
    const novoContado = new contato(nome, email, telefone);
    contatos.push(novoContado)
};

export function listarContatos(){
     return contatos
};

export function buscarContatos(nome){
    
    return contatos.find(contato => contato.nome === nome) 
    
};

export function atualizarContato(nome,email,telefone){
    var buscou = buscarContatos(nome);
    if (buscou) {
        buscou.email = email;
        buscou.telefone = telefone;
    } else {
        console.log("Nome Não Encontrado!")
    }
};

export function removerContato(nome){
    const posicao = contatos.findIndex((contato) => contatos.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    } 
};

