function menuPlay() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/alinhar-justificar.svg";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/cruz.svg";
    }
}