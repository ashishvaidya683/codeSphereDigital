
// Locomotive
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.landing-page'),
//     smooth: true
// });

// MouseFollower
// function circleMouseFollower(){
//     window.addEventListener("mousemove", function(dets){
//         console.log(dets)
//        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//     })
// };
// circleMouseFollower();


// Service Page animation
document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){
        document.querySelector("body").style.cursor = "default"

        gsap.to(elem.querySelector(".img-container"),{
            opacity:0,
            ease   : Power3,
        });
    });

    elem.addEventListener("mousemove", function(dets){
        document.querySelector("body").style.cursor = "pointer"

        var diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector(".img-container"),{
            opacity:1,
            ease   : Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot)
        });
    });
});