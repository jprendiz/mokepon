// De la función iniciarJuego
const botonMascotaJugador = document.getElementById('boton-seleccionar-mascota')
const seccionSeleccionarAtaque = document.getElementById('seccion-seleccionar-ataque')
const secionReiniciar = document.getElementById('seccion-reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')

//Función seleccionar mascota

const spanMascotaJugador = document.getElementById('mascota-jugador')
const seccionSeleccionarMascota = document.getElementById('seccion-seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

// De la función resultadoCombate
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

// De la f crearMensaje
const seccionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-de-ataques')

let mokepones = []
let ataqueJugador
let ataqueEnemigo

let inputHipodoge
let inputCapipepo
let inputRatigueya

let vidasJugador = 3
let vidasEnemigo = 3

let mascotaJugador 
let mascotaEnemigo

let opcionDeMokepones
let opcionDeAtaques

let botonAgua
let botonFuego
let botonTierra

let botones = []

let arregloAtaqueJugador = []
let arregloAtaqueEnemigo = []
let ataquesMokeponEnemigo

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {

    seccionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>
                    ${mokepon.nombre}
                </p> 
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('hipodoge')
        inputCapipepo = document.getElementById('capipepo')
        inputRatigueya = document.getElementById('ratigueya')

    })
    

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
    secionReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador() {

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
        return
    }
    
    
    // una vez seleccionada la mascota del jugador, 
    // debe seleccionarse la mascota del enemigo
    
    if (inputHipodoge.checked || inputCapipepo.checked || inputRatigueya.checked) {
        
        seccionSeleccionarMascota.style.display = 'none'
        seccionSeleccionarAtaque.style.display = 'flex'
        extraerAtaques(mascotaJugador)
        secuenciaAtaque()

        mascotaEnemigo = seleccionarMascotaEnemigo()
        spanMascotaEnemigo.innerHTML = mascotaEnemigo
        
        secuenciaAtaqueEnemigo()
        
    } else {
        return
    }

}
function secuenciaAtaqueEnemigo() {

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaEnemigo == mokepones[i].nombre) {
            ataquesMokeponEnemigo = mokepones[i].ataques
            //console.log('Ataques enemigo: ', ataquesMokeponEnemigo);
        }
    }
    
    //Extraer de ataque MokeponEnemigo y ponerlos en orden aleatorio
    // y almacenarlos en arregloAtaqueEnemigo

    ataquesMokeponEnemigo.forEach((ataque) => {
        let textoAtaque

        if (ataque.nombre === '🔥') {
            textoAtaque = 'FUEGO'
        } else if (ataque.nombre === '💧') {
            textoAtaque = 'AGUA'
        } else {
            textoAtaque = 'TIERRA'
        }
        arregloAtaqueEnemigo.push(textoAtaque)
    })

    //console.log('arreglo antes', arregloAtaqueEnemigo);
    // Desordenar el arreglo
    arregloAtaqueEnemigo.sort(()=>Math.random() - 0.5)    

    console.log('ataque enemigo: ', arregloAtaqueEnemigo);
    
    // combate
}

function extraerAtaques(mascotaJugador) {
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            //console.log(ataques);
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {

    ataques.forEach((ataque) => {
        opcionDeAtaques = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaques
    })

    // para los elementos que se van a repetir
    botones = document.querySelectorAll('.BAtaque')
    //console.log(botones);

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log('textContent: ' , e.target.textContent);
            if (e.target.textContent === '🔥') {
                arregloAtaqueJugador.push('FUEGO')
                console.log('arregloAtaqueJugador', arregloAtaqueJugador);
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💧') {
                arregloAtaqueJugador.push('AGUA')
                console.log('arregloAtaqueJugador', arregloAtaqueJugador);
                boton.style.background = '#112f58'
            } else {
                arregloAtaqueJugador.push('TIERRA')
                console.log('arregloAtaqueJugador', arregloAtaqueJugador);
                boton.style.background = '#112f58'
            }
        })
    })
}

function reiniciarJuego() {
    location.reload()
}

function resultadoCombate() {

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

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultado) {

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    seccionMensajes.innerHTML = resultado

    secionReiniciar.style.display = 'block'
}


function revisarVidas() {
    
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES !!! 🎉🎉🎉 GANASTE")

    } else if (vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO 😭😭😭 PERDISTE")
    }
}

function seleccionarMascotaEnemigo() {

    let mascota = aleatorio(1,mokepones.length)
    return mokepones[mascota - 1].nombre
}

function aleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

window.addEventListener('load', iniciarJuego)