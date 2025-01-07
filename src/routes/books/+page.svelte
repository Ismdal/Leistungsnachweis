<script>
    import BookComponent from "$lib/components/BookComponent.svelte";
    let { data } = $props();
</script>

<div class="container text-center mt-5">
    <h1 class="display-4">BookForYou</h1>
    <p class="lead mt-3">
        Teile deine Meinung zu unserer Sammlung von Büchern!
    </p>
    <a href="/books/create" class="btn btn-primary"> Neues Buch hinzufügen </a>
</div>

<div class="container mt-4">
    <div class="row">
        <BookComponent books={data.books} />
    </div>
</div>
