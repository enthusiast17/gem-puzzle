import {titleElement, buttonElement, contentElement} from './utils'
import {updateText} from './updater'
import {gameUI} from './game_ui'
import {menuUI} from './menu_ui'
import boardState from '../state/board'
import { gameOverUI } from './game_over_ui'
import { ButtonElement } from '../interfaces'

export const mainUI = (): HTMLElement => {
    const main = document.createElement('div')
    main.className = 'main'
    main.append(contentElement({className: main.className + '__content', elements: [
        titleElement({
            type: 'h2',
            className: main.className + '__title',
            textContent: 'gem-puzzle'
        }),
        sliderElement({
            className: main.className + '__slider',
            leftBtn: {
                className: main.className + '__slider-left',
                textContent: '<',
                eventListener: (event) => {
                    if (boardState.size > 3) {
                        boardState.size -= 1
                        updateText(main.className + '__slider-current', String(boardState.size))
                    }
                }
            },
            currentBtn: {
                className: main.className + '__slider-current',
                textContent: '3',
                eventListener: (event) => {}
            },
            rightBtn: {
                className: main.className + '__slider-right',
                textContent: '>',
                eventListener: (event) => {
                    if (boardState.size < 8) {
                        boardState.size += 1
                        updateText(main.className + '__slider-current', String(boardState.size))
                    }
                }
            }
        }),
        buttonElement({
            className: main.className + '__play-btn',
            textContent: 'Play',
            eventListener: (event) => {
                document.body.innerHTML = ''
                boardState.generate()
                document.body.append(
                    soundEffect(),
                    gameUI({size: boardState.size, board: boardState.values}),
                    menuUI(),
                    gameOverUI(),
                    blockoutUI()
                )
            }
        }),
        buttonElement({
            className: main.className + '__scoreboard-btn',
            textContent: 'Scoreboard',
            eventListener: (event) => {}
        }),
        buttonElement({
            className: main.className + '__guide-btn',
            textContent: 'Guide',
            eventListener: (event) => {}
        })
    ]}))
    return main
}

export const blockoutUI = () => {
    const blockout = document.createElement('div')
    blockout.className = 'blockout'
    return blockout
}

export const soundEffect = () => {
    const sound = document.createElement('audio')
    sound.className = 'sound'
    sound.src = './src/sounds/move_sound.mp3'
    return sound
}

const sliderElement = (state: {
    className: string,
    leftBtn: ButtonElement,
    currentBtn: ButtonElement,
    rightBtn: ButtonElement
}): HTMLElement => {
    const slider = document.createElement('div')
    slider.className = state.className
    const leftButton = buttonElement(state.leftBtn)
    const currentButton = buttonElement(state.currentBtn)
    const rightButton = buttonElement(state.rightBtn)
    slider.append(leftButton, currentButton, rightButton)
    return slider
}
