// script.js

// Conversión de Kilómetros a Millas
function convertirKmAMillas() {
  const kilometros = document.getElementById('txtKilometros').value;
  // Fórmula 
  const millas = kilometros * 0.621371;
  document.getElementById('lblMillas').textContent = `El equivalente en millas es: ${millas.toFixed(2)}`;
}

function convertirMillasAKm() {
  const millas = document.getElementById('txtMillas').value;
  // Fórmula 
  const kilometros = millas * 1.60934;
  document.getElementById('lblKilometros').textContent = `El equivalente en Kilometros es: ${kilometros.toFixed(2)}`;
}

// Conversión de Metros a Pies
function convertirMetrosAPies() {
  const metros = document.getElementById('txtMetros').value;
  const pies = metros * 3.28084; // Factor de conversión
  document.getElementById('lblPies').textContent = `El equivalente en Pies es: ${pies.toFixed(2)}`;
}

// Conversión de Pies a Metros
function convertirPiesAMetros() {
  const pies = document.getElementById('txtPies').value;
  const metros = pies * 0.3048; // Factor de conversión
  document.getElementById('lblMetros').textContent = `El equivalente en Metros es: ${metros.toFixed(2)}`;
}
  