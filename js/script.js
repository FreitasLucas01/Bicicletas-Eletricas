// LINKS SELECIONADOS SUBLINHADOS PERMANENTEMENTE
const links = document.querySelectorAll(".header-menu a");

links.forEach((itens) => {
    if(location.href.includes(itens.href)){
        itens.classList.add("ativo")
    }
})


// BOTÕES COM DIRECIONAMENTO DIRETO AO PRODUTO ESCOLHIDO
const parametros = new URLSearchParams(location.search)

parametros.forEach((itens) => {
    const id = document.getElementById(itens)
    if(id){
        id.checked = true
    }
})


// PERGUNTAS E RESPOSTAS EM SEGUROS
const buttons = document.querySelectorAll(".perguntas-lista button")

buttons.forEach((perguntas) => {
    perguntas.addEventListener("click" , (e) => {
        const duvidas = e.target.getAttribute("aria-controls")
        const respostas = document.getElementById(duvidas)
        
        respostas.classList.toggle("ativa")
        const classeAtiva = respostas.classList.contains("ativa")
        perguntas.setAttribute("aria-expanded" , classeAtiva)
    })
})


// GALERIA DE IMAGENS DAS BICICLETAS
const bicicletas = document.querySelectorAll(".bicicleta-imagens img")
const container = document.querySelector(".bicicleta-imagens")

bicicletas.forEach((bikes) => {
    bikes.addEventListener("click" , (e) => {
        const mediaQuery = matchMedia("(min-width: 1000px)").matches
        if(mediaQuery){
        container.prepend(e.target)
        }
    })
})