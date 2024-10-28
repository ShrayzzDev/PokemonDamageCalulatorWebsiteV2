import { GenericApiRequestor } from './GenericApiRequestor.js';

export async function getPokemonList(name, index, count, action) {
    try {
        await GenericApiRequestor(`/pokemon/${name}/${index}/${count}`, action);
    } catch (error) {
        console.log(error.message);
    }
}

// actually probably useless since I don't need details about a Pokémon atm
// + it only logs
async function getPokemon(id)
{
    try {
        await GenericApiRequestor(`/pokemon/${id}`);
    } catch (error) {
        console.log(error.message);
    }
}