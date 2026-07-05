import { memories } from "./memories";
import { gsap } from "gsap";
import { typeMemory } from "../../js/typeMemory";

export function animateStory() {

    const ring = document.getElementById("photoRing");

    const viewer = document.getElementById("memoryViewer");

    const viewerImage = document.getElementById("viewerImage");
    const viewerDate = document.getElementById("viewerDate");
    const viewerTitle = document.getElementById("viewerTitle");
    const viewerMessage = document.getElementById("viewerMessage");

    const viewerCard = document.querySelector(".viewerCard");

    const closeBtn = document.getElementById("closeViewer");

    const radius = 420;

    // ----------------------------
    // Create Orbit Cards
    // ----------------------------

    memories.forEach((memory, index) => {

        const angle = (360 / memories.length) * index;

        const card = document.createElement("div");

        card.className = "polaroid";

        card.style.transform = `
            rotateY(${angle}deg)
            translateZ(${radius}px)
        `;

        card.innerHTML = `

            <div class="photoCard">

                <img src="${memory.image}" alt="${memory.title}">

                <div class="caption">

                    ${memory.title}

                </div>

            </div>

        `;

        ring.appendChild(card);

        // ----------------------------
        // Open Viewer
        // ----------------------------

        card.addEventListener("click", () => {

            ring.style.animationPlayState = "paused";

            viewer.classList.add("show");

            viewerCard.classList.remove("flip");

            viewerImage.src = memory.image;

            viewerDate.innerText = memory.date || "";

            viewerTitle.innerText = memory.title;

            viewerMessage.innerHTML = "";

            gsap.fromTo(

                viewerCard,

                {
                    scale: 0.3,
                    rotation: -20,
                    opacity: 0
                },

                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }

            );

            // ----------------------------
            // Flip Card
            // ----------------------------

         viewerCard.onclick = () => {

    console.log("clicked");

    viewerCard.classList.toggle("flip");

};

        });

    });

    // ----------------------------
    // Close Viewer
    // ----------------------------

    closeBtn.onclick = () => {

        viewer.classList.remove("show");

        viewerCard.classList.remove("flip");

        viewerMessage.innerHTML = "";

        ring.style.animationPlayState = "running";

    };

    const viewerWrapper=document.querySelector(".viewerWrapper");

gsap.fromTo(
    viewerWrapper,
    {
        scale:0.3,
        rotation:-20,
        opacity:0
    },
    {
        scale:1,
        rotation:0,
        opacity:1,
        duration:.8
    }
);
}