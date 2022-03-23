var nome_usuario = '';
var senha_usuario = '';
var saldo = 0;

function iniciarBanco(){
    nome_usuario = prompt("Insira o nome do proprietário da conta");
    senha_usuario = "3589";
    saldo = 5000.00;

    //Ao acessar o sistema, pergunte o nome do usuário e diga "Olá {Nome} é um prazer ter você por aqui!".
    alert(`Olá ${nome_usuario}, é um prazer ter você por aqui!`);

    inicio();
}

function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção \n1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) sair'));

    //Na função "inicio", utilize escolha/caso (switch/case) para validar a opção do usuário. 
    //A ordem das opções deve ser: Saldo, Extrato, Saque, Depósito, Transferência e Sair. 

    switch(escolha){
        case 1:
            //precisa de senha
            verificar_senha() ? ver_saldo() : erro('senha inválida', inicio);
            break;
        case 2:
            //precisa de senha
            verificar_senha() ? ver_extrato() : erro('senha inválida', inicio);
            break;
        case 3:
            //precisa de senha
            verificar_senha() ? fazer_saque() : erro('senha inválida', inicio);
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            //precisa de senha
            verificar_senha() ? fazer_transferencia() : erro('senha inválida', inicio);
            break;
        case 6: 
            sair();
            break;
        default:
            erro('Por favor, informe um número entre 1 e 6', inicio);
    }
}		

function ver_saldo() {
    alert('Seu saldo atual é: R$' + saldo);
    inicio();
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        erro('Por favor, informe um número:', fazer_deposito);
    } else if(deposito <= 0){
        //Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. Exiba uma mensagem de "Operação não autorizada". 
        erro('Operação não autorizada', fazer_deposito);
    } else {
        saldo += deposito;
        alert(`Você depositou R$${deposito} na sua conta`);
        ver_saldo();
    }
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        erro('Por favor, informe um número', fazer_saque)
    } else {
        //varificar senha
        
        // Sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada". 
        //Sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor a zero. Exiba uma mensagem de "Operação não autorizada".
        if(saldo - saque <= 0 || saque <= 0){
            erro('Operação não autorizada', fazer_saque);
        } else {
            saldo -= saque;
            alert("Você sacou R$" + saque + " da sua conta.");
            ver_saldo();
        }
    }
}

//Adicionar a opção para ver o extrato (Coloque algumas compras ou depósitos fictícios). 
function ver_extrato(){
    alert("Trânsferência recebida \nData: 06/01/2022 | Valor: +R$2500,00 \n\nPagamento da conta telefônica \nData: 07/11/2021 | Valor: -R$200,00 \n\nMulta farol vermelho \n Data: 29/10/2021 | Valor: -R$500,00\n\nTrânsferência recebida \nData: 06/10/2022 | Valor: +R$2500,00 \n\nCompra fone de ouvido bluetooth \nData: 01/10/2021 \ Valor: -R$200,00");
    inicio();
}

//Adicionar a opção para fazer uma transferência. A transferência consiste em você informar o número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada". 
// Sempre que o usuário for transferir dinheiro,  o valor a ser transferido não pode ser igual ou menor a zero., ou seja, caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada". 
function fazer_transferencia(){
    var numero_conta = Number(prompt('Informe o número da conta para qual o dinheiro será transferido'));
    if (isNaN(numero_conta)){
        erro('Informe um número de conta válido',fazer_transferencia);
    }

    var	valor_transferencia = Number(prompt('Informe o valor a ser transferido'));
    if (isNaN(valor_transferencia)){
        erro('Informe um valor de transferência válido',fazer_transferencia);
    }

    if(saldo - valor_transferencia <= 0 || valor_transferencia <= 0){
        erro('Operação não autorizada',fazer_transferencia);
    } else {
        saldo -= valor_transferencia;
        alert(`Você transferiu R$${valor_transferencia} para a conta ${numero_conta}`);
        ver_saldo();
    }
}

//Atualize a função "erro" com as novas opções do menu.
function erro(msg, voltar) {
    alert(msg);
    voltar();
}

//Sempre que o usuário for acessar o saldo, sacar, retirar o extrato ou transferir dinheiro é necessário que ele informe uma senha. Essa senha deve validada com uma condicional. A senha é 3589. 
function verificar_senha(){
    var requisicao = prompt('Para essa operação, confirme sua senha');
    if (requisicao === senha_usuario){
        return true;
    } else {
        return false;
    }
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`${nome_usuario}, foi um prazer ter você por aqui!`);
        //window.close();
    } else {
        inicio();
    }
}