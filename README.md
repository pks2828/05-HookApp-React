# Aplicación de React con Contexto de Usuario

Este proyecto es una aplicación de React que utiliza el Contexto de Usuario para manejar los datos del usuario.

## Pasos para crear la aplicación

1. **Configuración inicial**: Crea un nuevo proyecto de React con `create-react-app` o tu herramienta de inicio de proyecto preferida.

2. **Estructura de carpetas**: Organiza tu proyecto en carpetas. Por ejemplo, puedes tener una carpeta `components` para tus componentes de React, una carpeta `context` para tus contextos de React, etc.

3. **Crear la interfaz `User`**: Define una interfaz `User` que describa los datos del usuario que planeas manejar en tu aplicación.

4. **Crear el `UserContext`**: Utiliza `createContext` de React para crear un nuevo contexto para los datos del usuario. Asegúrate de que el contexto tenga el tipo `User | undefined`.

5. **Crear el `UserProvider`**: Crea un componente `UserProvider` que envuelva a sus hijos con el `UserContext.Provider`. Este componente debe mantener el estado del usuario y proporcionar una función para actualizar ese estado.

6. **Usar el `UserProvider` en tu aplicación**: Envolucra tu aplicación (o cualquier parte de tu aplicación que necesite acceder a los datos del usuario) con el `UserProvider`.

7. **Crear el componente `HomePage`**: Crea un componente `HomePage` que use `useContext` para acceder a los datos del usuario del `UserContext`. Este componente debe renderizar los datos del usuario de alguna manera.

8. **Renderizar el componente `HomePage` en tu aplicación**: Asegúrate de que tu aplicación renderiza el componente `HomePage` en algún lugar.

9. **Probar tu aplicación**: Inicia tu aplicación y verifica que todo funcione como se espera. Deberías ver los datos del usuario renderizados en la `HomePage`.

10. **Refinamiento y características adicionales**: A partir de aquí, puedes continuar desarrollando y refinando tu aplicación según sea necesario. Por ejemplo, podrías agregar una forma de cambiar el usuario actual, manejar la autenticación de usuarios, etc.

## Código Principal

El componente principal es `HomePage`, que se define de la siguiente manera:

```typescriptreact
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext( UserContext )

    return (
      <>
          <h1>HomePage <small>{user?.name}</small> </h1>
          <hr />

          <pre>
              { JSON.stringify( user, null, 3 ) }
          </pre>

      </>
    )
  }