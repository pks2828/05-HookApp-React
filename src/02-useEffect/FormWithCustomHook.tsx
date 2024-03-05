//ESTO ES UN COMPONENTE QUE UTILIZA CUSTOM HOOKS
// 1. CREAR HOOK.TS
// 2. MONTARLO EN EL COMPONENTE
// 3. IMPORTARLO AL COMPONENTE PRINCIPAL ( MAIN )

import { useForm } from "../hooks/useForm";

interface FormData{
    email: string;
    username: string;
    password: string;
}

export const FormWithCustomHook = () => {

    //TODO : Implementar funcion para resetear valores del formulario 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onInputChange, onResetForm, username, email, password } = useForm<FormData>({    
        username: '',
        email: '',
        password: ''
    })

    // const { username, email, password  } = formState | ALTERNATIVA EN EL RETURN DEL HOOK HACER ...formState spread para que mande todas sus propiedades

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input 
                type="text"
                className="form-control mt-2"
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

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={onInputChange}
            />


            <button onClick={onResetForm} className="btn btn-primary mt-2"> Borrar </button>


        </>
    )
}


