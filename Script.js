const form = document.getElementById("quiz")
form.addEventListener("submit", submitted);

function submitted(event){
    event.preventDefault();
    const answer = {
        question1: document.querySelector('input[name="Answer"]:checked').value
    }
    display(answer); 
}
 
function display(answer) {
    const quizSection = document.getElementById("quiz-wrapper");
    quizSection.innerHTML = "";
    const results = document.createElement('h4');
    if (answer.question1 === "Ofc"){
        results.textContent = "Thank You For Your Very Honest Answer"; 
    }
    else if (answer.question1 === "No"){
        results.textContent = "Thats Not Very Nice";
    }
    else if (answer.question1 === "Yes") {
    results.textContent = "Thank You";
    }
    quizSection.appendChild(results);
}
