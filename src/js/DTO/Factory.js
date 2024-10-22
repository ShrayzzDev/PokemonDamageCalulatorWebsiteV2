import { PokemonItemListDTO } from "./PokemonItemListDTO.js";

export function CreatePkmnItemListDTOs(strJson) {
    const json = JSON.parse(strJson);
    return json.map((item) =>
        new PokemonItemListDTO(item.id, item.name)
    )
}