import { Move } from "../interfaces"

const moveState: Move = {
    amount: 0,
    
    clear: () => {
        moveState.amount = 0
    }
}

export default moveState