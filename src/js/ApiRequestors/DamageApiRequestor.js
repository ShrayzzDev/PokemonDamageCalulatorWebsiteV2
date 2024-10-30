import { GenericApiRequestorWithBody } from "./GenericApiRequestor.js";

export async function calculateDamages(damageDTO, generation, action) {
    try {
        await GenericApiRequestorWithBody(`/damage/gen${generation}/`, action, damageDTO);
    } catch (error) {
        console.log(error.message);
    }
}