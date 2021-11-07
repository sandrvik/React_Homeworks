import { types } from "../actionTypes"

export const setText = (color) => {
    return {
        type: types.SET_TEXT_COLOR,
        payload: color
    }
}

export const setBack = (color) => {
    return {
        type: types.SET_BACK_COLOR,
        payload: color
    }
}

export const resetColors = () => {
    return {
        type: types.RESET_COLORS,
    }
}