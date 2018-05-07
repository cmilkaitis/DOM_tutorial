
const wmf = document.querySelector('#book-list li:nth-child(2) .name');



var books = document.querySelectorAll('#book-list li .name');

books.forEach(book => {
    book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');

//bookList.innerHTML = '<h2> Books and books and nooks</h2>';
bookList.innerHTML += '<p>This is how you add</p>'