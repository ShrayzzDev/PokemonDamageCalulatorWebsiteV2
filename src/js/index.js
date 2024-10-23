import { CreatePkmnItemListDTOs } from "./DTO/Factory.js"
import { getPokemonList } from "./PokemonApiRequestor.js"

async function onTextInputChanged(inputId, selectId) {
    await getPokemonList(
        document.getElementById(inputId).value,
        1,
        10,
        (text) => {
        const pokemons = CreatePkmnItemListDTOs(text);
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