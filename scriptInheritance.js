//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor
function  Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype)  // This line is required so that the Magazine can access the functions in the Book object

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Danutzz', '2019', 'March');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine

console.log(mag1);

console.log(mag1.getSummary());