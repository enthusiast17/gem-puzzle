import {titleElement, buttonElement, contentElement} from './utils'

import timeState from '../state/time'
import { move } from '../engine/mover'
import { getNumberPosition } from '../engine/searcher'
import { isSolved } from '../engine/solver'
import { updateText } from './updater'
import { message } from './game_over_ui'
import moveState from '../state/move'
import { ButtonElement, TitleElement } from '../interfaces'

export const gameUI = (state: { size: number, board: number[][] }): HTMLElement => {
    timeState.start()
    const game = document.createElement('div')
    game.className = 'game'
    game.append(
        contentElement({className: game.className + '__content', elements: [
            gameInfoUI({
                className: game.className + '__info',
                moves: {
                    className: game.className + '__moves',
                    title: {
                        type: 'h2',
                        className: game.className + '__moves-title',
                        textContent: 'moves:'
                    },
                    value: {
                        type: 'h2',
                        className: game.className + '__moves-value',
                        textContent: '0'
                    }
                },
                time: {
                    className: game.className + '__time',
                    title: {
                        type: 'h2',
                        className: game.className + '__time-title',
                        textContent: 'time:'
                    },
                    value: {
                        type: 'h2',
                        className: game.className + '__time-value',
                        textContent: '00:00'
                    }
                },
                burger: {
                    className: game.className + '__burger',
                    textContent: '',
                    eventListener: (event) => {
                        const menu = document.querySelector('.menu')
                        const blockout = document.querySelector('.blockout')
                        if (!menu || !blockout) return
                        if (!menu.classList.contains('menu_show')) {
                            menu.classList.add('menu_show')
                            blockout.classList.add('blockout_show')
                            timeState.stop()
                        } else {
                            menu.classList.remove('menu_show')
                            blockout.classList.remove('blockout_show')
                        }
                    }
                }
            }),
            boardUI({
                className: game.className + '__board',
                board: {
                    size: state.size,
                    grid: state.board,
                    content: {className: game.className + '__board-content'},
                    item: {
                        className: game.className + '__board-item',
                        index: {
                            className: game.className + '__board-item-index'
                        },
                        eventListener: (event, element) => {
                            if (!element) return
                            const number = element.childNodes[0].textContent
                            if (!number) return
                            const current = getNumberPosition(state.board, parseInt(number))
                            move(state.board, current, element)
                            if (isSolved(state.board)) {
                                timeState.stop()
                                updateText('gameover__message', message(timeState.format, moveState.amount))
                                const gameover = document.querySelector('.gameover')
                                const blockout = document.querySelector('.blockout')
                                if (!gameover || !blockout) return
                                gameover.classList.add('gameover_show')
                                blockout.classList.add('blockout_show')
                            }
                        }
                    }
                }
            })
        ]})
    )
    return game
}

export const gameInfoUI = (state: {
    className: string,
    moves: { className: string, title: TitleElement, value: TitleElement },
    time: { className: string, title: TitleElement, value: TitleElement },
    burger: ButtonElement
}): HTMLElement => {
    const gameInfo = document.createElement('div')
    gameInfo.className = state.className
    gameInfo.append(
        contentElement({className: state.moves.className, elements: [titleElement(state.moves.title), titleElement(state.moves.value)]}),
        contentElement({className: state.time.className, elements: [titleElement(state.time.title), titleElement(state.time.value)]}),
        buttonElement(state.burger)
    )
    return gameInfo
}

export const boardUI = (state: {
    className: string,
    board: { size: number, grid: number[][], content: {className: string}, item: { 
        className: string, index: {className: string}, eventListener: (event: MouseEvent, element: HTMLElement) => void
    }}
}): HTMLElement => {
    const board = document.createElement('div')
    board.className = state.className
    const content = document.createElement('div')
    content.className = state.board.content.className
    const {grid} = state.board
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const item = document.createElement('div')
            item.className = state.board.item.className
            item.id = 'board-' + grid[i][j]
            item.style.width = `${100 / state.board.size}%`
            item.style.height = `${100 / state.board.size}%`
            item.style.left = `${((((i * state.board.size) + j) % state.board.size) * (100 / state.board.size))}%`
            item.style.top = `${(Math.floor(((i * state.board.size) + j) / state.board.size) * (100 / state.board.size))}%`
            item.draggable = true
            item.append(
                titleElement({type: 'h2', className: state.board.item.index.className, textContent: String(grid[i][j])})
            )

            if (grid[i][j] === 0) {
                item.id = 'blank'
                item.style.opacity = '0'
                item.addEventListener('drop', (event) => {
                    event.preventDefault()
                    if (!event || !event.dataTransfer) return
                    const number = parseInt(event.dataTransfer.getData("text"))
                    const current = getNumberPosition(state.board.grid, number)
                    const element = document.getElementById('board-' + number)
                    if (!element) return
                    move(state.board.grid, current, element)
                    if (isSolved(state.board.grid)) {
                        timeState.stop()
                        updateText('gameover__message', message(timeState.format, moveState.amount))
                        const gameover = document.querySelector('.gameover')
                        const blockout = document.querySelector('.blockout')
                        if (!gameover || !blockout) return
                        gameover.classList.add('gameover_show')
                        blockout.classList.add('blockout_show')
                    }
                })
                item.addEventListener("dragover", (event) => {
                    event.preventDefault()
                })

            } else {
                item.addEventListener('click', (event) => state.board.item.eventListener(event, item))
                item.addEventListener('dragstart', (event) => {
                    if (!event || !event.dataTransfer || !item.textContent) return
                    event.dataTransfer.setData("text", item.textContent)
                })
            }
            content.append(item)
        }
    }
    board.append(content)
    return board
}