//Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeEachWord(sentence) {
    return sentence.replace(/\b\w/g, match => match.toUpperCase());
  }
  
  // Example usage:
  const sentence = "this is a sample sentence";
  const result = capitalizeEachWord(sentence);
  
  console.log(result); 