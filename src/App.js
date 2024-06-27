import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [iframeVisible, setIframeVisible] = useState(true);
  const [page, setPage] = useState({
    visible_section: "flex-1",
    visible_menu: "hidden",
    background_btn: "bg-sky-700 text-white",
  });
  const [selectedText, setSelectedText] = useState("");
  const [visibleButton, setVisibleButton] = useState("fixed");

  const [isHome, setIsHome] = useState({
    display: "block",
    bg_btn: "bg-gray-200",
  });
  const [isCronograma, setIsCronograma] = useState({
    display: "hidden",
    bg_btn: "white",
  });
  const [isPlayer, setIsPlayer] = useState({
    display: "hidden",
    bg_btn: "white",
  });
  const [isPoems, setIsPoems] = useState({
    display: "hidden",
    bg_btn: "white",
  });
  const [isLearnPage, setLearnPage] = useState({
    display: "hidden",
  });

  const dataListCronograma = [
    {
      id: 1,
      title: "<b>[19:00-19:03]</b> ABERTURA DO EVENTO",
      description:
        "Apresentação incial do Ler e Cantar 2024",
      svgPath: "./megafone.svg",
      borderColor: "slate-700",
    },
    {
      id: 2,
      title: "<b>[19:03-19:07]</b> DANÇA - ABERTURA DAS APRESENTAÇÕES",
      description: "Uma coreografia em grupo que ressalta o valor cultural do Brasil",
      svgPath: "./dance.svg",
      borderColor: "rose-600",
    },
    {
      id: 3,
      title: "<b>[19:15-19:30]</b> PEÇA - ERAMOS SEIS",
      description: "<p><b>Teatro:</b> A peça reproduz a obra de <b>'Eramos Seis'</b>, um romance que retrata a vida de uma família paulista ao longo de várias décadas, destacando os desafios enfrentados pela protagonista, Dona Lola, na criação de seus filhos</p>",
      svgPath: "./house.svg",
      borderColor: "blue-800",
    },
    {
      id: 4,
      title: "<b>[19:33-19:36]</b> MOCHILEIROS - REGIÃO SUL",
      description: "<p><b>Ato I:</b> Bla bla bla era assim assim assado.</p>",
      svgPath: "./backpack.svg",
      borderColor: "green-600",
    },
    {
      id: 5,
      title: "<b>[19:41-19:45]</b> MÚSICAS - REGIÃO SUL",
      description: "<p>O acervo contará com músicas que enaltecem a cultura da região Sul, sendo elas: <b>No Fundo da Grota; Tranco veio Fandangueiro; Eu Sou o Sul</b></p>",
      svgPath: "./music.svg",
      borderColor: "purple-700",
    },
    {
      id: 6,
      title: "<b>[19:48-19:51]</b> MOCHILEIROS - REGIÃO SUDESTE",
      description: "<p><b>Ato II:</b> Bla bla bla era assim assim assado.</p>",
      svgPath: "./backpack.svg",
      borderColor: "green-600",
    },
    {
      id: 7,
      title: "<b>[19:56-20:00]</b> MÚSICAS - REGIÃO SUDESTE",
      description: "<p>O acervo contará com músicas que enaltecem a cultura da região Sudeste, sendo elas: <b>Não Deixe o Samba Morrer; Aquarela</b></p>",
      svgPath: "./music.svg",
      borderColor: "purple-700",
    },
    {
      id: 8,
      title: "<b>[20:03-20:06]</b> MOCHILEIROS - REGIÃO CENTRO-OESTE",
      description: "<p><b>Ato III:</b> Bla bla bla era assim assim assado.</p>",
      svgPath: "./backpack.svg",
      borderColor: "green-600",
    },
    {
      id: 9,
      title: "<b>[20:11-20:15]</b> MÚSICAS - REGIÃO CENTRO-OESTE",
      description: "<p>O acervo contará com músicas que enaltecem a cultura da região Centro-Oeste, sendo elas: <b>Tocando em Frente; Pagode em Brasília</b></p>",
      svgPath: "./music.svg",
      borderColor: "purple-700",
    },
    {
      id: 10,
      title: "<b>[20:18-20:21]</b> MOCHILEIROS - REGIÃO NORTE",
      description: "<p><b>Ato IV:</b> Bla bla bla era assim assim assado.</p>",
      svgPath: "./backpack.svg",
      borderColor: "green-600",
    },
    {
      id: 11,
      title: "<b>[20:26-20:30]</b> MÚSICA - REGIÃO NORTE",
      description: "<p>O concerto contará com uma música que enaltece a cultura da região Norte, sendo ela: <b>Vermelho</b></p>",
      svgPath: "./music.svg",
      borderColor: "purple-700",
    },
    {
      id: 12,
      title: "<b>[20:35-20:40]</b> MOCHILEIROS - REGIÃO NORDESTE",
      description: "<p><b>Ato V:</b> Bla bla bla era assim assim assado.</p>",
      svgPath: "./backpack.svg",
      borderColor: "green-600",
    },
    {
      id: 13,
      title: "<b>[20:45-21:00]</b> PEÇA - O AUTO DA COMPADECIDA",
      description: "<p><b>Teatro:</b> A peça reproduz a obra de <b>'O Auto da Compadecida'</b>, uma peça que satiriza a vida no sertão nordestino através das peripécias de João Grilo e Chicó, misturando humor, crítica social e elementos religiosos</p>",
      svgPath: "./pidgeon.svg",
      borderColor: "blue-800",
    },
    {
      id: 14,
      title: "<b>[21:00-21:04]</b> MÚSICAS - REGIÃO NORDESTE",
      description: "<p>O acervo contará com músicas que enaltecem a cultura da região Nordestina, sendo elas: <b>Xote de alegrias; Tropicana</b></p>",
      svgPath: "./music.svg",
      borderColor: "purple-700",
    },
    {
      id: 15,
      title: "<b>[21:09-21:13]</b> DANÇA - ENCERRAMENTO DAS APRESENTAÇÕES I",
      description: "<p>Uma coreografia ao corpo de <b>'Amarelo e Azul e Branco!'</b></p>",
      svgPath: "./dance.svg",
      borderColor: "rose-600",
    },
    {
    id: 16,
      title: "<b>[21:26-21:29]</b> DANÇA - ENCERRAMENTO DAS APRESENTAÇÕES II",
      description: "<p>Uma coreografia ao corpo de <b>'Você Chegou!'</b></p>",
      svgPath: "./dance.svg",
      borderColor: "rose-600",
    },
    {
      id: 17,
        title: "<p className='font-semibold text-4xl tracking-wider'>HOMENAGEM FINAL</b>",
        description: "Um momento de homenagem aos terceiros anos de nossa Etec que este ano estarão concluindo seu ETIM",
        svgPath: "./star.svg",
        borderColor: "yellow-400",
      },
    
  ];
  const dataListEntrevistas = [
    {
      id: 1,
      src: "6q3gH62swg8?si=D3XWjQynZj-H8nFY",
      title: "Entrevista - aluna Ana Laura",
      description: "A entrevista conta com perguntas e respostas, com a aluna convidada Ana Laura do 3° ETIM Administração que conta um pouco sobre as atividades da equipe de Jornal do Ler e Cantar.",
    },
    {
      id: 2,
      src: "NLA4lnlzvt4?si=XO46K7FaK7GTLe-4",
      title: "Entrevista - aluno Bruno",
      description: "A entrevista conta com perguntas e respostas, com os aluno convidado Bruno do 2° ETIM Mecatrônica, o qual está participando da criação do cenário, que será usado durante peças do evento.",
    },
    {
      id: 3,
      src: "2NoOdSZ2hQ4?si=wu2yRHyHYrzeZmRp",
      title: "Entrevista - professora Joice",
      description: "A entrevista conta com perguntas e respostas feitas a professora Joice, professora de Inglês de nossa escola, a mesma atua no projeto 'Temperos do Brasil' o qual estará sendo exposto em nosso evento.",
    },
    {
      id: 4, 
      src: "uMTWNKUExoM?si=OEcSAiddd4e9YKHY",
      title: "Entrevista- alunos Kelvin e Laís",
      description: "A entrevista conta com perguntas e respostas, com os alunos convidados Kelvin e Laís do 2° ETIM Mecatrônica, os quais estão participando do roteiro das peças do evento, e contam um pouco mais sobre o que estão achando do projeto.",
    },
  {
      id: 5,
      src: "-4XkMRW8REM?si=ZrmT6ncPinGdI8m7", 
      title: "Entrevista - aluno Murilo",
      description: "A entrevista conta com perguntas e respostas, com o aluno convidado Murilo Fernandes do 2° ETIM Mecatrônica que está participando no projeto de poesias de nosso nosso evento.",
    },
  {
      id: 6, 
      src: "iP5sY4L0fa8?si=Zm4K4EZ5ii0_QbnV",
      title: "Entrevista - aluno João Volpi",
      description: "A entrevista conta com perguntas e respostas ao aluno João Volpi do 3° ETIM Mecatrônica, o mesmo está na atuação do Teatro de nosso evento.",
    },
    
  ];
  const dataListProducoes = [
    {
      id: 1,
      src: "Lw4gX1zA7NU?si=4fd-tgNXe-B3gK2M",
      title: "Origem do MPB brasileiro",
      description: "Vídeo documentário que descreve a trajetória do estilo musical MPB e como sua história se desenvolveu em nosso país.",
    },
    {
      id: 2,
      src: "A_55ZuBf_qg?si=UyalmruEJXmWHmGx",
      title: "Aqui é o Brasil - Região Sudeste",
      description: "Um vídeo abordando curiosidades, cultura, fauna, história e gastronomia da região.",
    },
    {
      id: 3,
      src: "py8JHVRWGXw?si=f5vIC0VB9STF2zwy",
      title: "O país do futebol!",
      description: "O vídeo ressalta as conquistas e marcos feitos pela nossa seleção, e como o futebol se estabeleceu e se fixou a cultura e identidade nacional.",
    },
    {
      id: 4,
      src: "0ZkaG9R76u4?si=N-lZdZR-ivhdoNbS",
      title: "Cultura do folclore brasileiro",
      description: "Vídeo narrando as características das lendas existentes, que se perpetuaram por todo o território do nosso país.",
    },
    {
      id: 5,
      src: "UoBNxKYjQaU?si=7HOZRbXSGFS0W9Id",
      title: "A identidade do Brasil",
      description: "Vídeo descrevendo os diferentes estados existentes em nosso país, e como eles constroem a nossa cultura e realidade.",
    },
  ];
  const dataListPoemas = [
    {
      id: 1,
      title: "Ó, meu país",
      author: "Caio, Maria Clara, Maria Laura e Rayca Souza",
      description:
        "<p class='text-xl'>Meu país tropical <br>De vegetação vasta e natural <br>Beleza fora do normal</p>" +
        "<p class='text-xl'>Ó, meu país, <br>Que tanto me diz <br>Expressa tuas cores <br>E todos os seus valores</p>" +
        "<p class='text-xl'>Me mostra tua cultura <br>De tantas bravuras <br>És tu, Brasil, <br>Terra adorada <br>Em tantas regiões é tão amada</p>" +
        "<p class='text-xl'>Um semblante de alegria no olhar <br>Do seu povo nunca te faz chorar <br>Azul como teu mar <br>Águas claras são seu lar</p>" +
        "<p class='text-xl'>Amarelo como teu ouro <br>Teu solo, teu tesouro <br>País de prosperidade, <br>De carisma e de felicidade</p>" +
        "<p class='text-xl'>Amazônia sagrada <br>Tão querida e desejada <br>Minha mãe santa protege nossa nação <br>E aquece nosso coração</p>",
    },
    {
      id: 2,
      title: "Nordeste",
      author: "Ana Julia da Silva",
      description:
        "<p class='text-xl'>O dia começa cedo por lá<br> A noite foi longa, dona Maria nem conseguiu o zoío pregá<br> Lembrando do tempo em que foi menina moça e arrudiava a roça<br> Com a bacia na cabeça, sob o sol escaldante</p> <p class='text-xl'>Ela pouco sorria, mas sempre ouvia Luiz Gonzaga<br> Porque tamanha judiação? Eu te asseguro, não chore não, viu?<br> Que eu voltarei, viu, meu coração<br> De repente via a alegria das crianças jogando chimbra ou futebol no campo areioso</p> <p class='text-xl'>Apesar do aperreio seu João nunca foi cabra mole<br> Nunca deixou faltar alimento na mesa<br> Depois de véio veio para São Paulo<br> Descarregou as malas e para cortar o fitilho vermelho<br> Arrebatou uma peixeira da cintura<br> (eita, bixiga! Guarde isso, guarde! Se não o senhor se lasca todinho)</p> <p class='text-xl'>Sardinha sargada, buxada, farinha di mandioca, cuscuz, lanchinho, bolacha sete capas.<br> Tudo isso na feira de Arapiraca</p> <p class='text-xl'>Ah, Alagoas, mãe de tantos filhos com belas praias que prendem a atenção e causam emoção<br> Terra da vó Maria</p>",
    },
    {
      id: 3,
      title: "Sem título",
      author: "Vinícius e Cauã",
      description:
        "<p class='text-xl'> Nosso país <br/> Com nossos campos <br/> E nossas mais lindas flores <br/> Com nosso céu de azul anil </p> <p class='text-xl'> Com o verde da nossa bandeira <br/> E o dourado das nossas estrelas <br/> Com as nossas mais diversas cores <br/> Fazendo uma linda aquarela </p> <p class='text-xl'> Esse é o nosso país <br/> Com a mais bela paleta <br/> Dentre todas as bandeiras </p>",
    },
    {
      id: 4,
      title: "Sem título",
      author: "Thaís e Miguel",
      description:
        "<p class='text-xl'> Nas terras vastas do Brasil se entrelaçam <br/> Cores, sons e danças que nos abraçam <br/> Da Amazônia ao Sul, um mosaico de beleza <br/> Onde a cultura floresce em pura grandeza </p> <p class='text-xl'> Nas festas populares ao brilho do carnaval <br/> Um mar de alegria, um festim sem igual </p> <p class='text-xl'> A diversidade que nos une e nos inspira <br/> O Brasil resplandece em cada linda lira </p> <p class='text-xl'> Pelas suas adversidades releva <br/> Sabores, cheiros, histórias que encantam a tela <br/> Na arte, na literatura, na poesia a ecoar <br/> O Brasil se mostra um local singular <br/> Que traz desde Iracema um lugar peculiar </p> <p class='text-xl'> E nelas há palmeiras onde canta o sabiá <br/> Vistas lindas é bom ressaltar </p> <p class='text-xl'> Entre matas e cidades nasce a identidade <br/> De um povo que celebra sua vasta variedade </p> <p class='text-xl'> Comércio brasileiro é o que mais enriquece <br/> A natureza é nossa maior riqueza </p> <p class='text-xl'> Mas e o valor que damos perante a ela? <br/> Onde está nossa referência? <br/> É apenas coincidência! <br/> Meu Deus, onde está nossa Passárgada? </p> <p class='text-xl'> Vou-me embora para Passárgada <br/> O que será que vou encontrar? <br/> Será que vou encontrar o Brasil ou outro lugar? </p>",
    },
    {
      id: 5,
      title: "Preconceito Cultural no Brasil",
      author: "Vitória Masselco, Higor Fernandes, Ana Glória Pires",
      description:
        "<p class='text-xl'>Brasil de cores e sons mil,<br> Onde o preconceito ainda é vil.<br> Culturas se encontram, se colocam no ar,<br> Mas o olhar torto insiste em julgar.</p> <p class='text-xl'>Indígenas, pretos, suas vozes caladas,<br> Histórias ricas, tantas vezes negada.<br> Samba e maracatu, nossa identidade<br> Muitas vezes vistos com dualidade.</p> <p class='text-xl'>Mas na diversidade, a força brilha,<br> E no respeito, a esperança trilha.<br> Que o preconceito se desfaça, enfim,<br> E a riqueza cultural floresça sem fim.</p>",
    },
    {
      id: 6,
      title: "Máscaras da Ignorância",
      author: "Maria Laura de Castro",
      description:
        "<p class='text-xl'>Entre as sombras do desconhecido,<br> Se esconde o preconceito arraigado,<br> Máscaras que ocultam a verdade,<br> E aprisionam a alma na falsidade.</p> <p class='text-xl'>Culturas diversas, cores e sabores,<br> Tecem o tapete dos nossos valores,<br> Mas onde deveria haver celebração,<br> Às vezes reina a estranha exclusão.</p> <p class='text-xl'>No riso de crianças de diferentes chãos,<br> Na dança dos sonhos de mil corações,<br> Há uma riqueza que não se mede em ouro,<br> Mas em laços de amor que rompem o muro.</p> <p class='text-xl'>Desvendar o outro é um ato de coragem.<br> Romper barreiras, transcender a miragem,<br> É no encontro das diferenças que aprendemos,<br> Que somos todos humanos, todos serenos.</p> <p class='text-xl'>Que cada verso desta poesia ecoe a verdade,<br> Que o preconceito cultural é vão na idade,<br> E que na diversidade está a nossa riqueza.<br> Na união das culturas, a nossa fortaleza.</p>",
    },
    {
      id: 7,
      title: "Cicatrizes Culturais",
      author: "Maria Laura de Castro",
      description:
        "<p class='text-xl'>Entre danças e ritmos que ecoam, histórias não contadas,<br> Lágrimas rolam, raízes marcadas pela dor e preconceito, em<br> Cada cultura um grito por respeito.</p> <p class='text-xl'>Pelo que carrega séculos de dor, mas também a beleza<br> De um amor sem fim, na diversidade, a verdadeira humanidade,<br> Celebrando cada cultura com igualdade.</p>",
    },
    {
      id: 8,
      title: "Encantos do Brasil",
      author: "Guilherme Generiko, Matheus Inácio e Victor Hugo",
      description:
        "<p class='text-xl'>Teu coração, Brasil, pulsa amor profundo,<br>Em teus braços, encontro um lar fecundo.<br>Nas verdes matas, teu abraço silente,<br>Ecoa a canção de um povo ardente.</p><p class='text-xl'>No Amazonas, o rio serpenteia,<br>Beijo doce entre a floresta e a areia.<br>Encantos ribeirinhos, amor a desaguar,<br>Em cada sorriso, um desejo a vibrar.</p><p class='text-xl'>Nordeste, terra de sol e paixão,<br>Teu mar sussurra versos ao coração.<br>Nas noites de lua, danço com teu gingado,<br>Axé que me envolve, amor encantado.</p><p class='text-xl'>Centro-oeste, vastidão sem fim,<br>Em teus campos, brota o amor em mim.<br>Cerrado florescendo, paixão a renovar,<br>Cada entardecer, um beijo a soprar.</p><p class='text-xl'>Sudeste vibrante, cidade e mar,<br>Teu ritmo é chama a nos embalar.<br>No samba, encontro o amor verdadeiro,<br>Rio e São Paulo, sentimentos inteiros.</p><p class='text-xl'>Sul de encantos, sob céus tão azuis,<br>Teus vales e serras, o amor traduz.<br>Chimarrão compartilhado, aconchego e calor,<br>Nos pampas, o vento murmura nosso amor.</p><p class='text-xl'>Brasil, teu nome é melodia no peito,<br>Em cada canto, um romance perfeito.<br>Culturas que se entrelaçam, dança sem fim,<br>Te amo em cada detalhe, em cada jardim.</p>",
    },
    {
      id: 9,
      title: "Cultura",
      author: "Matheus Gonzaga",
      description:
        "<p class='text-xl'>Que lindo povo<br> Com uma linda cultura<br> Tudo isso se aprende com leitura<br> Mas nada disso é novo</p> <p class='text-xl'>Não dar valor ao que tem<br> Outros povos gostam<br> Na internet até postam<br> Hora de se vangloriar, pois isso lhe convém</p> <p class='text-xl'>Sua cultura, por muitos não valorizada<br> Sua visão de mundo é fechada<br> Parecem vira-lata<br> Só esperando para dar a pata</p> <p class='text-xl'>Influenciado por todos<br> Continuem, isso é alegria<br> Peguem os rodos<br> Hora de secar essa hipocrisia.</p>",
    },
    {
      id: 10,
      title: "Mudança",
      author: "Gabriel de Oliveira",
      description:
        "<p class='text-xl'>Brasil, um país extenso<br> Repleto de povos e culturas<br> Seu passado é hoje refletido<br> Dor e sofrimento dos aqui nascidos</p> <p class='text-xl'>Diferentes crenças e ideias<br> Condenado à mudança<br> Esquecido e sem esperança</p> <p class='text-xl'>Explorados, condenados<br> Deixados no passado<br> Terra que um dia reinaram<br> Descoberta a Ilha de Vera Cruz</p> <p class='text-xl'>Hoje exaltados<br> Preservados e notados<br> Ainda assim, de lado deixados</p> <p class='text-xl'>Seu nome é esquecido<br> Um povo sem voz e direitos<br> Chamado de “índios” por engano<br> Originais detidos por nós estrangeiros</p>",
    },
    {
      id: 11,
      title: "No Sul",
      author: "Leandro e Léo",
      description:
        "<p class='text-xl'>No Sul<br> Terra amiga, onde o vento<br> A vida abriga<br> Pampa, vento<br> Verde abrigo<br> Cada canto<br> Um amigo</p> <p class='text-xl'>Chimarrão, tradição<br> Puro desejo<br> Churrasco ardente, sabor intenso<br> Na fumaça um bom consenso</p> <p class='text-xl'>Mesa farta<br> Comida e bebida<br> Celebração alegria vida</p> <p class='text-xl'>Sul querido, solo amado, culto à vida lado a lado</p>",
    },
    {
      id: 12,
      title: "Sem título",
      author: "Vinícius",
      description:
        "<p class='text-xl'>Brasil<br> Nosso país<br> Uma linda mistura de cores<br> Desbotando aos poucos<br> Como um pulmão tão verde<br> Se torna cinza?</p> <p class='text-xl'>E das nossas praias douradas<br> Querem tirar o brilho<br> Será que nosso Cristo zelaria por nós?<br> Ou em nossas festas de junho<br> Queimaremos mais alguém</p> <p class='text-xl'>Então adeus céu azul<br> Pois nesse mundo em descomunhão<br> Às estrelas não posso chegar<br> E os meus orixás, não posso encontrar</p>",
    },
    {
      id: 13,
      title: "Regiões do Brasil",
      author: "Daniel",
      description:
        "<p class='text-xl'> Em cada canto do Brasil, um encanto <br>Rios, montanhas, mares em tom de canto <br>Culturas diversas, mosaico vibrante <br>De um povo que brilha, de alma gigante </p>" +
        "<p class='text-xl'> No norte, a Amazônia, verde imensidão <br>Lendas e festas, ritmo do coração <br>O Boi-Bumbá dança, vida a pulsar <br>No Folclore encantado, histórias a contar </p>" +
        "<p class='text-xl'> Nordeste, terra de sol e cor <br>Frevo, maracatu, carnaval e amor <br>Culinária rica, de sabor sem fim <br>Cacau, cuscuz, caruru, axé e tamborim </p>" +
        "<p class='text-xl'> O Centro-Oeste é festa no cerrado <br>Festas juninas, o sertão celebrado <br>Pantanal reflete o céu estrelado <br>Boiadeiros, peões, folia do reinado </p>" +
        "<p class='text-xl'> No Sudeste, modernidade e tradição <br>Samba, bossa nova, cultura em profusão <br>Minas Gerais, com sua história e pão de queijo <br>São Paulo e Rio, no ritmo do desejo </p>" +
        "<p class='text-xl'> No Sul, tradições que nos abraçam <br>Chimarrão e dança, as raízes que enlaçam <br>Festas de colheita, sotaque de chão <br>Culturas gaúchas, catarinense, paranaense na mão </p>",
    },
    {
      id: 14,
      title: "Regiões do Brasil",
      author: "Evaristo, João Luís e Luiz Felipe",
      description:
        "<p class='text-xl'> Nas terras de sol e mar, <br> Canta o povo a festejar, <br> Com danças e cores mil, <br> Celebrações do Brasil. </p>" +
        "<p class='text-xl'> O Bumba meu boi do Maranhão, <br> Mistura fé dança e canção, <br> O povo canta com devoção, <br> Em noites de pura tradição. </p>" +
        "<p class='text-xl'> No Rio o carnaval reluz, <br> Um mar de gente que seduz, <br> Com sambas e fantasias brilhantes, <br> No ritmo de batuques vibrantes. </p>" +
        "<p class='text-xl'> Cada conto uma celebração, <br> Cada festa um coração, <br> Nas raízes do Brasil, o tesouro, <br> A cultura em festa, nosso maior ouro. </p>",
    },
    {
      id: 15,
      title: "Opressão dos povos indígenas e a queima de suas terras",
      author: "Lara Sterzk",
      description:
        "<p class='text-xl'> Terra sagrada <br> Que estou a pisar <br> Mata divina, que está a queimar <br> Terra vazia que estão a matar <br> O templo dos povos, está a cair <br> A casa deles, está a sumir </p>" +
        "<p class='text-xl'> É tirado o que a eles pertence <br> Lhes é tirado até o que pensem <br> Em fogo e chamas vão lhes calar <br> Nas cinzas esquecidas as memórias o vento irá levar <br> Para a escuridão suas histórias guardar </p>" +
        "<p class='text-xl'> Frutos de uma cruel opressão <br> Vítimas de uma impiedosa execução <br> E sem as leis vão ter que lutar <br> Pois a justiça em suas tribos não vai chegar </p>",
    },
    {
      id: 16,
      title: "Brasil Bandeira",
      author: "Maria Fernanda da Silva Serrato e Mariana Lucato",
      description:
        "<p class='text-xl'> Brasil, o país onde a beleza <br> Se esconde nos vastos rios, <br> Onde as cores nos mostram <br> Sua verdadeira peculiaridade. </p>" +
        "<p class='text-xl'> Verde são as matas, <br> Amarelo riqueza, <br> Branco é a paz, <br> Azul, céu e estrelas. </p>" +
        "<p class='text-xl'> Nossos bosques têm mais vida, <br> Em teu seio mais amores. <br> Nas exportações, alma sofrida, <br> Em meus olhos só há dores. </p>" +
        "<p class='text-xl'> Ó pátria amada, idolatrada, <br> Teus filhos gritam “nos salve!”, <br> Suas faces pedem socorro, <br> E em tua máscara não há verdade. </p>" +
        "<p class='text-xl'> Em nossos corações, <br> Sede de ser honrado <br> E nosso povo clama: <br> “paz no futuro, <br> E glória no passado”. </p>",
    },
    {
      id: 17,
      title: "Brasil, terra de encanto ou será que não?",
      author: "Ana Heloísa",
      description:
        "<p class='text-xl'> <b>Brasil, terra de encanto ou será que não? </b> </p>" +
        "<p class='text-xl'> Brasil, terra de encanto e beleza sem igual, <br> Das praias douradas ao verde do sertão, <br> Tua cultura é rica, nossa inspiração, nossas raízes, <br> Histórias que nos lembram da liberdade e soberania do nosso Brasil, nossa terra de encanto. </p>" +
        "<p class='text-xl'> Como é bela nossa Pátria, tem riquezas e belezas mil, nas suas matas minha gente é o Brasil. </p>" +
        "<p class='text-xl'> Mas oh, pobre Indiozinho... <br> Indiozinho nu na mata <br> Arco e flecha em sua mão <br> Foi caçar seu alimento, indiozinho brincalhão <br> Indiozinho tão valente foi na vida se embrenhar <br> Curioso esse menino indiozinho a brincar </p>" +
        "<p class='text-xl'> Indiozinho ficou triste <br> Quando viu tudo a queimar <br> Sua tribo, sentiu fome <br> Vi um índio a chorar. </p>",
    },
    {
      id: 18,
      title: "Ainda que tarde",
      author: "Arthur Santana",
      description:
        "<p class='text-xl'> Trouxera paz ao povo Tupi <br> de repente, sumira daqui <br> O português a tornou nada <br> fora trocada por facas, machados e espelhos <br> meros aparelhos que alimentaram o colono </p>" +
        "<p class='text-xl'> Escondeu-se <br> duzentos anos à sombra <br> Não vira o homem escravizar o homem, <br> sonhando que cortem, <br> as amarras da senzala </p>" +
        "<p class='text-xl'> Revigorada, foi exploradora, rebelde <br> bandeirante e inconfidente <br> Fora razão de luta <br> de lanças, facões, bacamartes, canhões <br> de versos decassílabos, resenhas, artigos </p>" +
        "<p class='text-xl'> Mas o colono não gostou <br> e fez a derrama, <br> Então fora trama de sangue e de ouro, <br> ataque duradouro que a ele resistiu </p>" +
        "<p class='text-xl'> Mas não aparecera na bandeira <br> O que são Ordem e Progresso perto de seu poder? <br> Ela fora o porquê de Dom Pedro ficar! <br> fora razão de o inconfidente lutar! <br> para não acabar com a paz do futuro! </p>" +
        "<p class='text-xl'> Hoje, <br> após o golpe do militar, <br> e o povo ser proibido de sonhar, <br> na Constituição reside plena <br> mas pena daqueles que dela se esquecem <br> pena daqueles que sequer a conhecem </p>" +
        "<p class='text-xl'> Mas ela existe, <br> e pisou na terra <br> acompanhou a caravela <br> assistiu ao engenho <br> assistiu ao empenho do inconfidente lutando <br> que, sonhando, fizera um pedido </p>" +
        "<p class='text-xl'> pediu que, <br> ainda que tarde, <br> chegasse ela, <br> a Liberdade </p>",
    },
    {
      id: 19,
      title: "Sem título",
      author: "Felipe Gregório e Ives Gomes",
      description:
        "<p class='text-xl'> Escolhi tu, Brasil, dentre todas nações <br> Terra das grandes culturas ramificadas <br> Ao longo do tempo inúmeras decepções <br> O fluxo contínuo de mentes embarcadas </p>" +
        "<p class='text-xl'> A caminho de um Estado requisitante <br> Prodígios inconformados deste lugar <br> O balanço da maré flui sempre constante <br> Arrasto impulsivo mundo afora a vagar </p>" +
        "<p class='text-xl'> Regime da falta de consideração <br> Brasil, ensino focado no não saber <br> A pátria carece de boa educação </p>" +
        "<p class='text-xl'> Aos alunos falta a fonte para embeber <br> Dos grandes feitos há a adoção da omissão <br> Diante disso só te falta aperceber </p>",
    },
    {
      id: 20,
      title: "Festa de junho",
      author: "Helder",
      description:
        "<p class='text-xl'> Festa junina <br> Uma festa demais <br> Pessoas alegres <br> Isto é diversão, rapaz </p>" +
        "<p class='text-xl'> \"Mas e o governo nos ferrando sem olhar pra trás?\" <br> Deixe isso para lá, meu rapaz <br> Hoje é dia de diversão <br> Não se importe com o fato que você é um mero capataz </p>" +
        "<p class='text-xl'> Olha a taxa <br> Subindo cada dia mais <br> Olha cobra, é mentira, é só o governo querendo pegar mais </p>" +
        "<p class='text-xl'> Seu bolso esvaziou, você se ferrou <br> Mas para que ligar <br> Aqui estamos no momento de festejar </p>" +
        "<p class='text-xl'> Pula fogueira de São João <br> Olha o governo nos roubando então <br> Juros e taxas aumentando de montão </p>" +
        "<p class='text-xl'> Um montante tão grande <br> Me lembra o baile ao luar <br> Na noite, cuidado ladrões irão te roubar </p>" +
        "<p class='text-xl'> \"Punidos eles sairão?\" <br> Óbvio que não <br> Para que punir um menino sem educação? <br> Só porque ele acabou com a sua vida você quer o punir? </p>" +
        "<p class='text-xl'> Que maldoso <br> Seu ser meticuloso <br> Claramente a culpa é sua <br> Por que veio festejar <br> Se da nossa cultura irá reclamar? </p>",
    },
    {
      id: 21,
      title: "Sem título",
      author: "Mariana",
      description:
        "<p class='text-xl'> Nas águas do Amazonas, o sol se põe em festas, <br> O batuque ecoa, a floresta se agita <br> Parintins se colore de azul e vermelho <br> Boi Caprichoso e Garantido em desafio </p>" +
        "<p class='text-xl'> No Nordeste, São João brilha com céu aceso <br> As fogueiras aquecem o coração do sertanejo <br> Em comemoração ao nascimento de João Batista <br> Pessoas se vestem como Lampião e Maria Bonita </p>" +
        "<p class='text-xl'> Oh! Sudeste, nas ruas do Rio suas batucadas contagiam <br> No nosso belo carnaval, pessoas se fantasiam <br> Entre escolas e blocos essa festa não tem fim <br> É claro que o Brasil se reúne assim </p>" +
        "<p class='text-xl'> Mas, do que serve tudo isso? <br> Se não posso mostrar nada disso pro meu filho <br> Luto todos os dias pela existência da minha família <br> Por aí só existem pessoas que não me dão a mínima <br> Somos conhecidos como o país que recebe os outros de braços abertos <br> Agora me fala! Como isso, se muitos aqui não tem nem teto? <br> Eu vejo o rico que teme perder a fortuna <br> Enquanto o mano desempregado, viciado, se afunda <br> Dentro da minha vivência, ser ignorado já é costume <br> Tarde da noite me pego pensando <br> Essa triste realidade vai durar até quando? </p>",
    },
    {
      id: 22,
      title: "Periferia",
      author: "Ana Julia",
      description:
        "<p class='text-xl'> Marginalização <br> Conhecimento <br> Pertencimento <br> Democratização </p>" +
        "<p class='text-xl'> No Sudeste do país, <br> Canindé-zona norte, Serrana Fluminense, Beira Mar <br> Pena do que o pobre há de comer o que encontrar no lixo ou então dormir com fome. Você já viu um cão quando quer segurar a cauda com a boca e fica rodando sem pegá-la? </p>" +
        "<p class='text-xl'> Longe dos centros urbanos não há o que fazer, <br> Escola vazia, esperança quase não se via. Como trazê-la à existência? Entidades representantes da cultura, onde estão para propiciar com abrangência o ensino de qualidade para então chamado \"favelado\"? </p>" +
        "<p class='text-xl'> Comunidades sem cuidado, onde está a sua identidade? </p>",
    },
    {
      id: 23,
      title: "Oh, querido Norte",
      author: "Gabrielly",
      description:
        "<p class='text-xl'> No Norte do Brasil, onde o rio canta, <br> Corre a vida pulsante na imensidão, <br> Entre verdes florestas que se agigantam, <br> Brota a alma da nossa nação. </p>" +
        "<p class='text-xl'> É na dança do carimbó que vejo, <br> O sorriso e o suor do povo forte, <br> Que no embalo da vida, sem pejo, <br> Transforma cada dia em sorte. </p>" +
        "<p class='text-xl'> Açaí e cupuaçu, sabores divinos, <br> Riquezas da terra, presente do chão, <br> No tacacá, tucupi e pratos genuínos, <br> Reside a essência e a tradição. </p>" +
        "<p class='text-xl'> Boto cor-de-rosa, lendas do folclore, <br> Histórias que o rio carrega ao mar, <br> O povo do Norte em versos implore, <br> Que suas raízes jamais vão se apagar. </p>" +
        "<p class='text-xl'> Nas palafitas à beira do igaparé, <br> A vida segue seu ritmo sem pressa, <br> É o amor pela terra que se vê, <br> No canto da mata que nunca cessa. </p>" +
        "<p class='text-xl'> Oh, querido Norte, berço de riqueza, <br> Cultura viva em cada canto e cor, <br> Que tua história ressoe com certeza, <br> Como hino eterno de força e valor. </p>",
    },
    {
      id: 24,
      title: "Norte Brasil, Brasil Norte",
      author: "Samira",
      description:
        "<p class='text-xl'> Verde, amarelo e azul <br> Nesse Brasil jamais recuo <br> Tanto aqui para se ver <br> Que quem vê não vai esquecer, <br> Ah que norte mais bonito! <br> Quantos rios lindos. </p>" +
        "<p class='text-xl'> Neles encontram muita fauna <br> Peixe-boi, tartaruga, boto cor-de-rosa <br> Se parar e olhar, é bem poderosa <br> Folclore diverso e diferente <br> Quem conhece é muita gente. </p>" +
        "<p class='text-xl'> Lá no Norte tem muita festa também, <br> Como o Círio de Nazaré <br> E festa do Sairé. <br> Ouvi falar de dança? <br> Tem sim! As cirandas <br> Todo mundo dança <br> Adulto, idoso, jovem e criança. </p>" +
        "<p class='text-xl'> Brasil incrível de viver <br> Tantas coisas para oferecer <br> Cuidado ao ir na floresta <br> Pode encontrar a boitatá </p>",
    },
    {
      id: 25,
      title: "Dance meu Brasil!",
      author: "Julia Cristina",
      description:
        "<p class='text-xl'> Brasil com sua vasta imensidão <br> Que tens suas diversas culturas </p>" +
        "<p class='text-xl'> Uns se animam em junho, época de festa junina! <br> Que vem junto da quadrilha e lá vem os caipiras <br> Lá na Bahia o samba se desenrola em uma roda <br> Com música ressoando e o pessoal acompanhando </p>" +
        "<p class='text-xl'> Pro norte bumba meu boi já vem chegando <br> Com sua representação de várias culturas <br> Desde santos aos orixás </p>" +
        "<p class='text-xl'> No centro-oeste a catira se começa <br> Com seus catireiros se ajuntando em filas <br> E logo o chupim se começa <br> Com os casais se ajuntando para a festa </p>" +
        "<p class='text-xl'> Já no sudeste inicia-se o jongo <br> Seus participantes em uma roda <br> Cantando e celebrando suas culturas <br> O pessoal da dança do mineiro pau <br> Que com seus bastões vão os batendo no chão </p>" +
        "<p class='text-xl'> No sul na chula tem que se manter o ritmo <br> Se quiser vencer na dança <br> A vaneira se expressando artisticamente <br> Com as pessoas do campo celebrando <br> Trazendo a sua cultura à tona </p>" +
        "<p class='text-xl'> E ainda pensar que há tantas mais <br> Neste nosso brasilzão! </p>",
    },
    {
      id: 26,
      title: "Histórias de infância",
      author: "João Paulo e Kerolyn Bazza",
      description:
        "<p class='text-xl'> Cativados pela nossa infância <br> Retomados das antigas lembranças. <br> Contadas nas rodas de conversa <br> Escutávamos histórias diversas. </p>" +
        "<p class='text-xl'> Reforçadas pelos desenhos <br> Influenciavam nosso pensamento. <br> Ensinadas pela professora <br> Adquirimos o conhecimento </p>" +
        "<p class='text-xl'> A Cuca, o Saci, o Lobo, <br> Iara, Vitória Régia e o Boto. <br> Os ícones da nossa infância <br> Enriquecendo o folclore brasileiro </p>" +
        "<p class='text-xl'> Comemorado e lembrado <br> Com um dia especialmente para ele <br> Nossa cultura amada <br> Folclore, do povo brasileiro. </p>",
    },
    {
      id: 27,
      title: "Todos por um",
      author: "João Paulo e Kerolyn Bazza",
      description:
        "<p class='text-xl'> Água, fome, desabrigados, <br> Tudo isso sempre será lembrado. <br> Com tristeza em nosso coração <br> Todos juntos sentiremos. </p>" +
        "<p class='text-xl'> Todos por um, <br> Ajudando e reconstruindo uma população. <br> Assim renascerá em nossa nação <br> A união. </p>" +
        "<p class='text-xl'> Realçando a todos que a cultura brasileira <br> Não se trata apenas de festas e brilho, <br> Mas também um povo que luta <br> Para ajudar aqueles que precisam. </p>" +
        "<p class='text-xl'> Todos por uma só região <br> Para o sul toda nossa compaixão <br> Esperamos a reconstrução dessa grande nação </p>",
    },
    {
      id: 28,
      title: "Noite empolgada",
      author: "João Paulo e Kerolyn Bazza",
      description:
        "<p class='text-xl'> Bandeiras coloridas, milho e muita dança <br> Quadrilha ensaiada, casais entusiasmados. <br> A luz da fogueira ilumina a noite, <br> E também o sorriso das crianças </p>" +
        "<p class='text-xl'> São João exala no lugar <br> Milho quente contagia o paladar <br> Achocolatado sempre prestigiado <br> Assim é a amada festa junina </p>" +
        "<p class='text-xl'> Comemorada e esperada <br> Data e hora dedicada <br> O povo brasileiro ansioso aguarda <br> Para o início dessa noite empolgada. </p>" +
        "<p class='text-xl'> Desde a infância ensinada e adorada. <br> Gravada no coração dos cidadãos <br> E na cultura da nação </p>",
    },
    {
      id: 29,
      title: "Cheiros e sabores",
      author: "João Paulo e Kerolyn Bazza",
      description:
        "<p class='text-xl'> Mistura de sabores, <br> Foi assim que a culinária brasileira <br> Nos ensinou <br> Com formatos e cores </p>" +
        "<p class='text-xl'> No paladar mistura de sentimentos, <br> Lembranças e sensações </p>" +
        "<p class='text-xl'> E no olfato... <br> O cheirinho da feijoada da vovó <br> Que pela casa exala <br> O aroma suave do louro fervilhando <br> E o toucinho cozinhando </p>" +
        "<p class='text-xl'> Esse é o paladar do povo brasileiro <br> Que carrega em suas veias com orgulho <br> Sua culinária, herança de gerações </p>",
    },
    {
      id: 30,
      title: "O povo caipira",
      author: "João Paulo e Kerolyn Bazza",
      description:
        "<p class='text-xl'> Tarrde, meu povo, tá na hora de cantá <br> “Uma das miores sensações <br> É quando nois da roça fais aquela festa em famia <br> Os tio e os primo vem tudo de longe”. </p>" +
        "<p class='text-xl'> Assim é o povo da roça <br> Trazendo com seus costumes muita coisa boa <br> Festas típicas e sabores da infância </p>" +
        "<p class='text-xl'> As mãos calejadas no cabo da enxada <br> Carpindo os matos intrusos em sua horta <br> Cortando lenha para seu fogão </p>" +
        "<p class='text-xl'> Pensa num povo trabaiadô, <br> Madrugadas em branco ordenhando <br> E cuidando de sua criação. </p>" +
        "<p class='text-xl'> Esperamos que isso nunca se esvaia <br> Sempre lembrem de suas raízes <br> Através do café coado e o açúcar o adocicando </p>" +
        "<p class='text-xl'> Com orgulho em nossas palavras <br> Anunciemos sempre o povo caipira <br> Que com suor “nos alimenta” </p>",
    },
    {
      id: 31,
      title: "O nosso interior",
      author: "Daniel Sola e Leticia",
      description:
        "<p class='text-xl'> No interior paulista, uma cultura que alegra <br> Nas festas juninas, o povo celebra <br> Com fogueiras, quadrilhas e brincadeiras <br> A tradição de São João verdadeira </p>" +
        "<p class='text-xl'> O cheiro do milho amado, do quentão fervendo <br> Junta-se ao riso das crianças correndo <br> O som do sanfoneiro, e sertanejo ecoando <br> Esse é o interior, com sua melodia pulsando </p>" +
        "<p class='text-xl'> Nas feiras, o artesanato é riqueza <br> Rendas e bordados, um talento nas mãos <br> Cada peça, uma história, uma certeza <br> Do trabalho árduo, que vem do coração </p>" +
        "<p class='text-xl'> As prosas nas rodas, a luz do luar <br> Contam-se histórias de assombração <br> E o brilho das estrelas a iluminar <br> Os sonhos guardados no coração </p>",
    },
    {
      id: 32,
      title: "Sem título",
      author: "Evelyn",
      description:
        "<p class='text-xl'>aparecido é brasileiro<br>" +
        "sangue fervendo, terço no peito<br>" +
        "nas costas uma cruz<br>" +
        "curte um samba, um blues<br>" +
        "nas mãos tem calos, um cara dedicado<br>" +
        "branda força de vontade é o que dizem alguns<br>" +
        "mas o que te move é o desespero<br>" +
        "desde o parto, condenado<br>" +
        "família simples<br>" +
        "cachorro, farofa, churrasco<br>" +
        "vive na fumaça, não fuma<br>" +
        "é o vapor das máquinas, do carro novo do patrão<br>" +
        "como uma máquina sempre no trabalho<br>" +
        "como um dos de carne sempre cansado<br>" +
        "carne essa de segunda mão<br>" +
        "ninguém liga se aparecido ou não<br>" +
        "desaparecido se em meio a multidão<br>" +
        "pra ele o Carnaval só é bonito na televisão<br>" +
        "aguenta mais um pouco<br>" +
        "final de semana é cerveja barata e pagode o dia inteiro<br>" +
        "é tanta folia que o povo até se esquece que vive num chiqueiro<br>" +
        "mas pro dedicado o domingo não veio<br>" +
        "aparecido ainda é brasileiro<br>" +
        "sangue escorrendo, terço nas mãos<br>" +
        "deitado em frente a cruz<br>" +
        "curtia um samba, um blues<br>" +
        "bala perdida, caixão fechado<br>" +
        "falta de sorte é o que dizem alguns</p>",
    },
    {
      id: 33,
      title: "Um norte tão cheio de vida, porém morto.",
      author: "Cristiane",
      description:
        "<p class='text-xl'>Tão bela e plena,<br>Região diferente, cheia de cultura e gente, devia ser enaltecida,<br>Essa região que a natureza conserva,<br>Mas que horror, que injúria ao que meu povo e minha cultura foi submetida.</p>" +
        "<p class='text-xl'>Tão grande e importante,<br>E mesmo assim desvalorizada,<br>Vítima de abuso constante,<br>Região tão sofrida e assim desmotivada.</p>" +
        "<p class='text-xl'>Posso parecer hostil,<br>Mas é da paz que paira sobre mim é que fui ungida,<br>Região norte do Brasil,<br>Que pela cultura xenofóbica foi atingida.</p>" +
        "<p class='text-xl'>Oh, floresta amazônica, tão viva e rica,<br>Mas também tão morta e sobrecarregada,<br>De incêndio em desmatamento de uma euforia és coberta,<br>Uma pena que não podes deixastes sedes retórica.</p>" +
        "<p class='text-xl'>Se de tão repleta de vida foste declarada o pulmão do mundo,<br>Então por quê deixaste sedes explorada?<br>Né pergunto, boitatá, curupira, protetores da floresta, por que se escondem em um buraco tão fundo,<br>Se está morrendo a nossa floresta tão abençoada?</p>" +
        "<p class='text-xl'>Tão grande e perfeita,<br>Tão linda e cheia de riqueza,<br>Mas tão ignorada por teu país,<br>Por que será que teu presidente não te quis?</p>" +
        "<p class='text-xl'>De protetores da floresta a boto que é pai,<br>Teu folclore é repleto de peça,<br>Curupira, boitatá, boto-cor-de-rosa e muitas criaturas sensacionais,<br>Nessa nossa cultura que é grande a beça.</p>" +
        "<p class='text-xl'>Aqui também existe religião bem divergentes,<br>Mas por quê o povo do teu país julga tanto a tua religião?<br>Se de cá me parece algo muito incompetente,<br>Já que a regra de qualquer religião é amar com o coração!</p>" +
        "<p class='text-xl'>Do carimbó ao congo,<br>Do calypso ao marujada,<br>Se surpreenderá quando começarem a tocar o bongo,<br>E ainda mais surpresa terá quando meu povo começar a dança.</p>" +
        "<p class='text-xl'>Satisfeito a nação que te enaltece,<br>E ao mesmo tempo ignora teu valor,<br>Como orgulho ao mundo te oferece,<br>Mas te maltrata, te nega amor.</p>" +
        "<p class='text-xl'>Assim és tu, norte bravo, encantado,<br>Coração que pulsa em nosso Brasil,<br>Querido e sempre negligenciado,<br>Teu verde é esperança teu canto é bril.</p>",
    },
    {
      id: 34,
      title: "Sem título",
      author: "Maria Vitória, Marieli e Caroline Campos",
      description:
        "<p class='text-xl'>Toda diversidade dentro de um som<br>" +
        "Cada cantiga, um tom<br>" +
        "Gerando dentro de notas<br>" +
        "Uma orquestra triunfal<br>" +
        "Uns acham meio banal<br>" +
        "Mas tocam no rádio<br>" +
        "ou em qualquer local</p>" +
        "<p class='text-xl'>A garota que passou por Ipanema e fez Tom cantar<br>" +
        "Jorge e Matheus viajaram no seu olhar<br>" +
        "Tudo por causa do amor<br>" +
        "Porque tamanha judiação, Gonzaga?<br>" +
        "Uma legião - não necessariamente urbana - procura um tempo perdido<br>" +
        "Em meio a tantas evidências vivem negando<br>" +
        "Um tal de Djavan disse que te adora em tudo<br>" +
        "Será eu exagerado como Cazuza?</p>" +
        "<p class='text-xl'>Em Maresias vendo o mar, me fez imaginar<br>" +
        "Um milhão de vagalumes<br>" +
        "Mas foi a luz dos olhos meus, ao encontrar os olhos teus que fizeram sonhar<br>" +
        "O meu amor por ti, Brasil<br>" +
        "Porém em um futuro próximo você verá, como Toquinho declarou ao cantar<br>" +
        "Uma terra que, enfim, descolorirá</p>",
    },
    {
      id: 35,
      title: "Brasileira/o",
      author: "Giovanna, Gabi Ribeiro e Eleandra",
      description:
        "<p class='text-xl'> O meu nome é Severino, <br/> não tenho outro de pia. <br/> Como há muitos Severinos, <br/> que é santo de romaria, <br/> deram então de me chamar <br/> Severino de Maria; <br/> mas como há muitos Severinos <br/> com mães chamadas Maria, <br/> fiquei sendo o da Maria <br/> do finado Zacarias. </p> <p class='text-xl'> Com olhos de cigana, oblíqua e dissimulada, <br/> Os olhos são importantes, mas só se vê bem com o coração: <br/> Sou alguém, uma mistura de dois, <br/> Preto e branco, <br/> com tiques nervosos para provar que fomos <br/> civilizados, contido e cordatos. <br/> Alguém que espera poder dizer: ouvi estrelas! <br/> Amai para entendê-las. <br/> E do amor, sou quem aspira que tal não seja imortal, mas seja infinito enquanto durar. </p> <p class='text-xl'> Se ainda não me reconhece, <br/> Eu sou uma eterna apaixonada por palavras, músicas e pessoas inteiras. <br/> Em mim não há nada meu. <br/> Em mim, não vejo começo nem fim. <br/> Sou aquilo que ninguém vê. <br/> Uma coleção de histórias, estórias, memórias, dores, delícias, pecados, bondades, tragédias, sucessos, sentimentos e pensamentos. <br/> Acho que se definir é se limitar. <br/> Sou um eterno parênteses em aberto, <br/> enquanto minha eternidade durar. <br/> Não será muito, <br/> então vou aproveitar, <br/> melhor é ser. </p> <p class='text-xl'> Assim esta poesia dedico <br/> Ao verme que primeiro roeu as frias carnes do meu cadáver, dedico como saudosa lembrança estas memórias póstumas. </p>",
    },
    {
      id: 36,
      title: "Sem titulo",
      author: "Giovanna, Gabi Ribeiro e Eleandra",
      description:
        "<p class='text-xl'> Surgido império do Brasil. <br/> Levado pela imensa população. <br/> Surgido pela miscigenação <br/> Ironicamente revoltados. </p> <p class='text-xl'> Preconceito vindo do lugar <br/> Do lugar de onde viemos <br/> A partir da sua cultura a minha foi criada <br/> O costume por ti, repassado <br/> A crença religiosa por ti, implantada <br/> A raça por ti, escravizada <br/> E do lucro nosso fez se apropriar. </p> <p class='text-xl'> Meu sol, meu clima <br/> Meu país tropical <br/> Critiquem a vontade <br/> Tem sua total liberdade <br/> Colono. Colonizador! <br/> Principal primeiro ator <br/> Atuou nos palcos deste país <br/> Perdendo cultura de sua principal raiz. </p> <p class='text-xl'> Índio só sobrou guarani. <br/> E nem esses sua cultura quis aqui. <br/> Primeiro eleito povo pirata <br/> Esbanjou daqui, a nossa terra Natal <br/> Até o início da independência <br/> Benevolentes, para nossa surpresa. </p> <p class='text-xl'> Prova dura, provada e saciada. <br/> Fome tua de grandeza <br/> Crie um povo indesejado <br/> Desafie sua dignidade <br/> Pela honra de um país. </p> <p class='text-xl'> Valor da história amargurada <br/> A partir da sua cultura a minha foi criada, <br/> Mudada e melhorada <br/> Aabrasileirada! </p>",
    },
    {
      id: 37,
      title: "Sem título",
      author: "Giovanna, Gabi Ribeiro e Eleandra",
      description:
        "<p class='text-xl'> Refúgio para muitos, <br/> Temporário para outros. <br/> Nas fronteiras da intolerância crua <br/> O estrangeiro sofre, a esperança flutua. <br/> Uma cultura ignorada e indivíduos silenciados <br/> Do futuro apenas uma certeza: <br/> A inexistência. </p> <p class='text-xl'> Aversão e ódio <br/> À uma história de décadas, sobre uma colônia explorada: <br/> \"Olha-me de novo, com menos altivez.\" <br/> Verdadeiro desinteresse <br/> Poderíamos um novo mundo tecer? <br/> Sem esplendor pela língua <br/> E reconhecimento as pessoas <br/> \"A corrupção não é uma inovação brasileira\" <br/> Vai a culpa recair sobre nós? </p> <p class='text-xl'> Julgue um povo e seu idioma <br/> Discriminado um país por sua voz/origem <br/> Um resultado de miscigenação <br/> Desprezados por sua formação. </p> <p class='text-xl'> \"A vida apenas, sem mistificação.\" <br/> Ou cheia dela. </p>",
    },
    {
      id: 38,
      title: "Sem título",
      author: "Gabriela Maia",
      description:
        "<p class='text-xl'> Brasil, um sonho intenso, um raio vivido <br/> De cores e de sabores, à terra desce <br/> Se em teu formoso céu, risonho e límpido <br/> O estrelado da bandeira resplandece </p> <p class='text-xl'> A música, a dança, a culinária, <br/> Costumes, crenças, folclore popular <br/> São riquezas de uma terra tão diversa, <br/> Que encanta o mundo com seu jeito de encantar. </p> <p class='text-xl'> Mas no palco dessa terra, onde a riqueza é abundante <br/> Políticos em palácios, promessas vazias <br/> Surge um véu de injustiça, um contraste gritante <br/> Enquanto nas favelas, fome e angústias sombrias </p> <p class='text-xl'> Valorizar a cultura é preservar a alma, <br/> Uma pátria tão diversa, merece mais que divisão <br/> Mas é preciso justiça, para que a paz nos acalma <br/> Sonhamos com um futuro de igualdade e união. </p>",
    },
    {
      id: 39,
      title: "As praias",
      author: "Raquel Morgado",
      description:
        "<p class='text-xl'> As famílias e a alegria, <br/> O amor e a harmonia, <br/> Me sinto agradecida, <br/> Por ter essa vida! </p> <p class='text-xl'> Uma água de coco para refrescar, <br/> Ou um milho quente para esquentar? <br/> Açaí e Cupuaçu, <br/> Litoral Norte ou litoral Sul? </p> <p class='text-xl'> Areia no meu pé, <br/> E na minha cabeça um boné, <br/> À frente vejo o mar, <br/> Com suas ondas a quebrar. </p> <p class='text-xl'> Assim é meu Brasil, meu doce mar, <br/> Cheio de belezas, de praias, de ondas, de amar! </p>",
    },
    {
      id: 40,
      title: "O país anônimo",
      author: "Gabriel",
      description:
        "<p class='text-xl'> Um país entre tantos <br/> Destaque cultural <br/> Orgulho a seu povo <br/> Vergonha global </p> <p class='text-xl'> Sua cultura tão rica <br/> Seu povo pobre perece <br/> Regiões, estados, cidades <br/> Tudo ao teu povo desfavorece <br/> Ensino tuas crianças desconhecem <br/> Pobreza intelectual <br/> Culturas desconhecidas <br/> Mortas sem estímulos e reconhecimentos </p> <p class='text-xl'> A ti ninguém respeita <br/> Rico e pobre <br/> Amado e odiado <br/> Brasil, o país condenado </p> <p class='text-xl'> Governantes errados <br/> Pessoas caladas <br/> Sua soberania cultural <br/> Só serve a ser lembrada </p>",
    },
    {
      id: 41,
      title: "Sem título",
      author: "Kauan",
      description:
        "<p class='text-xl'> Entre morros e mares vastos, <br/> Ecoa um lamento sutil, <br/> Um fado de tempos gastos, <br/> Um sentir que nunca é febril. </p> <p class='text-xl'> Olhos voltados ao mundo, <br/> Com desejo de ser outro ser <br/> Mas carrega um peso profundo <br/> De um passado difícil de esquecer. </p> <p class='text-xl'> Coração que palpita em versos <br/> Na busca de um brilho distante <br/> Acredita em sonhos diversos <br/> Mas vive num medo constante </p> <p class='text-xl'> Espelha-se em terras alheias <br/> Anseia por validação <br/> Mas ignora as próprias riquezas <br/> Do seu solo, da sua nação </p> <p class='text-xl'> Síndrome que é como neblina <br/> Que embaça o olhar para o céu <br/> Mas cada manhã ilumina <br/> O brilho de um povo fiel </p> <p class='text-xl'> Queira mais que imitar o outro <br/> Reconheça a própria grandeza <br/> O Brasil não é só um esboço <br/> É poema, é vida, é beleza. </p>",
    },
    {
      id: 42,
      title: "Sem título",
      author: "Daniel e Letícia",
      description:
        "<p class='text-xl'> Brasil, terra de mil faces e mil cores <br/> Mistura de povos, sons e sabores <br/> Em cada região, um Brasil diferente <br/> Unidos na alma, na fé, no presente </p> <p class='text-xl'> Brasil, sua cultura é um tesouro <br/> De norte a sul, onde tanto ofertou o ouro <br/> Que foste roubado, a essência da vida <br/> No coração do povo, que sentiu a dor da partida </p> <p class='text-xl'> Do outro lado do mar vieram para trabalhar <br/> Sem ajuda alguma começaram a lutar <br/> Para que um dia pudessem se libertar <br/> Para essa dolorosa ferida cicatrizar </p> <p class='text-xl'> Hoje difundida em nossa vida <br/> Podemos celebrar a cultura trazida <br/> Por meio da garra do povo brasileiro <br/> Criamos um país verdadeiro </p>",
    },
    {
      id: 43,
      title: "Brasil",
      author: "Fran",
      description:
        "<p class='text-xl'> Aqui te fazemos <br/> Sem verdadeiramente conhecermos <br/> As raízes de seus remos <br/> Sem muito entendermos </p> <p class='text-xl'> Tanta beleza, seu capixaba <br/> Ontem passei com a boiada <br/> Fui pra Pindamonhangaba <br/> Uai, tô devendo é nada <br/> Tu é bicho doido, cabra </p> <p class='text-xl'> Chegando no sertão <br/> Lembrei de meu brasão <br/> Que dor até então <br/> Essa seca tá pior que porão <br/> Ô chuva, sempre tão clamada <br/> Traz de volta minha namorada <br/> Minha esperança de ver a terra bem tratada <br/> Fogo e sanfona, <br/> Virgem Maria é minha dona </p> <p class='text-xl'> No azul de seu mar me perdi <br/> Perto d'aquele riozinho nasci <br/> Água doce bebi <br/> Agora não sei como sair daqui </p> <p class='text-xl'> Tanta injustiça <br/> Tanta imundícia <br/> Tanta malícia <br/> Traz de volta minha inocência, em primeiro lugar, ela era minha <br/> De quando ainda existia fantasia </p> <p class='text-xl'> Tão variado, <br/> Desde cacheado <br/> À alisado <br/> Desde o povo escravo <br/> À classe bacana <br/> Desde povo amarelo <br/> Até quem não se ama <br/> Foge Copacabana <br/> Tão roban' muito essa semana </p> <p class='text-xl'> Tem como incrementar? <br/> Então me dá seu lugar! </p>",
    },
    {
      id: 44,
      title: "Momento Cultural I & II",
      author: "Barba dos Bárbaros",
      description:
        "<p class='text-xl'><b class='underline'>PARTE 1 </b><br/> Temos dificuldade de provar <br/> Quem está certo ou errado <br/> O que há de errado em ficar <br/> Frente a frente? Lado a lado? <br/> Que demos as mãos para não ficarmos <br/> Uns nas mãos dos outros </p> <p class='text-xl'> Eu bato mesmo <br/> Bato todos em um liquidificador <br/> Puro suco de cabeça <br/> Essa mistura nos dá horror <br/> Se dermos as mãos, não ficaremos <br/> Uns nas mãos dos outros </p> <p class='text-xl'> Crença não se discute <br/> Não tem outro jeito <br/> Acabamos com a cidade <br/> Para acabar com o preconceito </p> <p class='text-xl'> O que seria de nós? <br/> Sem nossos pelos faciais? <br/> Como lutamos por igualdade? <br/> Se todos tivermos bigodes iguais? <br/> (Desiguais... desiguais... desiguais...)</p> <p class='text-xl'><b class='underline'>PARTE 2 </b><br/> Anjos e demônios disputam <br/> A nossa identidade <br/> Por uma melhor sociedade <br/> Para isso, nos amputam </p> <p class='text-xl'> Somos reféns do passado <br/> E, nele, construímos o futuro <br/> Somos muito imaturos <br/> E também somos vaporizados </p> <p class='text-xl'> Não se dirige mais a palavra <br/> Passaram por cima dela <br/> A discussão parou na pista <br/> Colidiram com a capela </p>",
    },
    {
      id: 45,
      title: "Meu sertão...",
      author: "Rodrigo",
      description:
        "<p class='text-xl'> Lugar de terra seca, povo sofrido <br/> Lugar onde necessita de água <br/> Lugar onde se precisa de emprego <br/> Lugar onde todos se esforçam </p> <p class='text-xl'> Para todos terem o que comer <br/> Para todos terem um futuro <br/> Para todos viverem... <br/> Povo guerreiro e sofredor </p> <p class='text-xl'> Por passar por tanta dor <br/> E esbanjar mesmo assim... <br/> Um sorriso encantador em meio a tanta dificuldade </p>",
    },
    {
      id: 46,
      title: "Sem título",
      author: "Bruno",
      description:
        "<p class='text-xl'> em nossa cultura <br/> essa luta é minha e sua <br/> mesmo que nao seja mutua <br/> veras que um filho teu nao foge a luta </p> <p class='text-xl'> esqueceram do hip hop <br/> na timeline do tiktok <br/> demonizam essa parte <br/> apenas falando de porte </p> <p class='text-xl'> onde só falam da morte <br/> esqueceram a cultura <br/> pois na zona norte <br/> temos estrutura </p> <p class='text-xl'> hoje só quero sentir o vento de sp <br/> selva de concreto e pessoas a mercê <br/> quero sonhar o que vivi <br/> às vezes sonhando muito mais do que podemos ter </p> <p class='text-xl'> ignorados pelo estado <br/> mas favela e cultura andam lado a lado <br/> imitaram tanto os gringos <br/> temos o nosso brooklyn em São Paulo </p> <p class='text-xl'> temos o rap e o hiphop <br/> ensinam mais que o cantor de pop <br/> no skate e o grafite só pra mídia ver <br/> união e cultura ainda existem em SP </p>",
    },
    {
      id: 47,
      title: "Amado Centro-oeste",
      author: "Autor desconhecido",
      description:
        "<p class='text-xl'> Centro-Oeste, terra rica, cheia de encantos mil, <br/> No coração do nosso amado Brasil. <br/> Teu cerrado vasto, de beleza singular, <br/> Abriga vidas, histórias, em cada lugar. </p> <p class='text-xl'> Brasília, capital de formas audazes, <br/> Símbolo de futuro, sonhos e bases. <br/> Goiás, com sua música, cultura e saber, <br/> E o povo hospitaleiro, que sabe acolher. </p> <p class='text-xl'> Mato Grosso, gigante, de terras sem fim, <br/> Onde o Pantanal se estende, sublime jardim. <br/> Mato Grosso do Sul, de paisagens encantadas, <br/> Com suas águas cristalinas e serras elevadas. </p> <p class='text-xl'> Rios que correm, levando vida e canção, <br/> Natureza exuberante, fonte de inspiração. <br/> Chapadas que se erguem, testemunhas do tempo, <br/> Guardam segredos antigos, histórias ao vento. </p> <p class='text-xl'> Terra de bravos, de gente que faz, <br/> Centro-Oeste querido, tu és muito mais. <br/> És o celeiro do país, a força que alimenta, <br/> Orgulho de um povo, que em ti se sustenta. </p> <p class='text-xl'> Centro-Oeste amado, de riqueza e tradição, <br/> Teu valor é imenso, bate forte o coração. <br/> No teu solo fértil, o futuro se planta, <br/> E em cada canto, tua essência encanta. </p>",
    },
    {
      id: 48,
      title: "Injustiça latente",
      author: "Autor desconhecido",
      description:
        "<p class='text-xl'> Brasil, gigante adormecido, em teu vasto rincão, <br/> Onde a esperança brilha, mas sofre o coração. <br/> Terra de mil encantos, cultura e tradição, <br/> Vê-se, na política, a dor da corrupção. </p> <p class='text-xl'> Promessas vazias, discursos eloquentes, <br/> Mas na prática, o povo vive de migalhas pendentes. <br/> Desigualdade imensa, injustiça latente, <br/> O clamor por mudança ecoa, insistente. </p> <p class='text-xl'> Governos que passam, sem deixar solução, <br/> Investem no próprio bolso, esquecem da nação. <br/> A saúde precária, educação negligenciada, <br/> Infraestrutura falha, esperança suprimida. </p> <p class='text-xl'> Florestas queimadas, em nome do progresso, <br/> Enquanto líderes cegos seguem o mesmo processo. <br/> Riquezas naturais vendidas a quem paga mais, <br/> O futuro comprometido, por ações irracionais. </p> <p class='text-xl'> Brasil, de gente forte, de coração valente, <br/> Enfrenta a tirania de um poder incoerente. <br/> No Congresso, disputas, conchavos, traições, <br/> Esquecem do povo, de suas aspirações. </p> <p class='text-xl'> Mas ainda há esperança, no brilho do olhar, <br/> De quem luta diariamente, de quem sabe sonhar. <br/> Que o amanhã traga líderes de nova visão, <br/> Para erguer o Brasil, com ética e união. </p> <p class='text-xl'> Brasil, querido Brasil, que tuas dores sejam sanadas, <br/> Que a política seja justa, com promessas honradas. <br/> Um país de igualdade, onde a paz possa reinar, <br/> E cada cidadão tenha motivos para amar. </p>",
    },
  ];

  const changePage = (parameter) => {
    setIframeVisible(true);

    if (parameter === "home") {
      setIsHome({ display: "block", bg_btn: "bg-gray-200" });
      setIsCronograma({ display: "hidden", bg_btn: "white" });
      setIsPlayer({ display: "hidden", bg_btn: "white" });
      setIsPoems({ display: "hidden", bg_btn: "white" });

      setLearnPage({ display: "hidden" });
    } else if (parameter === "cronograma") {
      setIsHome({ display: "hidden", bg_btn: "white" });
      setIsCronograma({ display: "block", bg_btn: "bg-gray-200" });
      setIsPlayer({ display: "hidden", bg_btn: "white" });
      setIsPoems({ display: "hidden", bg_btn: "white" });

      setLearnPage({ display: "hidden" });
    } else if (parameter === "player") {
      setIsHome({ display: "hidden", bg_btn: "white" });
      setIsCronograma({ display: "hidden", bg_btn: "white" });
      setIsPlayer({ display: "block", bg_btn: "bg-gray-200" });
      setIsPoems({ display: "hidden", bg_btn: "white" });

      setLearnPage({ display: "hidden" });
    } else if (parameter === "poemas") {
      setIsHome({ display: "hidden", bg_btn: "white" });
      setIsCronograma({ display: "hidden", bg_btn: "white" });
      setIsPlayer({ display: "hidden", bg_btn: "white" });
      setIsPoems({ display: "block", bg_btn: "bg-gray-200" });

      setLearnPage({ display: "hidden" });
    } else {
      setIsHome({ display: "hidden", bg_btn: "white" });
      setIsCronograma({ display: "hidden", bg_btn: "white" });
      setIsPlayer({ display: "hidden", bg_btn: "white" });
      setIsPoems({ display: "hidden", bg_btn: "bg-gray-200" });

      setLearnPage({ display: "block" });
    }

    setPage({
      visible_section: "flex-1",
      visible_menu: "hidden",
      background_btn: "bg-sky-700 text-white",
    });

    window.scrollTo({
      top: 0,
    });
  };

  const enableMenu = () => {
    setIframeVisible(!iframeVisible);

    if (page.visible_menu === "hidden") {
      setPage({
        visible_section: "hidden",
        visible_menu: "fixed",
        background_btn: "bg-gray-700 opacity-60 text-slate-800",
      });
    } else {
      setPage({
        visible_section: "flex-1",
        visible_menu: "hidden",
        background_btn: "bg-sky-700 text-white",
      });
    }
  };

  const enableLearnPage = (index) => {
    setSelectedText(
      `<h2 class="w-full text-center text-sky-600 text-2xl md:text-4xl font-bold perso_font">${dataListPoemas[index - 1].title} 📜</h2> ${dataListPoemas[index - 1].description} <p class="w-full text-sky-600 text-right text-xl pt-8 pr-4">-- Escrito por ${dataListPoemas[index - 1].author}</p>`,
    );
    setVisibleButton("hidden");
    changePage("pagina_poema");
  };

  const closeLearnPage = () => {
    setSelectedText("");
    setVisibleButton("fixed");
    changePage("poemas");
  };

  return (
    <main class=" flex h-full w-full transition-all duration-300 data-[collapsed=true]:w-16 data-[collapsed=false]:w-64">
      <div
        className={`top-0 left-0 md:w-72 w-full h-screen  bg-white shadow-[60_60_60_60_rgba(0,0,0,1)] transition-all duration-300 data-[collapsed=true]:w-16 data-[collapsed=false]:w-64 ${page.visible_menu} sm:block fixed`}
      >
        <style>
          {
            ".gradient-background { background: linear-gradient(300deg,#250753,#116db1,#11b16c,#e7c60e); background-size: 240% 240%; animation: gradient-animation 24s ease infinite; } @keyframes gradient-animation { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }"
          }
        </style>

        <div class="flex h-36 md:h-28 items-center justify-between border-b px-8  gradient-background shadow-2xl">
          <img className="w-full" src="./logo.png" />
        </div>

        <nav class="mt-8 pl-4 pr-4 flex flex-col gap-6">
          <button
            href="#"
            className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${isHome.bg_btn}`}
            onClick={() => changePage("home")}
          >
            <svg
              fill="#2563eb"
              width="24px"
              height="24px"
              viewBox="0 0 20 19"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer group-hover:fill-blue-900 group-active:fill-purple-700"
            >
              <path d="M10.595 5.196l.446 1.371a4.135 4.135 0 0 1 1.441-.795c.59-.192 1.111-.3 1.582-.362l-.43-1.323a9.465 9.465 0 0 0-1.58.368 5.25 5.25 0 0 0-1.459.741zm.927 2.855l.446 1.371a4.135 4.135 0 0 1 1.441-.795c.59-.192 1.111-.3 1.582-.362l-.43-1.323a9.465 9.465 0 0 0-1.58.368 5.21 5.21 0 0 0-1.459.741zm.928 2.854l.446 1.371a4.135 4.135 0 0 1 1.441-.795c.59-.192 1.111-.3 1.582-.362l-.43-1.323a9.465 9.465 0 0 0-1.58.368 5.21 5.21 0 0 0-1.459.741zm-7.062 2.172l.43 1.323a8.745 8.745 0 0 1 1.492-.636 4.141 4.141 0 0 1 1.633-.203l-.446-1.371a5.25 5.25 0 0 0-1.615.257 9.406 9.406 0 0 0-1.494.63zM3.533 7.368l.43 1.323a8.825 8.825 0 0 1 1.492-.636 4.141 4.141 0 0 1 1.633-.203L6.643 6.48a5.263 5.263 0 0 0-1.616.258 9.406 9.406 0 0 0-1.494.63zm.927 2.855l.43 1.323a8.745 8.745 0 0 1 1.492-.636 4.141 4.141 0 0 1 1.633-.203L7.57 9.335a5.25 5.25 0 0 0-1.615.257 9.417 9.417 0 0 0-1.495.631zm6.604-8.813a5.26 5.26 0 0 0-3.053 2.559 5.257 5.257 0 0 0-3.973-.275C1.515 4.514.069 6.321.069 6.321l4.095 12.587c.126.387.646.477.878.143.499-.719 1.46-1.658 3.257-2.242 1.718-.558 2.969.054 3.655.578.272.208.662.06.762-.268.252-.827.907-2.04 2.61-2.593 1.799-.585 3.129-.389 3.956-.1.385.134.75-.242.625-.629L15.819 1.203s-2.232-.612-4.755.207zm-.113 13.846a5.208 5.208 0 0 0-3.141.044c-1.251.406-2.127.949-2.699 1.404L1.866 6.722c.358-.358 1.187-1.042 2.662-1.521 1.389-.451 2.528-.065 3.279.378l3.144 9.677zm6.894-2.689c-.731-.032-1.759.044-3.01.451a5.205 5.205 0 0 0-2.567 1.81L9.124 5.151c.346-.8 1.04-1.782 2.43-2.233 1.474-.479 2.547-.413 3.047-.334l3.244 9.983z" />
            </svg>
            <span className="cursor-pointer md:text-lg text-2xl text-blue-600 group-hover:text-blue-900 group-active:text-purple-700">
              Página Principal
            </span>
          </button>
          <button
            href="#"
            className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${isCronograma.bg_btn}`}
            onClick={() => changePage("cronograma")}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                stroke="#2563eb"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
              />
              <path
                d="M12 12H15"
                stroke="#2563eb"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
              />
              <path
                d="M12 16H15"
                stroke="#2563eb"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
              />
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#2563eb"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
              />
              <circle
                cx="9"
                cy="12"
                r="1"
                fill="#2563eb"
                className="group-hover:fill-blue-900 group-active:fill-purple-700"
              />
              <circle
                cx="9"
                cy="16"
                r="1"
                fill="#2563eb"
                className="group-hover:fill-blue-900 group-active:fill-purple-700"
              />
            </svg>
            <span className="cursor-pointer md:text-lg text-2xl text-blue-600 group-hover:text-blue-900 group-active:text-purple-700">
              Cronograma
            </span>
          </button>
          <button
            href="#"
            className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${isPlayer.bg_btn}`}
            onClick={() => changePage("player")}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                  stroke="#2563eb"
                  stroke-width="2"
                  className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
                />{" "}
                <path
                  d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                  stroke="#2563eb"
                  stroke-width="2"
                  className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
                />{" "}
                <path
                  d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12"
                  stroke="#2563eb"
                  stroke-width="2"
                  stroke-linecap="round"
                  className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
                />{" "}
                <path
                  d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                  stroke="#2563eb"
                  stroke-width="2"
                  className="group-hover:stroke-blue-900 group-active:stroke-purple-700"
                />{" "}
              </g>
            </svg>
            <span className="cursor-pointer md:text-lg text-2xl text-blue-600 group-hover:text-blue-900 group-active:text-purple-700">
              Vídeos Criados
            </span>
          </button>

          <button
            href="#"
            className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${isPoems.bg_btn}`}
            onClick={() => changePage("poemas")}
          >
            <svg
              fill="#2563eb"
              width="24px"
              height="24px"
              viewBox="1 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer group-hover:fill-blue-900 group-active:fill-purple-700"
            >
              <path
                className="group-hover:fill-blue-900 group-active:fill-purple-700"
                fill="#2563eb"
                fill-rule="evenodd"
                d="M12.238 3.64a1.854 1.854 0 0 0-1.629-1.628l-.8.8a3.37 3.37 0 0 1 1.63 1.628zM4.74 7.88l3.87-3.868a1.854 1.854 0 0 1 1.628 1.629L6.369 9.51a1.5 1.5 0 0 1-.814.418l-1.48.247l.247-1.48a1.5 1.5 0 0 1 .418-.814M9.72.78l-2 2l-4.04 4.04a3 3 0 0 0-.838 1.628L2.48 10.62a1 1 0 0 0 1.151 1.15l2.17-.36a3 3 0 0 0 1.629-.839l4.04-4.04l2-2c.18-.18.28-.423.28-.677A3.353 3.353 0 0 0 10.397.5c-.254 0-.498.1-.678.28M2.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="cursor-pointer md:text-lg text-2xl text-blue-600 group-hover:text-blue-900 group-active:text-purple-700">
              Poemas
            </span>
          </button>
        </nav>
      </div>

      {iframeVisible && (
        <section
          className={`${page.visible_section} relative bg-cover bg-no-repeat  align-left justify-start bg-fixed md:ml-72 md:flex-1`}
          style={{ backgroundImage: `url('https://i.pinimg.com/736x/8e/84/a6/8e84a626d7abc52677230b1fb45bb203.jpg')` }}
        >
          <div className={`${isHome.display} pt-10 p-4 pb-20 min-h-screen`}>
            <h1 className="text-7xl w-full max-w-ful font-bold bg-gradient-to-r from-cyan-800 via-emerald-600 to-lime-600 inline-block text-transparent bg-clip-text pb-4 pt-2 perso_font">
              LER E CANTAR 2024
            </h1>
            <h2 className="text-4xl w-full max-w-ful font-bold text-slate-700 ">
              Diversidade cultural no Brasil 🎭
            </h2>

            <div className="w-full max-w-ful mt-4 p-4 bg-gray-200  rounded-xl gap-4 flex flex-col font-medium text-slate-800 bg-opacity-80">
              <h4 className="text-lg">
                Seja bem-vindo ao Ler e Cantar 2024, neste ano, estaremos dando espaço as diferentes culturas e realidades que possuímos em nosso país, isso por meio de diversas obras que nós da Etec Joaquim Ferreira do Amaral preparamos para vocês nessa noite.
              </h4>
              <h4 className="text-lg">
                A diversidade cultural no Brasil é composta por diferentes
                povos, com destaques para indígenas, africanos e europeus,
                resultando em muita diversidade nas línguas, danças, festas e
                entre outros aspectos.
              </h4>
              <h4 className="text-lg">
                Desde a chegada dos portugueses, que iniciaram a interação com
                os povos indígenas locais, até o influxo de africanos trazidos
                como escravos, seguido pela chegada de imigrantes europeus,
                asiáticos e do Oriente Médio, o Brasil se consolidou como um
                verdadeiro mosaico cultural. Essa diversidade não se limita
                apenas à gastronomia, música e festividades, mas permeia a
                identidade nacional em sua totalidade.
              </h4>
              <h4 className="text-lg">
                Cada região do Brasil contribui de maneira única para esta rica
                tapeçaria cultural. Contando assim, com uma grande gama de tradições, festivais, comidas típicas                 e histórias.
              </h4>
              
            </div>

            <div className="w-full max-w-ful mt-4 p-4 bg-gray-200  rounded-xl gap-4 flex flex-col font-medium text-slate-800 bg-opacity-80">
              <h4 className="text-lg font-bold">
                Confira aqui um exemplo da produção do Ler e Cantar, por enquanto você verá o nosso making off de 2023, mas logo logo poderá ver nosso edital de 2024 🤩
              </h4>
              <iframe className="min-h-[530px] rounded-lg" src="https://www.youtube.com/embed/dpAZgkisOyg?si=llxsvSDqWy0_fZkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

            <div className="w-full max-w-ful mt-4 p-4 bg-gray-200   rounded-xl gap-4 flex flex-col font-medium text-slate-800 bg-opacity-80 text-left">
              <h4 className="text-lg font-bold">
                O Ler e Cantar é uma produção colaborativa entre alunos e professores dividida em diversos setores, com diferentes tarefas, sendo todas em prol da realização do evento 🎨
              </h4>
              <div className="w-full flex flex-col items-center gap-6">
              <img className="rounded-lg  w-full md:w-1/2" src="./img1.jpeg" alt="imagem" />
              <img className="rounded-lg  w-full md:w-1/2" src="./img2.jpeg" alt="imagem" />
              </div>
            </div>
          </div>

          <div
            className={`${isCronograma.display} text-center p-4 pt-8 min-h-screen`}
          >
            <h1 className="text-5xl text-center w-full max-w-ful  font-bold bg-gradient-to-r from-cyan-600 via-blue-700 to-violet-950 inline-block text-transparent bg-clip-text pb-2 perso_font">
              CRONOGRAMA
            </h1>
            <h2 className="text-2xl font-bold text-slate-700">
              Confira o cronograma das atividades dessa noite 🤩
            </h2>

            <div className="w-full max-w-ful mb-16 mt-4 p-4 bg-gray-200 bg- text-left rounded-xl bg-opacity-80">
              <div className="h-full relative left-8 top-0 border-l-4 border-dashed border-gray-400 flex flex-col gap-10">
                

                {dataListCronograma.map((item) => (
                  <div
                    key={item.id}
                    className={`
                  bg-gray-100 p-4 border-l-8 border-${item.borderColor} rounded-lg shadow-md -ml-8 w-full mr-4 `}
                  >
                    <h3
                      className={`text-lg text-${item.borderColor} font-semibold mb-2`}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <div className="flex align-center">
                      <img className="h-12 w-12" src={item.svgPath} />
                      <p
                        className="text-gray-700 flex items-center pl-4 text-left"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`${isPlayer.display} text-center  p-4 pt-8 pb-20 md:pl-24 md:pr-24 min-h-screen`}
          >
            <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-rose-600 via-purple-800 to-indigo-800 inline-block text-transparent bg-clip-text p-2 perso_font">
              COLETÂNEA DE VÍDEOS
            </h1>
            <h2 className="text-2xl w-full font-bold text-slate-700">
              Confira o acervo de vídeos criados para o evento 🎥
            </h2>

            <div className="w-full max-w-ful mb-8 mt-4 p-4 bg-gray-200 text-left rounded-xl bg-opacity-80">
              <h3 className="text-3xl pl-4 font-bold text-indigo-900 inline-block perso_font">
                ENTREVISTAS 🎤​
              </h3>

              <div className="aspect-w-full aspect-h-auto max-w-full mt-4">
                <div className="flex flex-col gap-8 h-full">
                  {dataListEntrevistas.map((item) => (
                    <div
                      key={item.id}
                      className="inline-block bg-white rounded-2xl p-4 pb-6"
                    >
                      <iframe
                        className="w-full mx-w-ful h-96 rounded-lg"
                        src={`https://www.youtube.com/embed/${item.src}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                      <h4 className="pl-4 pt-4 font-bold text-2xl text-indigo-900">
                        {item.title}
                      </h4>
                      <h4 className="pl-8 w-full text-xl font-medium  text-slate-600">
                        {item.description}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <span className="w-full h-2  flex gap-6">
              <div className="w-3/4 max-w-ful text-slate-600 bg-slate-600 rounded-lg "></div>
              <div className="w-1/4 max-w-ful text-slate-600 bg-slate-600 rounded-lg "></div>
            </span>

            <div className="w-full max-w-ful mt-8 p-4 bg-gray-200 text-left rounded-xl bg-opacity-80">
              <h3 className="text-3xl pl-4 font-bold text-emerald-700 inline-block perso_font">
                PRODUÇÕES 📢​
              </h3>

              <div className="aspect-w-full aspect-h-auto max-w-full mt-4">
                <div className="flex flex-col gap-8 h-full">
                  {dataListProducoes.map((item) => (
                    <div
                      key={item.id}
                      className="inline-block bg-white rounded-2xl p-4 pb-6"
                    >
                      <iframe
                        className="w-full mx-w-ful h-96 rounded-lg"
                        src={`https://www.youtube.com/embed/${item.src}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                      <h4 className="pl-4 pt-4 font-bold text-2xl text-indigo-900">
                        {item.title}
                      </h4>
                      <h4 className="pl-8 w-full text-xl font-medium  text-slate-600">
                        {item.description}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${isPoems.display} text-center  p-2 pt-8 pb-20 min-h-screen`}
          >
            <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-rose-600 via-purple-800 to-indigo-800 inline-block text-transparent bg-clip-text perso_font">
              EDITAIS DE POEMAS
            </h1>
            <h2 className="text-2xl w-full font-bold text-slate-700">
              Explore nossa vasta biblioteca de poemas criados para o evento 📝
            </h2>

            <div className="w-full h-full max-w-ful p-4 mt-8 bg-gray-200 text-left rounded-xl bg-opacity-70">
              <h3 className="text-3xl pl-4 font-bold text-indigo-900 inline-block perso_font">
                MANUSCRITOS ✏️​
              </h3>

              <div className="w-full aspect-w-full aspect-h-auto max-w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-3">
                {dataListPoemas.map((item) => (
                  <div
                    key={item.id}
                    className=" w-full h-full  bg-white rounded-md p-4 pl-2 pr-2 flex flex-col justify-between"
                  >
                    <span className="flex-grow">
                      <h4 className="w-full bg-gray-100 p-2 text-lg font-bold text-sky-700 rounded-lg">
                        {item.title}
                      </h4>
                      <h5 className="text-md font-medium text-slate-500 pl-2">
                        -- {item.author}
                      </h5>
                    </span>
                    <button
                      className="items-end w-full p-1 mt-4  bg-sky-500 text-white font-bold text-lg rounded-lg hover:bg-sky-600 active:bg-sky-700"
                      onClick={() => enableLearnPage(item.id)}
                    >
                      LER
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`${isLearnPage.display} text-center w-full p-6 min-h-screen `}
          >
            <div
              className="w-full h-full text-left bg-white rounded-2xl max-w-ful bg-white p-6 mb-14 font-semibold text-slate-800 flex flex-col gap-6"
              dangerouslySetInnerHTML={{ __html: selectedText }}
            ></div>

            <button
              size="lg"
              className={`fixed bottom-4 -translate-x-1/2 bg-gray-600 mt-4 p-4 rounded-lg shadow-2xl`}
              onClick={closeLearnPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  fill="#0F0F0F"
                />
              </svg>
            </button>
          </div>
        </section>
      )}

      <button
        size="lg"
        className={`${page.background_btn}  p-4 ${visibleButton} z-50  md:hidden bottom-4 rounded-lg left-1/2 -translate-x-1/2 shadow-2xl hover:bg-primary/90`}
        onClick={enableMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" x2="21" y1="6" y2="6" />
          <line x1="8" x2="21" y1="12" y2="12" />
          <line x1="8" x2="21" y1="18" y2="18" />
          <line x1="3" x2="3.01" y1="6" y2="6" />
          <line x1="3" x2="3.01" y1="12" y2="12" />
          <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
      </button>
    </main>
  );
}
