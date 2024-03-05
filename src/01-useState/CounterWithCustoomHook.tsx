import { useCounter } from '../hooks/useCounter'

export const CounterWithCustoomHook = () => {


    //Dependiendo de lo que se retorne: objeto, array es como se puede manejar por ejemplo un objeto se puede desestructurar {} | y un array []
    
    const { counter, increment, decrement, reset } = useCounter();//El valor tiene que estar enlazado al STATE, ESTO SE HACE DESDE EL RETURN DEL HOOK
    //ESTO SE DESESTROCUTRO DEL USE COUNTER 

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>

        </>
    )
}
