// Define la interfaz
interface TodoItem {
    id: number;
    todo: string;
    done: boolean;
}

// Define el tipo de acción para los items de lista de tareas
type TodoAction = { type: string, payload: TodoItem };

  
// Usa la interfaz para tipar el array
const initialState: TodoItem[] = [{
    id: 1,
    todo: 'Recolectar piedra del alma',
    done: false,
}];

const todoReducer = (state: typeof initialState, action: TodoAction | undefined = undefined) => {

    if (action && action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer( initialState, );

const newTodo = {
    id: 2,
    todo: 'Recolectar piedra del poder',
    done: false,
}

const addTodoAction: TodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({state:todos});