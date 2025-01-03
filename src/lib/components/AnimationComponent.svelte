<div class="animation-container">
    <div class="book-container">
        <!-- Mehrere Bücher als div-Elemente -->
        <div class="book"></div>
        <div class="book"></div>
        <div class="book"></div>
        <div class="book"></div>
        <div class="book"></div>
    </div>
</div>

<style>
    /*Animation Stuff*/
    .book-container {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .book {
        width: 220px;
        height: 320px;
        background-size: cover; /* Skaliert das Bild passend */
        border-radius: 5px;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2), -6px 12px 26px rgba(0, 0, 0, 0.2);
        animation: fly-in 1s cubic-bezier(0.85, 0, 0.15, 1);
        animation-fill-mode: both;
        border: 1px solid rgba(0,0,0,0.08);
    }

    .book:nth-child(1) {
        animation-delay: 0s;
        margin-left: -200px;
        background-image: url("/images/image1.png");
    }
    .book:nth-child(2) {
        animation-delay: 0.5s;
        margin-left: -100px;
        background-image: url("/images/image2.png");
    }
    .book:nth-child(3) {
        animation-delay: 1s;
        margin-left: 0px;
        background-image: url("/images/image3.png");
    }
    .book:nth-child(4) {
        animation-delay: 1.5s;
        margin-left: 100px;
        background-image: url("/images/image12.png");
    }
    .book:nth-child(5) {
        animation-delay: 2s;
        margin-left: 200px;
        background-image: url("/images/homepage.png");
    }

    /* Styling for the animation container */
    .animation-container {
        flex: 1; /* Take up remaining space */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes fly-in {
        0% {
            transform: translate(180px, 0px);
            opacity: 0;
        }
        100% {
            transform: translate(-120px, 0px);
            opacity: 1;
        }
    }
</style>
