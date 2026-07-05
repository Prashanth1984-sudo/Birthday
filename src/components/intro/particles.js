export function createParticles() {

    const container = document.querySelector(".particles");

    for (let i = 0; i < 120; i++) {

        const p = document.createElement("span");

        p.classList.add("particle");

        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.animationDuration = (6 + Math.random() * 10) + "s";

        p.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(p);

    }

}