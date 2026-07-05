export function GardenHTML() {

return `

<section id="garden">

    <video
        class="garden-video"
        autoplay
        muted
        loop
        playsinline>

        <source
            src="/src/assets/videos/garden.mp4"
            type="video/mp4">

    </video>

    <div class="garden-overlay"></div>

    <div class="sunGlow"></div>

    <div class="petals"></div>

    <div class="garden-content">

        <span class="chapter">

            CHAPTER ONE

        </span>

        <h1>

            Happy Birthday princess...

        </h1>

        <p>

            You deserve all the love, happiness, and magic this world has to offer.

            <br>

           
        </p>

    </div>

</div>
<div class="scrollIndicator">

    <span>Scroll to Begin</span>

    <div class="mouse">

        <div class="wheel"></div>

    </div>

    <audio id="bgMusic">

        <source
            src="/src/assets/music/perfect.mp3"
            type="audio/mpeg">

    </audio>

</section>

`;

}