var myBooks = [
  {author: 'test book1', title: 'test title1', pages: 'test pages1', readStatus: false}, 
  {author: 'test book2', title: 'test title2', pages: 'test pages2', readStatus: false}
];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBook() {
  var book = new Book('test author', 'test title', 'test pages', false);
  myBooks.push(book);
}

function removeBook() {
  myBooks.pop();
}

function toggleBookReadStatus(book) {
  if (book.readStatus) {
    book.readStatus = false;
  } else {
    book.readStatus = true;
  }
}

function displayBooks() {
  for (var i = 0; i < myBooks.length; i++) {
    var book = document.createElement('p');
    book.innerText = `Author: ${myBooks[i].author}, Title: ${myBooks[i].title}, Pages: ${myBooks[i].pages}, Read: ${myBooks[i].readStatus}`;
    document.body.appendChild(book);
  };
}

function renderPage() {
  var addBookButton = document.createElement('button');
  addBookButton.innerText = 'Add Book';
  document.body.appendChild(addBookButton);

  var removeBookButton = document.createElement('button');
  removeBookButton.innerText = 'Remove Book';
  document.body.appendChild(removeBookButton);

  var toggleBookReadStatusButton = document.createElement('button');
  toggleBookReadStatusButton.innerText = 'Toggle Read Status';
  document.body.appendChild(toggleBookReadStatusButton);

  displayBooks();
}

renderPage();