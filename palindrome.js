function palindrome(name){
    let stringValue=name.split('').reverse('').join('');
    if (stringValue===name) {
        return "true"
    } else {
        return "false"
    }
}
console.log(palindrome('a v a'));