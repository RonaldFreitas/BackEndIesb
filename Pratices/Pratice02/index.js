const contatoControladora = require('./controladora');
const readline = require('readline-sync');

function menu(){
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato");
    console.log("6. Sair");
};

function escolherOpcao(opcao){
    switch(opcao) {
        case '1' :
            controladora.adicionarContato(nome, email, telefone);
            const nome = readline.question("Digite seu nome: ");
            const email = readline.question("Digite seu E-mail: ");
            const telefone = readline.question("Digite seu Telefone: ");
          break;
        case '2' :
          controladora.listarContatos();
          break;
        case '3' :
          const nomeContato = readline.question("Digite o nome do contato: ");
          const contato = controladora.buscarContatos(nomeContato);

          if (contato) {
              console.log(contato);
          } else {
            console.log("Contato Não encontrado.");
          };
          break;
        case '4' :
          const nomeAtualizar = readline.question("Digite o NOME do contato para atualizar: ");
          const contatoBuscar = controladora.buscarContatos(nomeAtualizar);
          if (contatoBuscar){
            const emailNovo = readline.question("Digite o novo email: ");
            const telefoneNovo = readline.question("Digite o novo telefone: ");
            const nomeNovo = readline.question("Digite o novo nome: ");
            controladora.atualizarContato(emailNovo,telefoneNovo,nomeNovo); 
          } else {
            console.log("contato não encontrado!");
          }
          break;
        case '5' :
          const nomeRM = readline.question("Informe o nome do contato para remover: ");
          controladora.removerContato(nomeRM);  
          break;
        case '6' : Process.exit();
        default: console.log('Opcao Invalida');
       
       
    }
    
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao: ");
    escolherOpcao(opcao);
  }
}

main();
