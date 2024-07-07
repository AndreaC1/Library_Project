

console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];


class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }


}

class Library {
    constructor(books) {
        this.bookcount = books.length;
        this.books = books;
    }

    markRead(checkbox, id) {

        this.books.forEach(book => {
            if (id === book.id) {
                book.read = true;
                checkbox.checked = true;
                checked.disabled = true;

            }

        });

    }



    addBook() {
        const titleInput = document.querySelector("#title");
        const authorInput = document.querySelector("#author");
        const readCheckbox = document.querySelector("#read");
        const newbook = new Book(titleInput.value, authorInput.value, readCheckbox.checked);

        this.books.push(newbook);
        this.bookcount++;

        const tbody = document.querySelector("#tableBody");

        const tr = document.createElement("tr");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const read = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener("click", () => {
            library.removeBook(newbook.id);
            tr.textContent = "";
        })



        title.textContent = titleInput.value;
        author.textContent = authorInput.value;
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.checked = readCheckbox.checked;
        checkbox.disabled = readCheckbox.checked;
        read.appendChild(checkbox);
        tr.append(title);
        tr.append(author);
        tr.append(read);
        tr.append(removeButton)
        tbody.appendChild(tr);

    }

    removeBook(id) {
        this.books = this.books.filter((book) => {
            return bookId !== id
        });


    }


}
//setting remove button for first row and assigning an id
const removeButton = document.querySelector("#removeBtn");
const bookId = 0;
removeButton.addEventListener("click", () => {
    library.removeBook(bookId);
    let firstRow = document.querySelector("#firstRow");
    firstRow.textContent = "";
})

const library = new Library(books);
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    library.addBook();
    event.preventDefault();
})

