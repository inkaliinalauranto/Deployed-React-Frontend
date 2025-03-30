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

    if (!response.ok) {
        throw new Error("Request dailed with statuscode: " + response.status)
    }

    const token = await response.json()

    return token
}


export async function register(credentials: AuthReq) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    const response = await fetch(BASE_URL + "/register", options)

    if (!response.ok) {
        throw new Error("Request dailed with statuscode: " + response.status)
    }
}