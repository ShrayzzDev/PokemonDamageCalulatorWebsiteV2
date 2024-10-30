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

async function GenericApiRequestorWithBody(route, callback, body) {
    const url = `${API_URL}${route}`;
    console.log(JSON.stringify(body))
    const response = fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers : {
            'Content-Type' : "application/json",
            'Accept': "application/json"
        },
    })

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

export { GenericApiRequestor, GenericApiRequestorWithBody };