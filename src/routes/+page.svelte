<script>
  import AnimationComponent from "../lib/components/AnimationComponent.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/animation.css" />
</svelte:head>

<div
  class="d-flex justify-content-between align-items-center"
  style="height: 100vh; padding: 0 2rem;"
>
  <!-- Left Section: Content -->
  <div class="text-content">
    <h1 class="display-4">BookForYou</h1>
    <p class="lead mt-3">Deine Plattform für Bücher und Lesermeinungen!</p>
    <button
      class="btn btn-primary mt-3"
      on:click={() => (window.location.href = "/books")}
      >Ab zu den Büchern!</button
    >
  </div>

  <!-- Right Section: Animation -->
  <AnimationComponent />
</div>

<style>
/* Wrapper for content and animation */
.d-flex {
    display: flex;
    justify-content: space-between; /* Content on the left, animation on the right */
    align-items: center; /* Vertically align both sections */
    height: 100vh; /* Full screen height */
    padding: 0 2rem; /* Add padding to the sides */
  }
  
  /* Styling for text content */
  .text-content {
    max-width: 40%; /* Restrict width of the text content */
    text-align: left; /* Align text to the left */
  }
</style>