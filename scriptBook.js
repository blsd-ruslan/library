const myLibrary = [];
const libElement = document.getElementsByClassName('library-container')[0];

function Book(title, author, numberOfPages, wasRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.wasRead = wasRead;
    this.info = function () {
        let placeholder = "";
        if (this.wasRead) {
            placeholder = "was read";
        }
        else {
            placeholder = "not read yet";
        }
        return this.title + " by " + this.author + ", "
            + this.numberOfPages + " pages, " + placeholder + ".";
    }
}

function addBook(title, author, numberOfPages) {
    let book = new Book(title, author, numberOfPages);
    myLibrary.push(book);

    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    let bookTitle = document.createElement("h4");
    bookTitle.innerText = '"' + book.title + '"';
    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = book.author;
    let bookPages = document.createElement("p");
    bookPages.innerText = book.numberOfPages;

    bookElement.appendChild(bookTitle);
    bookElement.appendChild(bookAuthor);
    bookElement.appendChild(bookPages);

    libElement.appendChild(bookElement);
}

let bookSubmitForm = document.getElementById("book-submit-form");
bookSubmitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let bookTitle = document.getElementById("title-input").value;
    let author = document.getElementById("author-input").value;
    let numberOfPages = document.getElementById("number-of-pages-input").value;
    if (!bookTitle || !author || !numberOfPages) {
        alert("Please fill in all fields to add book.");
        return;
    }
    addBook(bookTitle, author, numberOfPages);
})
