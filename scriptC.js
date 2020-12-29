// Constructor 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book3 = new Book('Book Three', 'Marius P.','2008');
const book4 = new Book('Book Four', 'Marius P.','2013');

$('.text h3').append(`<br>${book3.title} and ${book4.author} and ${book4.year}`)
console.log(book3.title)

$('.text p').append(`${book4.getSummary()}<hr>`)
console.log(book4.getSummary());