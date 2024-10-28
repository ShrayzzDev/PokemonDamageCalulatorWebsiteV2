const API_URL = "https://localhost:7271"

export async function moveListFromPokemon(pkmnId, generation, level, action) {
    try {
        const response = fetch(
            `${API_URL}/pokemon/${pkmnId}/Moves/${generation}g/${level}`
        );

        response.then(
            async resp => {
                await resp.text().then(
                    text => action(text))
            }
        ).catch(
            error => {
                console.log(error)
            }
        );

    } catch (error) {
        console.log(error.message);
    }
}