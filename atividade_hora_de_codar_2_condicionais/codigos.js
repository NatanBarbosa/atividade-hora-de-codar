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
    
    var media = soma_arr / valores.length;
    console.log(soma_arr, valores.length);
    alert("A média dos valores " + valores + " é " + media);
}

/*
Questão 7: Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)
*/
function ex07() {
    var valinputs = prompt("digite 4 números separados por virgula");
    valinputs = valinputs.replace(' ', '');

    var valores = valinputs.split(',');
    
    var maior_num = 0;
    var numeros_iguais = false;
    for(var i = 0; i < valores.length; i++){
        //verificar se não há valores iguais
        for(var x = 0; x< valores.length; x++){
            if(i !== x && valores[i] == valores[x]){
                //comparar se os elementos do array são iguais somente se os índices forem diferentes, pq val[1] sempre será === val[1]
                numeros_iguais = true;
            }

            //vou aproveitar esse laço para converter as strings para números
            valores[x] = parseInt(valores[x]);
        }

        //descobrir o maior número

        //primeiramente vamos considerar apenas o primeiro número como o maior (ocorrerá apenas na primeira repetição)
        if(i === 0){
            maior_num = valores[i];
        } else{
            //Agora, se algum número for maior que o atual maior_num, essa variável receberá o novo valor
            if(valores[i] > maior_num){
                maior_num = valores[i];
            }
        }
    }

    alert(`Primeiro número: ${valores[0]} | Ultimo número: ${valores[valores.length - 1]} | Maior número digitado: ${maior_num}`);
}

/*
Questão 10: Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
*/
function ex10() {
    var valinputs = prompt("digite 4 números separados por virgula");
    valinputs = valinputs.replace(' ', '');
    var valores = valinputs.split(',');

    var qnt_arr = 0;
    var soma_arr = 0;

    for(var i in valores){
        valores[i] = parseInt(valores[i]);

        if(valores[i] > 0 && valores[i] < 10){
            soma_arr += valores[i];
            qnt_arr++;
        }
    }

    var media = soma_arr / qnt_arr;

    alert("A média dos valores entre 0 e 10 é " + media);
}

/*
Questão 11: Um motorista de táxi deseja calcular o rendimento de seu carro na praça.
Sabendo-se que o preço do combustível é de R$ 2,90, escreva um programa para ler: a marcação do odômetro (Km) no início do dia, a marcação (Km) no final do dia, o número de litros de combustível gasto e o valor total (R$) recebido dos passageiros. Calcular e escrever: a média do consumo em Km/L e o lucro (líquido) do dia.
*/
function ex11() {
    var odometro_inicio = Number(prompt("insira o valor do odometro em km no inicio do dia"));
    var odometro_fim = Number(prompt("insira o valor do odometro em km no final do dia"));
    var litros_gastos = Number(prompt("número de litros de combustível gastos"));
    var valor_recebido = Number(prompt("Valor total recebido pelos passageiros em R$"));

    //media de consumo em km
    var media_consumo_litros = (odometro_fim - odometro_inicio) / litros_gastos

    //lucro líquido
    var preco_combustivel_consumido = litros_gastos * 2.9
    var lucro_liquido = valor_recebido - preco_combustivel_consumido

    alert(`A média de consumo km/L é ${media_consumo_litros} km por litro de combustível | O lucro líquido foi de R$${lucro_liquido}`)
}


/*
Questão 12: 
A equipe Mercedes deseja calcular o número mínimo de litros que deverá colocar no tanque de seu carro para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento

Escreva um programa que leia o comprimento da pista (em metros), o número total de voltas a serem percorridas no grande prêmio, o número de reabastecimentos desejados e o consumo de combustível do carro (em Km/L).

O programa deve calcular e escrever o número mínimo de litros necessários para percorrer até o primeiro reabastecimento.
Observação: considere que o número de voltas entre os reabastecimentos é o mesmo.

O usuário deve informar a quantidade de quilômetros total do circuito e a quantidade de litros que o carro pode possuir.
*/
function ex12() {
    var comprimento_pista = Number(prompt("insira o comprimento da pista (em metros)"));
    var voltas_percorridas = Number(prompt("insira o número de voltas a serem percorridas"));
    var reabastecimentos = Number(prompt("insira o número de reabastecimentos desejados"));
    var consumo_combustivel = Number(prompt("Insira o consumo de combustível do carro (em Km/L)."));

    var qnt_km_total = Number(prompt("quantidade de quilômetros total do circuito"));
    var qnt_max_litros = Number(prompt("Quantidade máxima de litros do carro"));

    alert("pulei kk")
}

/*
Questão 13/14: Escreva um programa para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: PARABÉNS! Você foi aprovado! somente se o aluno foi aprovado (considere 6.0 a média mínima para aprovação e 4 notas informadas).
*/
function ex13() {
    var nota1 = Number(prompt("nota 1"));
    var nota2 = Number(prompt("nota 2"));
    var nota3 = Number(prompt("nota 3"));
    var nota4 = Number(prompt("nota 4"));

    var media = (nota1 + nota2 + nota3 + nota4) / 4
    if(media >= 6){
        alert("PARABÉNS! Você foi aprovado!")
    } else {
        alert("Infelizmente você foi reprovado")
    }
}

/*
Questão 15: Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
*/
function ex15() {
    var nascimento = Number(prompt("Ano de nascimento"));

    //considerando ano atual = 2022
    var idade = 2022 - nascimento
    if(idade >= 16){
        alert("Pode votar")
    } else {
        alert("Não pode votar")
    }
}

/*
Questão 16: As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas (considere que o usuário informará a quantidade), e calcule e escreva o valor total da compra.
*/
function ex16() {
    var qnt_macas = Number(prompt("Número de maçãs compradas"));

    var preco_por_maca = qnt_macas >= 12 ? 0.25 : 0.30;
    var valor_total = qnt_macas * preco_por_maca;

    alert(`Valor total da compra: R$${valor_total.toFixed(2)}`);
}

/*
Questão 17: Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A senha válida é o número "1234" sem aspas. Devem ser impressas as seguintes mensagens: "ACESSO PERMITIDO" caso a senha seja válida. "ACESSO NEGADO" caso a senha seja inválida.
*/
function ex17() {
    var pass = 1234;

    if (parseInt(prompt("Qual é a senha?")) === pass){
        alert("ACESSO PERMITIDO");
    } else {
        alert("ACESSO NEGADO");
    }
}

/*
Questão 18: Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7 * h) - 58
Para mulheres: (62.1 * h) - 44.7
*/
function ex18() {
    var altura = parseFloat(prompt("Sua altura (em metros)"));
    var sexo = parseInt(prompt("Informe seu gênero. Digite 1 para feminino ou 2 para masculino"));
    var peso_ideal;
    
    if (sexo === 2){
        peso_ideal = (72.7 * altura) - 58;
        alert("seu peso ideal é " + peso_ideal.toFixed(2) + "kg");
    } else if(sexo === 1){
        peso_ideal = (62.1 * altura) - 44.7;
        alert("seu peso ideal é " + peso_ideal.toFixed(2) + "kg");
    } else{
        alert("escolha 1 ou 2 para sexo");
    }
}

/*
Questão 19: Escreva um programa para ler o número de gols marcados pelo Grêmio e o número de gols marcados pelo Inter em um GRENAL. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/
function ex19() {
    var qnt_gols_gremio = parseInt(prompt("Número de gols do Grêmio"));
    var qnt_gols_inter = parseInt(prompt("Número de gols do Inter"));
    var resultado;
    
    if (qnt_gols_gremio > qnt_gols_inter){
        resultado = "GRÊMIO VENCEDOR";
    } else if(qnt_gols_gremio < qnt_gols_inter){
        resultado = "INTER VENCEDOR";
    } else if(qnt_gols_gremio === qnt_gols_inter){
        resultado = "EMPATE";
    }

    alert("resultado do jogo: " + resultado);
}

/*
Questão 19: 
Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm).

Calcular e imprimir o seguinte:

Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor do seu perímetro.
Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
Se o número de lados for igual a 5 escrever PENTÁGONO.
Observação: Considere que o usuário só informará os valores 3, 4 ou 5.

Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO.
Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO.
*/

function ex20() {
    var lados_poligono = parseInt(prompt("Número de lados do polígono regular"));
    var medida_lado = parseFloat(prompt("Medida do lado (em cm)"));
    var perimetro;
    
    if(lados_poligono === 3){
        perimetro = 3 * medida_lado;
        alert("Seu polígono é um TRIÂNGULO de " + perimetro + " cm de perímetro");
    } else if(lados_poligono === 4){
        perimetro = 4 * medida_lado;
        alert("Seu polígono é um QUADRADO de " + perimetro + " cm de perímetro");
    } else if(lados_poligono === 5){
        perimetro = 4 * medida_lado;
        alert("Seu polígono é um PENTÁGONO de " + perimetro + " cm de perímetro");
    } else if (lados_poligono > 5){
        alert("POLÍGONO NÃO IDENTIFICADO");
    } else if (lados_poligono < 3){
        alert("NÃO É UM POLÍGONO");
    }
}