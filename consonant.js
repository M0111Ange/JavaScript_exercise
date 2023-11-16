//Write a function that counts the number of vowels in a string
function countConsonant(cons){
    var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    var counts = 0;
for(i=0; i<cons.length; i++){
    if(consonant.includes(cons[i])){
        counts++;    }
}
return counts
}

console.log(countConsonant('Undergraduates'));