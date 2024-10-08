
//selecciono todas las clases .tecla
const pom = document.querySelectorAll(".tecla");

//Funcion que reproduce el sonido
function sonido(idSonido){
    document.querySelector(idSonido).play();
}

pom.forEach(e => {
    //Concateno
    let idSonido = `#sonido_${e.classList[1]}`;

    e.addEventListener("click", ()=>{
        sonido(idSonido);
    })
});


