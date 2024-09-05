const caixaPrincipal    = document.querySelector(".caixa-principal");
const caixaPerguntas    = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado    = document.querySelector(".caixa-resultado");
const textoResultado    = document.querySelector(".texto-resultado");
const perguntas =[
    {
        enunciado : "Qual dos seguintes hábitos contribui mais para a preservação do meio ambiente?",
        alternativas : [
            {
                texto: "Reduzir o consumo de plástico.",
                afirmacao: "Você acredita que pequenas ações individuais podem ter um grande impacto na preservação ambiental."
            },
            {
                texto: "Investir em energia renovável.",
                afirmacao: "Você acredita que o uso de tecnologias sustentáveis é a chave para um futuro mais ecológico."
            }
        ]
    },
    {
        enunciado : "Qual o maior benefício da reciclagem de resíduos?",
        alternativas : [
            {
                texto: "Reduz a quantidade de lixo nos aterros.",
                afirmacao: "Você entende que a reciclagem é crucial para reduzir a poluição e o desperdício."
            },
            {
                texto: "Economiza recursos naturais.",
                afirmacao: "Você vê a reciclagem como uma maneira de conservar os recursos e promover a sustentabilidade."
            }
        ]
    },
    {
        enunciado : "Como você pode contribuir para o combate ao desmatamento?",
        alternativas : [
            {
                texto: "Apoiando organizações que protegem florestas.",
                afirmacao: "Você valoriza o papel de ONGs e movimentos que lutam pela preservação ambiental."
            },
            {
                texto: "Optando por produtos de origem sustentável.",
                afirmacao: "Você acredita que o consumo consciente pode influenciar a preservação das florestas."
        }
    ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    };
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent    = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent    = "";
    mostraAlternativas();
};


function mostraAlternativas(){
    for (const alternativa of perguntas[atual].alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
};
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacao + " ";
    atual++;
    mostraPergunta();
};

mostraPergunta();
function mostraResultado(){
    caixaPerguntas.textContent    = "Conclusão:";
    textoResultado.textContent    = historiaFinal;
    caixaAlternativas.textContent = "";
}
