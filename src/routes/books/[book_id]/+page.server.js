import db from "$lib/db";

export async function load({ params }) {
  try {
    const book = await db.getBook(params.book_id); // Fetch book by ID
    if (!book) {
      throw new Error(`Book with id ${params.book_id} not found`);
    }
    const comments = await db.getCommentsForBook(params.book_id);
    return { book, comments };
  } catch (error) {
    console.error("Error fetching book:", error.message);
    throw error;
  }
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();

    const bookId = data.get("id");
    const comment = data.get("comment");

    await db.createComment(bookId, comment);
    return {success: true};
  }
};