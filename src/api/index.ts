function parseResponse(response: any) {
    return response.json().then((json: any) => {
        if (json.status === "success" || json.status === "failed") {
            return json;
        }
        return Promise.reject(json);
    })
};

const api = {
    async get(url: any) {
        try {
            const response = await fetch(`http://localhost:3002/${url}`, {
                method: "GET",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
            });
            return parseResponse(response);
        } catch (err) {
            console.log(err);
        }
    },
    async post(url: any, data: any) {
        try {
            const body = JSON.stringify(data);
            const response = await fetch(`http://localhost:3002/${url}`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body,
            });
            return parseResponse(response);
        } catch (err) {
            console.log(err);
        }
    },
};

export default api;
