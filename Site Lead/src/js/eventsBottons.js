let programacao = document.getElementById('btn-Programacao').addEventListener('click', () => {
    title.innerHTML= 'PROGRAMAÇÃO' //Altere aqui o titulo (sempre dentro das 'aspas')
    subtitle.innerHTML= 'Programação ou desenvolvimento web é o nome que damos ao processo de planejamento, criação, teste e manutenção de aplicações que podem, ou não, serem desenvolvidas para internet. Este processo ocorre através da linguagem de programação, uma espécie de idioma técnico somente reconhecido por máquinas que possibilita o uso e o funcionamento destas aplicações.' //Altere aqui a descrição
    img.innerHTML = '<img class="imagens-exibicao" src="images/time01.jpg" alt="">' //Altere aqui o caminho da imagem
    //imagem só pra ver que tá funcionando
})
let marketing = document.getElementById('btn-Marketing').addEventListener('click', () => {
    title.innerHTML= 'MARKETING' //Altere aqui o titulo (sempre dentro das 'aspas')
    subtitle.innerHTML= 'Estratégias de marketing usando design são a chave para destacar e diferenciar sua empresa no mercado Quando se fala em design e estratégias de marketing, muitas pessoas pensam em anúncios de publicidade ou em logotipos de empresas. Na verdade, essas são apenas algumas das formas de usar o design para turbinar o desempenho de seu negócio.'  //Altere aqui a descrição
    img.innerHTML = '<img class="imagens-exibicao" src="images/time02.jpeg" alt="">' //Altere aqui o caminho da imagem
    //imagem só pra ver que tá funcionando
})
let producao = document.getElementById('btn-Producao').addEventListener('click', () => {
    title.innerHTML= 'PRODUÇÃO' //Altere aqui o titulo (sempre dentro das 'aspas')
    subtitle.innerHTML= 'A produção de conteúdo é o ato de criar textos, vídeos, imagens, áudio, infográficos ou quaisquer outros meios em que pode ser veiculada uma informação útil e que gera valor ao público que irá consumi-la.' //Altere aqui a descrição
    img.innerHTML = '<img class="imagens-exibicao" src="images/time03.jpeg" alt="">' //Altere aqui o caminho da imagem
    //imagem só pra ver que tá funcionando
})

let title =  document.getElementById('title-botton')
let subtitle =  document.getElementById('subtitle-botton')
let img = document.getElementById('imge')
