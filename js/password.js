export function passwordFunction() {
    let input = document.querySelectorAll('.main-password .content .box input');

    input.forEach((e) => {
        e.addEventListener('focus', () => {
            e.nextElementSibling.style.cssText = `
    font-size:10px; top:-7px; right:25px ;
    background-color: white ;color:var(--main-color)`;
            e.parentElement.style.borderColor = 'var(--main-color)';
        });
    });

    input.forEach((e) => {
        e.addEventListener('blur', () => {
            if (e.value.length > 0) {
                e.nextElementSibling.style.cssText = `
    font-size:10px; top:-7px; right:25px ;
    background-color: white ;color:var(--main-color)`;
            } else {
                e.nextElementSibling.style.cssText = `
    font-size:12px; top:7px; right:15px ;
    background-color: transparent;`;
                e.parentElement.style.borderColor = '#ddd';
            }
        });
    });
}
