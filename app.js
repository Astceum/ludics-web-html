let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

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


