import { getPokemonList } from "./ApiRequestors/PokemonApiRequestor.js";
import * as Factory from "./DTO/Factory.js";
import {moveListFromPokemon} from "./ApiRequestors/MoveApiRequestor.js";
import {DamageInformationsDTO} from "./DTO/DamageInformationsDTO.js";
import {IvEvDTO} from "./DTO/IvEvDTO.js";
import {calculateDamages} from "./ApiRequestors/DamageApiRequestor.js";
import {CreateDamageResultDTO} from "./DTO/Factory.js";

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

async function onDamageClicked(damagingPrefix, targetPrefix, damagingPickerId, targetPickerId, dmgLevelInputId, targetLevelInputId, moveInputId, resultId) {
    const parameters = new DamageInformationsDTO(
        new IvEvDTO(
            document.getElementById(damagingPrefix + "_hp_iv").value,
            document.getElementById(damagingPrefix + "_attack_iv").value,
            document.getElementById(damagingPrefix + "_defense_iv").value,
            0,
            0,
            document.getElementById(damagingPrefix + "_speed_iv").value,
            document.getElementById(damagingPrefix + "_special_iv").value
        ),
        new IvEvDTO(
            document.getElementById(damagingPrefix + "_hp_ev").value,
            document.getElementById(damagingPrefix + "_attack_ev").value,
            document.getElementById(damagingPrefix + "_defense_ev").value,
            0,
            0,
            document.getElementById(damagingPrefix + "_speed_ev").value,
            document.getElementById(damagingPrefix + "_special_ev").value
        ),
        new IvEvDTO(
            document.getElementById(targetPrefix + "_hp_iv").value,
            document.getElementById(targetPrefix + "_attack_iv").value,
            document.getElementById(targetPrefix + "_defense_iv").value,
            0,
            0,
            document.getElementById(targetPrefix + "_speed_iv").value,
            document.getElementById(targetPrefix + "_special_iv").value
        ),
        new IvEvDTO(
            document.getElementById(targetPrefix + "_hp_ev").value,
            document.getElementById(targetPrefix + "_attack_ev").value,
            document.getElementById(targetPrefix + "_defense_ev").value,
            0,
            0,
            document.getElementById(targetPrefix + "_speed_ev").value,
            document.getElementById(targetPrefix + "_special_ev").value
        ),
        document.getElementById(damagingPickerId).value,
        document.getElementById(dmgLevelInputId).value,
        document.getElementById(targetPickerId).value,
        document.getElementById(targetLevelInputId).value,
        document.getElementById(moveInputId).value,
        true
    )

    await calculateDamages(parameters, 1, (response) => {
        const damages = CreateDamageResultDTO(response);
        document.getElementById(resultId).innerHTML = `Minimum roll possible : ${damages.minRoll} <br> Maximum roll possible : ${damages.maxRoll} <br>`
    })
}

export { onTextInputChanged, onPokemonSelected, onDamageClicked };