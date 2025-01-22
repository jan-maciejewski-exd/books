const Library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
    }
};

function addBookToLibrary(title, author, pages, read) {
    // take arguments and parse them into the book function and add that to library
    let book = new Book(title, author, pages, read);
    Library.push(book);
};

function displayBooks() {
    let body = document.querySelector(".main-body");
    body.innerHTML = ''
    for (let book of Library) {
        
        let tab = document.createElement('div');
        tab.className = 'tab';
        body.append(tab);
        
        let h3 = document.createElement('h3');
        h3.innerText = book.title;
        
        let p1 = document.createElement('p');
        p1.innerText = `Author: ${book.author}`;
        
        let p2 = document.createElement('p');
        p2.innerText = `Page count ${book.pages}`;
        
        let p3 = document.createElement('p');
        p3.innerText = `read?: ${book.read}`;
        
        tab.append(h3, p1, p2, p3);
    };
};

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const atitle = document.getElementById('title').value;
    const aauthor = document.getElementById('author').value;
    const apages = document.getElementById('pagecount').value;
    const aread = document.getElementById('read').checked ? "Yes" : "No";

    addBookToLibrary(atitle, aauthor, apages, aread);
    
    displayBooks();
});