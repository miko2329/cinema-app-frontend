export const baseApiUrl = "http://localhost:8080/api/v1"
export const baseCountryApiUrl = "http://localhost:8090/api/v1/countries"
export const baseAwardApiUrl = "http://localhost:8091/api/v1/awards"
export const basePersonApiUrl = "http://localhost:8092/api/v1/people"
export const baseAuthApiUrl = "http://localhost:8093/api/v1/auth"

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
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
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

export const POST = async (url: string, data: string) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })

    const responseData = await response.json()

    return responseData
}