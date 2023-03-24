


class Book {
    constructor(
        name,
        author,
        pageNum,
        bookType,
        publisher,
        marker
    ){
        this.name = name;
        this.author = author;
        this.pageNum = pageNum;
        this.bookType = bookType;
        this.publisher = publisher;
        this.marker = 0;
    }
    changePublisher(newPublisher){
        this.publisher = newPublisher;
    }
    bookMarker(marker){
        if(marker >0 && marker < this.pageNum){
            return this.marker = marker;
        }
        else {
            console.log( "Invalid page number!!!!")
        }
    }
};

module.exports = Book;