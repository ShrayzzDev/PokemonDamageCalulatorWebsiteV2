import * as Factory from "./DTO/Factory.js"
import { getPokemonList } from "./ApiRequestors/PokemonApiRequestor.js"
import { moveListFromPokemon } from './ApiRequestors/MoveApiRequestor.js'
import {DamageInformationsDTO} from "./DTO/DamageInformationsDTO.js";
import {IvEvDTO} from "./DTO/IvEvDTO.js";
import {calculateDamages} from "./ApiRequestors/DamageApiRequestor.js";

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

async function onDamagingTextInputChanged() {
    await onTextInputChanged("damaging_pkmn_input", "damaging_pkmn_picker")
}

async function onTargetTextInputChanged() {
    await onTextInputChanged("target_pkmn_input", "target_pkmn_picker")
}

document.getElementById("damaging_pkmn_input").addEventListener("input", onDamagingTextInputChanged)
document.getElementById("target_pkmn_input").addEventListener("input", onTargetTextInputChanged)

await moveListFromPokemon(1,1,100, (response) => {
    console.log(Factory.CreateMoveItemListDTOs(response))
})

const parameters = new DamageInformationsDTO(
    new IvEvDTO(
        0,0,0,0,0,0,0
    ),
    new IvEvDTO(
        0,0,0,0,0,0,0
    ),
    new IvEvDTO(
        0,0,0,0,0,0,0
    ),
    new IvEvDTO(
        0,0,0,0,0,0,0
    ),
    1,
    1,
    1,
    1,
    1,
    true
)

await calculateDamages(parameters, 1, (response) => {
    console.log(response)
})