function cambiarTexto() {
    const boton = document.getElementById('miBoton');
    if (boton.innerHTML === "TRAIGO") {
        boton.innerHTML = "UN";
    } else {
        boton.innerHTML = "LOKERON";
    }
}
