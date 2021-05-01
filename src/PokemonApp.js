import React, { useEffect, useState } from 'react';
import { pokemonApi } from './helpers/pokemonApi';

export const PokemonApp = () => {

    const [pokeNum, setPokeNum] = useState(0)
    const [pokeList, setPokeList] = useState([]);


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
     
    return (
        <div>
            <h1>Pokedex</h1>
            <hr />

            <div id="poke-container">
                {
                        pokeList.splice(pokeNum, 5).map(pokemon => (
                            
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
                        )
                }
            </div>

            <button 
                onClick={() => setPokeNum(pokeNum - 5)}
                disabled={(pokeNum === 0) ? true : false}
            >
                Go back
            </button>

            <button 
                onClick={() => setPokeNum(pokeNum + 5)}
                disabled={(pokeNum === 1113) ? true : false}
            >
                Load more
            </button>

        </div>
        )
}
