import * as Factory from "./DTO/Factory.js"
import {onPokemonSelected, onTextInputChanged} from "./OnChanged.js"
import {DamageInformationsDTO} from "./DTO/DamageInformationsDTO.js";
import {IvEvDTO} from "./DTO/IvEvDTO.js";
import {calculateDamages} from "./ApiRequestors/DamageApiRequestor.js";

// stub request to verify it works
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

async function onDamagingTextInputChanged() {
    onTextInputChanged("damaging_pkmn_input", "damaging_pkmn_picker")
        .then(() => onPokemonPicked())
}

async function onTargetTextInputChanged() {
    await onTextInputChanged("target_pkmn_input", "target_pkmn_picker")
}

async function onPokemonPicked() {
    console.log("jsp frr")
    await onPokemonSelected("damaging_pkmn_picker", "damaging_level", "move_list")
}

await calculateDamages(parameters, 1, (response) => {
    console.log(response)
})

document.getElementById("damaging_pkmn_input").addEventListener("input", onDamagingTextInputChanged)
document.getElementById("target_pkmn_input").addEventListener("input", onTargetTextInputChanged)
document.getElementById("damaging_pkmn_picker").addEventListener("change", onPokemonPicked)
document.getElementById("damaging_level").addEventListener("change", onPokemonPicked)