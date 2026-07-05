import { gsap } from "gsap";
import { typeMemory } from "../../js/typeMemory";

export function animateLetter() {

    const envelope = document.getElementById("envelope");
    const paper = document.getElementById("paper");
    const signature = document.querySelector(".signature");
    const continueBtn = document.getElementById("continueStory");
    const letter = document.getElementById("letterText");

    let opened = false;

    const message = `

Happy Birthday, My Love ❤️

Today is all about celebrating the most beautiful person in my life—you.

Thank you for filling my days with happiness, laughter, and countless unforgettable memories.

Your smile is my favorite sight,
your voice is my favorite sound,
and your love is the greatest gift I've ever received.

I hope this year brings you endless joy,
good health,
success,
and every dream you've ever wished for.

No matter where life takes us,
I'll always cherish every moment we share.

You deserve all the love,
happiness,
and magic this world has to offer.

Happy Birthday, my princess.

May your heart always be full of smiles,
your dreams always come true,
and your life be as wonderful
as you make mine.

I love you today,
tomorrow,
and always. ❤️

`;

    envelope.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        /* Open Envelope */

        envelope.classList.add("open");

        /* Envelope disappears */

        const container=document.getElementById("envelopeContainer");

setTimeout(()=>{

container.classList.add("hide");

},1200);

        /* Show Letter */

        setTimeout(() => {

            paper.classList.add("show");

        }, 1200);

        /* Start Typing */

        setTimeout(() => {

            typeMemory(letter, message, 30, () => {

                signature.classList.add("show");

                setTimeout(() => {

                    continueBtn.classList.add("show");

                }, 800);

            });

        }, 1800);

    });

}