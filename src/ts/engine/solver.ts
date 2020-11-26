export const getInversion = (arr: number[], val: number): number => {
    const valIndex: number = arr.indexOf(val)
    const zeroIndex: number = arr.indexOf(0)
    return val - arr.slice(0, valIndex + 1).reduce((res: number, element: number): number => (element !== 0 && element <= val) ? res + 1 : res, 0)
}

export const getSumInversion = (arr: number[]): number => arr.reduce((res, element) => res + getInversion(arr, element), 0)

const isOdd = (num: number) => num % 2 !== 0

const isEven = (num: number) => num % 2 === 0

export const isSolvable = (board: number[][], row: number[]): boolean => {
    const width = board[0].length
    const inversion = getSumInversion(row)
    const blank = getBlankNumber(board)
    if (isOdd(width) && isEven(inversion) || 
        isEven(width) && isEven(blank) && isOdd(inversion) || 
        isEven(width) && isOdd(blank) && isEven(inversion)) {
        return true
    }
    return false
}

export const getBlankNumber = (board: number[][]): number => {
    for (let i: number = board.length - 1; i >= 0; i--) {
        for (let j: number = board[0].length - 1; j >=0; j--) {
            if (board[i][j] === 0) return board.length - i
        }
    }
    return -1
}

export const isSolved = (board: number[][]): boolean => board.every((row, rowIndex) => row.every((col, colIndex) => {
    if (col === 0) {
        return rowIndex === board[0].length - 1 && colIndex === board[0].length - 1
    }
    return ((rowIndex * board[0].length) + (colIndex + 1)) === col
}))