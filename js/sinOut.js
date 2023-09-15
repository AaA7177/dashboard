export function sinOutFunction() {
    let showPassword = document.querySelector('.main-sin-out #show-password');
    let inputPassword = document.querySelector('.main-sin-out .password input');
    let checkEmail = document.querySelector('.main-sin-out .email i');
    let inputEmail = document.querySelector('.main-sin-out .email input');
    let show = true;

    showPassword.addEventListener('click', () => {
        if (show == true) {
            inputPassword.type = 'text';
            showPassword.style.color = 'var(--main-color)';
            show = false;
        } else {
            inputPassword.type = 'password';
            showPassword.style.color = '#888';
            show = true;
        }
    });

    inputEmail.addEventListener('input', () => {
        if (inputEmail.value == localStorage.getItem('email')) {
            checkEmail.style.opacity = 1;
        } else {
            checkEmail.style.opacity = 0;
        }
    });
}
