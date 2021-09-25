class Jugador {
    constructor(nombre, puntuacion, intentos, fecha) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
        this.intentos = intentos;
        this.fecha = fecha;
    }
    guardarJugador(){
        let jugador = {
            nombre : this.nombre,
            puntuacion: this.puntuacion,
            intentos: this.intentos,
            fecha: this.fecha
        }
        localStorage.setItem("jugador", JSON.stringify(jugador));
    }
}
let nombreForm = document.getElementById('nombre-form');
nombreForm.addEventListener('submit', e =>{
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let fecha = new Date();
    const jugadorNuevo = new Jugador(nombre,0,0,fecha);
    jugadorNuevo.guardarJugador();
    window.location.href = './juego.html';
});