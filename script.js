

const p1left  = document.querySelector(".p1box");
const p1center  = document.querySelector(".p1two-box");
const p1right  = document.querySelector(".p1tree-box");
const arrowleft = document.querySelector(".arrow .ri-arrow-left-circle-line");
const arrowright = document.querySelector(".arrow .ri-arrow-right-circle-line");



arrowleft.addEventListener("click",function(){
    var bgImage = localStorage.getItem("")
    // p1left.style.backgroundImage = "url/('/p2/huk976jk3o76tuk2pvim3jh52osj0373.jpg')";
    // p1left.style.display = "none";
})


















gsap.from("nav",{
    y:"-100%",
    duration:1,
    stagger : .2,
    delay:1.5,
    
})

gsap.from(".p1box",{
    y:"20%",
    opacity:0,
    duration:1,
    
});

gsap.from(".p1two-box",{
    // y:"20%",
    opacity:0,
    duration:2.5,
    
});

gsap.from(".p1tree-box",{
    y:"-20%",
    opacity:0,
    duration:1,
    
});

gsap.from(".arrow ",{
    // y:"-20%",
    opacity:0,
    duration:3,
    
});

gsap.from(".p1-one span",{
    opacity : 0,
    duration :2,
})


// const p3boxI = document.querySelector(".p3 i");
// const p3three = document.querySelector(".p3box .three");
// p3one.addEventListener("mouseenter",function(){
//      p3boxI.style.left = "50%";
//     //  p3boxI.style.display = 'none';
//     //  p3boxI.style.color = 'red';
// });


