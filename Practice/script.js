const Book = require("./Book.js")


const HungerGame = new Book(
    "Hunger Game",
    "Sarah Conner",
    1435,
    "pdf",
    "Shadow Inc"
);

const

console.log(HungerGame);

console.log("The last page I read is", HungerGame.bookMarker(256));
HungerGame.changePublisher("BestSeller Publisher")

console.log("The new publisher is", HungerGame.publisher);