import { gsap } from "gsap";
import { createPetals } from "./petals";

export function animateGarden(){

createPetals();

const tl = gsap.timeline();

tl.from(".garden-video",{

opacity:0,

duration:2

})

.from(".chapter",{

opacity:0,

y:40,

duration:.8

})

.from(".garden-content h1",{

opacity:0,

y:40,

duration:1

})

.from(".garden-content p",{

opacity:0,

y:30,

duration:1

})

.from("#continueBtn",{

opacity:0,

y:20,

duration:.8

});

}