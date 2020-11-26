// import {canMove, move} from '../ts/engine/mover'

// const boardEasyLevel: number[][] = [
//     [12, 1,  10, 2], 
//     [7,  11, 4,  14], 
//     [5,  0,  9,  15], 
//     [8,  13, 6,  3]
// ]

// const boardMediumLevel: number[][] = [
//     [10, 0,  26, 19, 25, 23],
//     [33, 30, 31, 22, 32, 15],
//     [29, 13, 1,  4,  9,  28],
//     [8,  27, 18, 14, 2,  3],
//     [35, 34, 17, 7,  11, 16],
//     [20, 5,  6,  24, 12, 21]
// ]

// const boardHardLevel: number[][] = [
//     [38, 63, 20, 43, 17, 58, 56, 27],
//     [37, 33, 22, 13, 45, 34, 3,  21],
//     [41, 16, 59, 50, 4,  12, 46, 61],
//     [6,  32, 40, 30, 26, 7,  51, 15],
//     [44, 36, 29, 11, 23, 35, 19, 2],
//     [25, 1,  42, 14, 47, 49, 54, 28],
//     [9,  24, 48, 52, 55, 60, 5,  10],
//     [0,  53, 18, 31, 57, 62, 8,  39]
// ]

// test('canMove basic', () => {
//     expect(canMove(boardEasyLevel, {x: -1, y: -1})).toBe(false)
//     expect(canMove(boardEasyLevel, {x: 6, y: 6})).toBe(false)
//     expect(canMove(boardEasyLevel, {x: 3, y: 4})).toBe(false)
//     expect(canMove(boardEasyLevel, {x: 3, y: 3})).toBe(true)
// })

// test('move', () => {
//     const board = boardEasyLevel.slice()
//     move(board, {x: 2, y: 1}, {x: 2, y: 0})
//     expect(board).toStrictEqual(
//     [
//         [12, 1,  10, 2], 
//         [7,  11, 4,  14], 
//         [0,  5,  9,  15], 
//         [8,  13, 6,  3]
//     ])
// })
