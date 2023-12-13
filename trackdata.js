function initializeCounts() {
    const pageCount = localStorage.getItem("page_count");
    const choiceCount = localStorage.getItem("choice_count");

    if(pageCount === null) {
        localStorage.setItem("page_count", "NULL");
    }
    if(choiceCount === null) {
        localStorage.setItem("choice_count", "NULL");
    }

}

function increaseCount() {

}