<script>
    export let comment;
    export let book;
</script>

<div class="comment">
    <div class="content">
        <span class="date">{new Date(comment.date).toLocaleDateString()}</span>
        <span>{comment.comment}</span>
        {#if book}
            <a href="/books/{book._id}">{book.title}</a>
        {/if}
    </div>
    <form method="POST" action="?/delete" class="delete-form">
        <input type="hidden" name="id" value={comment._id} />
        <button class="btn btn-danger">Löschen</button>
    </form>
</div>

<style>
    .comment {
        display: flex; /* Makes the child elements align in a row */
        justify-content: space-between; /* Places content on the left and button on the right */
        align-items: center; /* Vertically centers the content and button */
        background-color: rgba(255, 255, 255, 0.774);
        color: black;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
    }
    .date {
        display: block;
        font-size: 13px;
    }
</style>
