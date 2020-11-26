// import {getBlankPosition, getExpectedPosition, getPath} from '../ts/engine/searcher'

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

// test('getBlankPosition basic', () => {
//     expect(getBlankPosition([])).not.toBe(undefined)
//     expect(getBlankPosition([[]])).toStrictEqual({x: -1, y: -1})
//     expect(getBlankPosition(boardEasyLevel)).toStrictEqual({x: 2, y: 1})
//     expect(getBlankPosition(boardMediumLevel)).toStrictEqual({x: 0, y: 1})
//     expect(getBlankPosition(boardHardLevel)).toStrictEqual({x: 7, y: 0})
// })


// // test('getExpectedPosition basic', () => {
// //     const testExpectedPositions = (length: number): void => {
// //         let num = 1
// //         for (let x: number = 0; x < length; x++) {
// //             for (let y: number = 0; y < length; y++) {
// //                 expect(getExpectedPosition(length, num)).toStrictEqual({x, y})
// //                 num += 1
// //             }
// //         }
// //     }

// //     testExpectedPositions(4)
// //     testExpectedPositions(6)
// //     testExpectedPositions(8)
// // })


// // test('getDirection basic', () => {
// //     let current = {x: 2, y: 1}
// //     let target = {x: 0, y: 0}
// //     expect(getPath(current, target)).toStrictEqual([{x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}])

// //     current = {x: 0, y: 2}
// //     target = {x: 2, y: 1}

// //     expect(getPath(current, target)).toStrictEqual([{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}])
// // })

// test('getAroundPositions basic', () => {
//     const board = [
//         [12, 7,  10, 2], 
//         [1,  0, 4,  14], 
//         [5,  11,  9,  15], 
//         [8,  13, 6,  3]
//     ]

//     expect(getPath(board, {x: 1, y: 1}, {x: 0, y: 0}, [1])).toStrictEqual([{x: 1, y: 1}, {x: 1, y: 0}, {x: 0, y: 0}])
// })