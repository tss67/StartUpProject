async function getCurrentCounts() {
    let countText = "";

    //Get current counts
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/counts');
        const responseJson = await response.json();

        // Save the scores in case we go offline in the future
        countText =  JSON.stringify(responseJson.count);
        localStorage.setItem('page_and_choice_count', countText);
    } catch {
        // If there was an error then just use the last saved scores
        countText = localStorage.getItem('page_and_choice_count');
    }

    return countText;
}

async function setCount(newCount) {
    try {
        const response = await fetch('/api/count', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({count: newCount}),
        });
  
        // Store what the service gave us as the high scores
        const counts = await response.json();
        localStorage.setItem("page_and_choice_count", JSON.stringify(counts.count));
    } catch {
        // If there was an error then just track scores locally
        localStorage.setItem("page_and_choice_count", newCount);
    }
}

async function initializeCounts() {

    let count = await getCurrentCounts();

    //If nothing exists yet, initialize to a random value for now
    if(count === "" || !count) {
        count = 0
        await setCount(count)
    }

    //Update visual elements
    const pageCountEl = document.querySelector('#pageCount');
    const choiceCountEl = document.querySelector('#choiceCount');

    pageCountEl.innerHTML =  "Total Pages So Far: " + count;
    choiceCountEl.innerHTML =  "Total Choices So Far: " + count;
}

async function increaseCount() {
    //Get current counts
    let newCount = parseInt(localStorage.getItem("page_and_choice_count"));

    //Increase by 1
    newCount += 1;

    await setCount(newCount);
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