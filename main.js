/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('navMenu')
const navToggle = document.getElementById('navToggle')
const navClose = document.getElementById('navClose')


/*===== MENU SHOW =====*/

/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        console.log('click');
        navMenu.classList.add('showMenu')
    })
}


// ===== MENU HIDDEN ===
//  Validate if constant exists 
if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('showMenu')
    })
}






/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll('.navLink')
const linkAction=()=>{
    const navMenu = document.getElementById('navMenu')
    console.log(navMenu);
    navMenu.classList.remove('showMenu')
}
navLinks.forEach( ekLink => ekLink.addEventListener('click', linkAction) )





/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = ()=>{
    const headerEl = document.getElementById('header')
    this.scrollY >= 50 ? headerEl.classList.add('blur-header')
                    : headerEl.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUpFun = () =>{
    const scrollUpEl = document.getElementById('scrollUp')
    this.scrollY >= 350 ? scrollUpEl.classList.add('showScrollUp') 
                        : scrollUpEl.classList.remove('showScrollUp')
} 
window.addEventListener('scroll', scrollUpFun)


// ======== ============

const sr = ScrollReveal({
    origin: 'top',
    distance : '60px',
    duration: 2000,
    delay:300,
    // reset:true
})


sr.reveal(`.homeData,.exploreData,.exploreUser, .footerContent`)
sr.reveal(`.homeCard`, {delay:600, distance: '100px', interval:100})
sr.reveal(`.aboutData, .joinImgCon `, {origin: "right"})
sr.reveal(`.aboutImgCon, .joinData`, {origin: "left"})
sr.reveal(`.popularCard`, {interval: 100})



