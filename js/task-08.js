let formEl = document.querySelector('.login-form');
let submitBtn = formEl.querySelector('button[type="submit"]');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Всі поля повинні бути заповнені.');
        return;
    }
    const formData = { 
        email: email.value, 
        password: password.value, 
    };

    console.log(formData);
      
    event.currentTarget.reset();
}
