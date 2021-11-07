import { types } from "../actionTypes";

const initialState = {
    back: 'white',
    text: 'black'
}

export default function styleReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_BACK_COLOR:
            return {
                ...state,
                back: action.payload
            };
        case types.SET_TEXT_COLOR:
            return {
                ...state,
                text: action.payload
            };
        case types.RESET_COLORS:
            return {
                ...state,
                text: 'black',
                back: 'white'
            }
        default:
            return state
    }
}