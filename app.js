
const introText = document.getElementsByClassName('intro-text')[0];
const logo = document.getElementById('logo')
const arrow = document.querySelector('figure')

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


// CLICK SLIDE
let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

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
    seeDescriptionButton.style.display = 'block';
    hideDescriptionButton.style.display = 'none';
}

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


// CAROUSEL
let changeSlideRight = () => {
    if(activeSlideNumber === 3) {
        activeSlideNumber = 1;
    } else {
        activeSlideNumber++;
    }
    showSlide(activeSlideNumber)
}

let changeSlideLeft = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 3;
    } else {
        activeSlideNumber--;
    }
    showSlide(activeSlideNumber)
}

let showDescription = () => {
    if(activeSlideNumber === 1) {
        slideDes1.style.display = 'block';
    } else if (activeSlideNumber === 2) {
        slideDes2.style.display = 'block';
    } else if (activeSlideNumber === 3) {
        slideDes3.style.display = 'block';
    }
    seeDescriptionButton.style.display = 'none';
    hideDescriptionButton.style.display = 'block';
};

let hideDescription = () => {
    slideDes1.style.display = 'none';
    slideDes2.style.display = 'none';
    slideDes3.style.display = 'none';
    seeDescriptionButton.style.display = 'block';
    hideDescriptionButton.style.display = 'none';
}

rightDot.addEventListener('click', changeSlideRight)
leftDot.addEventListener('click', changeSlideLeft)

seeDescriptionButton.addEventListener('click', showDescription)
hideDescriptionButton.addEventListener('click', hideDescription)

