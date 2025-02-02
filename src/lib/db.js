import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Leistungsnachweis"); // select database

//////////////////////////////////////////
// Books
//////////////////////////////////////////

// Get all books
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return books;
}

//async function getCollection(filter = {}) {
//  const collection = db.collection('books');
//  return await collection.find(filter).toArray();
//}

// Get book by id
async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
    } else {
      book._id = book._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return book;
}

async function createBook(book) {
  book.image = "/images/placeholder.png"; // default poster
  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function updateBook(book) {
  try {
    let id = book._id;
    delete book._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: book });

    if (result.matchedCount === 0) {
      console.log("No book with id " + id);
    } else {
      console.log("book with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function getComments() {
  try {
    const collection = db.collection("comments");
    const comments = await collection.find({}, {sort: { date: -1 }}).toArray();
    comments.forEach((comment) => {
      comment._id = comment._id.toString();
      comment.bookId = comment.bookId.toString();
    });
    return comments;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function getCommentsForBook(bookId) {
  try {
    const collection = db.collection("comments");
    const comments = await collection.find({ bookId: new ObjectId(bookId) }).toArray();
    comments.forEach((comment) => {
      comment._id = comment._id.toString();
      comment.bookId = comment.bookId.toString();
    });
    return comments;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function createComment(bookId, comment) {
  try {
    const collection = db.collection("comments");
    await collection.insertOne({ bookId: new ObjectId(bookId), comment, date: new Date() });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteComment(id) {
  try {
    const collection = db.collection("comments");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No comment with id " + id);
    } else {
      console.log("Comment with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteComment,
  getComments,
  getCommentsForBook,
  createComment,
};
