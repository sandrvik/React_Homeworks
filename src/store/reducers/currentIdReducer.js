import { INCREMENT_ID } from "../actionTypes";

const initialState = 0;

export default function idReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_ID:
            return state = state + 1;
        default:
            return state;
    }
}