import { gsap } from "gsap";
import { createParticles } from "./particles";
import { render } from "../../app";
export function animateIntro() {

    createParticles();

    // Hide everything initially
    gsap.set([
        ".intro-date",
        ".intro-title",
        ".intro-subtitle",
        ".intro-quote",
        "#beginBtn"
    ], {
        opacity: 0,
        y: 30
    });

    const tl = gsap.timeline();

    tl.to(".intro-date", {
        opacity: 1,
        y: 0,
        duration: 0.8
    })

    .to(".intro-title", {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=0.3")

    .to(".intro-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, "-=0.4")

    .to(".intro-quote", {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=0.3")

    // Small pause before button appears
    .to({}, { duration: 0.5 })

    .to("#beginBtn", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    });

    document
.getElementById("beginBtn")
.addEventListener("click",()=>{

gsap.to("#intro",{

opacity:0,

duration:1,

onComplete:()=>{

render(LockHTML());

animateLock();

}

});

});

}