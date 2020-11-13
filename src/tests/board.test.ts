import {createRow, createBoard, shuffle} from '../ts/engine/board'

const rangeHundred = (): number[] => {
    const result: number[] = []
    for (let iter: number = 0; iter < 100; iter++) result.push(iter)
    return result
}

const numbers = rangeHundred()

test('row basic', () => {
    expect(createRow(7)).toStrictEqual([])
    expect(createRow(4)).not.toEqual(expect.arrayContaining([undefined, null, NaN]))
    expect(createRow(4)).toStrictEqual(numbers.slice(0, 4))
    expect(createRow(9)).toStrictEqual(numbers.slice(0, 9))
    expect(createRow(16)).toStrictEqual(numbers.slice(0, 16))
})


test('board basic', () => {
    expect(createBoard(numbers.slice(0, 5))).toStrictEqual([[]])
    expect(createBoard(numbers.slice(0, 9))).not.toEqual(expect.arrayContaining([undefined, null, NaN]))
    expect(createBoard(numbers.slice(0, 9))).toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
    expect(createBoard(numbers.slice(0, 16))).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]])
})

test('shuffle basic', () => {
    expect(shuffle(numbers.slice(0, 9))).not.toEqual(expect.arrayContaining([undefined, null, NaN]))
    expect(shuffle(numbers.slice(0, 9))).not.toStrictEqual(numbers.slice(0, 9))
    expect(shuffle(numbers.slice(0, 16))).not.toStrictEqual(numbers.slice(0, 16))
})