let myLibrary = [0,1,2,3];
let book;
let sumPages = 5032;
let sumReadBooks = 2;


function openForm()
{
  let open = document.getElementById('formCont');
  open.style.display = "block";
}

function closeForm()
{
  let close = document.getElementById('formCont');
  close.style.display = "none";
}


function Book(title, author, pages, check, id) // the constructor...
{
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.check = check;
  this.id = id;
}

function addBookToLibrary() 
{
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('numPages').value;
  let check = document.getElementById('checked').checked;
  let id = myLibrary.length + 1;

  book = new Book(title, author, pages, check, id);

  myLibrary.push(book);

  //console.log(book);
  //console.log(myLibrary);
  addCard();

  closeForm();
}

function addCard()
{
  let container = document.querySelector('.article');

  let content = document.createElement('div');
  content.classList.add('card');

  let h3 = document.createElement('h3');
  h3.textContent = book.title;

  let h4 = document.createElement('h4');
  h4.textContent = book.author;

  let pag = document.createElement('p');
  pag.textContent = "Number of pages: " + book.pages;


  let divBox = document.createElement('div');
  divBox.classList.add('checkB');

  let txt = document.createElement('p');
  txt.textContent = "¿Is it been read?";

  let checkbox = document.createElement('input');
  checkbox.classList.add('checkRead');
  checkbox.type = 'checkbox';
  let x = checked(); // True or False
  checkbox.checked = x;

  let closeImg = document.createElement('img');
  closeImg.src = 'images/cerrar.png';
  closeImg.classList.add('cardImg');


  sidebar();


  container.appendChild(content);

  content.appendChild(h3);
  content.appendChild(h4);
  content.appendChild(pag);

  content.appendChild(divBox);
  divBox.appendChild(txt);
  divBox.appendChild(checkbox);

  content.appendChild(closeImg);
}

function checked()
{
  if (document.getElementById('checked').checked == true)
  {
    sumReadBooks++;
    document.getElementById('readBooks').textContent = sumReadBooks;
    return true;
  }
  else
  {
    sumReadBooks--;
    document.getElementById('readBooks').textContent = sumReadBooks;
    return false;
  }
}


function sidebar()
{
  document.getElementById('books').textContent = myLibrary.length;

  sumPages += Number(book.pages);
  document.getElementById('totalPages').textContent = sumPages;
}


