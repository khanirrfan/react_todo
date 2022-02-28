import { CREATE_TODO, DELETE_TODO, FETCH_TODOS, FETCH_TODOS_ERROR, UPDATE_TODO, UPDATE_TODO_ERROR } from "../actions/types";


const initialState = {
    todos:[],
    isLoading:true,
    error: {},
    newTodoAdded:false
}
export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case FETCH_TODOS:
            return {
                ...state,
                isLoading: false,
                todos:payload
            }
        case FETCH_TODOS_ERROR :
            return {
                ...state,
                isLoading:true,
                error : payload
            }
        case CREATE_TODO :
            return {
                todos:[...state.todos, ...[payload]],
                isLoading:false,
                newTodoAdded:true
            }
        case UPDATE_TODO :
            const { id, status, title} = payload;
            return {
                todos:state.todos.map((todo) => {
                    return todo.id === id ? {...payload} : todo
                })
                ,
                isLoading:false,
            }
            
        case UPDATE_TODO_ERROR: 
            return {

            }
        case DELETE_TODO :
            return {
                todos: [...state.todos.filter((item) =>item.id !== payload)],
                isLoading:false
            }
        default :
            return {
                state
            }
    }
}