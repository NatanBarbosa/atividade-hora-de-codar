/*
Questão 1: Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero nem negativo e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido.
*/
function ex01() {
    var val1 = Number(prompt("Valor 1"));
    var val2;

    do{
        val2 = Number(prompt("Valor 2"));
        if(val2 <= 0){
            alert("[ERRO] digite apenas valores positivos");
        }
    } while (val2 <= 0)

    var divisao = val1 / val2;
    alert(`Divisão dos valores: ${divisao}`);
}

/*
Questão 2: Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
*/
function ex02() {
    document.getElementById('resultado').innerHTML = "";

    var timer = 30;

    while(timer >= 0){
        document.getElementById('resultado').innerHTML += `A bomba vai detonar em: <strong>${timer}</strong> segundos <br>`;
        timer--
    }
    document.getElementById('resultado').innerHTML += `BOOM 💥💥💥`;
}

/*
Questão 3: Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
*/
function ex03() {
    var sequencia = 10;

    while(sequencia > 0){
        alert(sequencia);
        sequencia--
    }
}

/*
Questão 4: Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
*/
function ex04() {
    var soma = 0;
    for(var i = 15; i<=100; i++){
        soma += i;
    }
    var media = soma / 85;
    alert(`A média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive) é ${media.toFixed(2)}`);
}

/*
Questão 5: Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros informados pelo usuário. Considere que o primeiro sempre será menor que o segundo.
*/
function ex05() {
    
    //2 números ou indefinidos números

}

/*
Questão 6: Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
*/
function ex06() {
    var qnt_alunos_aprovados = 0
    var escolha;
    do{
        var nota1 = Number(prompt("1º nota"));
        var nota2 = Number(prompt("2º nota"));
        var media = (nota1 + nota2) / 2;

        alert("A media do aluno é de " + media);
        if(media >= 6){
            qnt_alunos_aprovados++;
        }

        escolha = prompt("Calcular média de outro aluno? Digite: \n S para 'SIM' \n N para 'NÃO'");
    } while(escolha === "S")

    alert(qnt_alunos_aprovados + " alunos foram aprovado com média maior ou igual a 6");
}

/*
Questão 7:  Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/
function ex07() {
    var val1 = Number(prompt("Valor 1"));
    var val2 = Number(prompt("Valor 2"));

    if (val1 > val2){
        alert(`Primeiro(${val1}) é maior`);
    } else if(val1 < val2){
        alert(`Segundo(${val2}) é maior`);
    } else {
        alert(`Números iguais`);
    }
}

/*
Questão 8:  Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota.
Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.
*/
function ex08() {
    var nota1;
    var nota;
    var media;
    
    do{
        nota1 = Number(prompt("Nota da 1º avaliação"));
        if (nota1 > 10 || nota1 < 0){
            alert("[ERRO na nota 1] digite somente notas entre 0 e 10")
        }
    } while (nota1 > 10 || nota1 < 0)

    do{
        nota2 = Number(prompt("Nota da 2º avaliação"));
        if (nota2 > 10 || nota2 < 0){
            alert("[ERRO na nota 2] digite somente notas entre 0 e 10")
        }
    } while (nota2 > 10 || nota2 < 0);

    media = (nota1 + nota2) / 2;

    alert("A media desse aluno é " + media);
}

/*
Questão 9:  Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N é um valor informado pelo usuário
*/
function ex09() {
    var n = Number(prompt("Digite um número"));
    if(n <= 0){
        alert("O valor digitado deve ser maior do que 0");
    } else {
        var contador = 1;
        while(contador <= n){
            alert(contador);
            contador++;
        }
    }
}


/*
Questão 10:  Escreva um algoritmo que calcule e imprima a tabuada do 8 (de 1 a 10).
*/
function ex10() {
    for(var i = 1; i <= 10; i++){
        alert(`8 x ${i} = ${8 * i}`);
    }
}

/*
Questão 11:  Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
*/
function ex11() {
    for(var i = 101; i <= 111; i++){
        alert(i);
    }
}

/*
Questão 12:  Escreva um algoritmo que calcule e imprima a tabuada do número informado pelo usuário (de 1 a 10).
*/
function ex12() {
    var n = parseInt(prompt("digite um número (entre 1 e 10) para exibir a tabuada"));
    if(n < 1 || n > 10){
        alert("[ERRO] somente aceito números entre 1 e 10")
    } else {
        for(var i = 1; i <= 10; i++){
            alert(`${n} x ${i} = ${n * i}`);
        }
    }
}

/*
Questão 13: Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
*/
function ex13() {
    var n = parseInt(prompt("digite um número para exibir todas as tabuadas até ele"));
    for(var i = 1; i <= n; i++){
        alert("Tabuada do " + i)
        for(x = 1; x <= 10; x++){
            alert(`${x} x ${i} = ${x * i}`)
        }
    }
}

/*
Questão 14: Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão no intervalo [24,42] (incluindo os valores 24 e 42 no intervalo) e quantos deles estão fora deste intervalo.
*/
function ex14() {
    var qnt_valores = 0;
    var dentro_intervalo = [];
    var fora_intervalo = [];

    while(qnt_valores <= 10){
        var numero = Number(prompt("Digite um número"));
        if(numero >= 24 && numero <= 42){
            dentro_intervalo.push(numero);
        } else {
            fora_intervalo.push(numero);
        }
        qnt_valores++;
    }
}