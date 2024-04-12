let ProjetoSelecionado = document.querySelectorAll('.projeto-selecionado');
let boxProjetoSelecionado = document.querySelectorAll('.box-projeto-selecionado');

let passarMouseProjetoSelecionado = (indice) => ProjetoSelecionado[indice].style.display = 'flex';
let passarMouseBoxProjetoSelecionado = (indice) => ProjetoSelecionado[indice].style.display = 'none';

for (let i = 0; i < boxProjetoSelecionado.length; i++) {
    boxProjetoSelecionado[i].addEventListener('mouseover', () => passarMouseProjetoSelecionado(i));
    ProjetoSelecionado[i].addEventListener('mouseout', () => passarMouseBoxProjetoSelecionado(i));
}

let arrayBotoes = [document.querySelector('#btn-ver-venda-veiculo'), document.querySelector('#btn-ver-consulta-cep'), document.querySelector('#btn-ver-app-imc'), document.querySelector('#btn-ver-quiz-paises'), document.querySelector('#btn-ver-projeto-pokemon')];

let botaoProjetoClicado = (indice) => {
    return arrayBotoes[indice].getAttribute('id');
}

for (let i = 0; i < arrayBotoes.length; i++) {
    arrayBotoes[i].addEventListener('click', () => {
        localStorage.setItem("botaoescolhido", botaoProjetoClicado(i));
    }
    );
}































