import { RESET_COLORS, SET_BACK_COLOR, SET_TEXT_COLOR } from "../actionTypes"

export const setText = (color) => {
    return {
        type: SET_TEXT_COLOR,
        payload: color
    }
}

export const setBack = (color) => {
    return {
        type: SET_BACK_COLOR,
        payload: color
    }
}

export const resetColors = () => {
    return {
        type: RESET_COLORS,
    }
}