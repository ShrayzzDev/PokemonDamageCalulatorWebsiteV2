import { PokemonItemListDTO } from "./PokemonItemListDTO.js";
import { MoveDTO } from "./MoveDTO.js";

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

export { CreatePkmnItemListDTOs, CreateMoveItemListDTOs };