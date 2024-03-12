let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

let service = document.querySelector("#servicios");
let serviceLeft = document.querySelector(".menu-home")
let servicieMenu = document.querySelector("#left");

let ludics = document.querySelector("#ludics");
let ludicsLeft = document.querySelector(".menu-home ")
let ludicsMenu = document.querySelector("#left");


let menuService = document.getElementById("miElemento1")
let menuService2 = document.getElementById("miElemento2")
let menuService3 = document.getElementById("miElemento3")

let servicioActivo = false;
let ludicsActivo = false;


document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let link = Array.from(document.querySelectorAll('a'));

/* link.forEach((link) => {
    link.addEventListener('mouseover', ()=>{
        innerCursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove('grow');
    })
}) */

link.forEach((link) => {
    link.addEventListener('mouseover', ()=>{
        outerCursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', ()=>{
        outerCursor.classList.remove('grow');
    })
})

function toggleService(){
  servicioActivo = !servicioActivo;
    service.classList.toggle('toggleService');
    serviceLeft.classList.toggle('toggleService');
    servicieMenu.classList.toggle('toggleService');
    menuService.classList.toggle('toggleService');
    

    if (menuService.classList.contains("no-hover")) {
        menuService.classList.remove("no-hover");
      }
    if (menuService2.classList.contains("no-hover")) {
        menuService2.classList.remove("no-hover");
      }
    if (menuService3.classList.contains("no-hover")) {
        menuService3.classList.remove("no-hover");
      } else {
        menuService.classList.add("no-hover");
        menuService2.classList.add("no-hover");
        menuService3.classList.add("no-hover");
      }

    if (servicioActivo) {
      if (ludicsActivo) {
          toggleLudics();
      }
    }
}

function toggleLudics(){
  ludicsActivo = !ludicsActivo;
    ludics.classList.toggle('toggleLudics');
    ludicsLeft.classList.toggle('toggleLudics');
    ludicsMenu.classList.toggle('toggleLudics');
    menuService2.classList.toggle('toggleLudics');
    

    if (menuService.classList.contains("no-hover-ludics")) {
        menuService.classList.remove("no-hover-ludics");
      }
    if (menuService2.classList.contains("no-hover-ludics")) {
        menuService2.classList.remove("no-hover-ludics");
      }
    if (menuService3.classList.contains("no-hover-ludics")) {
        menuService3.classList.remove("no-hover-ludics");
      } else {
        menuService.classList.add("no-hover-ludics");
        menuService2.classList.add("no-hover-ludics");
        menuService3.classList.add("no-hover-ludics");
      }

    if (ludicsActivo) {
      if (servicioActivo) {
         toggleService();
      }
    }
}








/* SLIDER LUDICS */
let swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  initialSlides: 2,
  speed: 600,
  preventClick: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true
  },
  on: {
      click(event) {
          swiper.slideTo(this.clickedIndex)
      }
  },
  pagination: {
      el: ".swiper-pagination",
  }
  
});