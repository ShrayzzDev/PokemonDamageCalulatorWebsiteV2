import { PokemonItemListDTO } from "./PokemonItemListDTO.js";
import { MoveDTO } from "./MoveDTO.js";
import {DamageResultDTO} from "./DamageResult.js";

function CreatePkmnItemListDTOs(strJson) {
    const json = JSON.parse(strJson);
    return json.map((item) =>
        new PokemonItemListDTO(item.id, item.name)
    )
}

function CreateMoveItemListDTOs(strJson) {
    const json = JSON.parse(strJson);
    return json.map((item) =>
        new MoveDTO(item.id, item.name)
    )
}

function CreateDamageResultDTO(strJson) {
    const json = JSON.parse(strJson);
    return new DamageResultDTO(json.minRoll, json.maxRoll);
}

export { CreatePkmnItemListDTOs, CreateMoveItemListDTOs, CreateDamageResultDTO };