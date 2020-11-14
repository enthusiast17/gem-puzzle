export interface Position {
    x: number,
    y: number
}

export const getPosition = (board: number[][], value: number): Position => {
    for (let i: number = 0; i < board.length; i++) {
        for (let j: number = 0; j < board[0].length; j++) {
            if (board[i][j] === value) return {x: i, y: j}
        } 
    }
    return {x: -1, y: -1}
}

export const getBlankPosition = (board: number[][]): Position => getPosition(board, 0)

export const getNumberPosition = (board: number[][], value: number): Position => getPosition(board, value)

export const getExpectedPosition = (length: number, target: number): Position => {
    let row: number = 1
    while (target > length * row) row += 1
    return {
        x: row - 1, 
        y: (length - 1) - Math.abs((length * row) - target)
    }
}
