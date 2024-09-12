function actualizar() {
    let reloj = document.getElementById('reloj');
    let fecha = new Date();
    
    let hora = fecha.getHours();
    if(hora < 10){
        hora = '0' + hora;
    } 
    reloj.children[0].innerHTML = hora;

    let minuto = fecha.getMinutes();
    if (minuto < 10){
        minuto = '0' + minuto;
    }
    reloj.children[1].innerHTML = minuto;

    let segundo = fecha.getSeconds();
    if(segundo < 10){
        segundo = '0' + segundo;
    }
    reloj.children[2].innerHTML = segundo;
}

setInterval(actualizar,1000);

actualizar();