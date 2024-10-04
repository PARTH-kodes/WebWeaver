const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const body = document.getElementById('body');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    body.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    body.classList.remove("active");
});
