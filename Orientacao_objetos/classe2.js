// Declarando uma classe (construtor) que representa um livro:
function Book (title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
    this.printIsbn = function() {
        console.log('ISBN: ' + this.isbn);
    }
}

// Para instanciar essa classe, podemos usar o código a seguir
var book = new Book('Estrutura de Dados', 406, '978-85-7522-553-0')

book.printIsbn()