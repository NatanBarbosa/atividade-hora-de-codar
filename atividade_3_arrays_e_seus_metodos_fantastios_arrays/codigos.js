/*
Questão 1: Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.
*/
function ex01() {
    var i = 0
    var arr = [];
    while(i < 20){
        arr.push(prompt("Número:"));
        i++;
    }

    alert("Ó seu array aqui: " + arr);
}

/*
Questão 2: Faça um algoritmo para ler 12 números e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.
*/
function ex02() {
    var i = 0
    var arr_maiores = [];
    var arr_menores = [];
    var digitado = 0;

    while(i < 12){
        digitado = Number(prompt("Número:"));
        if(digitado > 50){
            arr_maiores.push(digitado);
        } else {
            arr_menores.push(digitado);
        }
        i++;
    }

    alert("Array com números menores ou iguais a 50: " + arr_menores);
    alert("Array com números maiores de 50: " + arr_maiores);
}

/*
Questão 3: 
Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.

Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem.
Torper terá uma capa da invisibilidade, uma pedra do despertar, uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem.

No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica.

Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro).

No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.

Descreva cada uma das ações acima. utilizando código.

Exiba o resultado final de cada um dos inventários utilizando "document.write"
*/
function ex03() {
    var inventario_drofo = ['anel da invisibilidade', 'par de botas mágicas', 'par de botas mágicas', 'poção do sono', 'poção da inocência', 'poção da inocência'];
    var inventario_torper = ['capa da invisibilidade', 'pedra do despertar', 'varinha das varinhas' , 'poção da inocência', 'poção da mentira', 'poção da mentira', 'poção anti-inteligência'];

    //Torper
    //consumir um poção da mentira -> tirar ela do array -> adicionar garrafa vazia
    inventario_torper.splice(5,1, 'frasco vazio');

    //perder a pedra do despertar -> tirar ela do array
    inventario_torper.splice(1,1);

    //ganhar par de botas mágicas do Drofo
    inventario_drofo.splice(1,1); //tirar um par de botas do array do drofo
    inventario_torper.push('par de botas mágicas'); //adicionar um par de botas do array do torper

    //Drofo
    //ganhar +1 bota mágica -> adicionar um par de botas do array do drofo
    inventario_drofo.push('par de botas mágicas')

    //usar poção do sono -> remover item e adicionar garrafa vazia
    inventario_drofo.splice(2,1, 'frasco vazio');

    //consumiu a poção anti-inteligência do Torper
    inventario_torper.splice(5,1); //tirar ela do array do torper
    inventario_drofo.push('poção anti-inteligência')//dar ela pro array do drofo

    //econtrou ovo de dragão e coxinha -> adicionar eles no array
    inventario_drofo.push('ovo de dragão', 'coxinha');

    //colocando o inventário no html
    var div_torper = document.getElementById('inventario_torper');
    var div_drofo = document.getElementById('inventario_drofo');

    var lista_torper = document.createElement('ul');

    for(var i in inventario_torper){
        var li = document.createElement('li');
        li.innerText = inventario_torper[i]
        lista_torper.appendChild(li);
    }
    div_torper.appendChild(lista_torper);

    var lista_drofo = document.createElement('ul');

    for(var i in inventario_drofo){
        var li = document.createElement('li');
        li.innerText = inventario_drofo[i]
        lista_drofo.appendChild(li);
    }
    div_drofo.appendChild(lista_drofo);
}

/*
Questão 4: 
Machado de Assis!
Foi um escritor brasileiro, considerado por muitos críticos, estudiosos, escritores e leitores o maior nome da literatura brasileira

A sua lista de obras:

Romances
Memorial de Aires (1908)
Ressurreição (1872)
Casa Velha (1885)
Memórias Póstumas de Brás Cubas (1881)
Helena (1876)
Quincas Borba (1891)
Esaú e Jacó (1904)
A mão e a luva (1874)
Dom Casmurro (1899)
Iaiá Garcia (1878)
Coletânea de Poesias
Americanas (1875)
Ocidentais (1880)
Falenas (1870)
Crisálidas (1864)
Poesias Completas (1901)
Coletânea de contos
Várias Histórias (1896)
Histórias sem Data (1884)
Papéis Avulsos (1882)
Contos Fluminenses (1870)
Histórias da Meia-Noite (1873)
Relíquias de Casa Velha (1906)
Páginas Recolhidas (1899)
Para cada um dos grupos de obras acima, ordene e crie um array com as obras.

Agora, ainda utilizando código, crie mais um array e insira os três primeiros livros de cada grupo de obras.
*/

function ex04(){
    var romances = [
        'Memorial de Aires (1908)',
        'Ressurreição (1872)',
        'Casa Velha (1885)',
        'Memórias Póstumas de Brás Cubas (1881)',
        'Helena (1876)',
        'Quincas Borba (1891)',
        'Esaú e Jacó (1904)',
        'A mão e a luva (1874)',
        'Dom Casmurro (1899)',
        'Iaiá Garcia (1878)'
    ];

    var colet_poesias = [
        'Americanas (1875)',
        'Ocidentais (1880)',
        'Falenas (1870)',
        'Crisálidas (1864)',
        'Poesias Completas (1901)'
    ];

    var colet_contos = [
        'Várias Histórias (1896)',
        'Histórias sem Data (1884)',
        'Papéis Avulsos (1882)',
        'Contos Fluminenses (1870)',
        'Histórias da Meia-Noite (1873)',
        'Relíquias de Casa Velha (1906)',
        'Páginas Recolhidas (1899)'
    ];

    var primeiras_obras = [romances[0], colet_poesias[0], colet_contos[0]];

    alert(`Arrays criados: \n \n ${colet_contos} \n \n ${colet_poesias} \n \n ${colet_contos} \n \n ${primeiras_obras}`);
}