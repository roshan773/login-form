let signup = document.getElementById('signup');

signup.addEventListener('submit', (e) => {
    e.preventDefault(e);

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let password = document.getElementById('password').value;


    let info = {
        name : name,
        email : email,
        country : country,
        password : password
    }

    console.log(info);
});

let signin = document.getElementById('signin');

signin.addEventListener('submit', (e) => {
    e.preventDefault(e);

    let name = document.getElementById('signin-name').value;
    let email = document.getElementById('signin-email').value;
    let password = document.getElementById('signin-password').value;

    let info = {
        name : name,
        email : email,
        password : password
    }

    console.log(info);
});