import { TodoItem } from "./TodoItem"
import { Todo } from './types';



export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }: { todos?: Todo[]; onDeleteTodo: (id: number) => void; onToggleTodo: (id: number) => void }) => {

    
  
        return (
        <ul className="list-group">
            {
                todos.map( (todo: Todo) => ( 
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                     />    
                ))
            }
        </ul>
      )
}
