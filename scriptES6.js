class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummarys() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAges() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old`;
    }

    revises(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() { // we have this method in the class but will not instantiate in object like this , we dont have to, 
        return 'War zone';
    }
}

//Instantiate Object
const books1 = new Books('Book no One', 'M.D.P', '2020');

console.log(books1);
console.log(books1.getSummarys());

$('.es6 p').append(`This is --> ${books1.title} made by <b>${books1.author}</b><br>`);
$('.es6 p').append(books1.getSummarys(),'<br>');
$('.es6 p').append(books1.getAges(),'<br>');
books1.revises(2021)
$('.es6 p').append(books1.year,'<br>');
console.log(books1);

console.log(Books.topBookStore());
