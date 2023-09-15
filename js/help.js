export function helpFunction() {
    let open = document.querySelectorAll('#click');
    let content = document.querySelectorAll('.content');

    open.forEach((e) => {
        e.addEventListener('click', () => {
            document.documentElement.style.setProperty(
                '--accordion-heght',
                e.parentElement.querySelector('.content').scrollHeight +
                    50 +
                    'px'
            );
        });
    });

    open.forEach((e) => {
        e.addEventListener('click', () => {
            if (
                e.parentElement
                    .querySelector('.content')
                    .classList.contains('open')
            ) {
                e.parentElement
                    .querySelector('.content')
                    .classList.remove('open');
                e.classList.remove('active');
            } else {
                e.parentElement.parentElement
                    .querySelectorAll('.content')
                    .forEach((e) => {
                        e.classList.remove('open');
                    });
                open.forEach((e) => {
                    e.classList.remove('active');
                });
                e.parentElement.querySelector('.content').classList.add('open');
                e.classList.add('active');
            }
        });
    });
}
