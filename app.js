var myLibrary = [];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBook() {
  var book = new Book('test author', 'test title', 'test pages', false);
  myLibrary.push(book);
}

function removeBook() {
  myLibrary.pop();
}

function updateBookReadStatus(book) {
  book.readStatus = true;
}