// Write a constructor for making “Book” objects.
//  We will revisit this in the next project. 
//  Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.



class Book {
    constructor (title, author, numPage, read){
        this.title = title;
        this.author = author;
        this.numPage = numPage;
        this.read = read;
        
        this.info=function(){
            return `${this.title} by ${this.author}, ${this.numPage} pages, ${this.read ? " read " : "not read "}` ;
        
        };

    }
}

const Habits = new Book('AtomicHabits','jamesClear', 210, 'Yes');

console.log(Habits.info());