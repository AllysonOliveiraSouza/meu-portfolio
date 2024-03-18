var ProjetoSelecionado = document.querySelectorAll('.projeto-selecionado');
var boxProjetoSelecionado = document.querySelectorAll('.box-projeto-selecionado');

function passarMouseProjetoSelecionado(indice) {
    ProjetoSelecionado[indice].style.display = 'flex';

}

function passarMouseBoxProjetoSelecionado(indice) {
    ProjetoSelecionado[indice].style.display = 'none';
}


for (let i = 0; i < boxProjetoSelecionado.length; i++) {
    boxProjetoSelecionado[i].addEventListener('mouseover', function () {
        passarMouseProjetoSelecionado(i);
    }
    );

    ProjetoSelecionado[i].addEventListener('mouseout', function () {
        passarMouseBoxProjetoSelecionado(i);
    });
}















