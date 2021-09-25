export class Quiz{
    constructor(quiz, quizImg, progressEl, answers = [], question, a, b, c, d, titulo, quizData = []) {
        this.quiz = quiz;
        this.quizImg = quizImg;
        this.progressEl = progressEl;
        this.answers = answers;
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.titulo = titulo;
        this.quizData = quizData;
        
    }
    cargarQuiz(currentQuiz,random){
        this.desSeleccionar();
        
        const currentQuizData = this.quizData[random];
        let progress = ((currentQuiz + 1) / 5) * 100;

        this.quizImg.style.backgroundImage = `url("${currentQuizData.img}")`;
        this.progressEl.style.width = progress+"%";
        this.question.innerHTML = currentQuizData.question;
        this.a.innerHTML = currentQuizData.a;
        this.b.innerHTML = currentQuizData.b;
        this.c.innerHTML = currentQuizData.c;
        this.d.innerHTML = currentQuizData.d;
        this.titulo.innerHTML = `Nivel ${currentQuizData.nivel}`;
    }
    getSelected(){
        let myAnswer = undefined;
        this.answers.forEach((answerEl) => {
            if(answerEl.checked){
                myAnswer = answerEl.id;
            }
        });
        return myAnswer;
    }
    desSeleccionar(){
        this.answers.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }
}