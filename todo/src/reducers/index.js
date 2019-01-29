import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [

        { value: 'Walk the dog',
        completed: false }

    ]

}

const reducer = ( state =initialState, action) => { //a curly
    switch (action.type) {
        case ADD_TODO:
        console.log('add_todo', action)

        const newTodo = {
            value: action.payload,
            completed: false
        }

    return {
        ...state,
        todos: [...state.todos, newTodo] 
    }


    case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map((list, index) =>
            action.payload === index 
            ? {...list, completed: !list.completed}
            :list
            )
        
        }


    default:
    return state
    }
} //end a curly 

export default reducer; 