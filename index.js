var botonFecha = document.getElementById('botonFecha')
var botonHoy = document.getElementById('botonHoy')

var fecha = document.getElementById('fecha')
var m_texto = document.getElementById('m_texto')
var t_texto = document.getElementById('t_texto')
var n_texto = document.getElementById('n_texto')

botonHoy.addEventListener('click', tiempoEsperaHoy)
botonFecha.addEventListener('click', validarFecha)


function tiempoEsperaDate() {
    limpiarCalcularClimaHoy()
    setTimeout(calcularClima, 3000);
}


function tiempoEsperaHoy() {
    limpiarCalcularClima()
    setTimeout(calcularClimaHoy, 3000);
}


function validarFecha(){
    var inputFecha = document.getElementById('clima_fecha').value;
    
    if (inputFecha == "" ) {
        alert("No ha ingresado una fecha")
    } else {
        tiempoEsperaDate()
        //calcularClima()
    }
}


function calcularClima(){
    fechaInput()
    //limpiarCalcularClimaHoy()
    m_texto.innerHTML = "Por la mañana:<br>"  + randomClima() +"<br>" + randomTemperatura()
}


function calcularClimaHoy(){
    fechaHoy()
    //limpiarCalcularClima()
    m_texto.innerHTML = "Por la mañana:<br>"  + randomClima() +"<br>" + randomTemperatura()
    t_texto.innerHTML = "Por la tarde:<br>"  + randomClima() +"<br>" + randomTemperatura()
    n_texto.innerHTML = "Por la noche:<br>"  + randomClima() +"<br>" + randomTemperatura()
}


function limpiarCalcularClima(){
    fecha.innerHTML = ""
    m_texto.innerHTML = ""
}


function limpiarCalcularClimaHoy(){
    fecha.innerHTML = ""
    m_texto.innerHTML = ""
    t_texto.innerHTML = ""
    n_texto.innerHTML = ""
}


function fechaInput(){
    var clima_fecha = document.getElementById('clima_fecha').value;
    fecha.innerHTML = clima_fecha
}


function fechaHoy(){
    const today = new Date().toLocaleDateString()
    fecha.innerHTML = today
}


function randomClima(){
    var numero = Math.floor(Math.random() * 3);
    var clima = ""
    switch(numero) {
        case 0:
            clima = 'Clima: despejado'
        break;
        case 1:
            clima = 'Clima: nublado'
        break;
        case 2:
            clima = 'Clima: lluvioso'
      }
      return clima
}


function randomTemperatura(){
    let max = 30
    let min = 5
    var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    var str = numero.toString()
    temp = 'Temperatura: ' + str + "°"
    return temp
}