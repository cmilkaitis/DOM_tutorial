const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add a book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});


var book = document.querySelector('li:first-child .name');

console.log(book) // <span class="name">Name of the Wind</span>

book.getAttribute('class'); // "name"
book.getAttribute('href'); // null
book.setAttribute('class', 'name2'); // <span class="name-2">Name of the Wind</span>
book.hasAttribute('class'); //true
book.hasAttribute('href'); // false
book.removeAttribute('class'); // <span>Name of the Wind</span>


