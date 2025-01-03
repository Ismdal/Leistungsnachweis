<script>
    export let comment;
    export let book;
</script>

<div class="comment">
    <span class="date">{new Date(comment.date).toLocaleDateString()}</span>
    <span>{comment.comment}</span>
    {#if book}
        <a href="/books/{book._id}">{book.title}</a>
    {/if}
</div>

<style>
    .comment {
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