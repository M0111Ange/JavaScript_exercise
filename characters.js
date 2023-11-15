//Create a function that counts the number of characters that make up a string.

function countCharacters(str) {
    return str.split(' ').join('').length;
}

var string = "Hi Everyone";
console.log(countCharacters(string));