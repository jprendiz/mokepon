function iniciarJuego() {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

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
    }

    // una vez seleccionada la mascota del jugador, 
    // debe seleccionarse la mascota del enemigo

    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    spanMascotaEnemigo.innerHTML = seleccionarMascotaEnemigo()

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