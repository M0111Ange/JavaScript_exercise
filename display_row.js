function displayPattern(pattern){
    for (let i=0; i< pattern; i++){
        var str = ""
        for (let j=pattern; j>=0; j--){
            if (i===j) {
               str+="1 ";
            } else {
                 str+= "  ";
            }
        }
    
        console.log(str);
          }   
          
          
}

displayPattern(4);