import {onDamageClicked, onPokemonSelected, onTextInputChanged} from "./OnChanged.js"

// stub request to verify it works

async function onDamagingTextInputChanged() {
    onTextInputChanged("damaging_pkmn_input", "damaging_pkmn_picker")
        .then(() => onPokemonPicked())
}

async function onTargetTextInputChanged() {
    await onTextInputChanged("target_pkmn_input", "target_pkmn_picker")
}

async function onPokemonPicked() {
    await onPokemonSelected("damaging_pkmn_picker", "damaging_level", "move_list")
}

async function onDamageBtnClicked() {
    await onDamageClicked("damaging", "target", "damaging_pkmn_picker", "target_pkmn_picker", "damaging_level", "target_level", "move_list", "damage_result")
}

document.getElementById("damaging_pkmn_input").addEventListener("input", onDamagingTextInputChanged)
document.getElementById("target_pkmn_input").addEventListener("input", onTargetTextInputChanged)
document.getElementById("damaging_pkmn_picker").addEventListener("change", onPokemonPicked)
document.getElementById("damaging_level").addEventListener("change", onPokemonPicked)
document.getElementById("damage_button").addEventListener("click", onDamageBtnClicked)