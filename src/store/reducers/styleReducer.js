import { RESET_COLORS, SET_BACK_COLOR, SET_TEXT_COLOR } from "../actionTypes";

const initialState = {
    back: 'white',
    text: 'black'
}

export default function styleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BACK_COLOR:
            return {
                ...state,
                back: action.payload
            };
        case SET_TEXT_COLOR:
            return {
                ...state,
                text: action.payload
            };
        case RESET_COLORS:
            return {
                ...state,
                text: 'black',
                back: 'white'
            }
        default:
            return state
    }
}