import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function animateTimeline(){

gsap.utils.toArray(".memory").forEach(memory=>{

gsap.from(memory,{

opacity:0,

y:120,

duration:1.2,

scrollTrigger:{

trigger:memory,

start:"top 75%"

}

});

});

}