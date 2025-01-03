<script>
    export let books;
</script>

<div class="book-container">
    {#each books as book}
        <div class="book-card">
            <img src={book.image} alt={book.title} class="book-image" />
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <div class="card-footer">
                <a href={`/books/${book._id}`} class="btn btn-primary"
                    >Details</a
                >

                {#if book.collection}
                    <form method="POST" action="?/removeFromCollection">
                        <input type="hidden" name="id" value={book._id} />
                        <button class="btn btn-light"
                            >Von Sammlung entfernen</button
                        >
                    </form>
                {:else}
                    <form method="POST" action="?/addToCollection">
                        <input type="hidden" name="id" value={book._id} />
                        <button class="btn btn-light"
                            >In meine Sammlung hinzufügen</button
                        >
                    </form>
                {/if}
                
            </div>
        </div>
    {/each}
</div>

<style>
    .book-container {
        display: flex;
        flex-wrap: wrap; /* Zeilenumbruch, falls zu viele Karten */
        justify-content: center; /* Zentriert die Karten horizontal */
        gap: 1rem; /* Abstand zwischen den Karten */
    }

    .book-card {
        border: 1px solid #ddd;
        padding: 1rem;
        width: calc(
            33.33% - 2rem
        ); /* Jede Karte nimmt 1/3 der Breite ein, inkl. Abstand */
        box-sizing: border-box; /* Padding und Border in der Breite berücksichtigen */
        display: flex;
        flex-direction: column; /* Inhalt der Karte vertikal anordnen */
        justify-content: space-between; /* Abstand zwischen den Inhalten aufteilen */
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .book-image {
        width: 100%; /* Makes the image take the full width of the card */
        height: 50%; /* Makes the image take up half the height of the card */
        border-radius: 4px; /* Optional: Slightly rounded corners for a clean look */
        margin-bottom: 0.5rem; /* Adds some space below the image */
        
        height: 20rem;
        object-fit: cover;
    }

    .card-footer {
        margin-top: auto; /* Schiebt den Footer (mit dem Button) an das Ende der Karte */

        display: flex;
        justify-content: center;
        gap: 0.6rem;
    }

    @media (max-width: 768px) {
        .book-card {
            width: calc(
                50% - 1rem
            ); /* 2 Karten pro Reihe auf kleineren Bildschirmen */
        }
    }

    @media (max-width: 480px) {
        .book-card {
            width: 100%; /* 1 Karte pro Reihe auf sehr kleinen Bildschirmen */
        }
    }
</style>
