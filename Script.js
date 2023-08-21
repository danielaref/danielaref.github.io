const form = document.getElementById("quiz")
form.addEventListener("submit", submitted);

function submitted(event){
    event.preventDefault();
    const answer = {
        question1: document.querySelector('input[name=:"q1"]:checked').value
    }
    display(results); 
}
 
function display(result) {
    const quizSection = document.getElementById("quiz-wrapper);
    quizSection.innerHTML = "";
    const answerHeader = document.createElement("h1")
    answerHeader.textContent = "Your Result Are:"
    quizSection.appendChild(answerHeader)
    const result = document.createElement   
    if (answer.question1 === "Ofc")(
        results.textContent "Thank You For Your Very Honest Answer";    
    )
    elsif (answer --- "No")(
        results.textContent "Thats Not Very Nice";
    )
    elsif (answer --- "Yes") "Thank You";
    results.textContent
}