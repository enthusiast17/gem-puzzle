import {titleElement, buttonElement, contentElement} from './utils'
import {blockoutUI, mainUI, soundEffect} from './main_ui'
import timeState from '../state/time'
import boardState from '../state/board'
import moveState from '../state/move'
import soundState from '../state/sound'
import { gameUI } from './game_ui'
import { gameOverUI } from './game_over_ui'

export const menuUI = () => {
    const menu = document.createElement('div')
    menu.className = 'menu'
    menu.append(contentElement({ className: menu.className + '__content', elements: [
        titleElement({ type: 'h2', className: menu.className + '__title', textContent: 'menu' }),
        buttonElement({
            className: menu.className + '__resume-btn',
            textContent: 'Resume',
            eventListener: (event) => {
                const menu = document.querySelector('.menu')
                const blockout = document.querySelector('.blockout')

                if (!menu || !blockout) return

                menu.classList.remove('menu_show')
                blockout.classList.remove('blockout_show')

                timeState.start()
            }
        }),
        buttonElement({
            className: menu.className + '__restart-btn',
            textContent: 'Restart',
            eventListener: (event) => {
                document.body.innerHTML = ''
                boardState.generate()
                timeState.clear()
                moveState.clear()
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
            className: menu.className + '__sound-btn',
            textContent: 'Sound: off',
            eventListener: (event) => {
                if (!soundState.on) {
                    soundState.on = true;
                    (event.target as HTMLElement).textContent = 'Sound: on';
                } else {
                    soundState.on = false;
                    (event.target as HTMLElement).textContent = 'Sound: off';
                }
            }
        }),
        buttonElement({
            className: menu.className + '__save-btn',
            textContent: 'Save game',
            eventListener: (event) => {}
        }),
        buttonElement({
            className: menu.className + '__exit-btn',
            textContent: 'Exit',
            eventListener: (event) => {
                document.body.innerHTML = ''
                document.body.append(
                    mainUI()
                )
                boardState.clear()
                timeState.clear()
                moveState.clear()
                soundState.clear()
            }
        })
    ] }))
    return menu
}