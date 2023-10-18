
// costante difficoltà
const difficulty = 100;

//prendo il bottone
const btnPlay = document.getElementById('play-btn');
console.log(btnPlay);
//aggiungo listener
btnPlay.addEventListener('click', createGrid);
//funzione on click
function createGrid() {
    // prendo il container #playground
    const divPlayground = document.getElementById('playground');
    for (let i = 0; i < difficulty; i++) {
        // creo singolo quadrato
        createSquare(divPlayground);

    }


}
function createSquare(divCont){
    const square = document.createElement('div');
    square.classList.add('box');
    square.addEventListener('click', activeBox)
    divCont.append(square);
    function activeBox (){
        square.classList.add('active');
    }
}



