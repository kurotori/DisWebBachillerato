const cajon = document.getElementById('cajon');

function rojo() {
    cajon.classList.add('rojo');
    cajon.classList.remove('azul');
}

function azul() {
    cajon.classList.remove('rojo');
    cajon.classList.add('azul');
}