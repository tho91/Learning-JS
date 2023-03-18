/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
const Backpack = require("./Backpack.js")
// import Backpack from "./Backpack.js"
// const Backpack = require()

const myBackpack = new Backpack(
    "laptop Backpakc",
    100,
    "Green/Yellow",
    10,
    50,
    50,
    false
);

console.log(myBackpack);