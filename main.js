const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector('#btnTry')


const phrases = [
    "A sorte favorece os corajosos.",
    "Grandes realizações requerem tempo e paciência.",
    "Você é capaz de coisas incríveis.",
    "Oportunidades não surgem. Você as cria.",
    "Sua criatividade trará sucesso.",
    "O fracasso é o tempero que dá sabor ao sucesso.",
    "O sorriso é a chave que se encaixa na fechadura do coração de todos.",
    "Não deixe para amanhã o que você pode fazer hoje.",
    "Seja a mudança que você deseja ver no mundo.",
    "Acredite em si mesmo e em todas as suas capacidades.",
    "A felicidade não é um destino, é uma maneira de viajar.",
    "Você está prestes a embarcar em uma jornada emocionante.",
    "A paciência é uma virtude recompensada.",
    "Uma atitude positiva pode fazer milagres.",
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Cada dia é uma nova oportunidade para ser feliz.",
    "Grandes coisas estão reservadas para você.",
    "A gratidão é a memória do coração.",
    "Tudo o que você precisa já está dentro de você.",
    "A melhor forma de prever o futuro é criá-lo.",
    "Pequenos atos de bondade podem ter um grande impacto.",
    "Você tem a força para superar qualquer desafio.",
    "O otimismo é a fé que leva à realização.",
    "A perseverança é a mãe da boa sorte.",
    "O amor é a resposta para todos os problemas.",
    "Acredite que você pode e você estará no meio do caminho.",
    "Os desafios são o que fazem a vida interessante.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você é mais forte do que pensa.",
    "A bondade é o óleo que elimina o atrito da vida.",
    "A simplicidade é a sofisticação máxima.",
    "O que você procura está procurando por você.",
    "A vida começa onde sua zona de conforto termina.",
    "A verdadeira felicidade está em fazer os outros felizes.",
    "Nunca é tarde para ser o que você poderia ter sido.",
    "A alegria compartilhada é uma alegria dobrada.",
    "A coragem é a resistência ao medo, domínio do medo, não ausência de medo.",
    "A beleza está nos olhos de quem vê.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "Não espere por uma oportunidade, crie-a.",
    "Seja a razão pela qual alguém sorri hoje.",
    "A melhor vingança é um sucesso estrondoso.",
    "A paz vem de dentro. Não a procure fora.",
    "Você é o autor da sua própria história.",
    "O caminho pode ser longo, mas a recompensa vale a pena.",
    "A vida é curta. Faça valer a pena.",
    "Seja gentil sempre que possível. Sempre é possível.",
    "A sabedoria é a recompensa por uma vida bem vivida."
];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase() {
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random() * (phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event) {
    event.preventDefault()
    toggleScreen()
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        toggleScreen()
    }
}