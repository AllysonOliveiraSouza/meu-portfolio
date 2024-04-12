let projetos = [
    { tituloProjeto: 'Venda de Veículo', srcVideo: 'https://www.youtube.com/embed/xXCR12jMSjo', descricaoProjeto: 'Esse projeto simula a venda de um veículo. São Preenchidos os campos do comprador, e ao final, é gerada uma venda, com as informações preenchidas', gitHub: 'https://github.com/AllysonOliveiraSouza', tecnologiasUsadas: ['Html', 'Css', 'Javascript', 'Php', 'MySql'], curiosidadesProjeto: 'Esse projeto foi desenvolvido em um processo seletivo para Programador Jr. Foi me passado um prazo de 48 horas para desenvolvê-lo, foi um grande desafio, pois tive que aprender a linguagem php nesse tempo, além, de vários outros conhecimentos que não tinha. Infelizmente não passei no processo, mas gostaram bastante do código desenvolvido.' },

    { tituloProjeto: 'Consulta cep', srcVideo: 'https://www.youtube.com/embed/WwjhG4-gYok', descricaoProjeto: 'Página simples, na qual é possível pesquisar um cep, e obter informações do endereço, foi utilizada a api do VIACEP', gitHub: 'https://github.com/AllysonOliveiraSouza/ConsultaCEP', tecnologiasUsadas: ['Html', 'Css', 'Javascript', 'Api Rest'], curiosidadesProjeto: 'Esse foi um projeto no qual pude entender de fato o que é Api Rest e como utilizá-la na prática' },

    { tituloProjeto: 'App Verificar IMC', srcVideo: 'https://www.youtube.com/embed/r1GmhhK5JWM', descricaoProjeto: 'Um aplicativo feito em react native, que realiza o cálculo de indíce de massa corporal', gitHub: 'https://github.com/AllysonOliveiraSouza/imc-mobile', tecnologiasUsadas: ['React Native', 'Node JS', 'Javascript'], curiosidadesProjeto: 'Esse foi o primeiro projeto de estudo na linguagem React Native' },

    { tituloProjeto: 'Quíz dos países', srcVideo: 'https://www.youtube.com/embed/xXCR12jMSjo', descricaoProjeto: 'Aplicação desktop de um jogo de perguntas e respostas, feita em C# e utilizando conceitos de orientação à objeto, e orientação à evento.', gitHub: 'https://github.com/AllysonOliveiraSouza/QuizDeBandeirasPaises', tecnologiasUsadas: ['C#', '.Net', 'POO'], curiosidadesProjeto: 'Esse projeto me capacitou entender melhor a linguagem C#' },

    { tituloProjeto: 'Projeto Pokémon', srcVideo: 'https://www.youtube.com/embed/xXCR12jMSjo', descricaoProjeto: 'Página interativa sobre pokémons, feito em html, css, e javascript', gitHub: 'https://github.com/AllysonOliveiraSouza/projeto-pokemon', tecnologiasUsadas: ['Html', 'Css', 'Javascript'], curiosidadesProjeto: 'Esse projeto foi a porta inicial para entender sobre programação web, ele literalmente me fez abrir a mente.' }
];

let botaoEscolhidoPaginaProjetos = localStorage.getItem("botaoescolhido");

let btnFecharInfoDetalhada = document.querySelectorAll('.btn-fechar-info-detalhada');
let boxWrapperInfoProjetos = document.querySelector('.box-wrapper-info-projetos');
let boxWrapperCuriosidades = document.querySelector('.box-wrapper-curiosidades');
let btnLinguagensUtilizadas = document.getElementById('btn-linguagens-utilizadas');
let linkBtnGithubProjeto = document.getElementById('link-btn-github-projeto');
let btnCuriosidadesProjeto = document.getElementById('btn-curiosidades-projeto');
let textoCuriosidade = document.querySelector('.texto-curiosidade');
let boxConteudoInfoDetalhada = document.querySelector('.box-conteudo-info-detalhada');

let alterarAtributosProjeto = (indice) => {
    let tituloProjetoDetalhado = document.getElementById('titulo-projeto-detalhado');
    let iframeVideoProjeto = document.getElementById('iframe-video-projeto');
    let projetoDetalhadoTextoDescricao = document.getElementById('projeto-detalhado-texto-descricao');

    tituloProjetoDetalhado.innerHTML = projetos[indice].tituloProjeto;
    iframeVideoProjeto.setAttribute('src', projetos[indice].srcVideo);
    projetoDetalhadoTextoDescricao.innerHTML = projetos[indice].descricaoProjeto;
    linkBtnGithubProjeto.setAttribute('href', projetos[indice].gitHub);
    textoCuriosidade.innerHTML = projetos[indice].curiosidadesProjeto;

    for (i = 0; i < projetos[indice].tecnologiasUsadas.length; i++) {
        boxConteudoInfoDetalhada.insertAdjacentHTML('afterbegin', `<div class="box-tecnologia">${projetos[indice].tecnologiasUsadas[i]}</div>`);
    }

}

let alterarElementosPagina = () => {
    if (botaoEscolhidoPaginaProjetos == 'btn-ver-consulta-cep') {
        alterarAtributosProjeto(1);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-app-imc') {
        alterarAtributosProjeto(2);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-quiz-paises') {
        alterarAtributosProjeto(3);
    } else if (botaoEscolhidoPaginaProjetos == 'btn-ver-projeto-pokemon') {
        alterarAtributosProjeto(4);
    } else {
        alterarAtributosProjeto(0);
    }
}

window.onload = function () {
    alterarElementosPagina();
}

let abrirInfoProjeto = (box) => {
    box.style.display = 'block';
}

let fecharInfoProjeto = (box) => {
    box.style.display = 'none';
}

for (i = 0; i < btnFecharInfoDetalhada.length; i++) {
    btnFecharInfoDetalhada[0].addEventListener('click', () => fecharInfoProjeto(boxWrapperInfoProjetos));
    btnFecharInfoDetalhada[1].addEventListener('click', () => fecharInfoProjeto(boxWrapperCuriosidades));
}

btnLinguagensUtilizadas.addEventListener('click', () => abrirInfoProjeto(boxWrapperInfoProjetos));
btnCuriosidadesProjeto.addEventListener('click', () => abrirInfoProjeto(boxWrapperCuriosidades));


