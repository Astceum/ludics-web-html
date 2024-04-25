let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");
let innerCursorPlay = document.querySelector(".inner-cursor-play");
let innerPlay = document.querySelector(".innerPlay");

let logoU = document.getElementById('logo-U');
let logoD = document.getElementById('logo-D');
let logoI = document.getElementById('logo-I');
let logoC = document.getElementById('logo-C');
let logoS = document.getElementById('logo-S');

let menuHome = document.querySelectorAll(".btn-menu");

let idService = document.querySelector("#servicios");
let idLudics = document.querySelector("#ludics");
let idAndMore = document.querySelector("#and-more");

let classBanner = document.querySelector(".banner");

let idEvents = document.querySelector("#t_eventos");
let idBuilding = document.querySelector("#t_building");
let idAudiovisual = document.querySelector("#t_audiovisual");
let idMarketing = document.querySelector("#t_marketing");
let idEstudio = document.querySelector("#t_estudio");

let containerHome = document.querySelector(".container-home");
let classMenuHome = document.querySelector(".menu-home")
let lineMenu = document.querySelector(".line");
let lineMenuH2 = document.querySelector(".line-h2");
let lineMenuH22 = document.querySelector(".line-h22");
let lineMenuH222 = document.querySelector(".line-h222");
let lineRed = document.querySelector(".redLudics");
let lineRed2 = document.querySelector(".redAndMore");
let idLeft = document.querySelector("#left");

let menuService = document.getElementById("miElemento1")
let menuService2 = document.getElementById("miElemento2")
let menuService3 = document.getElementById("miElemento3")

let servicioActivo = false;
let ludicsActivo = false;
let andMoreActivo = false;
let logoActivo = false;
let btnServiceActivo = false;


document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    innerCursorPlay.style.left = `${x}px`;
    innerCursorPlay.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
    innerPlay.style.left = `${x}px`;
    innerPlay.style.top = `${y}px`;
}

let link = Array.from(document.querySelectorAll('a'));
let play = Array.from(document.querySelectorAll('.ver'));


link.forEach((link) => {
    link.addEventListener('mouseover', ()=>{
        outerCursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', ()=>{
        outerCursor.classList.remove('grow');
    })
})


play.forEach((play) => {
  play.addEventListener('mouseover', ()=>{
    innerCursorPlay.classList.add('play');
    innerPlay.classList.add('play');
    innerPlay.innerHTML = `    
      <h1>VER</h1>
    `;
  })
  play.addEventListener('mouseleave', ()=>{
    innerCursorPlay.classList.remove('play');
    innerPlay.classList.remove('play');
    innerPlay.innerHTML = ``;
  })
})


function toggleLogo() {

  if (!logoActivo) {
    if (btnServiceActivo) {
      btnActivate();
    }
    if (ludicsActivo) {
      toggleLudics();
    }
    if (andMoreActivo) {
      toggleAndMore();
    }
    if (servicioActivo) {
      toggleService();
    }
  }
}


function toggleService(){
  servicioActivo = !servicioActivo;
    idService.classList.toggle('toggleService');
    idLeft.classList.toggle('toggleService');
    classMenuHome.classList.toggle('toggleService');
    menuService.classList.toggle('toggleService');
    containerHome.classList.toggle('toggleService');
    logoU.classList.toggle('toggleService');
    logoD.classList.toggle('toggleService');
    logoI.classList.toggle('toggleService');
    logoC.classList.toggle('toggleService');
    logoS.classList.toggle('toggleService');
    
      menuHome.forEach(function(btn) {
        if (btn.classList.contains("no-hover")) {
          btn.classList.remove("no-hover");
        }else {
          btn.classList.add("no-hover");
        }})

      if (servicioActivo) {
        if (ludicsActivo) {
          toggleLudics();
        }
        if (andMoreActivo) {
          toggleAndMore();
        }
      } else {
        // Si servicioActivo está desactivado, desactiva btnActivate si está activo
        if (btnServiceActivo) {
            btnActivate();
          }
        }
}

function toggleLudics(){
  ludicsActivo = !ludicsActivo;
    idLudics.classList.toggle('toggleLudics');
    idLeft.classList.toggle('toggleLudics');
    classMenuHome.classList.toggle('toggleLudics');
    menuService2.classList.toggle('toggleLudics');
    classBanner.classList.toggle('toggleLudics');
    containerHome.classList.toggle('toggleLudics');
    lineMenu.classList.toggle('toggleLudics');
    lineMenuH2.classList.toggle('toggleLudics');
    lineMenuH22.classList.toggle('toggleLudics');
    lineRed.classList.toggle('toggleLudics');
    logoU.classList.toggle('toggleLudics');
    logoD.classList.toggle('toggleLudics');
    logoI.classList.toggle('toggleLudics');
    logoC.classList.toggle('toggleLudics');
    logoS.classList.toggle('toggleLudics');

    menuHome.forEach(function(btn) {
      if (btn.classList.contains("no-hover-ludics")) {
        btn.classList.remove("no-hover-ludics");
      }else {
        btn.classList.add("no-hover-ludics");
      }})
    
    if (ludicsActivo) {
      if (servicioActivo) {
         toggleService();
      }
      if (andMoreActivo) {
        toggleAndMore();
      }
      if (btnServiceActivo) {
        btnActivate();
      }
    }
}

function toggleAndMore(){
  andMoreActivo = !andMoreActivo;
    idAndMore.classList.toggle('toggleAndMore');
    idLeft.classList.toggle('toggleAndMore');
    classMenuHome.classList.toggle('toggleAndMore');
    menuService3.classList.toggle('toggleAndMore');
    containerHome.classList.toggle('toggleAndMore');
    lineMenu.classList.toggle('toggleAndMore');
    lineMenuH2.classList.toggle('toggleAndMore');
    lineMenuH222.classList.toggle('toggleAndMore');
    lineRed2.classList.toggle('toggleAndMore');
    logoU.classList.toggle('toggleAndMore');
    logoD.classList.toggle('toggleAndMore');
    logoI.classList.toggle('toggleAndMore');
    logoC.classList.toggle('toggleAndMore');
    logoS.classList.toggle('toggleAndMore');
    
    menuHome.forEach(function(btn) {
      if (btn.classList.contains("no-hover-and-more")) {
        btn.classList.remove("no-hover-and-more");
      }else {
        btn.classList.add("no-hover-and-more");
      }})
    
    if (andMoreActivo) {
      if (servicioActivo) {
         toggleService();
      }
      if (ludicsActivo) {
        toggleLudics();
      }
      if (btnServiceActivo) {
        btnActivate();
      }
    }
}


/* SLIDER LUDICS */
let swiper1 = new Swiper(".swiper1", {
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
          swiper1.slideTo(this.clickedIndex)
      }
  },
  pagination: {
      el: ".swiper-pagination",
  }
  
});




// BOTONES MENU-SEVICIOS

let classMenuService = document.querySelector(".menu-servicios");
let btnServiceMenu = document.querySelectorAll('.btn-1');

// Función para activar el botón correspondiente
function btnActivate(numBtn) {

  btnServiceActivo = !btnServiceActivo;

  let btnNumber = [1, 2, 3, 4, 5]
  btnNumber.map(element => {
      if (numBtn == element) {
        let idBtn = document.querySelector(`#idBtn-${element}`)
        idLeft.classList.toggle(`activate-btn-${element}`);
        classMenuHome.classList.toggle(`activate-btn-${element}`);
        idService.classList.toggle(`activate-btn-${element}`);
        classMenuService.classList.toggle(`activate-btn-${element}`);
        idEvents.classList.toggle(`activate-btn-${element}`);
        idBuilding.classList.toggle(`activate-btn-${element}`);
        idAudiovisual.classList.toggle(`activate-btn-${element}`);
        idMarketing.classList.toggle(`activate-btn-${element}`);
        idEstudio.classList.toggle(`activate-btn-${element}`);
        idBtn.classList.toggle(`activate-btn-${element}`);
        
        btnServiceMenu.forEach(function(btn) {
          if (btn.classList.contains(`no-hover-btn-${element}`)) {
            btn.classList.remove(`no-hover-btn-${element}`);
          } else {
            btn.classList.add(`no-hover-btn-${element}`);
          }
        });

      } else {
        let idBtn = document.querySelector(`#idBtn-${element}`);
        
        idLeft.classList.remove(`activate-btn-${element}`);
        classMenuHome.classList.remove(`activate-btn-${element}`);
        idService.classList.remove(`activate-btn-${element}`);
        classMenuService.classList.remove(`activate-btn-${element}`);
        idEvents.classList.remove(`activate-btn-${element}`);
        idBuilding.classList.remove(`activate-btn-${element}`);
        idAudiovisual.classList.remove(`activate-btn-${element}`);
        idMarketing.classList.remove(`activate-btn-${element}`);
        idEstudio.classList.remove(`activate-btn-${element}`);
        idBtn.classList.remove(`activate-btn-${element}`);

        btnServiceMenu.forEach(function(btn) {
          if (btn.classList.contains(`no-hover-btn-${element}`)) {
            btn.classList.remove(`no-hover-btn-${element}`);
          } 
        });
      }
  })
}



// LUDICS
function ScrollLudics() {
  var div = document.getElementById('ludics');
  var scrollTop = div.scrollTop;
  var clientHeight = div.clientHeight;

 
  var animationUp = document.getElementsByClassName('animation-up');
  
  aplicarEfecto(animationUp, scrollTop, clientHeight, 'translateY(-30px)');
  
}

function aplicarEfecto(imagenes, scrollTop, clientHeight, transformacion) {
  for (var i = 0; i < imagenes.length; i++) {
    var imagen = imagenes[i];
    var imagenTop = imagen.offsetTop;
    var imagenBottom = imagenTop + (imagen.clientHeight * 2); // Doble de la altura de la imagen
    
    // Comprueba si el doble de la altura de la imagen está dentro del div
    if (imagenTop >= scrollTop && imagenBottom <= scrollTop + clientHeight) {
      console.log('¡El doble de la altura de la imagen ' + i + ' está visible!');
      // Aplica la animación cambiando la opacidad de la imagen a 1 y la transformación
      imagen.style.opacity = '1';
      imagen.style.transform = transformacion;
    } else {
      // Si el doble de la altura de la imagen no está completamente visible, establece la opacidad inicial y reinicia la transformación
      imagen.style.opacity = '0';
      imagen.style.transform = 'none';
    }
  }
}

let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  /* freeMode: true, */
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  
});

let swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1500,
  /* freeMode: true, */
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    },
  
});


// Y MAS

function ScrollAndMore() {
  var div = document.getElementById('and-more');
  var scrollTop = div.scrollTop;
  var clientHeight = div.clientHeight;

 
  var animationUp = document.getElementsByClassName('animation-up');
  
  aplicarEfecto(animationUp, scrollTop, clientHeight, 'translateY(-30px)');
  
}

function aplicarEfecto(imagenes, scrollTop, clientHeight, transformacion) {
  for (var i = 0; i < imagenes.length; i++) {
    var imagen = imagenes[i];
    var imagenTop = imagen.offsetTop;
    var imagenBottom = imagenTop + (imagen.clientHeight * 1); // Doble de la altura de la imagen
    
    // Comprueba si el doble de la altura de la imagen está dentro del div
    if (imagenTop >= scrollTop && imagenBottom <= scrollTop + clientHeight) {
      console.log('¡El doble de la altura de la imagen ' + i + ' está visible!');
      // Aplica la animación cambiando la opacidad de la imagen a 1 y la transformación
      imagen.style.opacity = '1';
      imagen.style.transform = transformacion;
    } else {
      // Si el doble de la altura de la imagen no está completamente visible, establece la opacidad inicial y reinicia la transformación
      imagen.style.opacity = '0';
      imagen.style.transform = 'none';
    }
  }
}


