var myBooks = [
  {author: 'test author1', title: 'test title1', pages: 'test pages1', readStatus: false, bookID: 'book1'}, 
  {author: 'test author2', title: 'test title2', pages: 'test pages2', readStatus: false, bookID: 'book2'}
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

function toggleBookReadStatus(event) {
  for (var i = 0; i < myBooks.length; i++) {
    if (event.target.id === myBooks[i].bookID) {
      if (myBooks[i].readStatus) {
        myBooks[i].readStatus = false;
        return;
      } else {
        myBooks[i].readStatus = true;
        return;
      }
    }
  }
}

function displayBooks() {
  for (var i = 0; i < myBooks.length; i++) {
    var book = document.createElement('p');
    book.innerText = `Author: ${myBooks[i].author}, Title: ${myBooks[i].title}, Pages: ${myBooks[i].pages}, Read: ${myBooks[i].readStatus}`;
    document.body.appendChild(book);

    var toggleBookReadStatusButton = document.createElement('button');
    toggleBookReadStatusButton.innerText = 'Toggle Read Status';
    toggleBookReadStatusButton.id = myBooks[i].bookID;
    book.appendChild(toggleBookReadStatusButton);
    toggleBookReadStatusButton.addEventListener('click', toggleBookReadStatus);

    var removeBookButton = document.createElement('button');
    removeBookButton.innerText = 'Remove Book';
    book.appendChild(removeBookButton);
    removeBookButton.addEventListener('click', removeBook);
  };
}

function renderPage() {
  var addBookButton = document.createElement('button');
  addBookButton.innerText = 'Add Book';
  document.body.appendChild(addBookButton);
  addBookButton.addEventListener('click', addBook);

  displayBooks();
}

renderPage();