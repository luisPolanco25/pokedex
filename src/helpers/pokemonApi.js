

export const pokemonApi = async() => {

    const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`; 
    const response = await fetch(baseUrl);
    const {results} = await response.json();

    const pokemon = results.map(async({url}) => {
        const resp = await fetch(url);
        const result = await resp.json();

        const {id, name, sprites: {front_default: pokeImg}} = result;

        return {id, name, pokeImg};
    });
    

    return Promise.all(pokemon);
}



                


