// dark mode
getMode();
function getMode() {

    const btnDarkMode = document.querySelector('#btn_dark_mode');
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        btnDarkMode.setAttribute('checked', 'true');
        toDarkTheme();
    } else {
        btnDarkMode.removeAttribute('checked');
        toLightTheme();
    }
}

selectMode();
function selectMode() {

    const btnDarkMode = document.querySelector('#btn_dark_mode');
    btnDarkMode.addEventListener('change', function (event) {

        if (event.target.checked) {
            localStorage.setItem('mode', 'dark');
            toDarkTheme();
        } else {
            localStorage.setItem('mode', 'light');
            toLightTheme();
        }
    });
};

function toDarkTheme() {

    let body = document.querySelector('body');
    let portfolioNavContents = document.querySelectorAll('.portfolio_nav_content');
    let portfolioImageNouns = document.querySelectorAll('.portfolio_image_noun');
    let navbar = document.querySelector('#navbar>header');

    body.style.backgroundColor = '#181818';
    navbar.style.backgroundColor = '#181818';
    body.style.color = 'white';
    

    for (let i = 0; i < portfolioNavContents.length; i++) {
        portfolioNavContents[i].classList.replace('text-dark', 'text-light');
    }

    // images
    const path_dark = './images/noun/dark/'
    for (let i = 0; i < portfolioImageNouns.length; i++) {

        const fileName_1 = portfolioImageNouns[i].getAttribute('src').split(/\//);
        const fileName_2 = fileName_1[fileName_1.length - 1];
        portfolioImageNouns[i].setAttribute('src', path_dark + fileName_2);
    }
}

function toLightTheme() {

    let body = document.querySelector('body');
    let portfolioNavContents = document.querySelectorAll('.portfolio_nav_content');
    let portfolioImageNouns = document.querySelectorAll('.portfolio_image_noun');
    let navbar = document.querySelector('#navbar>header');

    body.style.backgroundColor = 'white';
    navbar.style.backgroundColor = 'white';
    body.style.color = '#181818';
    for (let i = 0; i < portfolioNavContents.length; i++) {
        portfolioNavContents[i].classList.replace('text-light', 'text-dark');
    }

    // images
    const path_light = './images/noun/light/'
    for (let i = 0; i < portfolioImageNouns.length; i++) {

        const fileName_1 = portfolioImageNouns[i].getAttribute('src').split(/\//);
        const fileName_2 = fileName_1[fileName_1.length - 1];
        portfolioImageNouns[i].setAttribute('src', path_light + fileName_2);
    }
}