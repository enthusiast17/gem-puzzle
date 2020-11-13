export const getInversion = (arr: number[], val: number): number => {
    const valIndex: number = arr.indexOf(val)
    const zeroIndex: number = arr.indexOf(0)
    return val - arr.slice(0, valIndex + 1).reduce((res: number, element: number): number => (element !== 0 && element <= val) ? res + 1 : res, 0)
}

export const getSumInversion = (arr: number[]): number => arr.reduce((res, element) => res + getInversion(arr, element), 0)

const isOdd = (num: number) => num % 2 === 1

const isEven = (num: number) => num % 2 === 0

export const isSolvable = (width: number, inversion: number, blank: number): boolean => {
    if (isOdd(width) && isEven(inversion) || 
        isEven(width) && isEven(blank) && isOdd(inversion) || 
        isEven(width) && isOdd(blank) && isEven(inversion)) {
        return true
    }
    return false
}