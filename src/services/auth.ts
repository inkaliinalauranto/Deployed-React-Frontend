import { AuthReq, LoginRes } from "../models/auth"
import { BASE_URL } from "./base_url"

export async function login(credentials: AuthReq): Promise<LoginRes> {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    const response = await fetch(BASE_URL + "/login", options)
    const result = await response.json()

    if (response.ok) {
        return result
    } else {
        throw new Error(`Request failed with statuscode: ${response.status}. Error description: ${result["Error"]}`)
    }
}


export async function register(credentials: AuthReq): Promise<void> {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    const response = await fetch(BASE_URL + "/register", options)

    const result = await response.json()

    if (!response.ok) {
        throw new Error(`Request failed with statuscode: ${response.status}. Error description: ${result["Error"]}`)
    }
}