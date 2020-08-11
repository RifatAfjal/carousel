var slideIndex,slides,dots;

function initGallery(){
    slideIndex = 0;
    slides = document.querySelectorAll('.imgContainer');
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.zIndex = 4;
    dots = [];
    const dotContainer = document.querySelector('.dotContainer');
    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('onclick',"carouselMove("+i+")");
        dotContainer.appendChild(dot);
        dots.push(dot);
    }
    console.log(dots);
    dots[slideIndex].classList.add('active');
}
initGallery();

function carousel(n){
    carouselMove(slideIndex + n)
}

function carouselMove(n){
    var i,current,next;
    var moveCarousel = {
        forCurrent: '',
        forNext: ''
    }

    if(n > slideIndex){
        if(n >= slides.length){n = 0};
        moveCarousel.forCurrent = 'moveLeftCurrentCarousel'
        moveCarousel.forNext = 'moveLeftNextCarousel';
    }
    else if(n < slideIndex){
        if(n < 0){n = slides.length -1};
        moveCarousel.forCurrent = 'moveRightCurrentCarousel';
        moveCarousel.forNext = 'moveRightNextCarousel'
    }

    if(n != slideIndex){
        next = slides[n];
        current = slides[slideIndex];
        for(i = 0; i< slides.length; i++){
            slides[i].className = "imgContainer";
            slides[i].style.opacity = 0;
            dots[i].classList.remove('active');
        }
        current.classList.add(moveCarousel.forCurrent);
        next.classList.add(moveCarousel.forNext);
        dots[n].classList.add('active');
        slideIndex = n;
    }
}

var timer = null;
function setTimer(){
    timer = setInterval(() =>{
        carousel(1)
    },4000)
}
setTimer();

const slideContainer = document.querySelector('.slideContainer');
slideContainer.addEventListener('mouseenter',()=>{
    playPause();
})
slideContainer.addEventListener('mouseleave',()=>{
    pausePlay();
})

function playPause() {
    if(timer == null){
        setTimer()
    }else{
        clearInterval(timer);
        timer = null;
    }
}

function pausePlay() {
    timer = null;
    setTimer();
}


// const slideContainer = document.querySelector('.slideContainer');
// slideContainer.addEventListener("mouseover",()=>{
//    if('mouseover'){
//     clearInterval(interval)
//    }
// })
// slideContainer.addEventListener("mouseout",()=>{
//     if('mouseout'){
//         setInterval(() => {
//             carousel(1)
//         }, 4000);
//     }
// })
// const interval = setInterval(() => {
//                     carousel(1)
//                 }, 4000);

