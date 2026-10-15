# Prompt inicial

Quero construir um novo site para a banda Lagum, o site atual é https://www.lagum.com.br/

Os arquivos base estão em index.html, style.css e script.js. Você deve construir utilizando HTML5, TailwindCSS e JavaScript. O site deve ser responsivo e funcionar em todos os dispositivos.

Quero que todo o site seja animado conforme o scroll e que mantenha a mesma identidade visual do último album: "As cores, as curvas e as dores do mundo", a cor primária é #214cb9 e será num tema branco. Também utilize as fontes "Bricolage Grotesque" para títulos e "Geist" para textos, ambas disponíveis no Google Fonts.

Quero que o site apresente a agenda completa de próximos shows que estão por vir, você pode pegar como referência a do site atual.

Também quero a apresentação todos os integrantes atuais: Pedro calais - Vocalista, Jorge - Guitarrista, Jorge - Baixista e Zani - Guitarrista, uma referência que gostei do estilo de apresentação é o https://inherited.band/ que vai aparecendo conforme o scroll. As fotos dos integrantes estão em img/integrantes.

Também quero uma seção destinada aos principais produtos da loja, atualmente em https://www.lojalagum.com.br/

Uma seção com o preview das músicas mais famosas, assim como um player simulando um disco de vinil aparece na parte inferior igual do site https://coveomusic.com/

Insira também o último lançamento da banda, com o projeto Lagum na varanda e a música 2026, o link do youtube é: https://www.youtube.com/watch?v=C0KrIX_oKOE

Uma seção com todos os contatos da banda.

Você pode pegar imagens da banda e integrantes na internet.

# Ajustes

1. Player do youtube
   O ultimo lançamento não está tocando o vídeo incorporado do youtube, corrija isso.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C0KrIX_oKOE?si=X71O6XPjTdeWpO-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2. Nome dos integrantes
   Na seção "A banda", no caso para nomes pequenos como o do Zani, fica escondido atrás da foto. Faça um texto igual na frente da imagem somente com uma borda branca e o fundo transparente, para poder visualizar a imagem e o nome. A animação do texto da frente deve ser igual a do texto atrás. Além disso, algumas letras da fonte, como "E", "D", "A" e "H" estão com bordas internas dos detalhes por causa da forma que a fonte foi construida. Corrija a estilização para ficar apenas com bordas externas, talvez utilizando um box-shadow. Algumas letras maiores estão ficando cortadas também, como o "O", "G" e "A" por causa da classe .mascara. Devido a essas alterações, os nomes ficarão colados, então adicione um gap entre as letras para conseguir diferenciar as letras.

3. Animação da logo aparecendo o lado "escondido"
   A animação da logo separada no hero está mostrando o outro lado. Fiz a separação dos SVGs em /img/logo/lag.svg e /img/logo/um.svg para fazer a animação utilizando duas imagens separadas e não aparecer a outra parte.

4. Animação do player de vinil
   Corrija a animação do player de vinil para que ao pausar a musica, ele pare de girar mantendo a posição atual e ao retomar continue girando de onde parou, e não reinicie a animação do zero. Além disso, se o usuário mexer no slider do tempo o vinil deve girar de acordo com o lado que o usuário estiver mexendo, ou seja, se o usuário arrastar para frente, o vinil deve girar para frente e se arrastar para trás, o vinil deve girar para trás.

5. Galeria de fotos
   Quero fazer uma animação de galeria de fotos semelhante ao que tem no site https://coveomusic.com/ na section .discographyHeader, ao mover o cursor do mouse, novas fotos vão aparecendo com uma animação suave. Para isso, insira uma nova seção de galeria.

Já pré-selecionei as imagens, e estão todas em [@galeria](file:///D:/projects/courses/fiap/1esp-26/15%20-%20lagum/img/galeria/), ao total são 75 imagens, todas no formato .jpg

6. Refinamento com o impeccable
   /impeccable critique a landing page.

7. Ajuste na galeria
   Corrija a seção de "Galeria", para evitar imagens atrás dos textos, então quando o cursor estiver sob os textos não deve gerar as imagens atrás.

8. Identidade visual da turnê "Lagum em todo lugar"
   Quero mudar a identidade visual do site para seguir o estilo de cores da nova turnê, a "Lagum em todo lugar", com as cores #261910, #abdc2c, #f9fae5 e #8f3207, siga o exemplo da implementação do site deles https://www.lagum.com.br/, também destaque as datas que fazem parte da turnê, assim como é feito no site original.

A logo da turnê está em [@em-todo-lugar.svg](img/logo/em-todo-lugar.svg). 9. Novos produtos da loja
Entraram novos itens na loja também, estão em https://www.lojalagum.com.br/

Coloque aqui os seguintes destaques da loja:
CAMISETA BOM DEMAIS | BRANCA - OVERSIZED
CAMISETA LAGUM EM TODO LUGAR | VERDE - OVERSIZED
BONÉ PATOS BONÉ PATOS
GARRAFA TÉRMICA LAGUM | 1L
ANEL DE PRATA ILHA " SEJA O QUE EU QUISER "
CD " AS CORES, AS CURVAS E AS DORES DO MUNDO "
CHAVEIRO GAITA
CHAVEIRO A ILHA
CAMISETA AS CORES, AS CURVAS E AS DORES DO MUNDO | CINZA - BOXY
CAMISETA LAGUM COMPANY | OFFWHITE - BOXY
CAMISETA HABITE-SE | PRETA - BOXY
CAMISETA SEJE MANEIRO | BRANCA - BOXY

10. Lagum duplicado no hero
    Na seção do hero, a palavra "Lagum" ficou duplicada, remova a palavra "Lagum" da logo da turnê nova para ficar apenas uma vez no hero.

11. Ordem das seções
    Altere a ordem de prioridade das seções do site para que mais fazem sentido e mova a seção "Na varanda em BH" para depois da loja.
