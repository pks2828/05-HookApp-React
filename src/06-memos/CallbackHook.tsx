import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
        //* Maneja el estado del contador
        const [counter, setCounter] = useState(10);

        //* Define una función `incrementFather` que se memoriza y solo cambia si sus dependencias cambian
        const incrementFather = useCallback(
            // aqui se pueden definir los argumentos que se van a recibir
            (value: number) => {
                setCounter((c) => c + value);
            },
            [],
        );


        //* Se utiliza para que el efecto de la funcion se ejecute solo una vez 
        useEffect(() => {

        }, [incrementFather])
        
         
        // const incrementFather = ():void => {
        //         setCounter(counter + 1);
        // }

        return (
            <>
                <h1>useCallback Hook: {counter}  </h1>
                <hr />
                {/*  uno es la property y el otro es el valor de la property */}
                <ShowIncrement increment = { incrementFather } />
            </>
        )
}


// ! Importante
// ? Duda
// TODO por hacer
// * Nota importante

/* 

*interface ExampleInterface {

  ! Tipos primitivos
  aString: string;
  aNumber: number;
  aBoolean: boolean;
  aNull: null;
  anUndefined: undefined;

  ! Tipo objeto
  anObject: {
    key1: string;
    key2: number;
  };

  ! Tipo array
  anArray: string[];
  anArrayOfObjects: { id: number, value: string }[];

  ! Tipo función
  aFunction: (param: string) => number;

  ! Tipo enum
  anEnum: EnumType; // Donde EnumType es un enum definido previamente

  ! Tipo de unión
  aUnion: string | number;

  ! Tipo de intersección
  anIntersection: Type1 & Type2; // Donde Type1 y Type2 son tipos definidos previamente

  ! Tipo literal
  aLiteral: 'literal';

  ! Tipo genérico (si la interfaz es genérica)
  aGenericProp: T; // Donde T es un tipo genérico definido en la interfaz

  ! Tipo any
  anAny: any;

  ! Tipo unknown
  anUnknown: unknown;

  ! Tipo never
  aNever: never;

  ! Tipo void
  aVoid: void;
}

*/

/* 
    ! 1.Usa las definiciones de tipo de React:

    ! 2.Define los tipos de las props y el tipo de retorno de la función.

    type MyComponentProps = {
        name: string;
        age: number;
        };

        const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
    };

    ! 3.Usa useState y useReducer con cuidado:

    ! 4.Usa useRef y createRef con tipos explícitos:

    ! 5.Usa uniones de tipo para los estados y los eventos:

    ! 6.Evita el tipo any

    ! 7.Aprende y usa las características avanzadas de TypeScript: 




*/ 