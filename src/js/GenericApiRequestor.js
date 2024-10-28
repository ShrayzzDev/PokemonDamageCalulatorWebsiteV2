const API_URL = "https://localhost:7271"

async function GenericApiRequestor(route, callback) {
    const url = `${API_URL}${route}`;
    const response = fetch(url);

    response.then(
        async resp => {
            await resp.text().then(
                text => callback(text))
        }
    ).catch(
        error => {
            console.log(error)
        }
    );
}

export { GenericApiRequestor };