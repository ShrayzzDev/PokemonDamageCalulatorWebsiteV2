const API_URL = "https://localhost:7271"

export async function getPokemonList(name, index, count) {
    try {
        const response = fetch(
            `${API_URL}/pokemon/${name}/${index}/${count}`
        );

        // response.then(
        //     async resp => {
        //         console.log(await resp.text() .then(
        //                 text => console.log(text)
        //             ));
        //     }
        // ).catch(
        //     error => {
        //         console.log(error)
        //     }
        // );
        if (!response.ok) {
            return [];
        }

        const json = await response.json();

    } catch (error) {
        console.log(error.message);
    }
}