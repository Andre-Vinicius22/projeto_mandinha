var navCollapse = document.querySelector('.navbar-collapse')
var navLink = document.querySelectorAll('.nav-link')

navLink.forEach((item) => {
    item.addEventListener('click', () => {
        navCollapse.classList.contains('.collapse')
            ? navCollapse.classList.add('show')
            : navCollapse.classList.remove('show')
    })
})
// tornando a navbar sticky
window.onscroll = function () { stickyFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

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
