const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const password = document.getElementById('password');

formulario.addEventListener('submit', ()=>{
    
    const emailValido = validarEmail(email.value);
    
    if(!emailValido) {
        alert('Por favor, ingresa un correo valido');
    }

    if(password.value.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
    }

    if(emailValido && password.value.length >= 8) {
        alert('Formulario enviado con éxito');
        formulario.submit();
    }
});

function validarEmail(email) {
    const regex = /^[^\s@]+@(hotmail\.com|ittepic\.edu\.mx|gmail\.com)$/;
    return regex.test(email); 
}