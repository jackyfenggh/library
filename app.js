var myBooks = [
  {author: 'test author1', title: 'test title1', pages: 'test pages1', readStatus: false, bookId: 'book-0'}, 
  {author: 'test author2', title: 'test title2', pages: 'test pages2', readStatus: false, bookId: 'book-1'}
];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBook() {
  var author = document.getElementById('author').value;
  var title = document.getElementById('title').value;
  var pages = document.getElementById('pages').value;
  var readStatus = document.getElementById('read-status').checked;

  var book = new Book(author, title, pages, readStatus);
  myBooks.push(book);
  displayBooks();
}

function removeBook(event) {
  var position = event.target.id.split('-')[1];
  myBooks.splice(position, 1);
  displayBooks();
}

function toggleBookReadStatus(event) {
  var position = event.target.id.split('-')[1];
  if (myBooks[position].readStatus) {
    myBooks[position].readStatus = false;
  } else {
    myBooks[position].readStatus = true;
  }
  displayBooks();
}

function displayBooks() {
  // var addBookButton = document.getElementById('add-book-button');
  // addBookButton.addEventListener('click', function() {
  //   // code or function to pop up form
  // });

  var addBookFormSubmitButton = document.getElementById('add-book-form-submit-button');
  addBookFormSubmitButton.addEventListener('click', addBook);

  var booksUl = document.getElementById('books-ul');
  booksUl.innerText = '';

  for (var i = 0; i < myBooks.length; i++) {
    var book = document.createElement('li');
    book.innerText = `Author: ${myBooks[i].author}, Title: ${myBooks[i].title}, Pages: ${myBooks[i].pages}, Read: ${myBooks[i].readStatus}`;
    booksUl.appendChild(book);

    var toggleBookReadStatusButton = document.createElement('button');
    toggleBookReadStatusButton.innerText = 'Toggle Read Status';
    toggleBookReadStatusButton.id = myBooks[i].bookId;
    book.appendChild(toggleBookReadStatusButton);
    toggleBookReadStatusButton.addEventListener('click', toggleBookReadStatus);

    var removeBookButton = document.createElement('button');
    removeBookButton.innerText = 'Remove Book';
    removeBookButton.id = myBooks[i].bookId;
    book.appendChild(removeBookButton);
    removeBookButton.addEventListener('click', removeBook);
  };
}

function activateModalForm() {

}

displayBooks();