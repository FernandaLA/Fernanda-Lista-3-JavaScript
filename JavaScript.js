//Questão 1 - Alterar a cor do fundo para a cor selecionada pelos botões
function alterarCorFundoBtn($cor) {
    document.getElementById("questaoUm").style.background = $cor;
    return false;
}

//Questão 2 - Alterar a cor do fundo para a cor selecionada pelos links
function alterarCorFundoLink($cor) {
    document.getElementById("questaoDois").style.background = $cor;
    return false;
}

//Questão 3 - Alterar a cor do fundo para a cor selecionada no select
function alterarCorFundoSelect() {
    var cor = document.getElementById("selectCor").value;
    document.getElementById("questaoTres").style.background = cor;
}

//Questão 4 - Esconder ou Mostrar o paragráfo ao clicar no botão
function displayParagrafo() {
    var txt = document.getElementById("paragrafo");
    if(txt.style.display == 'block' || txt.style.display == '') {
        txt.style.display = 'none';
    } else {
        txt.style.display = 'block';
    }
    return false;
}

//Questão 5 -Verificar se Todos os campos do formulário foram preenchidos,
// se as senhas informadas são igual e se possuem de 6 à 10 caracteres
function enviarCadastro() {
    // Verificando se todos os campos foram preenchidos
    if (document.getElementById("nmeUsuario").value != '' && 
    document.getElementById("novaSenha").value != '' && 
    document.getElementById("confirmaNovaSenha").value != ''){
        // Verificando se a senha tem de 6 à 10 caracteres
        if(document.getElementById("novaSenha").value.length >=6 && document.getElementById("novaSenha").value.length <=10) {
            // Verificando se as senhas digitadas são iguais
            if(document.getElementById("novaSenha").value == document.getElementById("confirmaNovaSenha").value){
                alert("Cadastro realizado com Sucesso!!");
            } else {
                // se as senhas digitadas NÃO são iguais
                alert("Senhas divergentes!!");
            }
        } else {
            // se a senha NÃO tem de 6 à 10 caracteres
            alert("A senha deve conter de 6 à 10 caracteres!!");
        }
    } else {
        // se NÃO preencheu todos os campos
        alert("Preencha todos os campos!!");
    }
}

//Questão 6 - Verificar se a Palavra informada é um palindromo ou não
function verificaPalindromo() {
    var palavra = document.getElementById("dscPalavra").value
    var html = '';
    if (palavra == palavra.split('').reverse().join('')){
        html += '<h3 style="color: green;">Essa palavra é um palindromo!</h3>';
    } else {
        html += '<h3 style="color: red;">Essa palavra NÃO é um palindromo!</h3>';
    }
    document.getElementById("respostaSeis").innerHTML = html;
}

//Questão 7 - Armazenar 5 nomes inseridos por inputs em um array e apresentá-los em ordem invertida
function montaInputs() {
    var html = "Nome 1 <input type='text' id='nomeUm' /><br>";
    html += "Nome 2 <input type='text' id='nomeDois' /><br>";
    html += "Nome 3 <input type='text' id='nomeTres' /><br>";
    html += "Nome 4 <input type='text' id='nomeQuatro' /><br>";
    html += "Nome 5 <input type='text' id='nomeCinco' />";
    document.getElementById("questaoSete").innerHTML = html;
}

//Questão 8 - Regras de Formulário
//Abilitar cpf e data de nascimento apenas quando pessoa fisica
//Abilitar cnpj apenas quando pessoa jurídica
//Os campos cep e data de nascimento só podem aceitar numeros
function salvarForm() {
    document.getElementById("questaoSete");
}

//Questão 9 - Intercalar duas palavras em um unico campo desabilitado para edição
function intercalarPalavras() {
    document.getElementById("questaoSete");
}

//Questão 10 - Script que receba três numeros fornecidos pelo usuário atravéz de um formulario
function obterNumeros() {
    document.getElementById("questaoSete");
}

