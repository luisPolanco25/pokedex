import React, { useEffect, useState } from 'react';
import { pokemonApi } from './helpers/pokemonApi';

export const PokemonApp = () => {

    const [pokeList, setPokeList] = useState();
    const [pokeNum, setPokeNum] = useState(0)


    useEffect(() => {
        pokemonApi()
                .then(data => {
                   return data.map(({id, name, pokeImg}) => {
                       return {
                            id,
                            name,
                            pokeImg
                        }
                    })
                })
                .then((data) => setPokeList(() => (data)))            
    }, [setPokeList])
     

    useEffect(() => {
        if (pokeList !== undefined) {
            setPokeList(prevList => prevList.splice(pokeNum, 5))
        }
        
    }, [pokeList])


    return (
        <div>
            <h1>Pokedex</h1>
            <hr />

            <div>
                {
                     (pokeList !== undefined) 
                        &&
                        pokeList.map(pokemon => {
                            
                            return (
                                <div key={pokemon.id}>
                                <p id="poke-id">{pokemon.id}</p>
                                <p id="poke-name">{pokemon.name}</p>
                                {
                                    (pokemon.pokeImg)
                                    ?
                                    <img src={pokemon.pokeImg} alt={pokemon.name} />
                                    : 
                                    <small>{`Couldn't find an image for this pokemon :(`}</small> 
                                }
                            </div>
                            )
                        })
                }
            </div>

        </div>
        )
}
