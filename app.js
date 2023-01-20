
const introText = document.getElementsByClassName('intro-text')[0];
const logo = document.getElementById('logo')
const arrow = document.querySelector('figure')

// INTRO
// znika duża grafika i przesuwa się na bok
const introChange = () => {
    introText.style.display = 'block'
    logo.style.height = '200px'
}

// tekst wyświetla się po obrazku
const textVisibility = () => {
    introText.style.visibility = 'visible'
}

// strzałka pojawia się po załadowaniu innych
const arrowShow = () => {
    arrow.style.visibility = 'visible';
}

setTimeout(introChange, 4000)
setTimeout(textVisibility, 5100);
setTimeout(arrowShow, 6100)


// PROJECTS
const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');

const leftDot = document.getElementById('dot-left');
const rightDot = document.getElementById('dot-right');

const seeDescriptionButton = document.getElementById('see-description');
const hideDescriptionButton = document.getElementById('hide-description')

const slideDes1 = document.getElementById('slide-des1');
const slideDes2 = document.getElementById('slide-des2');
const slideDes3 = document.getElementById('slide-des3');

let activeSlideNumber = 2;


let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

// description
let showDescription = () => {
    if(activeSlideNumber === 1) {
        slide1.style.display = 'none';
        slideDes1.style.display = 'block'
        slideDes1.style.order = 2;
    } else if (activeSlideNumber === 2) {
        slide2.style.display = 'none'
        slideDes2.style.display = 'block';
        slideDes2.style.order = 2;
    } else if (activeSlideNumber === 3) {
        slide3.style.display = 'none'
        slideDes3.style.display = 'block';
        slideDes3.style.order = 2;
    }
    seeDescriptionButton.style.display = 'none';
    hideDescriptionButton.style.display = 'block';
};

let hideDescription = () => {
    slideDes1.style.display = 'none';
    slideDes2.style.display = 'none';
    slideDes3.style.display = 'none';
    if(activeSlideNumber === 1) {
        slide1.style.display = 'block';
    } else if(activeSlideNumber === 2) {
        slide2.style.display = 'block';
    } else if(activeSlideNumber === 3) {
        slide3.style.display = 'block';
    }
    seeDescriptionButton.style.display = 'block';
    hideDescriptionButton.style.display = 'none';
}


seeDescriptionButton.addEventListener('click', showDescription)
hideDescriptionButton.addEventListener('click', hideDescription)

// show slide
let showSlide = slideNumber => {
    slideDes1.style.display = 'none';
    slideDes2.style.display = 'none';
    slideDes3.style.display = 'none';
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active')
    if(slideNumber === 1) {
        slide3.style.order = 1
        slide2.style.order = 3
    } else if(slideNumber === 2) {
        slide1.style.order = 1
        slide3.style.order = 3  
    } else if(slideNumber === 3) {
        slide2.style.order = 1
        slide1.style.order = 3  
    } 
    hideDescription();
    seeDescriptionButton.style.display = 'block';
    hideDescriptionButton.style.display = 'none';
}

// click
let showSlide1 = () => {
    showSlide(1);
    activeSlideNumber = 1;
}

let showSlide2 = () => {
    showSlide(2);
    activeSlideNumber = 2;
}
let showSlide3 = () => {
    showSlide(3);
    activeSlideNumber = 3;
}

slide1.addEventListener('click', showSlide1);
slide2.addEventListener('click', showSlide2);
slide3.addEventListener('click', showSlide3);


// arrows
let changeSlideRight = () => {
    if(activeSlideNumber===1) {
        showSlide2();
    } else if(activeSlideNumber===2){
        showSlide3();
    } else if(activeSlideNumber===3){
        showSlide1()
    }
}

let changeSlideLeft = () => {
    if(activeSlideNumber===1) {
        showSlide3();
    } else if(activeSlideNumber===2){
        showSlide1();
    } else if(activeSlideNumber===3){
        showSlide2()
    }
}

rightDot.addEventListener('click', changeSlideRight)
leftDot.addEventListener('click', changeSlideLeft)


