const slides=document.querySelectorAll('.slide');

console.log(slides);

let n=4;
let count=0;

slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})


const slideimg=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${count*100}%)`;
        }
    )
}

const goprev=()=>{
    count=(count-1+n)%n;
    slideimg();
}

const gonext=()=>{
    count=(count+1)%n;
    slideimg();
}