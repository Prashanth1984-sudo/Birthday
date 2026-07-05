export function createPetals() {

    const container = document.querySelector(".petals");

    for (let i = 0; i < 18; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "%";

        petal.style.animationDuration = 8 + Math.random() * 6 + "s";

        petal.style.animationDelay = Math.random() * 5 + "s";

        petal.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(petal);

    }

}