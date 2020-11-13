export const shuffle = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr
    const result: number[] = arr.slice()
    for (let i: number = result.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result
}

export const createRow = (range: number): number[] => {
    if (Math.sqrt(range) % 1 !== 0) return []
    const result: number[] = []
    for (let iter: number = 0; iter < range; iter++) result.push(iter)
    return result
}

export const createBoard = (arr: number[]): number[][] => {
    const size = Math.sqrt(arr.length)
    if (size % 1 !== 0) return [[]]
    const result: number[][] = []
    for (let row: number = 0; row < arr.length; row += size) result.push(arr.slice(row, row + size))
    return result
}