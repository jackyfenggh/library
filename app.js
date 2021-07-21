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

function updateBookReadStatus(book) {
  book.readStatus = true;
}

function displayBooks() {
  for (var i = 0; i < myBooks.length; i++) {
    var book = document.createElement('p');
    book.innerText = `Author: ${myBooks[i].author}, Title: ${myBooks[i].title}, Pages: ${myBooks[i].pages}, Read: ${myBooks[i].readStatus}`;
    document.body.appendChild(book);
  };
}