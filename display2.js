function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let rowOutput = "";
        for (let j = 0; j < cols; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                rowOutput += "1 ";
            } else {
                rowOutput += "0 ";
            }
        }
        console.log(rowOutput.trim()); 
    }
}


displayPattern(5, 5);
