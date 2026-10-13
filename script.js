
const defaultUsername = 'leajan2027';
const defaultPassword = '2027';

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === defaultUsername && password === defaultPassword) {
        window.location.href = '/reviewer.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
