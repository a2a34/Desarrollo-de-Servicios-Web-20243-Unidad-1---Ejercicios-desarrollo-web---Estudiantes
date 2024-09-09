// Variables del juego
// las imagenes se cargan via internet
const tarjetas = [
    { name: 'img1', img: 'https://via.placeholder.com/80x80?text=A' },
    { name: 'img1', img: 'https://via.placeholder.com/80x80?text=A' },
    { name: 'img2', img: 'https://via.placeholder.com/80x80?text=B' },
    { name: 'img2', img: 'https://via.placeholder.com/80x80?text=B' },
    { name: 'img3', img: 'https://via.placeholder.com/80x80?text=C' },
    { name: 'img3', img: 'https://via.placeholder.com/80x80?text=C' },
    { name: 'img4', img: 'https://via.placeholder.com/80x80?text=D' },
    { name: 'img4', img: 'https://via.placeholder.com/80x80?text=D' }
  ];
// Arreglos para manejar la información de las tarjetas
  let tarjetaElegida = [];
  let tarjetaElegidaId = [];
  let tarjetasEmparejadas = [];
  
  // Crear el tablero
  function crearTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = ''; // Limpiar el tablero


    tarjetas.sort(() => 0.5 - Math.random()); // Mezclar las tarjetas
    
    // El guión bajo indica que nos es indiferente el usar el valor del elemento
    tarjetas.forEach((_, i) => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('card');
      tarjeta.setAttribute('data-id', i);
      tarjeta.addEventListener('click', voltearTarjeta);
      const imagen = document.createElement('img');
      imagen.src = tarjetas[i].img;
      tarjeta.appendChild(imagen);
      tablero.appendChild(tarjeta);
    });
  }
  
  // Voltear tarjeta
  function voltearTarjeta() {
    const tarjetaId = this.getAttribute('data-id');
    tarjetaElegida.push(tarjetas[tarjetaId].name);
    tarjetaElegidaId.push(tarjetaId);
    this.classList.add('flip');
  
    if (tarjetaElegida.length === 2) {
      setTimeout(detectarPareja, 500);
    }
  }
  
  // Detectar parejas
  function detectarPareja() {
    const tarjetasSeleccionadas = document.querySelectorAll('.card');
    const [opcionUnoId, opcionDosId] = tarjetaElegidaId;
  
    if (tarjetaElegida[0] === tarjetaElegida[1] && opcionUnoId !== opcionDosId) {
      tarjetasSeleccionadas[opcionUnoId].removeEventListener('click', voltearTarjeta);
      tarjetasSeleccionadas[opcionDosId].removeEventListener('click', voltearTarjeta);
      tarjetasEmparejadas.push(tarjetaElegida);
    } else {
      tarjetasSeleccionadas[opcionUnoId].classList.remove('flip');
      tarjetasSeleccionadas[opcionDosId].classList.remove('flip');
    }
  
    tarjetaElegida = [];
    tarjetaElegidaId = [];
  
    // Verificar si el juego ha terminado
    if (tarjetasEmparejadas.length === tarjetas.length / 2) {
      alert('¡Felicidades! Has encontrado todas las parejas.');
    }
  }
  
  // Reiniciar juego
  document.getElementById('reiniciar').addEventListener('click', () => {
    tarjetaElegida = [];
    tarjetaElegidaId = [];
    tarjetasEmparejadas = [];
    crearTablero();
  });
  
  // Inicializar el tablero cuando se carga la página
  crearTablero();
  