const inputNome = document.querySelector('input[name=nome]');
const inputSobrenome = document.querySelector('input[name=sobrenome]');
const inputTelefone = document.querySelector('input[name=telefone]');
const botaoAdicionar = document.querySelector('#formulario button');
const tabela = document.querySelector('#table')


let nome = '';
let sobrenome = '';
let telefone = '';

const adicionaLinha = () => {

    let numeroLinhas = tabela.rows.length;
    const linha = tabela.insertRow(numeroLinhas);

    let celula1 = linha.insertCell(0);
    let celula2 = linha.insertCell(1); 
    let celula3 = linha.insertCell(2);
    let celula4 = linha.insertCell(3);

    celula1.innerHTML = nome; 
    celula2.innerHTML = sobrenome; 
    celula3.innerHTML = telefone;
    celula4.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}


botaoAdicionar.addEventListener('click', () => {
    nome = inputNome.value; 
    sobrenome = inputSobrenome.value;
    telefone = inputTelefone.value;

    inputNome.value = '';
    inputSobrenome.value = '';
    inputTelefone.value = '';
    adicionaLinha(tabela);
})


const removeLinha = (linha) => {
    let i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(i);
}

      