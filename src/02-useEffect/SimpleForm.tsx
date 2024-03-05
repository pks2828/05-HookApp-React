import { useEffect, useState } from "react"
import { Message } from "./Message";

interface userProps{
    username: string;
    email: string;

}


export const SimpleForm = () => {

    const [formState, setFormState] = useState<userProps>({
        username: 'Angel',
        email: 'danieldoria@gmail.com'
    })

    const { username, email } = formState;

    
    const onInputChange = ( event:React.ChangeEvent ):void => {
        const { name, value } = event.target as HTMLInputElement;
        setFormState({
            ...formState,
            [ name ]: value
        })



    }
    // EVENTOS SECUNDARIO USEEFECT

    useEffect( () => {//la funcion flecha sirve como callback para que  se dispare cada vez que el estado de la variable formState cambie useEffect(()=>{
        // console.log('useEffect ya se llamo');
    }, []);//primer argumento callback, el segundo es la dependencia despues de la primera llave
    //cuando se pone un arreglo vacio  se ejecuta solo una vez al montar el componente

    useEffect( () => {
        // console.log('Formstate cambio!');
    }, [formState]); // este efecto se va disparar  cada vez que cambie algo en el estado del formulario

    useEffect( () => {
        // console.log('Email cambio');
    }, [email]); // este efecto se va disparar  cada vez que cambie algo en el email del formulario


    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="username@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                username === 'Angel2'  && <Message />
                //Si usuario es exactamente igual a angel 2 entonces se muestra el componente del mensaje
            }

        </>
    )
}
