<script>
  import BookComponent from '$lib/components/BookComponent.svelte';
  let { data } = $props();

  let books = $derived.by(() => {
    let booksFiltered = data.books.filter((book) => book.collection);
    return booksFiltered;
  });

</script>

<div class="container text-center mt-5">
  <h1 class="display-4">Meine Sammlung</h1>
  {#if books.length > 0}
    <BookComponent books={books} />
  {:else}
  <p class="mx-5 px-5">Es befinden sich noch keine Bücher in deiner Sammlung.</p>
  {/if}
</div>
