import { Time } from '../interfaces'
import {updateText} from '../ui/updater'

let interval: number

const timeState: Time = {
    totalSec: 0,
    format: '00:00',

    start: () => {
        interval = window.setInterval(() => {
            timing(timeState)
        }, 1000)
    },

    stop: () => {
        clearInterval(interval)
    },

    clear: () => {
        timeState.totalSec = 0
        clearInterval(interval)
    }
}

export default timeState

const timing = (timeState: Time): void => {
    timeState.totalSec += 1
    const sec = Math.floor(timeState.totalSec % 60)
    const min = Math.floor(timeState.totalSec / 60)
    timeState.format = `${format(min)}:${format(sec)}`
    updateText('game__time-value', timeState.format)
}

const format = (value: number): string => {
    const result = String(value)
    return result.length < 2 ? '0' + result : result
}