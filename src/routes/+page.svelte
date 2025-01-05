<script>
  import AnimationComponent from "../lib/components/AnimationComponent.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/animation.css" />
</svelte:head>

<div class="container-fluid vh-100 d-flex">
  <div class="row w-100 align-items-center pt-4">
    <!-- Left Section: Content -->
    <div class="col-12 col-lg-6 text-center text-lg-start">
      <h1 class="display-4">BookForYou</h1>
      <p class="lead mt-3">Deine Plattform für Bücher und Lesermeinungen!</p>
      <button
        class="btn btn-primary mt-3"
        on:click={() => (window.location.href = "/books")}
      >
        Ab zu den Büchern!
      </button>
    </div>

    <!-- Right Section: Animation -->
    <div class="col-12 col-lg-6 text-center">
      <AnimationComponent />
    </div>
  </div>
</div>
