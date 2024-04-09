
let videosPortFoliosYt = {
    videoPortFolio1: "https://www.youtube.com/embed/cOFlVbGMnqI?si=oJO7eClG_7rhLQcY",
    videoPortFolio2: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio3: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio4: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio5: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio6: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio7: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio8: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio9: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio10: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio11: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio12: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio13: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio14: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio15: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio16: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio17: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio18: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E",
    videoPortFolio19: "https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E"
}

let idNumPortFolio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
idNumPortFolio.map(e => {

    let modalBtnPortFolio = document.getElementById(`portfolio${e}`);

    let nameVariable = `videoPortFolio${e}`;
    let linkYt = `${videosPortFoliosYt[nameVariable]}&autoplay=1`


    const modalPortFolio = document.querySelector('.modal-bg');

    //Add click event to the button
    modalBtnPortFolio.addEventListener('click', () => {
        modalPortFolio.innerHTML = `
        <div class="modal">
            <iframe width="560" height="315" 
            src= ${linkYt}
            title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen></iframe>
        </div>`;

        //show modal
        modalPortFolio.style.display = "flex";
        //smooth opacity transition
        setTimeout(() => {
            modalPortFolio.style.opacity = "1";
        }, 50);

    })
})