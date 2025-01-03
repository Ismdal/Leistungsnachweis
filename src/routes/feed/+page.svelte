<script>
    import CommentComponent from "$lib/components/CommentComponent.svelte";

    let { data } = $props();
    let comments = data.comments;
    let books = data.books;
</script>

<div class="container text-center mt-5">
    <h1 class="display-4">Feed</h1>
</div>
{#if comments.length > 0}
    {#each comments as comment}
        <div class="mx-5 px-5">
            <h6>
                {books.find((book) => book._id === comment.bookId)?.title ||
                    "Unknown Book"}
            </h6>
            <CommentComponent
                {comment}
                book={books.find((book) => book._id === comment.bookId)}
            />
        </div>
    {/each}
{:else}
    <p class="mx-5 px-5">Es befinden sich noch keine Comments in deinem Feed</p>
{/if}
