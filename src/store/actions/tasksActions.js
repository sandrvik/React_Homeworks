import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../actionTypes";

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask = (taskId) => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}

export const handleComplete = (taskId) => {
    return {
        type: COMPLETE_TASK,
        payload: taskId
    }
}