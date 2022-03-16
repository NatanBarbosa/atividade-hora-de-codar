/*
Questão 1: Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.
*/
function ex01() {
    var num1 = parseInt(prompt("digite um número"))
    var num2 = parseInt(prompt("digite outro número"))

    if(num1 > num2){
        alert("O maior número é " + num1)
    } else {
        alert("O maior número é " + num2)
    }
}

/*
Questão 2: Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.
*/
function ex02() {
    var valor = parseInt(prompt("digite um número inteiro"));

    if(valor > 0){
        alert("número positivo");
    } else if(valor < 0){
        alert("número negativo");
    } else {
        alert("número 0");
    }
}

/*
Questão 3: Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
*/
function ex03() {
    var val1 = parseInt(prompt("digite um valor"));
    var val2 = parseInt(prompt("digite outro valor"));
    var val3 = parseInt(prompt("digite um ultimo valor"));

    if(val1 == val2 || val1 == val3 || val2 == val1 || val2 == val3){
        alert("Não digite valores iguais");
    } else {
        if(val1 > val2 && val1 > val3){
            alert("O maior valor é o " + val1);
        } else if (val2 > val1 && val2 > val3){
            alert("O maior valor é o " + val2);
        } else{
            alert("O maior valor é o " + val3);
        }
    }
}

/*
Questão 4: Faça um programa que leia 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
*/
function ex04() {
    var val1 = parseInt(prompt("digite um valor"));
    var val2 = parseInt(prompt("digite outro valor"));
    var val3 = parseInt(prompt("digite um ultimo valor"));

    if(val1 == val2 || val1 == val3 || val2 == val1 || val2 == val3){
        alert("Não digite valores iguais");
    } else {
        if(val1 < val2 && val1 < val3){
            alert(val2 + " + " + val3 + " = " + (val2 + val3));
        } else if(val2 < val1 && val2 < val3){
            alert(val1 + " + " + val3 + " = " + (val1 + val3));
        } else {
            alert(val1 + " + " + val2 + " = " + (val1 + val2))
        }
    }
}

/*
Questão 5: Faça um programa que leia dois valores informados pelo usuário e exiba uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/
function ex05() {
    var val1 = parseInt(prompt("digite um valor"));
    var val2 = parseInt(prompt("digite outro valor"));

    if(val1 == val2){
        alert("Não digite valores iguais");
    } else if (val1 > val2){
        alert("O primeiro número (" + val1 + ") é maior");
    } else{
        alert("O segundo número (" + val2 + ") é maior");
    }
}

/*
Questão 6: Faça um programa que leia 10 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.
*/
function ex06() {
    var valinputs = prompt("digite 10 números separados por virgula");
    valinputs = valinputs.replace(' ', '');

    var valores = valinputs.split(',');
    
    var soma_arr = 0;
    for(var i in valores){
        valores[i] = parseInt(valores[i]);
        soma_arr += valores[i];
    }
    
    var media = soma_arr / valores.length
    alert("A média dos valores " + valores + " é " + media);
}