import {GenericApiRequestor} from "./GenericApiRequestor.js";

export async function moveListFromPokemon(pkmnId, generation, level, action) {
    try {
        await GenericApiRequestor(`/pokemon/${pkmnId}/Moves/${generation}g/${level}`, action);
    } catch (error) {
        console.log(error.message);
    }
}