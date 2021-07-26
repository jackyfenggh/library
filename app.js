var myBooks = [
  {author: 'test author1', title: 'test title1', pages: 'test pages1', readStatus: false}, 
  {author: 'test author2', title: 'test title2', pages: 'test pages2', readStatus: false}
];

var currentAuthor = document.getElementById('author');
var currentTitle = document.getElementById('title');
var currentPages = document.getElementById('pages');
var currentReadStatus = document.getElementById('read-status');
var addBookForm = document.getElementById('add-book-form');

currentAuthor.onchange = formInputOnChange;
currentTitle.onchange = formInputOnChange;
currentPages.onchange = formInputOnChange;
currentReadStatus.onchange = formInputOnChange;

if (!localStorage.getItem('storedMyBooks')) {
  populateStorage();
} else {
  setDataFromLocalStorage();
}

function populateStorage() {
  localStorage.setItem('storedMyBooks', JSON.stringify(myBooks));
  localStorage.setItem('storedAuthor', currentAuthor.value);
  localStorage.setItem('storedTitle', currentTitle.value);
  localStorage.setItem('storedPages', currentPages.value);
  localStorage.setItem('storedReadStatus', currentReadStatus.value);
}

function setDataFromLocalStorage() {
  myBooks = JSON.parse(localStorage.getItem('storedMyBooks'));
  currentAuthor.value = localStorage.getItem('storedAuthor');
  currentTitle.value = localStorage.getItem('storedTitle');
  currentPages.value = localStorage.getItem('storedPages');
  currentReadStatus.value = localStorage.getItem('storedReadStatus');
}

function formInputOnChange() {
  populateStorage();
  this.style.borderColor = '';
}

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

function validateInputFields() {
  var errors;
  
  if (!currentAuthor.value) {
    currentAuthor.style.borderColor = 'red';
    errors = 'empty fields';
  }

  if (!currentTitle.value) {
    currentTitle.style.borderColor = 'red';
    errors = 'empty fields';
  }

  if (!currentPages.value) {
    currentPages.style.borderColor = 'red';
    errors = 'empty fields';
  }

  return errors;
}

function refreshFormState() {
  addBookForm.style.visibility = 'hidden'
  currentAuthor.value = '';
  currentTitle.value = '';
  currentPages.value = '';
  currentReadStatus.checked = false;
}

function addBook() {
  if (validateInputFields() === 'empty fields') {
    return;
  }

  var book = new Book(currentAuthor.value, currentTitle.value, currentPages.value, currentReadStatus.checked);
  myBooks.push(book);

  refreshFormState();
  populateStorage();
  displayBooks();
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
  
  var addBookButton = document.getElementById('add-book-button');
  addBookButton.addEventListener('click', function() {
    addBookForm.style.visibility = 'visible';
  });

  var addBookFormSubmitButton = document.getElementById('add-book-form-submit-button');
  addBookFormSubmitButton.addEventListener('click', addBook);

  var addBookFormCancelButton = document.getElementById('add-book-form-cancel-button');
  addBookFormCancelButton.addEventListener('click', refreshFormState);

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