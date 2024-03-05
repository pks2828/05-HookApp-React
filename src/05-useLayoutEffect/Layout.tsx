import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from "../03-examples/PokemonCard";


export const Layout = () => {

    const { counter, decrement, increment } = useCounter(1)
    const { data, isLoading } = useFetch( `https://pokeapi.co/api/v2/pokemon/${ counter }` );

    return (
        <>
            <h1>Informcion de pokemon {counter} </h1>
            <hr />

            { 
                isLoading
                ?<LoadingMessage />
                :<PokemonCard
                    id={counter}
                    name={ data?.name }
                    sprites={[
                        data?.sprites.front_default,
                        data?.sprites.front_shiny,
                        data?.sprites.back_default,
                        data?.sprites.back_shiny
                        ]
                    }
                
                /> 
            }


            <button
                className="btn btn-primary mt-2"
                onClick={() => counter > 1 ? decrement():null}
            >
                Anteriores
            </button>

            <button
                className="btn btn-primary mt-2"
                onClick={ () => increment() }
            >
                Siguiente
            </button>

            {/* <pre> { JSON.stringify(data, null, 2) } </pre>  */}

        </>
    )
}
