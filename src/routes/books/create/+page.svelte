<script>
    let { form } = $props();
</script>
<a href="/books">Zurück</a>
<h1>Füge ein Buch hinzu</h1>
<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input name="title" class="form-control" type="text" />
    </div>
<div class=mb-3>
    <label for="" class="form-label">Author</label>
    <input name="author" class="form-control" type="text" />
</div>
<div class="mb-3">
    <label for="" class="form-label">Description</label>
    <input name="description" class="form-control" type="text" />
</div>
<button type="submit" class="btn btn-primary">Buch hinzufügen</button>
</form>

{#if form?.success}
  <p>Book created</p>
{/if}