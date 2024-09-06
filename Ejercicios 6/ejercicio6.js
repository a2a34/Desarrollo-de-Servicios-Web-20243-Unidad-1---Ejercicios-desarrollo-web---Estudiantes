function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Por favor, complete todos los campos antes de enviar.';
        return false;
    }

    // Validación básica de correo electrónico
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
        return false;
    }

    // Si todos los campos están llenos y el correo es válido, se envía el formulario
    errorMessage.textContent = '';
    alert('Formulario enviado correctamente.');
    return true;
}
