function signin() {
    const emailEl = document.querySelector('#email');
    const passwordEl = document.querySelector('#password');
    localStorage.setItem("email", emailEl.value);
    localStorage.setItem("password", passwordEl.value);
    
    if(!(emailEl.value.trim().length === 0 ||  passwordEl.value.trim().length === 0)) {
        window.location.href = "story.html";
    }
}
