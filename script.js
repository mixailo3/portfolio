let condition = true;
let start = 0;
let end = 0;

function openBurger(){
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: "alternate",
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: "alternate",
        duration: 1000,
        loop: false
    });
    anime({
        targets: ".menu-small",
        translateX: ["-100%", "0"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    })
    condition = false;
};

function closeBurger(){
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: "alternate",
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: "alternate",
        duration: 1000,
        loop: false
    });
    anime({
        targets: ".menu-small",
        translateX: ["0", "-100%"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    })
    condition = true;
};


$(".menu_small_icon").click(function(){
    if (condition){
        openBurger();   
    } else {
        closeBurger();
    }
})

$(".container").on("touchstart", function(event){
    start = event.originalEvent.touches[0].pageX;
})
$(".container").on("touchend", function(event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition){
        openBurger();
    } else if (start - end >= 100 && !condition) {
        closeBurger();
    }
})


let links = document.querySelectorAll(".scroll");
let targetid;
links.forEach(function(element){
    element.addEventListener("click", function(event){
        event.preventDefault();
        targetid = element.getAttribute("href");
        document.querySelector(targetid).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
    
})

$(document).ready(function () {
    $('.projects').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 346,
        slideMargin: 20,
        moveSlides: 1,
        infiniteLoop: true
    });
});

let canvas1 = document.querySelector(".canvas1");
let pen1 = canvas1.getContext("2d");

pen1.beginPath();
pen1.moveTo(79, 1);
pen1.lineTo(151,1);
pen1.lineTo(151, 111);
pen1.lineTo(40, 118);
pen1.lineTo(40, 79);
pen1.lineTo(118, 79);
pen1.lineTo(118, 40);
pen1.lineTo(1, 40);
pen1.lineTo(1, 156);
pen1.lineTo(79, 156);
pen1.lineTo(79, 1);
pen1.closePath();
pen1.strokeStyle = "rgba(199, 120, 221, 1)";
pen1.lineWidth = 1;
pen1.stroke();

// pen1.beginPath();
// pen1.moveTo(57, 0);
// pen1.lineTo(113,0);
// pen1.lineTo(113, 86);
// pen1.lineTo(27, 86);
// pen1.lineTo(27, 57);
// pen1.lineTo(86, 57);
// pen1.lineTo(86, 27);
// pen1.lineTo(0, 27);
// pen1.lineTo(0, 113);
// pen1.lineTo(57, 113);
// pen1.lineTo(57, 0);
// pen1.closePath();
// pen1.strokeStyle = "rgba(199, 120, 221, 1)";
// pen1.lineWidth = 1;
// pen1.stroke();
let canvas2 = document.querySelector(".canvas2");
let pen2 = canvas2.getContext("2d");
let x1 = 0;
let y1 = 0;
for (let i = 0; i < 5; i++ ){
    for (let j = 0; j < 5; j++){
        pen2.beginPath();
        pen2.arc(x1+4, y1+4, 2, 0, 2 * Math.PI, true);
        pen2.fillStyle = "rgba(171, 178, 191, 1)";
        pen2.fill();
        pen2.lineWidth = 1;
        pen2.strokeStyle = "rgba(171, 178, 191, 1)";
        pen2.stroke();
        x1 += 16
    }
    y1 += 16;
    x1 = 0;
}

let canvas3 = document.querySelector(".canvas3");
let pen3 = canvas3.getContext("2d");
let x2 = 0;
let y2 = 0;
for (let i = 0; i < 5; i++ ){
    for (let j = 0; j < 5; j++){
        pen3.beginPath();
        pen3.arc(x2+3, y2+3, 2, 0, 2 * Math.PI, true);
        pen3.fillStyle = "rgba(171, 178, 191, 1)";
        pen3.fill();
        pen3.lineWidth = 1;
        pen3.strokeStyle = "rgba(171, 178, 191, 1)";
        pen3.stroke();
        x2 += 16
    }
    y2 += 16;
    x2 = 0;
}
 
let canvas4= document.querySelector(".canvas4");
let pen4 = canvas4.getContext("2d");
pen4.beginPath();
pen4.moveTo(2, 2);
pen4.lineTo(88, 2);
pen4.lineTo(88, 88);
pen4.lineTo(2, 88);
pen4.lineTo(2, 2);
pen4.closePath();
pen4.strokeStyle = "rgba(171, 178, 191, 1)";
pen4.lineWidth = 1;
pen4.stroke();


// анимация
anime({
    targets:'.logo',
    scale:['0.7', '1'],
    duration: 700,
    loop: false,
    direction:'alternate',
    easing:'linear'
})