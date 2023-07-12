import * as Types from "../ActionTypes"

const initialState = {
    numberOfIceCream: 30
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }
        default: return state
    }
}

export default iceCreamReducer