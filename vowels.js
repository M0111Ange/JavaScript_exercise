//Write a function that counts the number of vowels in a string
function countVowels(vowel){
    var vowels = ["i","u","o","a","e"];
    var counts = 0;
    var lowercase = vowel.toLowerCase()
for(i=0; i<vowel.length; i++){
    if(vowels.includes(lowercase[i])){
        counts++;    }
}
return counts
}

console.log(countVowels('Undergraduates'));