import { CHANGE_VALUE } from "../actionTypes"

export const changeInput = (value) => {
    return {
        type: CHANGE_VALUE,
        payload: value
    }
}