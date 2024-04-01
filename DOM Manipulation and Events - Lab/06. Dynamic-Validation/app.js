function validate() {
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let email = document.querySelector('input[id=email]')
    email.addEventListener('change', isValid);

    function isValid(event){
        let currentEmail = event.target.value;
        let result = validateEmail(currentEmail);
        if (!(result)){
            email.classList.add('error');
        } else {
            email.classList.remove('error')
        }
    }

    function validateEmail(email) {
        return emailPattern.test(email);
    }
}