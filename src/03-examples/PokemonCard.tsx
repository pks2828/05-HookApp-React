

export interface Props {
    id?: number | undefined;
    name?: string;
    sprites?: (string | undefined)[] | undefined;
}




export const PokemonCard: React.FC<Props> = ({ id, name, sprites }) => {
  return (
    <section style={{ height:200 }}>
        <h2 className="text-capitalize"> #{id} - { name }</h2>


        {/* Imagenes */}
        <div>
            {
                sprites?.map( sprite => (
                    <img key={sprite} src={ sprite } alt={name} />
                ) )
            }
        </div>

    </section>
  )
}
