import { Sound } from "../interfaces"

const soundState: Sound = {
    on: false,

    clear: () => {
        soundState.on = false
    }
}


export default soundState