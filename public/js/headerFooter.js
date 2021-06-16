//#########
// Header
//#########

const burger = document.querySelector('.burger');
const nav = document.getElementsByTagName('nav')[0];
const navLinks = document.querySelectorAll('.nav__links li');
const htmlOverlay = document.getElementById('htmlOverlay');
const anchorTags = document.querySelectorAll('.nav__links li a')




//#########
// Footer 
//#########

function setVariable () {
    let footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
    document.querySelector(':root').style.setProperty('--footer-height', footerHeight + 'px');
}

setTimeout(() => {setVariable()}, 100);

addEventListener('resize', () => {
    setVariable();
});