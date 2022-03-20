/*
Questão 1: Escreva um programa em Javascript e crie uma variável chamada "nomeDoCarro" e atribua-a um valor "Fusca".
*/
function ex01() {
    var nomeDoCarro = "Fusca";
    alert(nomeDoCarro);
}


/*
Questão 2: Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]"
*/
function ex02() {
    var nome = prompt('insira seu nome');
    alert("Olá, " + nome);
}

/*
Questão 3: Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]"
*/
function ex03() {
    var nome = prompt("informe seu nome");
    var idade = prompt("informe sua idade");
    alert("Olá, " + nome + ", sua idade é " + idade + " anos");
}   

/*
Questão 4: Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
*/
function ex04(forma) {
    //calcular área do retângulo
    if(forma == "retangulo" || forma == "paralelogramo"){
        let base = parseInt(prompt("digite a base"));
        let altura = parseInt(prompt("digite a altura"));

        let area = base * altura;
        alert("A área do retângulo é " + area);
    }

    //calcular área do quadrado
    if(forma == "quadrado"){
        let lado = parseInt(prompt("digite o lado"));

        let area = lado * lado;
        alert("A área do quadrado é " + area);
    }

    //calcular área do losango
    if(forma == "losango"){
        let diag_menor = parseInt(prompt("digite a diagonal menor"));
        let diag_maior = parseInt(prompt("digite a diagonal maior"));

        let area = (diag_menor * diag_maior) / 2
        alert("A área do losango é " + area);
    }

    //calcular área do trapézio
    if(forma == "trapezio"){
        let base_maior = parseInt(prompt("digite a base maior"));
        let base_menor = parseInt(prompt("digite a base menor"));
        let altura = parseInt(prompt("digite a altura"));

        let area = ((base_maior + base_menor) * altura) / 2;
        alert("A área do trapézio é " + area);
    }

    //calcular área do circulo
    if(forma == "circulo"){
        let raio = parseFloat(prompt("digite o raio"));

        let area = 3.12 * (raio * raio)
        alert("A área do circulo é " + area);
    }
}