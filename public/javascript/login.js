async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

async function loginFormHandler(event) {
    event.preventDefault();

    console.log("here");
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/posts');
        } else {
            alert(response.statusText);
        }
    }
}
async function asignupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#adminname-signup').value.trim();
    const email = document.querySelector('#aem-signup').value.trim();
    const password = document.querySelector('#apw-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/admin', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
async function aloginFormHandler(event) {
    event.preventDefault();

    console.log("here");
    const email = document.querySelector('#aem-login').value.trim();
    const password = document.querySelector('#apw-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/admin/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/posts');
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.alogin-form').addEventListener('submit', aloginFormHandler);
document.querySelector('.asignup-form').addEventListener('submit', asignupFormHandler);