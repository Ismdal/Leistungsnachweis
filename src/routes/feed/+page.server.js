import db from "$lib/db";

export async function load() {
  return {
    books: await db.getBooks(),
    comments: await db.getComments()
  }
}
export const actions = {
delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteComment(data.get("id"));
    return {success: true}
  },
};