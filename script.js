const textArea = document.querySelector('.text')
const btn = document.querySelector('.btn')

// Objects 
const book1 = {
    title: 'Book One',
    author: 'Marius P.',
    year: '2007',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title: 'Book Two',
    author: 'Marius P.',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//$('document').ready(function() {     // working without this function or not ??

$('.text h3').html(book1.getSummary())
$('.text h3').hover(function() {
    $(this).css('color', 'orangered')
}, function() {
    $(this).css('color', 'black')
})

//}

let textH3 = $('.text h3')
let textP = $('.text p')

$(btn).one('click', appendText)

function appendText() {
textP.append(Object.values(book2))
textP.after(Object.keys(book2))
 //$(this).off(event)

}

