let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let seccionSeleccionarAtaque = document.getElementById('seccion-seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'none'


    let botonMascotaJugador = document.getElementById('boton-seleccionar-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

    let secionReiniciar = document.getElementById('seccion-reiniciar')
    secionReiniciar.style.display = 'none'
}

function reiniciarJuego() {
    location.reload()
}

function ataqueAleatorioEnemigo() {
    
    let ataque = aleatorio(1,3)
    return tipoAtaque(ataque)
}

function crearMensaje(resultado) {
    let parrafo = document.createElement('p')
    let seccionMensajes = document.getElementById('seccion-mensajes')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado
    seccionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultado) {

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let parrafo = document.createElement('p')
    let seccionMensajes = document.getElementById('seccion-mensajes')

    parrafo.innerHTML = resultado
    seccionMensajes.appendChild(parrafo)

    let secionReiniciar = document.getElementById('seccion-reiniciar')
    secionReiniciar.style.display = 'block'
}

function tipoAtaque(ataque) {
    if (ataque == 1) {
        return 'FUEGO 🔥'
    } else  if (ataque == 2) {
        return 'AGUA 💧'
    } else {
        return 'TIERRA 🌱'
    }

}

function resultadoCombate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    } else if ( (ataqueJugador == 'FUEGO 🔥') && (ataqueEnemigo == 'TIERRA 🌱') ) {
        crearMensaje('GANASTE 🎉')
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else if ( (ataqueJugador == 'AGUA 💧') && (ataqueEnemigo == 'FUEGO 🔥') ) {
        crearMensaje('GANASTE 🎉')
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else if ( (ataqueJugador == 'TIERRA 🌱') && (ataqueEnemigo == 'AGUA 💧') ) {
        crearMensaje('GANASTE 🎉')
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else {
        crearMensaje('PERDISTE 😭')
        spanVidasJugador.innerHTML = --vidasJugador
    }

    revisarVidas()

}

function revisarVidas() {
    
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES !!! 🎉🎉🎉 GANASTE")

    } else if (vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO 😭😭😭 PERDISTE")
    }
}
function ataqueFuego() {
    
    ataqueJugador = 'FUEGO 🔥'
    ataqueEnemigo = ataqueAleatorioEnemigo()
    resultadoCombate()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    ataqueEnemigo = ataqueAleatorioEnemigo()
    resultadoCombate()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    ataqueEnemigo = ataqueAleatorioEnemigo()
    resultadoCombate()
}

function seleccionarMascotaJugador() {
    
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        //alert('Seleccionaste tu mascota Hipodoge')
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        //alert('Seleccionaste tu mascota Capipepo')
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        //alert('Seleccionaste tu mascota Ratigueya')
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
        return
    }
    
    // una vez seleccionada la mascota del jugador, 
    // debe seleccionarse la mascota del enemigo

    if (inputHipodoge.checked || inputCapipepo.checked || inputRatigueya.checked) {
        let seccionSeleccionarMascota = document.getElementById('seccion-seleccionar-mascota')
        seccionSeleccionarMascota.style.display = 'none'
    
        let seccionSeleccionarAtaque = document.getElementById('seccion-seleccionar-ataque')
        seccionSeleccionarAtaque.style.display = 'block'

        let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
        spanMascotaEnemigo.innerHTML = seleccionarMascotaEnemigo()
    } else {
        return
    }

}

function seleccionarMascotaEnemigo() {
    let mascota = aleatorio(1,3)
    
    if (mascota == 1) {
        return 'Hipodoge'
    } else  if (mascota == 2) {
        return 'Capipepo'
    } else {
        return 'Ratigueya'
    }
}

function aleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

window.addEventListener('load', iniciarJuego)