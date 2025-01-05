<script>
  import CommentComponent from "$lib/components/CommentComponent.svelte";

  let { data, form } = $props();
  let newComment = $state("");
</script>

<a href="/books" class="btn btn-secondary mb-4 mt-4">Zurück</a>

<div class="row">
  <div class="col-md-6">
    <h1>{data.book.title}</h1>
    <p><strong>Author:</strong> {data.book.author}</p>
    <p><strong>Description:</strong> {data.book.description}</p>
    <img src={data.book.image} alt={data.book.title} class="book-image mb-4" />
  </div>

  <div class="col-md-6">
    <h2>Kommentare</h2>
    <div>
      {#each data.comments as comment}
        <CommentComponent {comment} />
      {/each}
    </div>
    <form class="mt-3" method="POST" action="?/update">
      <input type="hidden" name="id" value={data.book._id} />
      <textarea
        class="form-control"
        name="comment"
        id="comment"
        bind:value={newComment}
        type="text"
        placeholder="Schreibe deinen Kommentar..."
        rows="3"
        required
      ></textarea>
      <button class="btn btn-primary mt-3" type="submit"
        >Kommentar hinzufügen</button
      >
    </form>
  </div>
</div>

<style>
  .book-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
</style>
