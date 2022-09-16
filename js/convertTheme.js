// dark mode
getMode();
function getMode() {

    const portFolioBtnModes = document.querySelectorAll('.portFolio_btn_mode');
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        for (let i = 0; i < portFolioBtnModes.length; i++) {
            portFolioBtnModes[i].setAttribute('checked', 'true');
            toDarkTheme();
        }

    } else {
        for (let i = 0; i < portFolioBtnModes.length; i++) {
            portFolioBtnModes[i].removeAttribute('checked');
            toLightTheme();
        }
    }
}

selectMode();
function selectMode() {

    const portFolioBtnModes = document.querySelectorAll('.portFolio_btn_mode');

    for (let i = 0; i < portFolioBtnModes.length; i++) {
        portFolioBtnModes[i].addEventListener('change', function (event) {

            if (event.target.checked) {
                localStorage.setItem('mode', 'dark');
                toDarkTheme();
            } else {
                localStorage.setItem('mode', 'light');
                toLightTheme();
            }
        });
    }

};

function toDarkTheme() {

    let body = document.querySelector('body');
    body.style.backgroundColor = '#181818';
    body.style.color = 'white';

    // navbar
    let portfolioNavContents = document.querySelectorAll('.portfolio_nav_content');
    let portfolioImageNouns = document.querySelectorAll('.portfolio_image_noun');
    let navbars = document.querySelectorAll('#navbar>header');
    let headerMobile = document.querySelector('#header_mobile');

    for (let i = 0; i < navbars.length; i++) {
        navbars[i].style.backgroundColor = '#181818';
    }

    for (let i = 0; i < portfolioNavContents.length; i++) {
        portfolioNavContents[i].classList.replace('text-dark', 'text-light');
    }

    headerMobile.classList.add('navbar-dark');

    // images
    const path_dark = './images/noun/dark/'
    for (let i = 0; i < portfolioImageNouns.length; i++) {

        const fileName_1 = portfolioImageNouns[i].getAttribute('src').split(/\//);
        const fileName_2 = fileName_1[fileName_1.length - 1];
        portfolioImageNouns[i].setAttribute('src', path_dark + fileName_2);
    }

    const pathDark = './images/noun/dark/'
    const pathDarkHover = './images/noun/dark_hover/'

    for (let i = 0; i < portfolioImageNouns.length; i++) {
        const fileName_1 = portfolioImageNouns[i].getAttribute('src').split(/\//);
        const fileName_2 = fileName_1[fileName_1.length - 1];

        portfolioImageNouns[i].addEventListener('mouseover', function () {
            portfolioImageNouns[i].style.width = '40px';
            portfolioImageNouns[i].setAttribute('src', pathDarkHover + fileName_2);
        });

        portfolioImageNouns[i].addEventListener('mouseleave', function () {
            portfolioImageNouns[i].style.width = '30px';
            portfolioImageNouns[i].setAttribute('src', pathDark + fileName_2);
        });
    }
}

function toLightTheme() {

    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';
    body.style.color = '#181818';

    // navbar
    let portfolioNavContents = document.querySelectorAll('.portfolio_nav_content');
    let portfolioImageNouns = document.querySelectorAll('.portfolio_image_noun');
    let navbars = document.querySelectorAll('#navbar>header');
    let headerMobile = document.querySelector('#header_mobile');

    for (let i = 0; i < navbars.length; i++) {
        navbars[i].style.backgroundColor = 'white';
    }

    for (let i = 0; i < portfolioNavContents.length; i++) {
        portfolioNavContents[i].classList.replace('text-light', 'text-dark');
    }

    headerMobile.classList.remove('navbar-dark');

    // images
    const path_light = './images/noun/light/'
    for (let i = 0; i < portfolioImageNouns.length; i++) {

        const fileName_1 = portfolioImageNouns[i].getAttribute('src').split(/\//);
        const fileName_2 = fileName_1[fileName_1.length - 1];
        portfolioImageNouns[i].setAttribute('src', path_light + fileName_2);
    }

    const pathLight = './images/noun/light/'
    const pathLightHover = './images/noun/light_hover/'

    for (let i = 0; i < portfolioImageNouns.length; i++) {
        const fileName_1 = portfolioImageNouns[i].getAttribute('src').split(/\//);
        const fileName_2 = fileName_1[fileName_1.length - 1];

        portfolioImageNouns[i].addEventListener('mouseover', function () {
            portfolioImageNouns[i].style.width = '40px';
            portfolioImageNouns[i].setAttribute('src', pathLightHover + fileName_2);
        });

        portfolioImageNouns[i].addEventListener('mouseleave', function () {
            portfolioImageNouns[i].style.width = '30px';
            portfolioImageNouns[i].setAttribute('src', pathLight + fileName_2);
        });
    }

}