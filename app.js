
const chessboard = document.querySelector('.chessboard');

const rankCode = [1 , 2, 3, 4, 5 , 6 , 7 , 8];
const fileCode = ['a', 'b' , 'c' , 'd' , 'e', 'f' , 'g' , 'h' ];
const output  = [];

const buildchessBoard = function(){
    for(let i = 0 ; i <=  7; i ++){
        const rank = document.createElement('div')
        rank.classList.add('rank')
        chessboard.appendChild(rank)
        for (let j = 0 ; j <= 7; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(`${fileCode[i]}-${rankCode[7-j]}`)
            square.textContent = `${fileCode[i]}${rankCode[7-j]}`
            rank.appendChild(square)
        }
    }
}

buildchessBoard()




const possibleSquares = function(input) {
    output.push([input[0] + 1,input[1] + 2])
    output.push([input[0] + 1,input[1] - 2])
    output.push([input[0] - 1,input[1] + 2])
    output.push([input[0] - 1,input[1] - 2])
    output.push([input[0] + 2,input[1] + 1])
    output.push([input[0] + 2,input[1] - 1])
    output.push([input[0] - 2,input[1] + 1])
    output.push([input[0] - 2,input[1] - 1])  
    return output.filter((array => ((array[0] > 0 && array[0] <= 8) && (array[1]) > 0 && array[1] <= 8)))
}

