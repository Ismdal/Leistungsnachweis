import db from "$lib/db.js";

export async function load() {
  return {
    books: await db.getBooks()
  };
}

export const actions = {
  removeFromCollection: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let book = { 
      _id: id,
      collection: false
    } 
    await db.updateBook(book);
  }
}