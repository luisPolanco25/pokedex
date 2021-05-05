import React, { useEffect, useState } from 'react';
import { pokemonApi } from './helpers/pokemonApi';
import {Loading} from './components/Loading';
 
export const PokemonApp = () => {

    const [pokeNum, setPokeNum] = useState(0)
    const [pokeList, setPokeList] = useState([]);
    const [searchedPokemon, setSearchedPokemon] = useState('');

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

    const handleInputSearch = ({target}) => {
        setPokeNum(0);
        setSearchedPokemon(() => target.value);
    }

    const filteredPokeList = [...pokeList].filter(pokemon => pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()));


    return (
        <div>
            <h1>Pokedex</h1>
            <hr />

            <div id="list-changers">
                <div>
                <button 
                    onClick={() => setPokeNum(pokeNum - 5)}
                    disabled={(pokeNum === 0) ? true : false}
                >
                    Go back
                </button>

                <button 
                    onClick={() => setPokeNum(pokeNum + 5)}
                    disabled={(pokeNum >= filteredPokeList.length - 5 || pokeNum >= 1118) ? true : false}
                >
                    Load more...
                </button>
                </div>

                <input 
                    type="text"
                    name="search"
                    autoComplete="off"
                    value={searchedPokemon}
                    placeholder="Search a pokemon"
                    onChange={handleInputSearch}
                />
            </div>

            <div id="poke-container">
                <div>
                    <h2>ID</h2>
                    <h2>Name</h2>
                    <h2>Image</h2>
                </div>

                {
                    (pokeList.length === 0)
                    && <Loading />
                }

                {
                    (searchedPokemon.length === 0)
                        ?
                            pokeList.slice(pokeNum, (pokeNum + 5)).map(pokemon => (
                                
                                    <div className="animate__animated animate__bounceInUp" key={pokemon.id}>
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
                        :
                            filteredPokeList.slice(pokeNum, (pokeNum + 5)).map(pokemon => (
                                    
                                <div className="animate__animated animate__bounceInUp" key={pokemon.id}>
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

        </div>
        )
}
