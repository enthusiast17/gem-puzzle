import boardState from '../state/board'
import moveState from '../state/move'
import timeState from '../state/time'
import { gameUI } from './game_ui'
import { blockoutUI, mainUI } from './main_ui'
import { menuUI } from './menu_ui'
import {titleElement, buttonElement, contentElement} from './utils'

export const message = (time: string, moves: number) => `Hooray! You solved the puzzle in ${time} and ${moves} moves.`

export const gameOverUI = () => {
    const gameover = document.createElement('div')
    gameover.className = 'gameover'
    gameover.append(
        contentElement({ className: gameover.className + '__content', elements: [
            titleElement({ type: 'h2', className: gameover.className + '__message', textContent: message('00:00', 0)}),
            buttonElement({
                className: gameover.className + '__restart-btn',
                textContent: 'Restart',
                eventListener: (event) => {
                    document.body.innerHTML = ''
                    boardState.generate()
                    timeState.clear()
                    moveState.clear()
                    document.body.append(
                        gameUI({size: boardState.size, board: boardState.values}),
                        menuUI(),
                        gameOverUI(),
                        blockoutUI()
                    )
                }
            }),
            buttonElement({
                className: gameover.className + '__exit-btn',
                textContent: 'Exit',
                eventListener: (event) => {
                    document.body.innerHTML = ''
                    document.body.append(
                        mainUI()
                    )
                    boardState.clear()
                    timeState.clear()
                    moveState.clear()
                }
            })
        ]})
    )
    return gameover
}