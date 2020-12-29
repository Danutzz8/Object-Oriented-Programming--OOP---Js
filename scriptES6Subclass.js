class Booksub {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummarys() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazines subclass
class Magazines extends Booksub {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// instantiate Magazine
const mag10 = new Magazines('Mag Ten', 'P_M_D', '2020', 'june')

$('.es6 p').append(`<hr>This is --> ${mag10.title} made by <b>${mag10.author}</b><br>`);
$('.es6 p').append(mag10.getSummarys(),'<br>');
console.log(mag10);