import AudioBook from "./audioBook";
import Book from "./book";
import PrintedBook from "./printedBooks";

class BookManager {
  static booksCollection =
    JSON.parse(localStorage.getItem("books-collection")) || [];
  static addBook(
    title,
    author,
    publisher,
    date,
    bookType,
    pages,
    printType,
    narrator,
    duration
  ) {
    let book;
    if (bookType === "printed-book") {
      book = new PrintedBook(
        title,
        author,
        publisher,
        date,
        bookType,
        pages,
        printType
      );
    } else {
      book = new AudioBook(
        title,
        author,
        publisher,
        date,
        bookType,
        narrator,
        duration
      );
    }
    BookManager.booksCollection.push(book);
    console.log(this.booksCollection);
  }
}

export default BookManager;
