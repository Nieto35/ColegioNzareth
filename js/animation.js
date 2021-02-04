window.addEventListener('scroll', function(){

    let animacion = this.document.getElementById("animacion-tutorial");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanhoPantalla = window.innerHeight/1.2;

    if(posicionObj1 < tamanhoPantalla ) {
        animacion.style.animation = 'tutoriales 2s ease-out'
        document.getElementById("animacion-tutorial1").style.animation = "tutoriales 2s ease-out";
        document.getElementById("animacion-tutorial2").style.animation = "tutoriales 2s ease-out";
    }
})


window.addEventListener('scroll', function(){

    let goku = this.document.getElementById("menu-principal");
    let posicionObj1 = goku.getBoundingClientRect().bottom;
    console.log(posicionObj1);
    let tamanhoPantalla = window.innerHeight/30;

    if(posicionObj1 < tamanhoPantalla ) {
        let menu_desplegable = document.getElementById("sticky-wrapper");
        menu_desplegable.classList.remove("menu-sticky")
    }
    else {
        let menu_desplegable = document.getElementById("sticky-wrapper");
        menu_desplegable.classList.add("menu-sticky")
    }
})