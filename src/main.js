// recolhendo navbar no mobile
var navCollapse = document.querySelector('.navbar-collapse')
var navLink = document.querySelectorAll('.nav-link')

navLink.forEach((item) => {
    item.addEventListener('click', () => {
        navCollapse.classList.contains('.collapse')
            ? navCollapse.classList.add('show')
            : navCollapse.classList.remove('show')
    })
})

// troca a class active dos elementos html
navLink.forEach((element) => {
    element.addEventListener('click', () => {
        // limpando active de todos os elementos assim que entra no eventListener
        navLink.forEach((e) => {
            e.classList.remove('active')
        })
        if (!element.classList.contains('active')) {
            element.classList.add('active')
        }
    })
})

// animando todos os items que possuirem o atributo "data-anime"
// criando array de items
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    // identificando topo da tela e realizando calculo para renderizar a animacao
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    // varrendo array "item", verificando se o elemento esta no topo da tela
    item.forEach((Element) => {
        // se o elemento estiver no topo da tela adciona a class "animate" ao elemento
        if (windowTop > Element.offsetTop) {
            Element.classList.add("animate");
        } else {
            Element.classList.remove("animate");
        }
    });
}

animeScroll()

window.addEventListener("scroll", () => {
    animeScroll();
});
