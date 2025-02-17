const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

const images =document.querySelectorAll('.image')

let slideNumber = 1;
const length = images.length;
const nextSlide =()=>{
    slider.style.transform = `translateX(-${slideNumber*1300}px)`;
    slideNumber++;
};
const prevSlide =()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*1300}px)`;
    slideNumber--;
};
const getFirstslide =()=>{
    slider.style.transform = `translateX(-${slideNumber*0}px)`;
    slideNumber = 1;
};
const getLastlide =()=>{
    slider.style.transform = `translateX(-${(length-1)*1300}px)`;
    slideNumber = length;
};

right.addEventListener('click',()=>{
    if(slideNumber < length){
        nextSlide();
    }
   else{
    getFirstslide();
   }
});
left.addEventListener('click',()=>{
    if(slideNumber > 1){
        prevSlide();
    }
   else{
    getLastlide();
   }
});