import {generateBoard} from '../engine/board'
import { Board } from '../interfaces';

const boardState: Board  = {
    size: 3,
    values: [],

    generate: () => {
        boardState.values = generateBoard(boardState.size)
    },

    clear: () => {
        boardState.size = 3,
        boardState.values = []
    }
}

export default boardState;