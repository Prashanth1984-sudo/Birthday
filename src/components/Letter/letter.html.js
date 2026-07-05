export function LetterHTML() {

return `

<section id="letter">

    <div class="letterLight"></div>

    <div class="paperParticles"></div>

    <!-- Envelope -->

    <div class="envelopeContainer" id="envelopeContainer">

        <div class="envelope" id="envelope">

            <div class="envelopeBack"></div>

            <div class="envelopeLetter"></div>

            <div class="envelopeFlap" id="flap"></div>

            <div class="waxSeal" id="seal">

                ❤️

            </div>

            <div class="receiver">

                For Harika

            </div>

        </div>

    </div>

    <!-- Letter -->

    <div class="letterWrapper">

        <article class="paper" id="paper">

            <div class="paperTexture"></div>

            <div class="paperInner">

                <div class="paperTop">

                    <span class="letterDate">

                        27 July 2026

                    </span>

                </div>

                <h1 class="letterHeading">

                    Dear Harika,

                </h1>

                <div class="foldLine one"></div>

                <div class="foldLine two"></div>

                <div id="letterText">

                </div>

                <div class="signature">

                    <span>

                        With all my love,

                    </span>

                    <h2>

                        Prashanth ❤️

                    </h2>

                </div>

                <button id="continueStory">

                    Continue Our Story →

                </button>

            </div>

        </article>

    </div>

</section>

`;

}