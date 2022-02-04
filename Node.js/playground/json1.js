const fs = require('fs');
// const book = {
//     title: "Looking for Alaska",
//     author:"John Green"
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// const parsedBook = JSON.parse(bookJSON);
// console.log(parsedBook.author);
// fs.writeFileSync('json1.json',bookJSON);
// const dataBuffer = fs.readFileSync('json1.json');
// const dataJSON = dataBuffer.toString()
// console.log(dataBuffer);
// console.log(dataJSON);
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('json1.json');
const data = JSON.parse(dataBuffer.toString());
data.name = "Shakthi"
data.age = 21;
const dataJSON = JSON.stringify(data);
fs.writeFileSync('json1.json',dataJSON);
