import { gsap } from "gsap";

export function typeWriter(element, speed = 120) {

    const original = element.dataset.text;

    if (!original) return;

    element.innerHTML = "";

    const words = original.split(" ");

    let index = 0;

    function typeNext() {

        if (index >= words.length) return;

        element.innerHTML += words[index] + " ";

        index++;

        gsap.delayedCall(speed / 1000, typeNext);

    }

    typeNext();

}