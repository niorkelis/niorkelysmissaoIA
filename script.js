const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de café?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "Sim"
            },
            {
                texto: "sim!",
                afirmacao: "sim."
            }
        ]
    },
    {
        enunciado: "Cual e a diferençã entre um gato e um cachorro?",
        alternativas: [
            {
                texto: "Gatos são mais independentes e tranquilos.",
                afirmacao: "depende da pessoa ."
            },
            {
                texto: "Cachorros são mais fáceis de treinar e costumam ser mais protetores.",
                afirmacao: "depende da estimação da pessoa ."
            }
        ]
    },
    {
        enunciado: "Você prefere praia ou montanha?",
        alternativas: [
            {
                texto: "praia.",
                afirmacao: "gosto de mais ."
            },
            {
                texto: "montanha.",
                afirmacao: "seria uma boa opçã."
            }
        ]
    },
    {
        enunciado: "Prefere chá ou café?",
        alternativas: [
            {
                texto: "chá.",
                afirmacao: "de pende do gosto da pessoa ."
            },
            {
                texto: "café.",
                afirmacao: "a pessoa e quem escolhe!"
            }
        ]
    },
    {
        enunciado: "Prefere calor ou frio? ",
        alternativas: [
            {
                texto: "frio.",
                // afirmacao: "o frio e bom, mais só cuando e calmo ."
            },
            {
                texto: " calor.",
                afirmacao: " e agradavel em alguns momentos ."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2025...";
    textoResultado.textContent = comfirmação ;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
