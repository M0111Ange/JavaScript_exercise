function displayPattern(b) {
    for (let i = 0; i < b; i++) {
        let row = " ".repeat(b - i - 1) + "1";
        console.log(row);
    }
}


displayPattern(4);