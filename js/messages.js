export function messagesFunction() {
    let heart = document.querySelectorAll('#heart');
    let p = document.querySelectorAll('.main-messages .box p');
    let overlayM = document.querySelector('.main-messages .overlay');
    let comments = document.querySelectorAll('#comment');
    let commentsBox = document.querySelector('.comments-box');
    let sendBox = document.querySelector('.comments-box .send-box');
    let com = document.querySelector('.comments-box .com');
    let readmoreSpan = `<span data-show = "readmore" style = "font-size:12px; cursor:pointer; color: #333;">... قرائة المزيد</span>`;
    let pLength = [];

    heart.forEach((e) => {
        e.addEventListener('click', () => {
            e.classList.toggle('blue');
            e.parentElement.classList.toggle('blue');

            if (e.classList.contains('blue')) {
                +e.parentElement.querySelector('span').innerHTML++;
            } else {
                +e.parentElement.querySelector('span').innerHTML--;
            }
        });
    });

    p.forEach((e) => {
        pLength.push(e.textContent.length);
    });

    p.forEach((e) => {
        if (e.textContent.length > Math.min(...pLength)) {
            e.setAttribute('content', e.textContent);
            e.innerHTML =
                e.textContent.slice(0, Math.min(...pLength)) + readmoreSpan;
        }
    });

    addEventListener('click', (e) => {
        if (e.target.dataset.show == 'readmore') {
            e.target.parentElement.parentElement.classList.toggle('show');
            document.querySelector('.main-page-content').style.cssText =
                'overflow: visible;';
            e.target.parentElement.innerHTML =
                e.target.parentElement.getAttribute('content');
            overlayM.style.cssText = `display: block;`;
            window.scrollTo({
                top: window.pageXOffset,
                behavior: 'smooth',
            });
        }
    });

    overlayM.addEventListener('click', () => {
        overlayM.style.cssText = `display: none;`;
        // document.querySelector('.main-page-content').style.overflow = `hidden`;
        p.forEach((e) => {
            if (e.parentElement.classList.contains('show')) {
                e.parentElement.classList.remove('show');
                e.innerHTML =
                    e.textContent.slice(0, Math.min(...pLength)) + readmoreSpan;
            }
        });
        commentsBox.style.cssText = `display:none`;
        com.innerHTML = '';
    });

    let clickOnComment = false;

    comments.forEach((e) => {
        document.querySelector('.main-page-content').style.overflow = 'visible';
        e.addEventListener('click', () => {
            commentsBox.style.cssText = `display:block;`;
            overlayM.style.cssText = `display:block;`;
            p.forEach((e) => {
                e.parentElement.classList.remove('show');
                if (e.textContent.length > Math.min(...pLength)) {
                    e.innerHTML =
                        e.textContent.slice(0, Math.min(...pLength)) +
                        readmoreSpan;
                }
            });
            window.scrollTo({
                top: window.pageXOffset,
                behavior: 'smooth',
            });
            let s = e.parentElement.parentElement.parentElement.cloneNode(true);
            if (s.children[1].hasAttribute('content')) {
                s.children[1].innerHTML = s.children[1].getAttribute('content');
            }
            s.children[2].remove();

            // this code for
            if (clickOnComment == false) {
                commentsBox.prepend(s);
                clickOnComment = true;
            } else {
                commentsBox.children[0].remove();
                commentsBox.prepend(s);
            }
        });
    });

    sendBox.children[1].addEventListener('click', () => {
        if (sendBox.children[0].value.length > 0) {
            let span = document.createElement('span');
            span.innerHTML = sendBox.children[0].value;
            com.append(span);
            sendBox.children[0].value = '';
            com.scrollTo(0, com.scrollHeight);
        }
    });
}

