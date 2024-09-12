const imagenPrincipal = document.getElementById('imagenPrincipal');
const miniaturas = document.querySelectorAll('.miniaturas img');


miniaturas.forEach(miniatura =>{
    miniatura.addEventListener('click', () => {
        imagenPrincipal.src = miniatura.src;
    });
});


