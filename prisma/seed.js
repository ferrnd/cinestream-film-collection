import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");

    const generosData = [
        "Terror",
        "Suspense",
        "Romance",
        "Ação",
        "Comédia",
        "Drama",
        "Ficção Científica",
        "Animação",
        "Aventura",
        "Fantasia"
    ];

    const generoMap = {};

    for (let nome of generosData) {
        const genero = await prisma.genero.create({ data: { nome } });
        generoMap[nome] = genero.id;
    }

    const streams = [

        // Filmes

        { nome: "Django Livre", descricao: "Um escravo liberto busca vingança contra um fazendeiro cruel.", classificacao: "18+", anoLancamento: 2012, genero: "Ação" },
        { nome: "Ilha do Medo", descricao: "Dois agentes federais investigam o desaparecimento de uma paciente em um hospital psiquiátrico isolado.", classificacao: "16+", anoLancamento: 2010, genero: "Suspense" },
        { nome: "Clube da Luta", descricao: "Um homem insatisfeito com sua vida material cria um clube secreto de luta com um vendedor de sabonetes excêntrico.", classificacao: "18+", anoLancamento: 1999, genero: "Drama" },
        { nome: "O Poderoso Chefão", descricao: "O patriarca da família Corleone tenta transferir o controle de seu império secreto para seu filho relutante.", classificacao: "16+", anoLancamento: 1972, genero: "Drama" },
        { nome: "Forrest Gump: O Contador de Histórias", descricao: "A vida extraordinária de um homem simples que testemunha e influencia eventos importantes da história americana.", classificacao: "12+", anoLancamento: 1994, genero: "Drama" },
        { nome: "Matrix", descricao: "Um programador de computador descobre que a realidade é uma simulação controlada por máquinas.", classificacao: "14+", anoLancamento: 1999, genero: "Ficção Científica" },
        { nome: "Gladiador", descricao: "Um general romano busca vingança contra o imperador corrupto que assassinou sua família e o enviou à escravidão.", classificacao: "16+", anoLancamento: 2000, genero: "Ação" },
        { nome: "Titanic", descricao: "Um épico de romance e desastre sobre um artista pobre e uma jovem aristocrata a bordo do navio Titanic.", classificacao: "12+", anoLancamento: 1997, genero: "Romance" },
        { nome: "Interestelar", descricao: "Exploradores intergalácticos viajam por um buraco de minhoca para garantir a sobrevivência da humanidade.", classificacao: "12+", anoLancamento: 2014, genero: "Ficção Científica" },
        { nome: "A Lista de Schindler", descricao: "Um empresário alemão salva mais de mil refugiados judeus do Holocausto.", classificacao: "14+", anoLancamento: 1993, genero: "Drama" },
        { nome: "A Origem", descricao: "Ladrões especializados em invadir sonhos para roubar segredos corporativos.", classificacao: "14+", anoLancamento: 2010, genero: "Suspense" },
        { nome: "Pulp Fiction: Tempo de Violência", descricao: "A vida de dois assassinos de aluguel, um pugilista e gângsteres se cruzam em Los Angeles.", classificacao: "18+", anoLancamento: 1994, genero: "Ação" },
        { nome: "O Senhor dos Anéis: A Sociedade do Anel", descricao: "Uma jornada para destruir um anel maligno que pode escravizar toda a Terra Média.", classificacao: "12+", anoLancamento: 2001, genero: "Fantasia" },
        { nome: "Star Wars: Uma Nova Esperança", descricao: "Luke Skywalker se junta a um Cavaleiro Jedi, um piloto fanfarrão e dois dróides para salvar a galáxia.", classificacao: "10+", anoLancamento: 1977, genero: "Aventura" },
        { nome: "Vingadores: Ultimato", descricao: "Os heróis restantes se unem para reverter os estragos causados pelo vilão Thanos.", classificacao: "12+", anoLancamento: 2019, genero: "Ação" },
        { nome: "O Silêncio dos Inocentes", descricao: "Uma jovem agente do FBI busca a ajuda de um assassino e canibal aprisionado para capturar um serial killer.", classificacao: "18+", anoLancamento: 1991, genero: "Terror" },
        { nome: "Parasita", descricao: "Uma família pobre se infiltra na vida de uma família rica em busca de um futuro melhor.", classificacao: "16+", anoLancamento: 2019, genero: "Drama" },
        { nome: "O Labirinto do Fauno", descricao: "Uma jovem sonhadora escapa para um mundo de fantasia para lidar com as realidades de sua vida.", classificacao: "16+", anoLancamento: 2006, genero: "Fantasia" },
        { nome: "De Volta Para o Futuro", descricao: "Um adolescente viaja 30 anos no passado em um carro DeLorean transformado em máquina do tempo.", classificacao: "Livre", anoLancamento: 1985, genero: "Ficção Científica" },
        { nome: "E.T. - O Extraterrestre", descricao: "Um garoto faz amizade com um alienígena abandonado e tenta ajudá-lo a voltar para casa.", classificacao: "Livre", anoLancamento: 1982, genero: "Ficção Científica" },
        { nome: "Alien, O Oitavo Passageiro", descricao: "A tripulação de uma nave espacial encontra uma criatura alienígena a bordo.", classificacao: "16+", anoLancamento: 1979, genero: "Terror" },
        { nome: "Psicose", descricao: "Uma secretária foge com dinheiro roubado e se hospeda no motel de um homem perturbado.", classificacao: "14+", anoLancamento: 1960, genero: "Suspense" },
        { nome: "A Viagem de Chihiro", descricao: "Uma menina é transportada para um mundo secreto habitado por deuses, bruxas e espíritos.", classificacao: "Livre", anoLancamento: 2001, genero: "Animação" },
        { nome: "Cidade de Deus", descricao: "O crescimento do crime organizado em uma favela do Rio de Janeiro, narrado por um jovem fotógrafo.", classificacao: "18+", anoLancamento: 2002, genero: "Drama" },
        { nome: "O Grande Hotel Budapeste", descricao: "Um concierge de hotel e seu jovem protegido se envolvem no roubo de uma pintura valiosa.", classificacao: "14+", anoLancamento: 2014, genero: "Comédia" },
        { nome: "Mad Max: Estrada da Fúria", descricao: "Em um futuro pós-apocalíptico, uma imperatriz se rebela contra um tirano em uma fuga de carro.", classificacao: "16+", anoLancamento: 2015, genero: "Ação" },
        { nome: "Bastardos Inglórios", descricao: "Soldados judeus-americanos são enviados em uma missão para matar líderes nazistas.", classificacao: "18+", anoLancamento: 2009, genero: "Ação" },
        { nome: "O Show de Truman", descricao: "A vida de um homem é secretamente transmitida em um reality show 24 horas por dia.", classificacao: "Livre", anoLancamento: 1998, genero: "Drama" },
        { nome: "Donnie Darko", descricao: "Um adolescente perturbado recebe a visita de um coelho gigante que lhe informa sobre o fim do mundo.", classificacao: "16+", anoLancamento: 2001, genero: "Ficção Científica" },
        { nome: "À Espera de um Milagre", descricao: "A vida dos guardas de uma prisão de segurança máxima nos anos 30 e um preso com poderes misteriosos.", classificacao: "14+", anoLancamento: 1999, genero: "Drama" },

        // Animes

        { nome: "Naruto", descricao: "A jornada de Naruto Uzumaki para se tornar o Hokage e obter reconhecimento.", classificacao: "12+", anoLancamento: 2002, genero: "Ação" },
        { nome: "Vinland Saga", descricao: "A história de Thorfinn, um jovem viking em busca de vingança pela morte de seu pai.", classificacao: "16+", anoLancamento: 2019, genero: "Aventura" },
        { nome: "The Fragrant Flower", descricao: "Uma história sobre um casal em um mundo de ação e romance, enfrentando desafios.", classificacao: "12+", anoLancamento: 2018, genero: "Romance" },
        { nome: "Attack on Titan", descricao: "A humanidade luta pela sobrevivência contra gigantes humanoides devoradores de homens.", classificacao: "16+", anoLancamento: 2013, genero: "Ação" },
        { nome: "Death Note", descricao: "Um estudante encontra um caderno que lhe permite matar qualquer pessoa cujo nome escreva.", classificacao: "16+", anoLancamento: 2006, genero: "Suspense" },
        { nome: "One Piece", descricao: "Aventura de Monkey D. Luffy e sua tripulação em busca do tesouro One Piece.", classificacao: "12+", anoLancamento: 1999, genero: "Aventura" },
        { nome: "Fullmetal Alchemist: Brotherhood", descricao: "Dois irmãos alquimistas buscam a Pedra Filosofal para restaurar seus corpos.", classificacao: "14+", anoLancamento: 2009, genero: "Ação" },
        { nome: "Dragon Ball Z", descricao: "Goku e seus amigos defendem a Terra contra vilões intergalácticos e outras ameaças.", classificacao: "10+", anoLancamento: 1989, genero: "Ação" },
        { nome: "My Hero Academia", descricao: "Jovens com superpoderes (Quirks) treinam para se tornarem heróis profissionais.", classificacao: "12+", anoLancamento: 2016, genero: "Ação" },
        { nome: "Demon Slayer: Kimetsu no Yaiba", descricao: "Tanjiro se torna um caçador de demônios para vingar sua família e curar sua irmã.", classificacao: "14+", anoLancamento: 2019, genero: "Ação" },
        { nome: "Jujutsu Kaisen", descricao: "Um estudante se junta a uma organização secreta de feiticeiros Jujutsu para combater maldições.", classificacao: "16+", anoLancamento: 2020, genero: "Ação" },
        { nome: "Hunter x Hunter", descricao: "Gon Freecss sai em uma jornada para se tornar um Hunter e encontrar seu pai.", classificacao: "14+", anoLancamento: 2011, genero: "Aventura" },
        { nome: "Cowboy Bebop", descricao: "Um grupo de caçadores de recompensas viaja pela galáxia a bordo da nave Bebop.", classificacao: "14+", anoLancamento: 1998, genero: "Ficção Científica" },
        { nome: "Neon Genesis Evangelion", descricao: "Adolescentes pilotam robôs gigantes para lutar contra seres misteriosos conhecidos como Anjos.", classificacao: "16+", anoLancamento: 1995, genero: "Ficção Científica" },
        { nome: "Steins;Gate", descricao: "Um grupo de amigos descobre acidentalmente como enviar mensagens ao passado.", classificacao: "16+", anoLancamento: 2011, genero: "Ficção Científica" },
        { nome: "Spy x Family", descricao: "Uma espiã, uma assassina e uma telepata formam uma família falsa para cumprir uma missão.", classificacao: "12+", anoLancamento: 2022, genero: "Comédia" },
        { nome: "Chainsaw Man", descricao: "Um jovem se torna um híbrido de humano e demônio motosserra para pagar suas dívidas.", classificacao: "18+", anoLancamento: 2022, genero: "Terror" },
        { nome: "Haikyu!!", descricao: "Um garoto determinado se junta a um clube de vôlei para se tornar um grande jogador.", classificacao: "Livre", anoLancamento: 2014, genero: "Drama" },
        { nome: "Mob Psycho 100", descricao: "Um estudante com poderes psíquicos tenta viver uma vida normal enquanto lida com suas emoções.", classificacao: "14+", anoLancamento: 2016, genero: "Ação" },
        { nome: "Code Geass: Lelouch of the Rebellion", descricao: "Um príncipe exilado obtém um poder misterioso e decide destruir o império que o rejeitou.", classificacao: "14+", anoLancamento: 2006, genero: "Ação" },
        { nome: "One Punch Man", descricao: "Um herói que pode derrotar qualquer inimigo com um único soco busca um adversário digno.", classificacao: "14+", anoLancamento: 2015, genero: "Comédia" },
        { nome: "Your Lie in April", descricao: "Um ex-prodígio do piano redescobre a música após conhecer uma violinista alegre e destemida.", classificacao: "12+", anoLancamento: 2014, genero: "Romance" },
        { nome: "A Viagem de Chihiro (Anime)", descricao: "Uma menina é transportada para um mundo secreto habitado por deuses, bruxas e espíritos. (Anime)", classificacao: "Livre", anoLancamento: 2001, genero: "Fantasia" },
        { nome: "Samurai Champloo", descricao: "Dois espadachins e uma garçonete viajam em busca de um samurai que cheira a girassóis.", classificacao: "16+", anoLancamento: 2004, genero: "Aventura" },
        { nome: "Bleach", descricao: "Um adolescente obtém os poderes de um Shinigami e deve defender o mundo dos espíritos malignos.", classificacao: "14+", anoLancamento: 2004, genero: "Ação" },
        { nome: "Yu Yu Hakusho", descricao: "Um delinquente juvenil morre salvando uma criança e se torna um Detetive Espiritual.", classificacao: "14+", anoLancamento: 1992, genero: "Ação" },
        { nome: "Re:Zero - Starting Life in Another World", descricao: "Um garoto é transportado para um mundo de fantasia e ganha a habilidade de voltar no tempo após a morte.", classificacao: "16+", anoLancamento: 2016, genero: "Fantasia" },
        { nome: "Black Clover", descricao: "Um órfão que não tem magia aspira a se tornar o Rei Mago em um mundo onde a magia é tudo.", classificacao: "12+", anoLancamento: 2017, genero: "Ação" },
        { nome: "Kaguya-sama: Love Is War", descricao: "Dois prodígios da escola tentam fazer o outro se confessar primeiro, considerando o amor uma guerra.", classificacao: "12+", anoLancamento: 2019, genero: "Comédia" },
        { nome: "Dr. Stone", descricao: "Depois que a humanidade é petrificada, um gênio da ciência acorda e tenta reconstruir a civilização.", classificacao: "12+", anoLancamento: 2019, genero: "Ficção Científica" },
        { nome: "Violet Evergarden", descricao: "Uma ex-soldado tenta entender o significado de 'amor' enquanto trabalha como escritora de cartas.", classificacao: "12+", anoLancamento: 2018, genero: "Drama" },

        // Desenhos Animados

        { nome: "Clarencio O Otimista", descricao: "As aventuras diárias e otimistas de Clarencio e seus melhores amigos.", classificacao: "Livre", anoLancamento: 2014, genero: "Comédia" },
        { nome: "Hora de Aventura", descricao: "Um garoto e seu cão mágico embarcam em aventuras na Terra de Ooo.", classificacao: "Livre", anoLancamento: 2010, genero: "Fantasia" },
        { nome: "Apenas Um Show", descricao: "As desventuras surrealistas de um gaio e um guaxinim que trabalham em um parque.", classificacao: "10+", anoLancamento: 2010, genero: "Comédia" },
        { nome: "Rick and Morty", descricao: "Um cientista gênio e seu neto viajam por dimensões e se metem em problemas intergalácticos.", classificacao: "16+", anoLancamento: 2013, genero: "Ficção Científica" },
        { nome: "Titio Avô", descricao: "Um ser mágico viaja pelo mundo ajudando crianças a resolverem problemas com soluções bizarras.", classificacao: "Livre", anoLancamento: 2013, genero: "Comédia" },
        { nome: "Irmão do Jorel", descricao: "Um garoto tenta viver sua vida à sombra de seu popular irmão, Jorel.", classificacao: "Livre", anoLancamento: 2014, genero: "Comédia" },
        { nome: "Os Simpsons", descricao: "A sátira da vida da classe média americana através da família Simpson.", classificacao: "12+", anoLancamento: 1989, genero: "Comédia" },
        { nome: "Family Guy", descricao: "A vida de uma família disfuncional com um humor controverso.", classificacao: "16+", anoLancamento: 1999, genero: "Comédia" },
        { nome: "South Park", descricao: "As aventuras de quatro garotos e suas críticas satíricas à sociedade e eventos atuais.", classificacao: "16+", anoLancamento: 1997, genero: "Comédia" },
        { nome: "O Incrível Mundo de Gumball", descricao: "A vida de um gato azul e seu irmão peixe de estimação, Gumball e Darwin.", classificacao: "Livre", anoLancamento: 2011, genero: "Comédia" },
        { nome: "Bob Esponja Calça Quadrada", descricao: "As aventuras subaquáticas de uma esponja do mar e seus amigos.", classificacao: "Livre", anoLancamento: 1999, genero: "Comédia" },
        { nome: "Avatar: A Lenda de Aang", descricao: "O último mestre do ar precisa salvar o mundo de uma guerra com seus amigos.", classificacao: "Livre", anoLancamento: 2005, genero: "Aventura" },
        { nome: "Scooby-Doo, Cadê Você?", descricao: "Quatro adolescentes e um cão medroso resolvem mistérios sobrenaturais.", classificacao: "Livre", anoLancamento: 1969, genero: "Mistério" },
        { nome: "Pokémon", descricao: "Ash Ketchum viaja para se tornar um Mestre Pokémon e capturar todos os monstros.", classificacao: "Livre", anoLancamento: 1997, genero: "Aventura" },
        { nome: "As Meninas Superpoderosas", descricao: "Três meninas com superpoderes protegem a cidade de Townsville de vilões.", classificacao: "Livre", anoLancamento: 1998, genero: "Ação" },
        { nome: "Du, Dudu e Edu", descricao: "Três amigos com o mesmo nome tentam ganhar dinheiro para comprar balas de caramelo.", classificacao: "Livre", anoLancamento: 1999, genero: "Comédia" },
        { nome: "Laboratório de Dexter", descricao: "Um garoto gênio esconde um laboratório secreto de seus pais e de sua irmã Dee Dee.", classificacao: "Livre", anoLancamento: 1996, genero: "Ficção Científica" },
        { nome: "Pica-Pau", descricao: "As travessuras de um pica-pau brincalhão e encrenqueiro.", classificacao: "Livre", anoLancamento: 1940, genero: "Comédia" },
        { nome: "Tom e Jerry", descricao: "As eternas perseguições e brigas entre um gato e um rato.", classificacao: "Livre", anoLancamento: 1940, genero: "Comédia" },
        { nome: "Gravity Falls: Um Verão de Mistérios", descricao: "Dois irmãos passam o verão resolvendo mistérios paranormais em uma cidade remota.", classificacao: "10+", anoLancamento: 2012, genero: "Mistério" },
        { nome: "Steven Universe", descricao: "Um garoto semi-humano com poderes mágicos ajuda as 'Crystal Gems' a proteger o mundo.", classificacao: "Livre", anoLancamento: 2013, genero: "Fantasia" },
        { nome: "Samurai Jack", descricao: "Um samurai é enviado para o futuro e luta para voltar ao seu tempo e derrotar o demônio Aku.", classificacao: "12+", anoLancamento: 2001, genero: "Ação" },
        { nome: "Batman: A Série Animada", descricao: "As aventuras sombrias de Batman enquanto ele combate o crime em Gotham City.", classificacao: "10+", anoLancamento: 1992, genero: "Ação" },
        { nome: "Liga da Justiça", descricao: "Os maiores heróis do universo DC se unem para combater ameaças que um herói sozinho não conseguiria.", classificacao: "10+", anoLancamento: 2001, genero: "Ação" },
        { nome: "She-Ra e as Princesas do Poder", descricao: "Uma órfã descobre uma espada mágica e lidera uma rebelião de princesas contra o mal.", classificacao: "Livre", anoLancamento: 2018, genero: "Fantasia" },
        { nome: "Primal", descricao: "Um homem das cavernas e um T-Rex se unem para sobreviver em um mundo pré-histórico hostil.", classificacao: "16+", anoLancamento: 2019, genero: "Aventura" },
        { nome: "BoJack Horseman", descricao: "Um cavalo astro de sitcoms tenta redescobrir sua vida e lidar com seus problemas pessoais.", classificacao: "16+", anoLancamento: 2014, genero: "Comédia" },
        { nome: "Archer", descricao: "As desventuras de uma agência de espionagem e seu agente egocêntrico.", classificacao: "16+", anoLancamento: 2009, genero: "Comédia" },
        { nome: "Final Space", descricao: "Um astronauta e seu companheiro destrói planetas em uma missão intergaláctica para salvar o universo.", classificacao: "14+", anoLancamento: 2018, genero: "Ficção Científica" },
        { nome: "Over the Garden Wall", descricao: "Dois irmãos se perdem em uma floresta mágica e surreal e tentam encontrar o caminho para casa.", classificacao: "Livre", anoLancamento: 2014, genero: "Fantasia" },

        // Series

        { nome: "You", descricao: "Um jovem carismático se torna obsessivo e stalker por mulheres em sua vida.", classificacao: "16+", anoLancamento: 2018, genero: "Suspense" },
        { nome: "Diários de um Vampiro", descricao: "Uma adolescente se apaixona por dois irmãos vampiros com um passado sombrio.", classificacao: "14+", anoLancamento: 2009, genero: "Fantasia" },
        { nome: "Breaking Bad", descricao: "Um professor de química do ensino médio diagnosticado com câncer começa a produzir metanfetamina.", classificacao: "16+", anoLancamento: 2008, genero: "Drama" },
        { nome: "The Walking Dead", descricao: "Sobreviventes de um apocalipse zumbi buscam um porto seguro, enfrentando mortos e vivos.", classificacao: "16+", anoLancamento: 2010, genero: "Terror" },
        { nome: "Game of Thrones", descricao: "Nove famílias nobres lutam pelo controle das terras de Westeros.", classificacao: "18+", anoLancamento: 2011, genero: "Fantasia" },
        { nome: "Stranger Things", descricao: "Um grupo de crianças investiga o desaparecimento de um amigo e fenômenos sobrenaturais em sua cidade.", classificacao: "14+", anoLancamento: 2016, genero: "Ficção Científica" },
        { nome: "Friends", descricao: "Seis amigos em seus vinte e poucos anos lidam com a vida, o trabalho e os relacionamentos em Manhattan.", classificacao: "12+", anoLancamento: 1994, genero: "Comédia" },
        { nome: "The Office (US)", descricao: "A vida cotidiana de funcionários de escritório através das lentes de um documentário fictício.", classificacao: "12+", anoLancamento: 2005, genero: "Comédia" },
        { nome: "O Gambito da Rainha", descricao: "A ascensão de uma órfã prodígio no mundo do xadrez, enquanto luta contra o vício.", classificacao: "14+", anoLancamento: 2020, genero: "Drama" },
        { nome: "The Crown", descricao: "A história da Rainha Elizabeth II, desde seu casamento até o século XXI.", classificacao: "12+", anoLancamento: 2016, genero: "Drama" },
        { nome: "Peaky Blinders", descricao: "Uma notória família de gângsteres de Birmingham após a Primeira Guerra Mundial.", classificacao: "16+", anoLancamento: 2013, genero: "Drama" },
        { nome: "Black Mirror", descricao: "Série de antologia que explora o lado sombrio da tecnologia moderna e seu impacto na sociedade.", classificacao: "16+", anoLancamento: 2011, genero: "Ficção Científica" },
        { nome: "House of Cards", descricao: "Um congressista e sua esposa buscam vingança contra as pessoas que os traíram.", classificacao: "16+", anoLancamento: 2013, genero: "Drama" },
        { nome: "Lost", descricao: "Os sobreviventes de um acidente de avião em uma ilha misteriosa e cheia de segredos.", classificacao: "14+", anoLancamento: 2004, genero: "Aventura" },
        { nome: "Grey's Anatomy", descricao: "A vida de um grupo de cirurgiões em um hospital de Seattle.", classificacao: "14+", anoLancamento: 2005, genero: "Drama" },
        { nome: "Euphoria", descricao: "A vida de um grupo de adolescentes explorando identidade, trauma, drogas e amizade.", classificacao: "18+", anoLancamento: 2019, genero: "Drama" },
        { nome: "Mindhunter", descricao: "Agentes do FBI desenvolvem técnicas de perfil criminal entrevistando serial killers.", classificacao: "16+", anoLancamento: 2017, genero: "Suspense" },
        { nome: "Dark", descricao: "O desaparecimento de duas crianças expõe os segredos e as ligações temporais de quatro famílias.", classificacao: "16+", anoLancamento: 2017, genero: "Ficção Científica" },
        { nome: "The Boys", descricao: "Vigilantes lutam contra super-heróis corruptos que abusam de seus poderes.", classificacao: "18+", anoLancamento: 2019, genero: "Ação" },
        { nome: "Ozark", descricao: "Um consultor financeiro lava dinheiro para um cartel de drogas em Ozarks.", classificacao: "16+", anoLancamento: 2017, genero: "Suspense" },
        { nome: "La Casa de Papel", descricao: "Um grupo de ladrões realiza um assalto à Casa da Moeda da Espanha.", classificacao: "16+", anoLancamento: 2017, genero: "Ação" },
        { nome: "The Witcher", descricao: "Um caçador de monstros solitário luta para encontrar seu lugar em um mundo onde as pessoas são mais perversas que as feras.", classificacao: "16+", anoLancamento: 2019, genero: "Fantasia" },
        { nome: "Brooklyn Nine-Nine", descricao: "Um detetive imaturo e talentoso e sua equipe se ajustam ao novo capitão rigoroso.", classificacao: "12+", anoLancamento: 2013, genero: "Comédia" },
        { nome: "Better Call Saul", descricao: "A história de origem do advogado Jimmy McGill antes de se tornar Saul Goodman.", classificacao: "16+", anoLancamento: 2015, genero: "Drama" },
        { nome: "Supernatural", descricao: "Dois irmãos viajam pelos EUA caçando demônios, fantasmas e outras criaturas sobrenaturais.", classificacao: "14+", anoLancamento: 2005, genero: "Fantasia" },
        { nome: "The Handmaid's Tale", descricao: "Em um futuro distópico, uma mulher é forçada a ser concubina em uma sociedade teocrática.", classificacao: "18+", anoLancamento: 2017, genero: "Drama" },
        { nome: "True Detective", descricao: "Série de antologia com diferentes detetives e casos em cada temporada.", classificacao: "18+", anoLancamento: 2014, genero: "Suspense" },
        { nome: "Westworld", descricao: "Um parque de diversões futurista povoado por androides permite que os visitantes vivam suas fantasias.", classificacao: "16+", anoLancamento: 2016, genero: "Ficção Científica" },
        { nome: "The Umbrella Academy", descricao: "Sete irmãos adotados com superpoderes se reúnem após a morte do pai para salvar o mundo.", classificacao: "14+", anoLancamento: 2019, genero: "Aventura" },
        { nome: "Dahmer: Um Canibal Americano", descricao: "Uma série que explora a vida e os crimes do infame serial killer Jeffrey Dahmer.", classificacao: "18+", anoLancamento: 2022, genero: "Terror" },
    ];

    for (let stream of streams) {
        await prisma.stream.create({
            data: {
                nome: stream.nome,
                descricao: stream.descricao,
                classificacao: stream.classificacao,
                anoLancamento: stream.anoLancamento,
                generoId: generoMap[stream.genero]
            }
        });
    }

    console.log("Database seeded successfully! Total de 120 streams inseridos.");
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });