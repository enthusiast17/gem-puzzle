import moveState from '../state/move'
import soundState from '../state/sound'
import { updateText } from '../ui/updater'
import { Position } from '../interfaces'

export const move = (board: number[][], current: Position, element: HTMLElement): void => {
    const blank = document.getElementById('blank')
    if (!blank) return

    if (isTop(board, current)) {
        [board[current.x][current.y], board[current.x - 1][current.y]] = [board[current.x - 1][current.y], board[current.x][current.y]];
        [element.style.top, blank.style.top] = [blank.style.top, element.style.top];
    } else if (isLeft(board, current)) {
        [board[current.x][current.y], board[current.x][current.y - 1]] = [board[current.x][current.y - 1], board[current.x][current.y]];
        [element.style.left, blank.style.left] = [blank.style.left, element.style.left];
    } else if (isRight(board, current)) {
        [board[current.x][current.y], board[current.x][current.y + 1]] = [board[current.x][current.y + 1], board[current.x][current.y]];
        [element.style.left, blank.style.left] = [blank.style.left, element.style.left];
    } else if (isBottom(board, current)){
        [board[current.x][current.y], board[current.x + 1][current.y]] = [board[current.x + 1][current.y], board[current.x][current.y]];
        [element.style.top, blank.style.top] = [blank.style.top, element.style.top];
    } else {
        return
    }
    if (soundState.on) {
        const sound = document.querySelector('.sound') as HTMLAudioElement
        if (sound) {
            sound.currentTime = 0
            sound.play()
        }
    }
    moveState.amount += 1
    updateText('game__moves-value', String(moveState.amount))
}

const isTop = (board: number[][], current: Position): boolean => {
    const {x, y} = current
    if (x - 1 < 0) return false
    return board[x - 1][y] === 0
}

const isBottom = (board: number[][], current: Position): boolean => {
    const {x, y} = current
    if (x + 1 >= board.length) return false
    return board[x + 1][y] === 0
}

const isLeft = (board: number[][], current: Position): boolean => {
    const {x, y} = current
    if (y - 1 < 0) return false
    return board[x][y - 1] === 0
}

const isRight = (board: number[][], current: Position): boolean => {
    const {x, y} = current
    if (y + 1 >= board[0].length) return false
    return board[x][y + 1] === 0
}