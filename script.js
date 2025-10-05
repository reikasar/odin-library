let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function render() {
  const libraryContainer = document.querySelector("#library");
  libraryContainer.innerHTML = ""; // Clear existing content

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <div class="book-header">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
      </div>
      <div class="book-body">
        <p class="book-pages">${book.pages} pages</p>
        <p class="book-status">${book.read ? "Read" : "Not Read Yet"}</p>
      </div>
    `;

    libraryContainer.appendChild(card);
  });
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("submit", function() {
  event.preventDefault();
  addBookToLibrary();
});