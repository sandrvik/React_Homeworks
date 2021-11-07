import { types } from "../actionTypes";

const initialState = 0;

export default function idReducer(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT_ID:
            return state = state + 1;
        default:
            return state;
    }
}