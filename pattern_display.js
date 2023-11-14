// Create a function that displays a pattern like this:
// 1 1 1 1 1
// 1 1 1 0 0 
// 1 1 0 0 0 
// 1 0 0 0 0 

function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j < rows - i) {
                process.stdout.write("1 ");
            } else {
                process.stdout.write("0 ");
            }
        }
        console.log(); 
    }
}

displayPattern(5, 5);