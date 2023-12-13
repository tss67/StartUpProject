function initializeStory() {

    const storyEl = document.querySelector('#story');
    const storyNameEl = document.querySelector('#story_name');

    const storedStory = localStorage.getItem("story");
    const storedStoryName = localStorage.getItem("story_name");

    storyEl.value = storedStory;
    storyNameEl.value = storedStoryName;
}

function updateStory() {
    const storyEl = document.querySelector('#story');
    const storyNameEl = document.querySelector('#story_name');
    localStorage.setItem("story", storyEl.value);
    localStorage.setItem("story_name", storyNameEl.value);

    if(!(storyEl.value.trim().length === 0 ||  storyNameEl.value.trim().length === 0)) {
        window.location.href = "story.html";
    }
}
