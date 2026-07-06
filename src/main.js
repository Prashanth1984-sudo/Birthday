import "./style.css";
import "./css/variables.css";

/* ===========================
   INTRO
=========================== */
import "./components/intro/intro.css";
import { IntroHTML } from "./components/intro/intro.html";
import { animateIntro } from "./components/intro/intro";

/* ===========================
   GARDEN
=========================== */
import "./components/Garden/garden.css";
import { GardenHTML } from "./components/Garden/garden.html";
import { animateGarden } from "./components/Garden/garden";

/* ===========================
   STORY
=========================== */
import "./components/Story/story.css";
import { StoryHTML } from "./components/Story/story.html";
import { animateStory } from "./components/Story/story";


import "./components/Letter/letter.css";

import { LetterHTML } from "./components/Letter/letter.html";

import { animateLetter } from "./components/Letter/letter";


import "./components/Birthday/birthday.css";

import { BirthdayHTML } from "./components/Birthday/birthday.html";

import { animateBirthday } from "./components/Birthday/birthday";
/* ===========================
   RENDER APP
=========================== */

document.querySelector("#app").innerHTML = `
<section id="introSection">
    ${IntroHTML()}
</section>

<section id="gardenSection">
    ${GardenHTML()}
</section>

<section id="storySection">
    ${StoryHTML()}
</section>

<section id="letterSection">
    ${LetterHTML()}
</section>

<section id="birthdaySection">
    ${BirthdayHTML()}
</section>

`;

/* ===========================
   ANIMATIONS
=========================== */

animateIntro();
animateGarden();
animateStory();
animateLetter();
animateBirthday();

/* ===========================
   BEGIN STORY
=========================== */

document.addEventListener("click", (e) => {

    if (e.target.id === "beginBtn") {

        document.getElementById("gardenSection").scrollIntoView({

            behavior: "smooth"

        });

        const music = document.getElementById("bgMusic");

        if (music) {

            music.volume = 0.4;

            music.play().catch(() => {});

        }

    }

});