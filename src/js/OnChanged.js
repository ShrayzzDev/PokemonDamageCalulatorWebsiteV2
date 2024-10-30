import { getPokemonList } from "./ApiRequestors/PokemonApiRequestor.js";
import * as Factory from "./DTO/Factory.js";
import {moveListFromPokemon} from "./ApiRequestors/MoveApiRequestor.js";

async function onTextInputChanged(inputId, selectId) {
    await getPokemonList(
        document.getElementById(inputId).value,
        1,
        10,
        (text) => {
            const pokemons = Factory.CreatePkmnItemListDTOs(text);
            let options = []
            for (let pokemon of pokemons) {
                options.push(`<option value=${pokemon.id}>${pokemon.name}</option>`)
            }
            document.getElementById(selectId).innerHTML = options.join()
        });
}

async function onPokemonSelected(pokemonPickerId, pokemonLevelInputId, moveInputId) {
    await moveListFromPokemon(
        document.getElementById(pokemonPickerId).value,
        1,
        document.getElementById(pokemonLevelInputId).value,
        (text) => {
            const moves = Factory.CreateMoveItemListDTOs(text);
            let options = [];
            for (let move of moves) {
                options.push(`<option value=${move.id}>${move.name}</option>`)
            }
            document.getElementById(moveInputId).innerHTML = options.join();
        }
    )
}

export { onTextInputChanged, onPokemonSelected };