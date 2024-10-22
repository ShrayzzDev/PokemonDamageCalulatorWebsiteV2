import { CreatePkmnItemListDTOs } from './DTO/Factory.js';

const API_URL = "https://localhost:7271"

export async function getPokemonList(name, index, count) {
    try {
        const response = fetch(
            `${API_URL}/pokemon/${name}/${index}/${count}`
        );

        response.then(
            async resp => {
                console.log(await resp.text().then(
                        text => {
                            const pokemons = CreatePkmnItemListDTOs(text);
                            let options = []
                            for (let pokemon of pokemons)
                            {
                                options.push(`<option value=${pokemon.id}>${pokemon.name}</option>`)
                            }
                            document.getElementById("pkmn_picker").innerHTML = options.join();
                        }));
            }
        ).catch(
            error => {
                console.log(error)
            }
        );

    } catch (error) {
        console.log(error.message);
    }
}