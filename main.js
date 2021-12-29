document.querySelector('.menu-btn').addEventListener('click', ()=> {
document.querySelector('.nav-menu').classList.toggle('show');
})

document.querySelector('.showcase').addEventListener('mouseover', ()=> {
    document.querySelector('.texto-noticia-principal').setAttribute("style", "transform: translateY(10px);opacity:100%; z-index: 2");
    document.querySelector('.barra').setAttribute("style", "opacity:100%");
 })
 document.querySelector('.showcase').addEventListener('mouseout', ()=> {
    document.querySelector('.texto-noticia-principal').setAttribute("style", "transform: translateY(50px);opacity:0%; z-index: -1");
    document.querySelector('.barra').setAttribute("style", "opacity:0%");
 })

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});


