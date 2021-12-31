document.querySelector('.menu-btn').addEventListener('click', ()=> {
document.querySelector('.nav-menu').classList.toggle('show');
})

document.querySelector('#slideshow').addEventListener('mouseover', ()=> {
    document.querySelector('.texto-noticia-principal').setAttribute("style", "transform: translateY(-40px);opacity:100%; z-index: 2");
/*     document.querySelector('.barra').setAttribute("style", "opacity:100%");
 */ })
 document.querySelector('#slideshow').addEventListener('mouseout', ()=> {
    document.querySelector('.texto-noticia-principal').setAttribute("style", "transform: translateY(-50px);opacity:0%; z-index: -1");
/*     document.querySelector('.barra').setAttribute("style", "opacity:0%");
 */ })

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});

/* SLIDER IMAGENES */
addEventListener('DOMContentLoaded', ()=>{
   const imagenes =['img/newprincipal.jpg','img/newprincipal2.jpg',
                     'img/newprincipal3.jpg','img/newprincipal4.jpg']

   const texto =['Protestas en Colombia','Cali campeón!',
                     'Cartel de los certificados','No le compren ni una sola boleta']
                  
   const piedefoto =['En Colombia, decenas de personas han sido reportadas como desaparecidas en el marco de las movilizaciones del Paro Nacional. ',
                     'De la mano de Dudamel, el conjunto azucarero alza su decimo titulo',
                     'El ministerio de salud reportó venta de certificados covid-19 desde los 100 mil pesos',
                     'Polemicas declaraciones del alcalde de Cali sobre el concierto de J Balvin en la ciudad']
   let i =1
   const img1 = document.querySelector('#img1')
   const img2 = document.querySelector('#img2')
   const titulo = document.querySelector('#titulo')
   const pietexto = document.querySelector('#piedefoto')
   const divindicadores = document.querySelector('#indicadores')

   
   for (let index= 0; index < imagenes.length; index++){
      const div=document.createElement('div')
      div.classList.add('circles')
      div.id= index
      divindicadores.appendChild(div)
      div.addEventListener('click', ()=> {
         console.log("hola");
         i=div.id;

         titulo.textContent=texto[i]
      pietexto.textContent=piedefoto[i]
      img2.src = imagenes[i]
      const circulo_actual= Array.from(circulos).find(el => el.id ==i)
      Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
      circulo_actual.classList.add('resaltado')

      img2.classList.add('active')
      i++
      if(i==imagenes.length){
         i=0
      }
      img1.src = img2.src
         img2.classList.remove('active')

      })
   }

   titulo.textContent=texto[0]
   pietexto.textContent=piedefoto[0]
   img1.src =imagenes[0]
   const circulos= document.querySelectorAll('.circles')
   circulos[0].classList.add('resaltado')

   const slideshow = ()=>{
      titulo.textContent=texto[i]
      pietexto.textContent=piedefoto[i]
      img2.src = imagenes[i]
      const circulo_actual= Array.from(circulos).find(el => el.id ==i)
      Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
      circulo_actual.classList.add('resaltado')

      img2.classList.add('active')
      i++
      if(i==imagenes.length){
         i=0
      }

      setTimeout(() =>{
         img1.src = img2.src
         img2.classList.remove('active')
      }, 100)
   }
   setInterval(slideshow,5000)

})

