export function StoryHTML() {
    return `
<section id="story">

    <div class="storyBg"></div>

    <div class="stars"></div>

    <div class="particles"></div>

    <div class="storyHeading">

        <span>OUR MEMORIES</span>

        <h1>Every Picture<br>Has A Story</h1>

        <p>
            Click any polaroid to relive a beautiful memory.
        </p>

    </div>

    <div class="orbitScene">

        <div class="ring ring1"></div>
        <div class="ring ring2"></div>
        <div class="ring ring3"></div>

        <div class="orbGlow"></div>

        <div class="orbCore"></div>

        <div id="photoRing"></div>

    </div>

    <div id="memoryViewer">

    <button id="closeViewer">✕</button>

    <div class="viewerWrapper">

    <div class="viewerCard">

        <div class="viewerFront">

            <img id="viewerImage">

        </div>

        <div class="viewerBack">

            <span id="viewerDate"></span>

            <h2 id="viewerTitle"></h2>

            <p id="viewerMessage"></p>

        </div>

    </div>

</div>

</section>
`;
}