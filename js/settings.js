export function settingsFunction() {
    let mainSettingsTitlesSpan = document.querySelectorAll('.titles span');

    let mainSettingsTitlesDiv = document.querySelectorAll(
        '.main-settings .left .content > div'
    );
    mainSettingsTitlesSpan.forEach((span) => {
        span.addEventListener('click', () => {
            mainSettingsTitlesSpan.forEach((span) => {
                span.classList.remove('active');
            });
            mainSettingsTitlesDiv.forEach((div) => {
                if (div.classList.contains(span.dataset.content)) {
                    mainSettingsTitlesDiv.forEach((div2) => {
                        div2.style.cssText = 'display:none';
                    });
                    div.style.cssText = ' display: block; opacity :0;';

                    setTimeout(() => {
                        div.style.opacity = 1;
                    }, 100);
                }
            });
            span.classList.add('active');
        });
    });

    let inputFile = document.querySelector('#inputFile');
    let profileImg = document.querySelectorAll('#profileImg');
    let iconUpload = document.querySelector('#upload');
    let overlay = document.querySelector('.edit-profile .overlay');
    let changeButton = document.querySelector('#changeButton');
    let fileValue = '';

    if (localStorage.getItem('fullName')) {
        document.querySelector('#setFulName').innerHTML =
            localStorage.getItem('fullName');
        document.querySelector('.logo span').textContent =
            localStorage.getItem('fullName');
        document.querySelector('#full-name').textContent =
            localStorage.getItem('fullName');
    }

    if (localStorage.getItem('jop')) {
        document.querySelector('#setJop').innerHTML =
            localStorage.getItem('jop');
        document.querySelector('#jop').innerHTML = localStorage.getItem('jop');
    }

    if (localStorage.getItem('company')) {
        document.querySelector('#company').innerHTML =
            localStorage.getItem('company');
    }

    if (localStorage.getItem('country')) {
        document.querySelector('#country').innerHTML =
            localStorage.getItem('country');
    }

    if (localStorage.getItem('address')) {
        document.querySelector('#address').innerHTML =
            localStorage.getItem('address');
    }

    if (localStorage.getItem('address')) {
        document.querySelector('#address').innerHTML =
            localStorage.getItem('address');
    }

    if (localStorage.getItem('number')) {
        document.querySelector('#number').innerHTML =
            localStorage.getItem('number');
    }

    if (localStorage.getItem('email')) {
        document.querySelector('#email').innerHTML =
            localStorage.getItem('email');
    }

    if (localStorage.getItem('descriptions')) {
        document.querySelector('.about').innerHTML =
            localStorage.getItem('descriptions');
    }

    if (localStorage.getItem('settingImg')) {
        profileImg.forEach((e) => {
            e.src = localStorage.getItem('settingImg');
        });
    }

    function information(input, span) {
        document.querySelector(input).value =
            document.querySelector(span).textContent;
    }

    information(`[name="full-name"]`, `#full-name`);
    information(`[name="company"]`, `#company`);
    information(`[name="jop"]`, `#jop`);
    information(`[name="country"]`, `#country`);
    information(`[name="address"]`, `#address`);
    information(`[name="number"]`, `#number`);
    information(`[name="email"]`, `#email`);
    information(`[name="descriptions"]`, `.about`);

    iconUpload.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    inputFile.addEventListener('input', () => {
        fileValue = 'imgs/' + inputFile.value.slice(12);
    });

    function information2(span, input) {
        document.querySelector(span).innerHTML =
            document.querySelector(input).value;
    }

    changeButton.addEventListener('click', () => {
        if (fileValue.length > 0) {
            profileImg.forEach((e) => {
                e.src = fileValue;
                localStorage.setItem('settingImg', fileValue);
            });
        }

        information2('#full-name', `[name="full-name"]`);

        localStorage.setItem(
            'fullName',
            document.querySelector(`[name="full-name"]`).value
        );

        information2('#company', `[name="company"]`);

        localStorage.setItem(
            'company',
            document.querySelector(`[name="company"]`).value
        );

        information2('#jop', `[name="jop"]`);

        localStorage.setItem(
            'jop',
            document.querySelector(`[name="jop"]`).value
        );

        information2('#country', `[name="country"]`);

        localStorage.setItem(
            'country',
            document.querySelector(`[name="country"]`).value
        );

        information2('#address', `[name="address"]`);

        localStorage.setItem(
            'address',
            document.querySelector(`[name="address"]`).value
        );

        information2('#number', `[name="number"]`);

        localStorage.setItem(
            'number',
            document.querySelector(`[name="number"]`).value
        );

        information2('#email', `[name="email"]`);

        localStorage.setItem(
            'email',
            document.querySelector(`[name="email"]`).value
        );

        information2('.about', `[name="descriptions"]`);

        localStorage.setItem(
            'descriptions',
            document.querySelector(`[name="descriptions"]`).value
        );
        document.querySelector('#setFulName').innerHTML =
            document.querySelector('[name="full-name"]').value;
        document.querySelector('.logo span').textContent =
            document.querySelector('[name="full-name"]').value;
        document.querySelector('#setJop').innerHTML =
            document.querySelector('[name="jop"]').value;
        location.reload();
    });

    document.querySelector('#remove').addEventListener('click', () => {
        profileImg.forEach((e) => {
            e.src = 'imgs/avatar-simmmple.png';
            localStorage.setItem('settingImg', 'imgs/avatar-simmmple.png');
        });
    });

    if (localStorage.getItem('color')) {
        document.documentElement.style.setProperty(
            '--main-color',
            localStorage.getItem('color')
        );
    }

    let colorBoxLi = document.querySelectorAll('.color-box li');

    colorBoxLi.forEach((li) => {
        if (li.dataset.color == localStorage.getItem('color')) {
            colorBoxLi.forEach((li) => {
                li.classList.remove('active');
            });
            li.classList.add('active');
        }
    });

    colorBoxLi.forEach((li) => {
        li.addEventListener('click', () => {
            colorBoxLi.forEach((li) => {
                li.classList.remove('active');
            });
            li.classList.add('active');
            document.documentElement.style.setProperty(
                '--main-color',
                li.dataset.color
            );
            localStorage.setItem('color', li.dataset.color);
        });
    });

    let toggels = document.querySelectorAll('.toggle');

    toggels.forEach((tg) => {
        if (localStorage.getItem(tg.dataset.toggle)) {
            tg.querySelector('i').className = 'fas fa-circle-xmark';
            tg.classList.toggle('false');
        } else {
            tg.querySelector('i').className = 'fas fa-circle-check';
        }
    });

    function toggle(localName, element) {
        if (localStorage.getItem(localName)) {
            document.querySelector(element).style.display = 'none';
        } else {
            document.querySelector(element).style.display = 'block';
        }
    }

    toggle('search', '.search-box');
    toggle('hide-logo', '#logo');

    toggels.forEach((tg) => {
        tg.addEventListener('click', () => {
            tg.classList.toggle('false');
            toggels.forEach((tg) => {
                if (tg.classList.contains('false')) {
                    tg.querySelector('i').className = 'fas fa-circle-xmark';
                    localStorage.setItem(tg.dataset.toggle, 'false');
                } else {
                    tg.querySelector('i').className = 'fas fa-circle-check';
                    localStorage.removeItem(tg.dataset.toggle);
                }
            });

            toggle('search', '.search-box');
            toggle('hide-logo', '#logo');
        });
    });
}
