// variables 

//navigation variables
const nav = document.querySelector('nav');
const menuBtn = nav.querySelector('.mobile-bars');
const navUl = nav.querySelector('ul')
const menuIcons = menuBtn.querySelectorAll('i')
const openMenu = menuIcons[0];
const closeMenu = menuIcons[1];

// hero-sec variables
const heroSec = document.querySelector('.hero-sec')
const sliderDivsContainer = heroSec.querySelector('.container')
const heroDivs = heroSec.querySelectorAll('.container > div')
const sliderButtons = heroSec.querySelectorAll('i')
const prevBtn = sliderButtons[0]
const nextBtn = sliderButtons[1];
//product-section variables
let products = document.querySelectorAll('.product')


//cart variable
let cartCounter = document.querySelector('.cart-counter')

// //making our slider to slider automatically
// function sliderInterval() {
//     counter++
//     sliderDivsContainer.style.transform = `translateX(${counter * -100}%)`
//     sliderDivsContainer.style.transition = 'transform 2s'
// }
// let sliderIntervalVar = null

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    nav.style.transition = 'all 1s'
    menuIcons.forEach(menuIcon => {
        menuIcon.classList.toggle('show-or-hide')
    })
})


sliderDivsContainer.addEventListener('mouseover', () => {
    heroSec.classList.add('fade')
    sliderButtons.forEach(button => {
        button.style.display = 'block';
        
    })
})

sliderDivsContainer.addEventListener('mouseout', () => {
    heroSec.classList.remove('fade')
    sliderButtons.forEach(button => {
        button.style.display = 'none';
    })
})

sliderButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.display = 'block';
        heroSec.classList.add('fade')
    })
    

})

    

// making our carousel slide
let counter = 1;
let size = heroDivs[0].clientWidth;
//sliderDivsContainer.style.transform = `translateX(${counter * -100}%)`



nextBtn.addEventListener('click', (e) => {
    if (counter == heroDivs.length -1) return;
    counter++
    sliderDivsContainer.style.transform = `translateX(${counter * -100}%)`
    sliderDivsContainer.style.transition = 'transform 2s'
})

prevBtn.addEventListener('click', (e) => {
    
    if (counter == 0) return;
    counter--
    sliderDivsContainer.style.transform = `translateX(${counter * -100}%)`
    sliderDivsContainer.style.transition = 'transform 2s'
})

sliderDivsContainer.addEventListener('transitionend', () => {
   
    if (counter >= heroDivs.length -1) {
        counter = 0;
        sliderDivsContainer.style.transform = `translateX(${counter * -100}%)`
        sliderDivsContainer.style.transition = 'none'
    }else if (counter == 0) {
        counter = heroDivs.length -1
        sliderDivsContainer.style.transform = `translateX(${counter * -100}%)`
        sliderDivsContainer.style.transition = 'none'
    }
})

//carousel slider functionality ends here 

// making our products product fade out on mouse over
products.forEach(product => {
    product.addEventListener('mouseover', (e) => {
        product.classList.add('fade')
    })
    product.addEventListener('mouseout', (e) => {
        product.classList.remove('fade')
    })
    let addToCartBtn = product.querySelector('button');
    addToCartBtn.addEventListener('click', () => {
        increment = parseInt(cartCounter.innerText)
        console.log(increment)
        increment += 1;
        cartCounter.innerText = increment
    })
})
