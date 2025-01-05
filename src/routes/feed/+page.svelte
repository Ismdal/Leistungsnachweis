<script>
    import CommentComponent from "$lib/components/CommentComponent.svelte";

    let { data } = $props();
    let comments = data.comments;
    let books = data.books;
</script>

<!-- Header -->
<div class="container text-center mt-5">
    <h1 class="display-4">Feed</h1>
</div>

<!-- Comments Section -->
<div class="container mt-4">
    {#if comments.length > 0}
        <div class="row">
            {#each comments as comment}
                <!-- Each Comment in a Column -->
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="card-title">
                                {books.find((book) => book._id === comment.bookId)?.title || "Unknown Book"}
                            </h6>
                            <CommentComponent
                                {comment}
                                book={books.find((book) => book._id === comment.bookId)}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <!-- No Comments Message -->
        <div class="row">
            <div class="col-12">
                <p class="text-center">Es befinden sich noch keine Comments in deinem Feed</p>
            </div>
        </div>
    {/if}
</div>
