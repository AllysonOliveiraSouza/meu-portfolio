let projetos = [{ tituloProjeto: 'Venda de Veículo', srcVideo: 'https://www.youtube.com/embed/xXCR12jMSjo', descricaoProjeto: 'Esse projeto simula a venda de um veículo. São Preenchidos os campos do comprador, e ao final, é gerada uma venda, com as informações preenchidas' },
{ tituloProjeto: 'Consulta cep', srcVideo: 'https://www.youtube.com/embed/WwjhG4-gYok', descricaoProjeto: 'Página simples, na qual é possível pesquisar um cep, e obter informações do endereço, foi utilizada a api do VIACEP' },
{ tituloProjeto: 'App Verificar IMC', srcVideo: 'https://www.youtube.com/embed/r1GmhhK5JWM', descricaoProjeto: 'Um aplicativo feito em react native, que realiza o cálculo de indíce de massa corporal' },
{ tituloProjeto: 'Quíz dos países', srcVideo: 'https://www.youtube.com/embed/xXCR12jMSjo', descricaoProjeto: 'Aplicação desktop de um jogo de perguntas e respostas, feita em C# e utilizando conceitos de orientação à objeto, e orientação à evento.' },
{ tituloProjeto: 'Projeto Pokémon', srcVideo: 'https://www.youtube.com/embed/xXCR12jMSjo', descricaoProjeto: 'Página interativa sobre pokémons, feito em html, css, e javascript' }
];

let botaoEscolhidoPaginaProjetos = localStorage.getItem("botaoescolhido");

let alterarAtributosProjeto = (indice) => {
    let tituloProjetoDetalhado = document.getElementById('titulo-projeto-detalhado');
    let iframeVideoProjeto = document.getElementById('iframe-video-projeto');
    let projetoDetalhadoTextoDescricao = document.getElementById('projeto-detalhado-texto-descricao');

    tituloProjetoDetalhado.innerHTML = projetos[indice].tituloProjeto;
    iframeVideoProjeto.setAttribute('src', projetos[indice].srcVideo);
    projetoDetalhadoTextoDescricao.innerHTML = projetos[indice].descricaoProjeto;
}

let alterarElementosPagina = () => {
    if (botaoEscolhidoPaginaProjetos == 'btn-ver-venda-veiculo') {
        alterarAtributosProjeto(0);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-consulta-cep') {
        alterarAtributosProjeto(1);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-app-imc') {
        alterarAtributosProjeto(2);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-quiz-paises') {
        alterarAtributosProjeto(3);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-projeto-pokemon') {
        alterarAtributosProjeto(4);
    }
}

window.onload = function () {
    alterarElementosPagina();
}


