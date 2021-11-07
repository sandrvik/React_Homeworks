import { types } from "../actionTypes"

export const changeInput = (value) => {
    return {
        type: types.CHANGE_VALUE,
        payload: value
    }
}