

let videosServicesYt = {
    videoService1: "https://www.youtube.com/embed/cOFlVbGMnqI?si=oJO7eClG_7rhLQcY",
    videoService2: "https://www.youtube.com/embed/BhjK2rCYSno?si=QlrynfQVY_LAxLqr",
    videoService3: "https://www.youtube.com/embed/-bgfGPrPSrM?si=i515-Wq1DUj1CXd5",
    videoService4: "https://www.youtube.com/embed/aDJGNqqwvfE?si=zPCNmNxsXbEdpPuI",
    videoService5: "https://www.youtube.com/embed/VY6TV_FbnJg?si=dOtDjG_u5QS2K9-S",
    videoService6: "https://www.youtube.com/embed/en43e9l84mI?si=lFday4Ag5eMVDdq6",
    videoService7: "https://www.youtube.com/embed/O0Ww2jn2jIY?si=-UNaANb68iQNgCTR",
    videoService8: "https://www.youtube.com/embed/W0yE41MNJeo?si=3U7MsD8_sXNPo4MJ",
    videoService9: "https://www.youtube.com/embed/8URwYqi33z8?si=pMyO7ghaqOrkUIKq",
    videoService10: "https://www.youtube.com/embed/MD7sbqtzn-c?si=EZxzM2-tc8fWLb9I",
    videoService11: "https://www.youtube.com/embed/tgHrf3Tj3qA?si=clBd2omm9HlVFdwd",
    videoService12: "https://www.youtube.com/embed/dJuU-jg2NX8?si=CVWxmWULGIIcROlk",
    videoService13: "https://www.youtube.com/embed/ERNlatffw6E?si=FTPS-jz2JpqDFSVG",
    videoService14: "https://www.youtube.com/embed/E78Qvs1UGDE?si=22ahVHGydVwA5s4Z",
    videoService15: "https://www.youtube.com/embed/lWE_DNzZpSo?si=NjNGk40_TJKtI0d_",
    videoService16: "https://www.youtube.com/embed/YYQTkaIEWSE?si=okenRawLwTArf-JE",
    videoService17: "https://www.youtube.com/embed/BD2HoHkZzE8?si=LzOy4J5o6cp-9EZA",
    videoService18: "https://www.youtube.com/embed/BD2HoHkZzE8?si=LzOy4J5o6cp-9EZA"
}

let idNumService = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
idNumService.map(e => {

    let modalBtnService = document.getElementById(`event${e}`);

    let nameVarService = `videoService${e}`;
    let linkYtService = `${videosServicesYt[nameVarService]}&autoplay=1`


    const modal = document.querySelector('.modal-bg');

    //Add click event to the button
    modalBtnService.addEventListener('click', () => {
        modal.innerHTML = `
        <div class="modal">
            <iframe width="560" height="315" 
            src= ${linkYtService}
            title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen></iframe>
        </div>`;

        //show modal
        modal.style.display = "flex";
        //smooth opacity transition
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 50);

    })

    modal.addEventListener('click', () => {
        //Remove youtube embed to the HTML
        modal.innerHTML = '';
        //smooth opacity transition
        modal.style.opacity = "0";
        setTimeout(() => {
            //hide the modal when the transition is done
            modal.style.display = "none";
        }, 450);
    }) 
    
})