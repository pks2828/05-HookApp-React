import { useForm } from "../hooks"
import { Todo } from "./types";

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo: Todo) => void }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <>
        <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="Que hay que hacer"
              className="form-control"
              name="description"
              value={description}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1 w-100"
            >
              Agregar
            </button>
        </form>
    </>
  )
}
