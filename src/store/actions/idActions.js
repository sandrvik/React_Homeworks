import { types } from "../actionTypes"

export const incrementId = () => {
    return { type: types.INCREMENT_ID }
}