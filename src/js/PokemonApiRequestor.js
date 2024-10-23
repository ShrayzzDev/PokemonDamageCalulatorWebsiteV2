import { CreatePkmnItemListDTOs } from './DTO/Factory.js';

const API_URL = "https://localhost:7271"

export async function getPokemonList(name, index, count, action) {
    try {
        const response = fetch(
            `${API_URL}/pokemon/${name}/${index}/${count}`
        );

        response.then(
            async resp => {
                await resp.text().then(
                    text => action(text))
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

async function getPokemon(id)
{
    try {
        const response = fetch(
            `${API_URL}/pokemon/${id}`
        );

        response.then(
            async resp => {
                console.log(await resp.text());
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