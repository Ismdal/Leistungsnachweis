<script>
    export let books;
</script>

<div class="container">
    <div class="row">
        {#each books as book}
            <!-- Bootstrap Grid-Klassen -->
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="book-card">
                    <img src={book.image} alt={book.title} class="book-image" />
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <div class="card-footer">
                        <a href={`/books/${book._id}`} class="btn btn-primary">Details</a>

                        {#if book.collection}
                            <form method="POST" action="?/removeFromCollection">
                                <input type="hidden" name="id" value={book._id} />
                                <button class="btn btn-danger">Von Sammlung entfernen</button>
                            </form>
                        {:else}
                            <form method="POST" action="?/addToCollection">
                                <input type="hidden" name="id" value={book._id} />
                                <button class="btn btn-success">In meine Sammlung hinzufügen</button>
                            </form>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .book-card {
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
        height: 100%; /* Ensures all cards are the same height */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .book-image {
        width: 100%; /* Ensure full width inside the card */
        height: 15rem;
        object-fit: cover; /* Ensure images are scaled properly */
        margin-bottom: 0.5rem;
        border-radius: 4px;
    }

    .card-footer {
        margin-top: auto; /* Push footer to the bottom */
        display: flex;
        justify-content: center;
        gap: 0.6rem;
    }
</style>
