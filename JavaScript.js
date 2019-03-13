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
    if (txt.style.display == 'block' || txt.style.display == '') {
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
        document.getElementById("confirmaNovaSenha").value != '') {
        // Verificando se a senha tem de 6 à 10 caracteres
        if (document.getElementById("novaSenha").value.length >= 6 && document.getElementById("novaSenha").value.length <= 10) {
            // Verificando se as senhas digitadas são iguais
            if (document.getElementById("novaSenha").value == document.getElementById("confirmaNovaSenha").value) {
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
    if (palavra == palavra.split('').reverse().join('')) {
        html += '<h3 style="color: green;">Essa palavra é um palindromo!</h3>';
    } else {
        html += '<h3 style="color: red;">Essa palavra NÃO é um palindromo!</h3>';
    }
    document.getElementById("respostaSeis").innerHTML = html;
}

function criaInputs() {
    //Questão 7 - Criar campos para inserir os nomes 
    for (i = 0; i < 5; i++) {
        var n = i + 1;
        document.getElementById('questaoSete').innerHTML += "Nome " + n + " <input type='text' name='nomes'><br><br>";
    }
    //Questão 10 - Criar campos para usuário inserir 3 números
    document.getElementById('questaoDez').innerHTML = "<form>"
    for (i = 0; i < 3; i++) {
        var n = i + 1;
        document.getElementById('questaoDez').innerHTML += "Número " + n + " <input type='text' name='numeros' onkeypress='return apenasNumeros(event)'><br><br>";
    }
    document.getElementById('questaoDez').innerHTML += "<input type='button' value='Enviar' onclick='return retornoDez()'>";
    document.getElementById('questaoDez').innerHTML += "</form>"
}

//Questão 7 - Salvar os nomes em um Array e Apresentar o valores em ordem invertida
function salvar() {
    var todos = document.getElementsByName('nomes').length;
    estatico = new Array();
    for (i = 0; i < 5; i++) {
        estatico += document.getElementsByName('nomes')[i].value;
    }
    for (i = todos; i > 0; i--) {
        document.getElementsByName('nomes')[i - 1].value = estatico;
    }
}

//Questão 8 - Regras de Formulário
//Abilitar cpf e data de nascimento apenas quando pessoa fisica
//Abilitar cnpj apenas quando pessoa jurídica
//Os campos cep e data de nascimento só podem aceitar numeros
function apenasNumeros(e) {
    //permitir apenas numeros no cep
    var cep = (window.event) ? event.keyCode : e.which;
    if (cep > 47 && cep < 58) {
        return true;
    } else if (cep == 8 || cep == 0) {
        return true;
    } else {
        return false;
    }
}

function verificaCampos(ind) {
    if (ind == 'f') {
        document.getElementById("cpfPessoa").disabled = false;
        document.getElementById("dtaNascimento").disabled = false;
        document.getElementById("cnpjEmpresa").disabled = true;
    } else if (ind == 'j') {
        document.getElementById("cnpjEmpresa").disabled = false;
        document.getElementById("cpfPessoa").disabled = true;
        document.getElementById("dtaNascimento").disabled = true;
    }
}

//Questão 9 - Intercalar duas palavras em um unico campo desabilitado para edição
function intercalarPalavras() {
    var a = document.getElementById("palavraUm").value.length;
    var b = document.getElementById("palavraDois").value.length;
    if (a > b) {
        var total = a;
    } else {
        var total = b;
    }
    for (i = 0; i < total; i++) {
        document.getElementById("resultado").value = 'Ex.: "Joao" e "Mara" -> JMoaaroa';
    }
}

//Retorno da questão 10
function retornoDez(){
    alert("Ok");
}