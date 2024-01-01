// Author constructor function
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor function
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; // an instance of Author
    this.genre = genre;
    this.price = price;
}

// Method in Book prototype
Book.prototype.getBookInfo = function () {
    console.log(
        `Title: ${this.title}\nAuthor: ${this.author.name}\nGenre: ${this.genre}\nPrice: $${this.price}`
    );
};

// Creating instances of Author
const author1 = new Author("J.K. Rowling", 1965, "British");
const author2 = new Author("George Orwell", 1903, "British");

// Creating instances of Book
const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20);
const book2 = new Book("1984", author2, "Dystopian", 15);

// Displaying book details
console.log("Book 1 details:");
book1.getBookInfo();

console.log("\nBook 2 details:");
book2.getBookInfo();
