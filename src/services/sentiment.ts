import { SentimentRequest, SentimentResponse } from "../models/sentiments"
import { BASE_URL } from "./base_url"

export async function getSentiment(request: SentimentRequest, token: string): Promise<SentimentResponse> {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(request)
    }

    const response = await fetch(BASE_URL + "/sentiment", options)

    if (!response.ok) {
        throw new Error("Request dailed with statuscode: " + response.status)
    }

    const result = await response.json()

    return result
}
