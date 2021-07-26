var myBooks = [
  {author: 'test author1', title: 'test title1', pages: 'test pages1', readStatus: false}, 
  {author: 'test author2', title: 'test title2', pages: 'test pages2', readStatus: false}
];

var currentAuthor = document.getElementById('author');
var currentTitle = document.getElementById('title');
var currentPages = document.getElementById('pages');
var currentReadStatus = document.getElementById('read-status');

currentAuthor.onchange = populateStorage;
currentTitle.onchange = populateStorage;
currentPages.onchange = populateStorage;
currentReadStatus.onchange = populateStorage;

if (!localStorage.getItem('myBooks')) {
  populateStorage();
} else {
  setDataFromLocalStorage();
}

function populateStorage() {
  localStorage.setItem('myBooks', JSON.stringify(myBooks));
  localStorage.setItem('currentAuthor', currentAuthor.value);
  localStorage.setItem('currentTitle', currentTitle.value);
  localStorage.setItem('currentPages', currentPages.value);
  localStorage.setItem('currentReadStatus', currentReadStatus.value);
}

function setDataFromLocalStorage() {
  var storedMyBooks = JSON.parse(localStorage.getItem('myBooks'));
  var storedAuthor = localStorage.getItem('currentAuthor');
  var storedTitle = localStorage.getItem('currentTitle');
  var storedPages = localStorage.getItem('currentPages');
  var storedReadStatus = localStorage.getItem('currentReadStatus');

  myBooks = storedMyBooks;
  currentAuthor.value = storedAuthor;
  currentTitle.value = storedTitle;
  currentPages.value = storedPages;
  currentReadStatus.value = storedReadStatus
}

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBook() {
  var book = new Book(currentAuthor.value, currentTitle.value, currentPages.value, currentReadStatus.checked);
  myBooks.push(book);
  populateStorage();
  displayBooks();

  currentAuthor.value = '';
  currentTitle.value = '';
  currentPages.value = '';
  currentReadStatus.checked = false;
}

function removeBook(event) {
  var position = event.target.id.split('-')[1];
  myBooks.splice(position, 1);
  populateStorage();
  displayBooks();
}

function toggleBookReadStatus(event) {
  var position = event.target.id.split('-')[1];
  if (myBooks[position].readStatus) {
    myBooks[position].readStatus = false;
  } else {
    myBooks[position].readStatus = true;
  }
  populateStorage();
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
    toggleBookReadStatusButton.id = 'toggle-' + i;
    book.appendChild(toggleBookReadStatusButton);
    toggleBookReadStatusButton.addEventListener('click', toggleBookReadStatus);

    var removeBookButton = document.createElement('button');
    removeBookButton.innerText = 'Remove Book';
    removeBookButton.id = 'remove-' + i;
    book.appendChild(removeBookButton);
    removeBookButton.addEventListener('click', removeBook);
  };
}

function activateModalForm() {

}

displayBooks();