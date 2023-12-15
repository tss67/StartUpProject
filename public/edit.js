function initializeCounts() {
    //Get current counts
    let pageCount = localStorage.getItem("page_count");
    let choiceCount = localStorage.getItem("choice_count");

    //If nothing exists yet, initialize to a random value for now
    if(pageCount === "" || !pageCount) {
        pageCount = "0";
        localStorage.setItem("page_count", pageCount);
    }
    if(choiceCount === "" || !choiceCount) {
        choiceCount = "0";
        localStorage.setItem("choice_count", choiceCount);
    }

    //Update visual elements
    const pageCountEl = document.querySelector('#pageCount');
    const choiceCountEl = document.querySelector('#choiceCount');

    pageCountEl.innerHTML =  "Total Pages So Far: " + pageCount
    choiceCountEl.innerHTML =  "Total Choices So Far: " + choiceCount
}

function increaseCount() {
    //Get current counts
    let pageCount = parseInt(localStorage.getItem("page_count"));
    let choiceCount = parseInt(localStorage.getItem("choice_count"));

    //Increase by 1
    pageCount += 1;
    choiceCount += 1;

    localStorage.setItem("page_count", pageCount);
    localStorage.setItem("choice_count", choiceCount);
}

//Third Party Endpoint
function displayJoke(data) {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        const containerEl = document.querySelector('#joke');

        const quoteEl = document.createElement('p');
        quoteEl.classList.add('joke');

        quoteEl.textContent = data.joke;

        containerEl.appendChild(quoteEl);
    });
}

displayJoke()