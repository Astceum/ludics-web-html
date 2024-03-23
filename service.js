let modalBtnEvent = document.querySelector('.event1');
let modalBtnEvent2 = document.querySelector('.event2');
let modalBtnEvent3 = document.querySelector('.event3');

const modal = document.querySelector('.modal-bg');

//Add click event to the button
modalBtnEvent.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E&autoplay=1" 
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

modalBtnEvent2.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E&autoplay=1" 
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

modalBtnEvent3.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/lumNsOA4t7k?si=YqbaqfMe8biU5S7E&autoplay=1" 
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








































//Add click event to the modal bg
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