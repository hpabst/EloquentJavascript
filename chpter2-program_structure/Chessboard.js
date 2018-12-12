function chessboard(size){
    let start_char = " ";
    let next_char = "#";
    for(let i = 0; i < size; i++){
        let row_str = "";
        for(let j = 0; j < size; j++){
            if (j % 2 === 0) {
                row_str += start_char;
            } else {
                row_str += next_char;
            }
        }
        console.log(row_str);
        if (start_char === " "){
            start_char = "#";
            next_char = " ";
        } else {
            start_char = " ";
            next_char = "#";
        }
    }
}

chessboard(8);