
let videosPortFoliosYt = {
    videoPortFolio1: "https://www.youtube.com/embed/cOFlVbGMnqI?si=oJO7eClG_7rhLQcY",
    videoPortFolio2: "https://www.youtube.com/embed/BhjK2rCYSno?si=QlrynfQVY_LAxLqr",
    videoPortFolio3: "https://www.youtube.com/embed/-bgfGPrPSrM?si=i515-Wq1DUj1CXd5",
    videoPortFolio4: "https://www.youtube.com/embed/aDJGNqqwvfE?si=zPCNmNxsXbEdpPuI",
    videoPortFolio5: "https://www.youtube.com/embed/VY6TV_FbnJg?si=dOtDjG_u5QS2K9-S",
    videoPortFolio6: "https://www.youtube.com/embed/en43e9l84mI?si=lFday4Ag5eMVDdq6",
    videoPortFolio7: "https://www.youtube.com/embed/O0Ww2jn2jIY?si=-UNaANb68iQNgCTR",
    videoPortFolio8: "https://www.youtube.com/embed/W0yE41MNJeo?si=3U7MsD8_sXNPo4MJ",
    videoPortFolio9: "https://www.youtube.com/embed/8URwYqi33z8?si=pMyO7ghaqOrkUIKq",
    videoPortFolio10: "https://www.youtube.com/embed/MD7sbqtzn-c?si=EZxzM2-tc8fWLb9I",
    videoPortFolio11: "https://www.youtube.com/embed/tgHrf3Tj3qA?si=clBd2omm9HlVFdwd",
    videoPortFolio12: "https://www.youtube.com/embed/dJuU-jg2NX8?si=CVWxmWULGIIcROlk",
    videoPortFolio13: "https://www.youtube.com/embed/ERNlatffw6E?si=FTPS-jz2JpqDFSVG",
    videoPortFolio14: "https://www.youtube.com/embed/E78Qvs1UGDE?si=22ahVHGydVwA5s4Z",
    videoPortFolio15: "https://www.youtube.com/embed/lWE_DNzZpSo?si=NjNGk40_TJKtI0d_",
    videoPortFolio16: "https://www.youtube.com/embed/YYQTkaIEWSE?si=okenRawLwTArf-JE",
    videoPortFolio17: "https://www.youtube.com/embed/BD2HoHkZzE8?si=LzOy4J5o6cp-9EZA",
    videoPortFolio18: "https://www.youtube.com/embed/xMD9qytMGzE?si=y7kEOf8SpAu-xh5E",
    videoPortFolio19: "https://www.youtube.com/embed/NV9-HeQZOdw?si=o71atwJcdGq1sHWd"
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