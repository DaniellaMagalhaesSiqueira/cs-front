import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  card?: Card;
  private cards = new BehaviorSubject<Card[]>([
   { 
     id: 1,
     name: "A Imperatriz",
     positive: "A Imperatriz é uma mãe carinhosa e cuidadosa; é uma carta positiva, ligada ao feminino, à abundância e à beleza. Ela é a energia da Mãe Terra, da natureza. Por ser uma carta que significa fertilidade. A Imperatriz é um símbolo de nascimento e crescimento, não apenas literalmente, quando interpretada como um sinal de gravidez, mas também como uma metáfora: nascimento de novas ideias, de novos projetos. A Imperatriz está dizendo que, com dedicação, os planos terão sucesso.No tarot, A Imperatriz é sinônimo de sustento, cuidado e proteção quase maternais em relação a situações e pessoas. Mas precisamos tomar cuidado: o cuidado e a proteção podem facilmente tornarem-se superproteção. Por outro lado, ela é um sinal para ser mais gentil consigo mesma(o), se cuidar.Por ser uma carta extremamente ligada ao elemento Terra e à natureza, A Imperatriz pede uma conexão maior com a natureza e com o universo que existem, não apenas no mundo externo, mas também dentro de nós.A carta de tarot A Imperatriz também pode indicar gravidez e maternidade, que devem ser confirmadas com outras cartas. ",
     negative: "Os aspectos positivos da carta de tarot A Imperatriz na posição normal se transformam em características negativas quando ela aparece na posição invertida. A carta de tarot A Imperatriz invertida pode indicar um exagero na hora de cuidar e se preocupar com os outros, deixando a si mesma(o) de lado. A superproteção da Imperatriz invertida pode ser sufocante, mesmo que as intenções sejam boas. O cuidado com o outro se transforma em desprezo e abandono, principalmente daqueles que precisam de atenção. A natureza representada pela Imperatriz, quando na posição invertida, indica punição e correção das atitudes do outro; é preciso cuidado para não ser cruel demais.Ela também pode indicar que outra pessoa esteja agindo como A Imperatriz na sua vida, tirando seu poder de agir e decidir por si mesma(o). É preciso criar confiança nas suas decisões e agir por conta própria.Invertida, a carta de tarot A Imperatriz pode significar infertilidade, literalmente ou como uma metáfora para falta de criatividade para novos projetos e ideias.",
     image: "assets/images/imperatriz.jpg",
     inverted: false,
  },
   { 
     id: 2,
     name: "O Enforcado",
     positive: "A expressão serena no rosto do Enforcado nos revela que ele entende que a sua posição é um sacrifício que ele precisa fazer para evoluir. Pode ser que ele esteja arrependido dos seus erros passados ou tenha dado um passo para trás para repensar seus planos e caminhos.Assim, se a carta O Enforcado no Tarot saiu em uma leitura para você, saiba que as coisas vão ficar um pouco complicadas por um tempo e você não poderá fazer nada a respeito.Não é hora de agir ainda. Chegou o momento de refletir sobre sua vida, observar, identificar coisas que podem estar te prendendo antes de tomar qualquer decisão. Tenha paciência e espere o momento oportuno ou a oportunidade adequada para fazer escolhas.",
     negative: "Quando a carta O Enforcado do Tarot aparece de forma invertida, ela mostra que você está sentindo que tem se sacrificado muito para nada. Pode ser que você esteja se sentido paralisada(o), estagnada(o). Pensando os porquês nada em sua vida flui.Mas saiba que essa pausa no seu caminho e em seus projetos está acontecendo para que você reflita sobre a sua vida e tente olhar o mundo sob uma nova perspectiva.Esse descanso é importante para o seu crescimento. Não resista a ele. Se entregue!",
     image: "assets/images/enforcado.jpg",
     inverted: false,
  },
   { 
     id: 3,
     name: "O Eremita",
     positive: "A carta O Eremita no Tarot mostra que você precisa dar um tempo da rotina para olhar para dentro de si mesma(o) e encontrar as respostas que procura.Este arcano lembra que a verdade e conhecimento estão dentro da gente e não nas distrações do mundo exterior. Quando ele surge em uma leitura, indica que você está deixando para trás o mundano e iniciando uma jornada de autodescoberta, conduzida por sua sabedoria interior.O conselho desta carta é para que você aproveite o momento para fazer um retiro espiritual, uma peregrinação sagrada, uma meditação ou outro tipo de ação que seja focada na contemplação. É hora de você experimentar um profundo senso de reclusão e introspecção. Essa é uma jornada que você precisa seguir sozinha(o). Encontre sua luz, ilumine sua alma e crie seu caminho único.",
     negative: "O Eremita na posição invertida tem dois significados: que você não está tirando tempo suficiente para refletir sobre sua vida ou que você está se isolando demais. Se você ainda está tentando se conectar com seu eu espiritual, O Eremita invertido a encoraja a meditar e refletir por mais tempo. Chegou a hora de se aprofundar no seu eu interior e tentar redescobrir sua missão aqui na terra. Provavelmente, você está tão preocupada(o) lidando com seus problemas do dia a dia que não tem tempo para parar, silenciar e ouvir sua voz interior.",
     image: "assets/images/eremita.jpg",
     inverted: false,
  },
   { 
     id: 4,
     name: "A Roda da Fortuna",
     positive: "A Roda da Fortuna vem nos lembrar que a vida está em constante mudança. Assim, se você estiver enfrentando por um momento difícil, lembre-se que tudo passa. A sorte voltará a sua vida em breve. Da mesma forma, se as coisas estiverem bem para você, saiba que é preciso estar sempre preparada(o) para mudanças repentinas. É preciso aprender a se adaptar às situações e circunstâncias.Diante da imprevisibilidade da vida, a mensagem da Roda da Fortuna no Tarot é a de que precisamos valorizar e aproveitar ao máximo os momentos felizes. Em um instante, eles podem desaparecer.",
     negative: "Se em uma leitura do Tarot, a carta Roda da Fortuna surge invertida para você é sinal de que sua sorte poderá mudar para pior. Há grandes chances de que mudanças inesperadas e negativas aconteçam e a deixe desamparada(o). Por isso, você deve se preparar para uma grande transformação e aprender a ser adaptável. Só assim você conseguirá agir para melhorar a situação.Reflita sobre as atitudes e ações que você realizou no passado e veja quais podem ter alguma relação com o que irá acontecer.Assuma a responsabilidade pela colheita ruim, já que ela é fruto de uma má plantação.",
     image: "assets/images/roda_da_fortuna.jpg",
     inverted: false,
  },
   { 
     id: 5,
     name: "O Mago",
     positive: "No tarot, o Mago representa poder, controle, foco e determinação. É a carta da habilidade de colocar os planos em prática, utilizando todas as ferramentas à disposição. Ele é a possibilidade, a capacidade de agir e de lidar com qualquer situação que venha a surgir. O Mago está dizendo que se você seguir os seus impulsos e instintos, as coisas podem acontecer.",
     negative: "Devido à sua relação com Mercúrio, O Mago na posição invertida está ligado à manipulação e à persuasão: ele sabe o que quer, sabe os resultados das suas ações e por isso vai agir da forma que for melhor para atingir seus objetivos. ",
     image: "assets/images/mago.jpg",
     inverted: false,
  },
   { 
     id: 6,
     name: "A Sacerdotisa",
     positive: "Quando a carta A Sacerdotisa surge durante uma leitura, ela te pede para se conectar de forma mais forte com a sua feminilidade. A feminilidade aqui pode ser interpretada de várias maneiras como elegância, sensualidade, fertilidade, expressão criativa e carinho. Assim, você pode se conectar com sua feminilidade através do paladar, do toque, do cheiro, da visão, do prazer, da satisfação.Caso precise tomar uma decisão importante em sua vida, não há faça agora. Tenha a certeza de que você conhece todas as possibilidade e pessoas envolvidas. Pesquise, reflita, pense mais sobre o assunto antes de decidir. E, acima de tudo, ouça a sua intuição.",
     negative: "Quando a carta A Sacerdotisa no Tarot surge na posição invertida ela vem te aconselhar a colocar você em primeiro lugar. Reserve um fim de semana, se cuide e se ama. Inicie um projeto verão ou comece um novo hobby. Também pode ser que a Sacerdotisa veio te alertar para a forma como você vê a sua imagem corporal. Aprenda a amar seu corpo, com todas as suas curvas, belezas, protuberâncias e inchaços. Se olhe no espelho e admire a beleza dele.",
     image: "assets/images/sacerdotisa.jpg",
     inverted: false,
  },
   { 
     id: 7,
     name: "O Carro",
     positive: "Quando este arcano aparece, ele traz uma mensagem de alívio para os consulentes. A carta indica que você irá conseguir vencer o desafio que está a sua frente.Você alcançará a vitória principalmente por ter sempre o controle do ambiente. Mas é claro que você terá que usar também a sua força de vontade para superar esse e outros obstáculos.Lembre-se que você se torna mais forte cada vez que se esforça e supera um empecilho para alcançar o seu objetivo.Assim, mantenha o foco e siga na direção do seu sonho com confiança e determinação.",
     negative: "Se O Carro surge na posição invertida em um jogo de Tarot, a mensagem que esta carta traz é a de que você precisa se conscientizar que tem tido um comportamento um pouco agressivo. Esta carta também pode indicar que você está sem foco, desmotivada(o) ou um pouco perdida(o). Tente traçar pequenas metas até seu objetivo. Se tiver dificuldades em fazer isso, busque ajuda de um profissional.Outra interpretação para esta carta é a de que você precisa recuar ou mudar a direção.",
     image: "assets/images/carro.jpg",
     inverted: false,
  },
   { 
     id: 8,
     name: "O Diabo",
     positive: "A carta O Diabo indica o seu lado sombrio e as forças negativas que te impedem de avançar e crescer. Essas forças negativas podem ser vícios, comportamentos, amizades, relacionamentos, padrão de pensamento, etc. Esse Arcano Maior mostra que, em momentos de dualidade, você opta por escolher o caminho que te trará uma gratificação momentânea, mesmo que isso sacrifique um benefício importante de longo prazo.Se esta carta apareceu para você em uma leitura, provavelmente é porque você pensa que não tem controle do seu eu sombrio. Você acredita que nunca poderá se libertar do domínio de forças negativas.Mas isso não é verdade. Você precisa e deve enfrentar os demônios que vivem em você e fazer o que é certo, não o que é mais fácil.Para conseguir se libertar do seu diabo, seja ele um vício ou um comportamento, você precisa reconhecer a influência que ele exerce sobre você e o impacto negativo que está causando em sua vida.O conselho da carta O Diabo é para que você tenha consciência de quais são as influências negativas que permeiam sua vida e tome atitudes para se libertar delas.",
     negative: "A carta O Diabo invertida normalmente surge que a pessoa está muito perto de avançar em alguma área da vida. Você tem potencial para isso, mas precisa primeiro abandonar velhos hábitos e crenças que estão te impedindo de evoluir.O conselho do Diabo invertido é para que você confronte seus medos e se liberte das correntes invisíveis que a(o) aprisiona.Outra interpretação para o Diabo invertido é a de que você está muito apegada(o) às coisas, pessoas ou conceitos mundanos. Tente estudar um pouco os princípios do desapego. Isso será um bom começo para você se libertar.",
     image: "/assets/images/diabo.jpg",
     inverted: false,
  },
   { 
     id: 9,
     name: "A Força",
     positive: "A Força no Tarot fala do poder interior e da capacidade de espírito do consulente. Quando esta carta surge em uma leitura, ela indica que você tem a força necessária para superar qualquer obstáculo.Você é uma pessoa resistente e persistente. Além disso, sabe equilibrar essas características com sua paciência e calma interior.Este Arcano Maior mostra que você não precisa usar da força bruta para convencer ninguém a nada. Você consegue persuadir qualquer um apenas com seu poder de influência.Com sua paciência e boa vontade, você conseguirá realizar tudo o que desejar.",
     negative: "Na posição invertida, A Força no Tarot pede para que você sintonize seus níveis de força interior com sua autoconfiança.",
     image: "/assets/images/forca.jpg",
     inverted: false,
  },
   { 
     id: 10,
     name: "A Estrela",
     positive: "Quando a carta A Estrela sai em uma leitura de Tarot, ela traz esperança, motivação e poder de renovação.Esta carta enfatiza o quanto você é abençoado pelo universo e te lembra que para perceber isso, você só precisa olhar com atenção ao seu redor.Você tem dentro de si mesma(o) tudo o que precisa para realizar os seus sonhos. Agora, só tem que criar coragem para correr atrás deles.Este arcano maior também aponta que você enfrentou um desafio muito difícil recentemente. Pode ser que ainda esteja o enfrentando. Mas você contará com ajuda extra espiritual para resolver o seu problema.Ou seja, essa carta diz que você já pode respirar tranquila após todo esse período de turbulência que enfrentou.",
     negative: "Quando a carta A Estrela surge na posição invertida, ela mostra que você tem tido o sentimento de que o Universo está conspirando contra você.Até mesmo os desafios que anteriormente você consideraria empolgante, agora parece que são intransponíveis.Você perdeu a fé e a esperança, por isso não tem mais motivação para avançar.Assim, A Estrela invertida pede para que você pense positivo e acredite que irá conseguir vencer. Não deixe o medo e a insegurança te dominarem.Olhe com atenção que você verá que o Divino está sempre por perto.",
     image: "/assets/images/estrela.jpg",
     inverted: false,
  },
   { 
     id: 11,
     name: "O Mundo",
     positive: "Se O Mundo do Tarot aparece para você durante uma leitura, você pode comemorar. Ela mostra que você encontrou a sua unidade e totalidade. Seus mundos externo e interno estão em harmonia.Caso você ainda não tenha começado a colher os frutos dos seus esforços, se prepare que o tempo de colheita está chegando – e ela será grande!Se você está em um projeto de longo prazo, provavelmente sua conclusão está perto e será um encerramento com chave de ouro.Também pode indicar uma mudança de fase na sua vida, como o nascimento de um filho, um casamento, uma graduação, a realização de um sonho, uma viagem de longo prazo para o exterior ou a chegada de algo que irá transformar a sua vida.",
     negative: "Se a carta O Mundo no Tarot surge invertida, ela pode significar um fracasso. Não necessariamente indica que você não irá alcançar seus objetivos. Provavelmente, eles serão alcançados. No entanto, você não se sentirá realizada(o). Provavelmente, você sente um vazio estranho dentro de você que acreditou que seria preenchido ao alcançar o objetivo em questão. Mas quando finalmente vence, você percebe que nada mudou por dentro. Você precisa refletir sobre o que provoca esse vazio. O que está faltando na sua vida? Talvez você esteja emocionalmente apegada(o) a um relacionamento passado que a está impedindo de seguir em frente e ser feliz.Você precisa aceitar e abraçar o momento em que você está agora! Deixe o passado para trás. Ele não te pertence mais.",
     image: "/assets/images/mundo.jpg",
     inverted: false,
  },
  {
    id: 12,
    name: "O Louco",
    positive: "Este Arcano Maior do Tarot de Marselha indica que você está numa eterna busca, muitas vezes sem sabe especificamente do quê. Esta carta representa o princípio e o fim, o pensamento inconsciente, o querer, o destino e a ingenuidade. O Louco pode significar o início de uma nova empreitada, com disposição para encarar o novo e o desconhecido. ",
    negative: "Se o Louco apareceu para você quando perguntou sobre questões de saúde, ela pode indicar instabilidade. É um alerta de que você precisa se cuidar mais. Também representa a moral e o questionamento de padrões dúbios de comportamento.",
    image: "/assets/images/louco.jpg",
    inverted: false,
  },
  {
    id: 13,
    name: "O Julgamento",
    positive: "Se a carta O Julgamento aparecer para você em uma leitura de Tarot, ela indica que você precisa tomar uma decisão. Essa escolha, não importa qual seja, mudará a sua vida de forma duradoura.A orientação da carta é que você use a sua intuição e o seu intelecto para decidir qual é o melhor caminho para você seguir. Consulte as lições que você aprendeu no passado. Elas serão um bom guia para seu futuro.Esta carta também pode indicar que as consequências de ações que você tomou no passado irão alcançar você em breve.No entanto, aprender com as lições do passado não é viver nele. Siga sempre em frente. O que passou, passou. Não há como mudar.",
    negative: "Quando a carta O Julgamento aparece de forma invertida, ela te convida para uma autorreflexão. Provavelmente, o Universo está tentando enviar uma mensagem para você, te convidado para fazer algo maior, mas você não está ouvindo.Ou então, você sabe o que deve fazer, mas tem medo de todo o sacrifício que virá junto com essa escolha. Ou ainda, você não se sente pronta para assumir o protagonismo de sua vida e prefere caminhar devagar, em segurança.",
    image: "/assets/images/julgamento.jpg",
    inverted: false,
  },
  {
    id: 14,
    name: "O Sol",
    positive: "Quando a carta o Sol sai em uma leitura de Tarot, ela indica que o seu desejo irá se realizar. Ela também aponta que não importa as decisões que você venha a tomar e por quais caminhos você escolha seguir, a felicidade e a alegria estarão sempre com você. Além disso, a carta revela que as pessoas são facilmente atraídas por você pelo seu otimismo. Você sempre enxerga o lado bom das coisas. Caso você esteja passando por um momento difícil, tenha calma que tudo irá melhorar. E os frutos colhidos serão muito melhores que o esperado. O seu futuro está cheio de abundância.",
    negative: "Quando surge na posição invertida, O Sol no Tarot te alerta para tomar cuidado com a falta de modéstia. A autoconfiança é boa, mas não pense que você é melhor que os outros. O excesso de confiança pode te tornar egoísta e o excesso de otimismo, irresponsável. Dê um passo de cada vez e planeje! Também é interessante que você traga inocência para a sua vida. Uma forma de fazer isso é observar crianças brincando. Essa cena irá te lembrar o quanto a vida é despreocupada, divertida e maravilhosa.",
    image: "/assets/images/sol.jpg",
    inverted: false,
  },
  {
    id: 15,
    name: "A Lua",
    positive: "Pelo lado positivo, a carta A Lua no Tarot simboliza sua imaginação te guiando em um caminho escuro. Você não sabe o que vai encontrar pela frente. Pode ser que exista ou não um perigo oculto. É como se você fosse a lagosta da carta que nada na água em direção ao caminho entre as duas torres. A luz da Lua pode te ajudar nessa trajetória, trazendo clareza e compreensão, que significa que você deve deixar que sua intuição a guia. Por seu lado negativo, esta carta pode indicar medo de arriscar e ansiedade em relação ao futuro.Ela a aconselha a não deixar que esses sentimentos tomem conta de você. Todas as energias negativas devem ser liberadas e transformadas em algo construtivo. Outra possibilidade de leitura da Lua no Tarot é a possibilidade de que você esteja se iludindo. Provavelmente, algo que está oculto virá à tona.",
    negative: "Quando a carta A Lua aparece invertida é mais fácil interpretá-la, porém a mensagem não é das melhores. Ela indica que os aspectos mais escuros e negativos da Lua estão presentes em sua vida. Provavelmente, sua vida passa por algum tipo de confusão ou infelicidade. Você quer progredir, mas não sabe o que fazer para isso. Esta carta invertida também pede que você lide com sua ansiedade e receios. Não deixe o medo te paralisar e fazer com que você perca boas oportunidades. Você pode se arrepender lá na frente. Ouça sua intuição e siga em frente!",
    image: "/assets/images/lua.jpg",
    inverted: false,
  },
  {
    id: 16,
    name: "A Torre",
    positive: "Quando a carta A Torre sai em uma leitura de Tarot, ela indica que uma mudança importante e radical irá acontecer na sua vida. Inicialmente, essa mudança lhe parecerá algo ruim, assustador e estressante. No entanto, ela é necessária para te sacudir e fazer você enxergar melhor o que se passa para colocar sua vida no caminho certo. O conselho deste Arcano Maior é para que você abrace a mudança, mesmo com medo. Você deve abandonar o conhecido, o antigo, o passado para dar espaço para que o novo entre em sua vida, novas oportunidades, crenças e formas de enxergar o mundo. Essa mudança vem para cortar as mentiras e ilusões que você tem dito para si mesma(o) e jogar luz sobre a verdade. Chegou a hora de você questionar o que é real e o que não é. Em quem pode confiar e em quem não pode. Tudo vai ficar muito confuso, mas logo será esclarecido.",
    negative: "Quando surge invertida, A Torre no Tarot indica que você passará por uma significativa transformação pessoal. Ou seja, diferentemente da mensagem da Torre na posição normal, que aponta para uma mudança que ocorrerá devido a circunstâncias externas, a Torre invertida mostra transformações que virão de vocês mesma(o), de dentro para fora. Você irá começar a questionar suas ações, suas crenças, seus valores e propósitos. Provavelmente, você irá mudar sua opinião sobre tudo por ver que suas antigas crenças não fazem mais sentido. Só tome cuidado para não entrar em uma crise existencial que questiona o sentido da vida. Por mais que esse possa ser um período perturbador, confie no processo.",
    image: "/assets/images/torre.jpg",
    inverted: false,
  },
  {
    id: 17,
    name: "A Morte",
    positive: "A Morte no Tarot é uma carta incompreendida. Quando surge em uma leitura, as pessoas a associa à morte física, do corpo, e já pensa que irá morrer ou que alguém importante em sua vida irá fazer a tão temida travessia. Mas não é nada disso. A carta A Morte é uma das cartas mais positivas do Tarot. Ela indica o fim de uma fase para o início de outra. A morte de tudo aquilo que não lhe serve mais para o nascimento de coisas melhores e maiores em sua vida. Esta carta vem te pedir para deixar o passado para trás para poder abraçar as novas oportunidades. Este arcano só será ruim se você oferecer resistência aos finais necessários. Neste caso, você sentirá dor, tanto física quanto emocional. Você passará por um tempo de mudança e transição. Sua vida será purificada e renovada após a eliminação de fatores limitantes.",
    negative: "Se na posição vertical, a Morte aponta para um período em que se deixa o passado para trás para que haja espaço para a transformação e a renovação, na posição invertida, este arcano significa que você está resistindo a essa mudança. Relutar contra a morte do passado é tempo perdido. Nada pode contra ela. As mudanças ocorrerão e você tem que aceitar. A resistência só causa dor e sofrimento. Esta carta revela que você ainda carrega crenças prejudiciais do seu passado que estão atrapalhando você a abraçar novas oportunidades que estão surgindo. Por causa da sua resistência, sua vida está estagnada(o). Você está no limbo. Quando a Morte surge em uma leitura na posição invertida, ela pede para que você abrace a mudança. Veja as possibilidades maravilhosas que estão no horizonte e diga “sim” às transformações.",
    image: "/assets/images/morte.jpg",
    inverted: false,
  },
  {
    id: 18,
    name: "A Temperança",
    positive: "Quando a Temperança surge em uma leitura do Tarot, ela mostra que você é uma pessoa capaz de se manter calma mesmo diante de situações que geram grande estresse ou ansiedade. Esta carta te aconselha a seguir assim, sempre com moderação, equilíbrio e paciência. Você está em um momento da vida em que se sente calma(o) e tranquila(o). O seu caminho deve seguir assim por um tempo. Nenhuma mudança está prevista, por enquanto. É o momento de refletir sobre sua vida, encontrar seu propósito e dar significado para as suas ações. Também não é o momento de dar muito a sua opinião e nem ser do contra. Adote uma postura mais pacificadora em todas as áreas da sua vida.",
    negative: "Já na posição invertida, a carta A Temperança no Tarot indica um momento de desequilíbrio em sua vida. Talvez, você esteja seguindo por um caminho errado, que está causando turbulência e excesso em sua vida. Outro fator que pode estar abalando seus pilares é a falta de um plano ou visão de longo prazo.Você deve parar e refletir sobre o que deseja. Veja onde precisa mudar e estabeleça metas para alcançar seus objetivos.Também pode ser que você esteja cometendo algum exagero em sua vida. Pode ser que você esteja comendo demais, bebendo demais, comprando demais ou tenha entrado em um padrão de pensamentos negativos.",
    image: "/assets/images/temperanca.jpg",
    inverted: false,
  },
  {
    id: 19,
    name: "A Justiça",
    positive: "A Justiça no Tarot vem te lembrar que todas as escolhas que você faz hoje terão efeitos na sua vida no longo prazo. Chegará um momento em que você será julgada(o) por suas decisões.Quando este arcano surge em uma leitura, ele pode indicar que você está sendo julgada(o) por alguma ação que fez no passado. Permita que sua intuição lhe indique o que pode ser. Por exemplo, se você foi enganada no passado, esta carta pode te trazer alívio. No entanto, se você fez algo que prejudicou alguma pessoa, esta carta é um aviso de que a sua punição está a caminho. Mas calma, a Justiça não é insensível. Ela tem certo nível de compaixão e compreensão. Então, esteja pronto para assumir a responsabilidade por seus atos, mas saiba que as consequências serão justas e sem preconceitos. Esta carta também surge para indicar que você irá passar por um momento em que deverá fazer uma decisão importante que terá repercussões na sua vida a longo prazo.",
    negative: "Se este arcano surge na posição invertida, ele pode estar mostrando que você está vivendo em negação. Você precisa aceitar as consequências de suas escolhas! Não fuja da sua responsabilidade. Também pode indicar que você fez algo errado que ainda está em sigilo. Você tem duas escolhas: manter a situação oculta e esperar que ninguém descubra ou assumir a responsabilidade pelos seus erros. Normalmente, quando assumimos nossos erros e tentamos corrigi-los, nos livramos da culpa e da vergonha e aprendemos a tomar melhores decisões. No entanto, qualquer que seja a sua escolha, faça-a ciente de que você precisará conviver com a sua consciência.",
    image: "/assets/images/justica.jpg",
    inverted: false,
  },
  {
    id: 20,
    name: "Os Enamorados",
    positive: "Apesar de ter o significado primário de harmonia, atratividade e perfeição da relação, a carta Os Enamorados no Tarot não fala apenas sobre romances. Na verdade, esta carta indica que o consulente terá que fazer uma escolha entre coisas opostas e mutuamente exclusivas. Esta será uma escolha importante que você deverá refletir com cuidado antes de tomar qualquer decisão. Provavelmente você enfrentará internamente um dilema moral e precisará considerar todas as consequências antes de agir. Não deixe sentimentos negativos como o medo, a culpa, a preocupação ou a vergonha interferirem na sua escolha. Durante a tomada dessa decisão também é interessante pensar sobre o que você considera importante na sua vida e o que não te acrescenta nada. Tente ser o mais honesta(o) possível consigo mesma(o).",
    negative: "Quando este arcano surge em uma leitura na posição invertida, ele aponta para conflitos internos e externos com os quais você deve estar lidando ou irá lidar. É o momento ideal para refletir sobre seus pensamentos de culpa e tentar agir de forma a amenizar esse sentimento. Também pense em seus valores pessoais e crenças para garantir que eles estejam alinhados com a pessoa que você deseja se tornar na vida. Outra interpretação para esta carta na posição invertida é a falta de comunicação. Pode ser que a comunicação não esteja fluindo entre você e seu(sua) parceiro(a), ou colega de trabalho ou ainda alguém da família e isto está trazendo desequilíbrio para a sua vida. Esta carta invertida ainda pode indicar que você está fugindo das responsabilidades que são consequências de suas ações e escolhas. Não culpe os outros pelas decisões que você mesma tomou.",
    image: "/assets/images/enamorado.jpg",
    inverted: false,
  },
  {
    id: 21,
    name: "O Papa",
    positive: "A carta O Papa no Tarot representa os valores e crenças espirituais estabelecidos. É necessário que você aprenda sobre seus próprios valores antes de fazer qualquer escolha. O conselho da carta é para você procurar um professor, um mentor ou um guia para ensiná-la sobre valores e crenças espirituais de maneira estruturada. Caso seja você a(o) portadora(or) da sabedoria que domina um campo específico de estudo, a carta pede para que você assuma o papel de professora(or) e ensine outras pessoas. Dessa forma, você honra e reconhece sua responsabilidade em compartilhar todo o conhecimento adquirido em sua vida. Quando o Sumo Sacerdote no Tarot surge em uma leitura, ele indica que você deseja seguir vivendo dentro dos seus limites. Você não está disposta a se arriscar ou a oferecer ideias inovadoras.",
    negative: "Se o Papa surgir na posição invertida, ele vem para te lembrar de que você é sua(seu) própria(o) professora(or). Siga seu próprio caminho levando em consideração toda a sabedoria que existe dentro de você. É perda de tempo buscar as respostas que procura em fontes exteriores. Confie em si mesma(o) e explore seu conhecimento interior. Você não precisa da aprovação externa para ter sucesso. Você já está pronta(o) para seguir sozinha(o) e fazer do seu jeito. Outra interpretação para O Papa invertido é a de que você quer romper com tudo o que está estabelecido. Você não aceita mais as tradições rígidas estabelecidas pela sociedade e está pronta(o) para testar suas próprias ideias.",
    image: "/assets/images/o_papa.jpg",
    inverted: false,
  },
  {
    id: 22,
    name: "O Imperador",
    positive: "O Imperador no Tarot pode indicar que você está adotando um papel paternal na vida de alguém, seja você homem ou mulher. Provavelmente, você se sente responsável por cuidar da sua família, defende-a e leva o pão para dentro de casa. Seus familiares confiam em sua estabilidade e segurança. Em troca, você exige respeito e autoridade. Ser reconhecida(o) é algo muito importante para você. O papel de liderança é o que te faz mais feliz. Você é uma(um) líder justa(o), que governa com mão firme. Você sabe muito bem onde quer chegar e organiza as pessoas ao seu redor para te ajudar a chegar ao seu objetivo, que provavelmente irá beneficiar a todos. Você até escuta os conselhos que te dão, mas a decisão final é sempre tomada por você. A carta O Imperador no Tarot também significa conhecimento e experiência. Ou seja, você já apanhou muito da vida, mas todas as situações que enfrentou, sejam elas boas ou ruins, lhe trouxeram muito aprendizado. Você gosta de orientar as pessoas para que não cometam os mesmos erros que você e possam crescer na vida. Só tome cuidado com a sua vontade de querer controlar tudo. Nem sempre as coisas dependem da gente ou saem como gostaríamos.",
    negative: "Quando O Imperador surge na posição invertida, ele pede para que você avalie o seu comportamento. Pode ser que você esteja agindo de forma autoritária, querendo controlar tudo, inclusive as pessoas ao seu redor. Busque mudar sua forma de agir. Seja uma(um) líder inspiradora(or), que permite que as pessoas possam contribuir com o trabalho de forma construtiva. Outra interpretação para O Imperador invertido é a de que alguém próximo de você esteja agindo dessa maneira, abusando do poder e fazendo com que você se sinta coagida e impotente. Este arcano também pode indicar que as pessoas te admiram e a veem como uma líder. Mesmo que você prefira se esconder nas sombras e fugir dos holofotes, há outras maneiras de compartilhar seu conhecimento com o mundo, como escrevendo um livro ou treinando pessoas. O Imperador invertido pode ainda ser um sinal de que você não está tendo disciplina o suficiente para alcançar resultados reais. Trace um plano, crie uma rotina para se apoiar e se dedique para cumpri-la.",
    image: "/assets/images/imperador.jpg",
    inverted: false,
  },

  ]);

  getCards(){
    return this.cards.getValue();
  }
  getCardsStream(){
    return this.cards.asObservable();
  }

  getById(id: number){
    const card = this.getCards().find((c) => c.id === id);
    return card;
  }
  invertedCard(id: number){
    this.getCards().map((c) =>{
      if(c.id === id){
        c.inverted = true;
      }
    })
    this.cards.next(this.getCards());

  }
}
