function adicionarAluno() {
    // Obter os valores do formulário
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    // Calcular a média
    var media = (nota1 + nota2) / 2;

    // Determinar a situação
    var situacao = media > 5 ? "Aprovado" : "Reprovado";

    // Criar uma nova linha na tabela
    var tabela = document.getElementById("tabela-alunos");
    var novaLinha = tabela.insertRow(-1); // Inserir no final da tabela

    // Inserir células na nova linha
    var celulaNome = novaLinha.insertCell(0);
    var celulaMatricula = novaLinha.insertCell(1);
    var celulaNota1 = novaLinha.insertCell(2);
    var celulaNota2 = novaLinha.insertCell(3);
    var celulaMedia = novaLinha.insertCell(4);
    var celulaSituacao = novaLinha.insertCell(5);

    // Preencher as células com os valores do formulário e os cálculos
    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaMedia.innerHTML = media.toFixed(2); // Exibir a média com 2 casas decimais
    celulaSituacao.innerHTML = situacao;
}
