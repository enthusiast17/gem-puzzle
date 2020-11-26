import {getInversion, getSumInversion, isSolvable} from '../ts/engine/solver'

const arr: number[] = [12, 1, 10, 2, 7, 11, 4, 14, 5, 0, 9, 15, 8, 13, 6, 3]

test('getInversion', () => {
    expect(getInversion(arr, 12)).toBe(11)
    expect(getInversion(arr, 1)).toBe(0)
    expect(getInversion(arr, 10)).toBe(8)
    expect(getInversion(arr, 2)).toBe(0)
    expect(getInversion(arr, 7)).toBe(4)
    expect(getInversion(arr, 11)).toBe(6)
    expect(getInversion(arr, 4)).toBe(1)
    expect(getInversion(arr, 14)).toBe(6)
    expect(getInversion(arr, 5)).toBe(1)
    expect(getInversion(arr, 9)).toBe(3)
    expect(getInversion(arr, 15)).toBe(4)
    expect(getInversion(arr, 8)).toBe(2)
    expect(getInversion(arr, 13)).toBe(2)
    expect(getInversion(arr, 6)).toBe(1)
})


test('getSumInversion', () => {
    expect(getSumInversion(arr)).toBe(49)
    expect(getSumInversion([9, 2, 14, 4, 15, 7, 1, 12, 5, 3, 8, 10, 11, 6, 13, 0])).toBe(46)
})
