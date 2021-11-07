import { types } from "../actionTypes";

const initialState = {
    value: ''
}

export default function inputReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_VALUE:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state
    };
}