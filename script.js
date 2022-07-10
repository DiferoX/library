let myLibrary = [1,2,3,4];
let book;


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


function Book(title, author, pages) // the constructor...
{
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() 
{
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('numPages').value;

  book = new Book(title, author, pages);

  myLibrary.push(book);

  //console.log(book);
  //console.log(myLibrary);
  addCard();
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


  sidebar();


  container.appendChild(content);

  content.appendChild(h3);
  content.appendChild(h4);
  content.appendChild(pag);

  content.appendChild(divBox);
  divBox.appendChild(txt);
  divBox.appendChild(checkbox);
}

function checked()
{
  if (document.getElementById('checked').checked == true)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function sidebar()
{
  
}


