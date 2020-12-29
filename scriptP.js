//Prototype

// Constructor 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// GetAge
Book.prototype.getAge = function() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
};

//Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// INITIATE an Object
const book5 = new Book('Book Five', 'Marius Pr.','2018');
const book6 = new Book('Book Six', 'Marius P.','2013');

$('.text h3').append(`<br>${book5.title} and ${book5.author} and ${book5.year}`)
console.log(book5.title)

$('.text p').append(`${book6.getSummary()}<h5>This is a prototype</h5><hr>`)
$('.text p').append(`${book5.getAge()}<h5>AGE-prototype</h5><hr>`)
console.log(book5.getAge());
book5.revise(2020)
console.log(book5);