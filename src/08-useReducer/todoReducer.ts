import { Action, Todo } from "./types";

type TodoReducer = (initialState: Todo[], action: Action) => Todo[];

export const todoReducer: TodoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [ ...initialState, action.payload as Todo ];
        
        case '[TODO] delete todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] toggle todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
        
        default:
            return initialState;
    }
}