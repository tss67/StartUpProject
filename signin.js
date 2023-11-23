function signin() {
    const emailEl = document.querySelector('#email');
    const passwordEl = document.querySelector('#password');
    localStorage.setItem("email", emailEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "story.html";
}