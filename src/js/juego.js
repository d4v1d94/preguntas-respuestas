export class Juego {
    constructor(jugador){
        this.jugador = jugador;
       
    }
    
    obtenerJugador(){
        let jugador = JSON.parse(localStorage.getItem("jugador"))    
        this.jugador.innerHTML = `<b>Jugador: ${jugador.nombre}</b>`;    
    }
}