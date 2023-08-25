const form = document.getElementById("quiz")
form.addEventListener("submit", submitted);

function submitted(event){
    event.preventDefault();
    const answer = {
        question1: document.querySelector('input[name="Answer1"]:checked').value,
        question2: document.querySelector('input[name="Answer2"]:checked').value,
        question3: document.querySelector('input[name="Answer3"]:checked').value,
        question4: document.querySelector('input[name="Answer4"]:checked').value,
        question5: document.querySelector('input[name="Answer5"]:checked').value


    }
    display(answer); 
}
 
function display(answer) {
    const quizSection = document.getElementById("quiz-wrapper");
    quizSection.innerHTML = "";
    const result = document.createElement('iframe');
    let song1 = 0
    let song2 = 0
    let song3 = 0
    let song4 = 0
    let song5 = 0
    let song6 = 0
    let song7 = 0
    let song8 = 0
    let song9 = 0
    let song10 = 0
    if(answer.quetion1 === "Spanish"){
        song3++;
        song4++;
        song8++;
    }

    else if(answer.question1 === "Farsi"){
        song1++;
        song2++;
    }

    else if(answer.question1 === "English"){
        song5++;
        song6++;
        song10++;
    }
    
    else if(answer.question1 === "Random"){
        song1++;
        song2++;
        song5++;
        song9++;
        song10++;

        
        
    }

    if(answer.question2 === Calm){
        song2++;
        song3++;
        song5++;
        song7++;

    }

    else if(answer.question2 === Energetic){
        song8++;
        song9++;
    }
    else if(answer.question2 === Both){
        song1++;
        song4++;        
        song6++;

        song10++;

    }
    const highest = Math.max(song1, song2, song3, song4, song5, song6, song7, song8, song9, song10);
    if(highest===song1){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6SInUXYcKLtmODUk8W8UCW?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song2){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/760d5fC41dkJL9WHPIPhDD?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song3){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1WHun58cINB7qnT60KcHtQ?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song4){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ePoh7vNGKOTuzjMNOB7I7?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song5){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4ICujrlyR5rxhLGmM7idBb?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song6){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/30uUmtxVYUTpOZaY97ZBky?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song7){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7MRhroZpjv5yzmdm7utnIu?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song8){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/43wr3gtPlWqcln0fO4D2Zu?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song9){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/65zw2RY8Qp0JJDcQNSejNY?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
    else if(highest===song10){
        result.src = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3gScdPienbg5cci03B0APW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }

    quizSection.appendChild(result);
}



