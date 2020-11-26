import { Position } from '../interfaces'

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

export const getExpectedPosition = (board: number[][], length: number, target: number): Position => {
    let row: number = 1
    while (target > length * row) row += 1
    const column = (length - 1) - Math.abs((length * row) - target)
    return {
        x: target % length === 0 ? row: row - 1, 
        y:  target % length === 0 ? column - 1: column
    }
}