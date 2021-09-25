import { Juego } from "./juego.js";
import { Quiz } from "./quiz.js";

//Variableds del DOM
const quiz = document.getElementById('quiz');
const quizImg = document.getElementById('quiz-image');
const progressEl = document.getElementById('progress-bar');
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const titulo = document.getElementById("big-text");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const retirarme = document.getElementById('retirarme');
let puntos = document.getElementById('puntos');
let jugadorEl = document.getElementById('jugador');

//instanciamos las clases

const myQuiz = new Quiz(quiz, quizImg, progressEl, answersEls, questionEl, a_text, b_text, c_text, d_text, titulo,quizData);
const miJuego = new Juego(jugadorEl);

//Variables

let currentQuiz = 0;
let score = 0;
let random = Math.floor(Math.random() * (5 - 0) + 0);

//cargamos el quiz
myQuiz.cargarQuiz(currentQuiz,random);

//obtenemos el nombre del jugador
miJuego.obtenerJugador();

//evento del boton
submitBtn.addEventListener('click', ()=>{
    //se comprueba la respuesta
    //const answer = getSelected();
    const answer = myQuiz.getSelected();
    if (answer) {
        //si la opcion guardada coincide con la correcta se suma un punto
        if (answer === quizData[random].correct) {
            score+=10;
            currentQuiz++;
            if (currentQuiz == 1) {
                random = Math.floor(Math.random() * (10 - 5) + 5);
            }else if(currentQuiz == 2 ){
                random = Math.floor(Math.random() * (15 - 10) + 10);
            }else if(currentQuiz == 3 ){
                random = Math.floor(Math.random() * (20 - 15) + 15);
            }else if(currentQuiz == 4 ){
                random = Math.floor(Math.random() * (25 - 20) + 20);
            }
            
        }else{
            alert("Lo siento haz perdido\nSu puntacion es: 0");
            location.reload()
        }
        puntos.innerHTML = `<b>Puntuacion: ${score}</b>`;
        //cambiamos la posicion de quizData para mostrar el siguiente
        
        //si no hemos llegado al final cargamos siguiente, si no
        //mostramos que hemos terminado
        if (currentQuiz < 5) {
            myQuiz.cargarQuiz(currentQuiz,random);
           // loadQuiz();
        }else{
            let scoreFinal = ((score/10) / 5) * 100;
            quiz.innerHTML = `
                <h2>¡Felicidades Ganaste!</h2>
                <h2>Tu puntuacion es ${score} (${scoreFinal}%)</h2>
                <button onclick="location.reload()">Reiniciar</button>
            `;
        }
    }
})
retirarme.addEventListener('click', ()=>{
    if (window.confirm("De verdad quieres retirarte")) {
        alert( "¡¡¡Gracias por Jugar!!!\nSu puntacion es: "+ score)       
        location.href = "index.html"
      }
})

