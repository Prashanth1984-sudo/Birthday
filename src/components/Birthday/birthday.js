import { gsap } from "gsap";

let particles = [];

let holdInterval;

let holdProgress = 0;

let wishCompleted = false;

export function animateBirthday() {

    const birthday = document.getElementById("birthday");

    const cake = document.getElementById("cake");

    const fairyLights = document.getElementById("fairyLights");

    const flowerFrame = document.getElementById("flowerFrame");

    const backgroundGlow = document.querySelector(".backgroundGlow");

    const subtitle = document.querySelector(".subtitle");

    const title = document.querySelector("#birthdayContent h1");

    const wishButton = document.getElementById("wishButton");

    const wishFill = document.getElementById("wishFill");

    const wishHint = document.querySelector(".wishHint");

    const particleContainer =
        document.getElementById("magicParticles");

    

    holdProgress = 0;

    wishCompleted = false;

    particles = [];

    particleContainer.innerHTML = "";

    /* =====================================
       INITIAL STATE
    ===================================== */

    gsap.set(fairyLights, {

        opacity: 0,

        y: -80

    });

    gsap.set(flowerFrame, {

        opacity: 0

    });

    gsap.set(subtitle, {

        opacity: 0,

        y: 20

    });

    gsap.set(title, {

        opacity: 0,

        y: 40

    });

    gsap.set(cake, {

        opacity: 0,

        y: 260,

        scale: .45,

        rotation: -8

    });

   

    gsap.set(wishButton, {

        opacity: 0,

        y: 30

    });

    gsap.set(wishHint, {

        opacity: 0

    });

    gsap.set(wishFill, {

        width: "0%"

    });

    /* =====================================
       CREATE PARTICLES
    ===================================== */

    createParticles(particleContainer);

    /* =====================================
       INTRO TIMELINE
    ===================================== */

    const tl = gsap.timeline({

        defaults: {

            ease: "power2.out"

        }

    });

    tl.from(backgroundGlow, {

        opacity: 0,

        duration: 1.5

    })

    .to(fairyLights, {

        opacity: 1,

        y: 0,

        duration: 1

    }, "-=1")

    .to(flowerFrame, {

        opacity: 1,

        duration: 1

    }, "-=.6")

    .to(subtitle, {

        opacity: 1,

        y: 0,

        duration: .6

    })

    .to(title, {

        opacity: 1,

        y: 0,

        duration: .8

    }, "-=.3")

    .to(cake, {

        opacity: 1,

        y: 0,

        rotation: 0,

        scale: 1,

        duration: 2,

        ease: "elastic.out(1,.55)"

    })

   

    .to(wishButton, {

        opacity: 1,

        y: 0,

        duration: .6

    })

    .to(wishHint, {

        opacity: 1,

        duration: .5

    });

    /* =====================================
       FLOATING CAKE
    ===================================== */

    gsap.to(cake, {

        y: -10,

        repeat: -1,

        yoyo: true,

        duration: 2.8,

        ease: "sine.inOut"

    });

    /* =====================================
       PARTICLE FLOAT
    ===================================== */

    particles.forEach((particle) => {

        gsap.to(particle, {

            y: "-=80",

            opacity: .8,

            duration: 5 + Math.random() * 3,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",

            delay: Math.random() * 5

        });

    });

    /* =====================================
       HOLD EVENTS
    ===================================== */

    wishButton.onmousedown = startHold;

    wishButton.onmouseup = stopHold;

    wishButton.onmouseleave = stopHold;

    wishButton.ontouchstart = startHold;

    wishButton.ontouchend = stopHold;
        /* =====================================
       CREATE PARTICLES
    ===================================== */

    function createParticles(container){

        for(let i=0;i<60;i++){

            const particle=document.createElement("div");

            particle.className="magicParticle";

            const size=2+Math.random()*6;

            particle.style.width=size+"px";
            particle.style.height=size+"px";

            particle.style.left=Math.random()*100+"%";
            particle.style.top=Math.random()*100+"%";

            container.appendChild(particle);

            particles.push(particle);

        }

    }

    /* =====================================
       HOLD TO MAKE A WISH
    ===================================== */

   function startHold(){

    if(wishCompleted) return;

    clearInterval(holdInterval);

    holdInterval=setInterval(()=>{

        holdProgress+=1.5;

        if(holdProgress>100)
            holdProgress=100;

        wishFill.style.width=holdProgress+"%";

        gsap.to(".cakeGlow",{

            scale:1+holdProgress/120,

            opacity:.4+holdProgress/180,

            duration:.1

        });

        if(holdProgress>=100){

            clearInterval(holdInterval);

            wishCompleted=true;

            activateMagic();

        }

    },20);

}

    function stopHold(){

        if(wishCompleted) return;

        clearInterval(holdInterval);

        gsap.to(wishFill,{

            width:0,

            duration:.45,

            ease:"power2.out"

        });

        holdProgress=0;

    }

    /* =====================================
       EXTINGUISH CANDLES
    ===================================== */

    

    /* =====================================
       CREATE SMOKE
    ===================================== */

    

    /* =====================================
       MAGIC TRANSITION
    ===================================== */

    
        /* =====================================
       MAGIC SCENE
    ===================================== */

    function showMagicScene() {

        let magicScene = document.getElementById("magicScene");

        if (!magicScene) {

            magicScene = document.createElement("div");

            magicScene.id = "magicScene";

            magicScene.innerHTML = `

                <div class="magicText">

                    Every wish deserves

                    <br>

                    a little magic...

                </div>

            `;

            birthday.appendChild(magicScene);

        }

        gsap.to(magicScene, {

            opacity: 1,

            pointerEvents: "auto",

            duration: 1.2

        });

        particleBurst();

    }

    /* =====================================
       PARTICLE BURST
    ===================================== */

   function particleBurst(){

    particles.forEach((particle,index)=>{

        const angle=index*12;

        const radius=120+Math.random()*150;

        gsap.to(particle,{

            motionPath:{

                path:[

                    {x:0,y:0},

                    {

                        x:Math.cos(angle*Math.PI/180)*radius,

                        y:Math.sin(angle*Math.PI/180)*radius

                    }

                ]

            },

            scale:gsap.utils.random(1.5,3),

            opacity:1,

            duration:2.5,

            ease:"power2.out"

        });

    });

    gsap.delayedCall(3,revealGift);

}

    /* =====================================
       REVEAL GIFT
    ===================================== */

    function revealGift(){

    let gift=document.getElementById("giftReveal");

    if(!gift){

        gift=document.createElement("img");

        gift.id="giftReveal";

        gift.src="/src/assets/birthday/gift-box.png";

        birthday.appendChild(gift);

    }

    gsap.fromTo(

        gift,

        {

            y:250,

            opacity:0,

            scale:.45

        },

        {

            y:0,

            opacity:1,

            scale:1,

            duration:1.8,

            ease:"elastic.out(1,.5)"

        }

    );

    gsap.to(gift,{

        boxShadow:"0 0 60px rgba(255,210,90,.9)",

        repeat:-1,

        yoyo:true,

        duration:1.2

    });

    gift.onclick=openGift;

}

    /* =====================================
       OPEN GIFT
    ===================================== */

    function openGift(){

    const gift=document.getElementById("giftReveal");

    gsap.timeline()

    .to(gift,{

        rotation:-8,

        duration:.2

    })

    .to(gift,{

        rotation:8,

        duration:.2

    })

    .to(gift,{

        rotation:0,

        duration:.2

    })

    .to(gift,{

        scale:1.15,

        duration:.4

    })

    .to(gift,{

        opacity:0,

        duration:.5,

        onComplete(){

            showEnding();

        }

    });

}

    /* =====================================
       FINAL MESSAGE
    ===================================== */

    function showEnding() {

        let ending = document.getElementById("endingMessage");

        if (!ending) {

            ending = document.createElement("div");

            ending.id = "endingMessage";

            ending.innerHTML = `

                <h2>

                    Happy Birthday ❤️

                </h2>

                <p>

                    Every flower blooms

                    in its own time.

                    <br><br>

                    Thank you for blooming

                    in mine.

                    <br><br>

                    — Prashanth

                </p>

            `;

            birthday.appendChild(ending);

        }

        gsap.to(ending, {

            opacity: 1,

            pointerEvents: "auto",

            duration: 1.5

        });

        gsap.fromTo(

            "#endingMessage h2",

            {

                y: 40,

                opacity: 0

            },

            {

                y: 0,

                opacity: 1,

                duration: 1

            }

        );

        gsap.fromTo(

            "#endingMessage p",

            {

                y: 30,

                opacity: 0

            },

            {

                y: 0,

                opacity: 1,

                duration: 1,

                delay: .5

            }

        );

    }

}
function activateMagic(){

const tl=gsap.timeline();

tl.to(".cakeGlow",{

scale:2.4,

opacity:1,

duration:1

})

.to("#fairyLights",{

opacity:.15,

duration:.8

},"-=.7")

.to("#flowerFrame",{

opacity:.25,

duration:.8

},"-=.8")

.to("#birthdayContent",{

scale:.92,

duration:1

},"-=.7")

.call(()=>{

showMagicScene();

});

}