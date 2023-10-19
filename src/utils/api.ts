export const baseApiUrl = "http://localhost:8080/api/v1"
export const baseCountryApiUrl = "http://localhost:8081/api/v1"
export const baseActorApiUrl = "http://localhost:8082/api/v1"
export const baseDirectorApiUrl = "http://localhost:8083/api/v1"
export const baseAwardApiUrl = "http://localhost:8084/api/v1"

export const PUT = async (url: string, data: string) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })

    const responseData = await response.json()

    return responseData
}

export const GET = async (url: string) => {
    const response = await fetch(url, {
        method: "GET"
    })

    const responseData = await response.json()

    return responseData
}


export const PATCH = async (url: string, data: string) => {
    const response = await fetch(url, {
        method: "PATCH"
    })

    const responseData = await response.json()

    return responseData
}

export const DELETE = async (url: string) => {
    const response = await fetch(url, {
        method: "DELETE"
    })

    const responseData = await response.json()

    return responseData
}