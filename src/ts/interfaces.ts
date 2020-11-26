/*
    Engine interfaces
*/

interface Position {
    x: number,
    y: number
}

/*
    UI intefaces
*/

interface ButtonElement {
    className: string, 
    textContent: string, 
    eventListener: (this: HTMLElement, event: MouseEvent) => void
}

interface ContentElement {
    className: string, 
    elements: HTMLElement[]
}

interface TitleElement {
    type: string, 
    className: string, 
    textContent: string
}

/*
    State interfaces
*/

interface Board {
    size: number,
    values: number[][],
    generate: () => void,
    clear: () => void
}

interface Move {
    amount: number,
    clear: () => void
}

interface Sound {
    on: boolean,
    clear: () => void
}

interface Time {
    totalSec: number,
    format: string,
    start: () => void
    stop: () => void,
    clear: () => void
}

export {
    Position,
    Board,
    ButtonElement,
    ContentElement,
    TitleElement,
    Move,
    Sound,
    Time
}