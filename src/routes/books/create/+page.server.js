import db from "$lib/db.js";
export const actions = {
    create: async ({ request }) => {
      const data = await request.formData();
      let book = {
        title: data.get("title"),
        author: data.get("author"),
        description: data.get("description"),
      };
      await db.createBook(book);
      return { success: true };
    },
  };