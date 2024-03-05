import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {


        const onMouseMove = ( { x , y }:MouseEvent ): void => {
            const coords = { x, y }
            console.log(coords);
        }

      //console.log('Mensaje Montado');
        window.addEventListener( 'mousemove', onMouseMove );
        
    return () => {
        // console.log( 'Mensaje Desmontado' );
        window.removeEventListener( 'mousemove', onMouseMove );
    }
    }, [])
    

  return (
    <>

        <h3>Usuario ya existe</h3>

    </>
  )
}
