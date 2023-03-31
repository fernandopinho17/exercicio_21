const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passswordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome do usuário é obrigatório.");
        } else {
            setSuccesFor(username);
        }

        if (emailValue === '') {
            setErrorFor(email, 'o email é obrigatório')
        } else if(!checkEmail(emailValue)) {
            setErrorFor(email, "Por favor, insira um email válido");
        } else {
            setSuccesFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, "A senha é obrigatória.");
        } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no minimo 7 caracteres. ");
    } else {
        setSuccesFor(password);
    }

    if (passswordConfirmationValue === "") {
        setErrorFor(passswordConfirmationValue, "A configuração de senha é obrigatória.");
    } else if (passswordConfirmationValue !== passwordValue) {
        setErrorFor (passwordConfirmation, "As senhas não conferem.");
    } else {
        setSuccesFor (passwordConfirmation);
    }

    const formIsControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControl.every].every(formControl => {
        return (formControl.className = "form-control success");
    });

    if (formIsValid) log('O formulário está 100% valido');
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adicionar a mensagem de erro
    small.innerText = message

    // Adicionar a classe de erro;
    formControl.className = "form-control error";
} 

function setSuccesFor(input){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}