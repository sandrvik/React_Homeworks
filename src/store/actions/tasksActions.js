import { types } from "../actionTypes";

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        payload: task
    }
}

export const removeTask = (taskId) => {
    return {
        type: types.REMOVE_TASK,
        payload: taskId
    }
}

export const handleComplete = (taskId) => {
    return {
        type: types.COMPLETE_TASK,
        payload: taskId
    }
}