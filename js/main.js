import {
    dashboard,
    customers,
    messages,
    help,
    settings,
    password,
    signOut,
} from './all-pages.js';

import { messagesFunction } from './messages.js';
import { dashboardFunction } from './dashboard.js';
import { helpFunction } from './help.js';
import { settingsFunction } from './settings.js';
import { passwordFunction } from './password.js';
import { sinOutFunction } from './sinOut.js';

let home = document.querySelector('.home');

home.innerHTML = dashboard;
dashboardFunction();

let links = document.querySelectorAll('.links a');
links.forEach((element) => {
    element.addEventListener('click', () => {
        links.forEach((e) => {
            e.classList.remove('active');
        });
        element.classList.add('active');
    });
});

let ser = dashboard;

links.forEach((a) => {
    a.addEventListener('click', () => {
        if (a.dataset.home == 'dashboard') {
            home.innerHTML = dashboard;
            ser = dashboard;
            dashboardFunction();
        } else if (a.dataset.home == 'customers') {
            home.innerHTML = customers;
            ser = customers;
        } else if (a.dataset.home == 'messages') {
            home.innerHTML = messages;
            ser = messages;
            messagesFunction();
        } else if (a.dataset.home == 'help') {
            home.innerHTML = help;
            ser = help;
            helpFunction();
        } else if (a.dataset.home == 'settings') {
            home.innerHTML = settings;
            ser = settings;
            settingsFunction();
        } else if (a.dataset.home == 'password') {
            home.innerHTML = password;
            ser = password;
            passwordFunction();
            setInterval(() => {
                if (document.querySelector('.main-password .content')) {
                    document.querySelector(
                        '.main-password .content'
                    ).style.top = '50%';
                }
            }, 0);
        } else if (a.dataset.home == 'sign-out') {
            home.innerHTML = signOut;
            ser = signOut;
            sinOutFunction();
        }
    });
});

let toggel = document.querySelector('.main-page-content #toggel');
let sidebar = document.querySelector('.nav');
let logo = document.querySelector('.nav .logo');

toggel.addEventListener('click', function () {
    toggel.classList.toggle('active');
    sidebar.classList.toggle('active');
    if (toggel.classList.contains('active')) {
        logo.style.fontSize = '19px';
    } else {
        logo.style.fontSize = '10px';
    }
});

// if you can make this code please do it and send to me the repo , because I did can't do it "search box"
// let search = document.querySelector('#search');

// search.oninput = function () {
//     if (/[ا-ي]/g.test(search.value)) {
//         let regSearch = new RegExp(`${search.value}`, 'g');
//         if (search.value.length > 0) {
//             if (regSearch.test(ser)) {
//                 let s = ser.replace(
//                     regSearch,
//                     '<z style ="background-color:red; color:#fff;">$&</z>'
//                 );
//                 home.innerHTML = s;
//             }
//         }
//     } else {
//         home.innerHTML = ser;
//     }
// };

function toggle(localName, element) {
    if (localStorage.getItem(localName)) {
        document.querySelector(element).style.display = 'none';
    } else {
        document.querySelector(element).style.display = 'block';
    }
}

toggle('search', '.search-box');
toggle('hide-logo', '#logo');

if (localStorage.getItem('settingImg')) {
    document.querySelector('#profileImg').src =
        localStorage.getItem('settingImg');
}

if (localStorage.getItem('color')) {
    document.documentElement.style.setProperty(
        '--main-color',
        localStorage.getItem('color')
    );
}

if (localStorage.getItem('fullName')) {
    document.querySelector('.logo span').textContent =
        localStorage.getItem('fullName');
}
