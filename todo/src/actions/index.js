export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(newSubmit) {
    console.log('action', newSubmit)
    return {
        type: ADD_TODO,
        payload: newSubmit
    }
}

export function toggleTodo(index) {
    console.log('action', index)
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}
