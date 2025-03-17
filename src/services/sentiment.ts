import { SentimentRequest, SentimentResponse } from "../models/sentiments"
export async function getSentiment(request: SentimentRequest): Promise<SentimentResponse> {

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(request)
    }

    const response = await fetch("https://sentiment-backend-private-git-deployed-sentiment-analysis.2.rahtiapp.fi/api/sentiment", options)

    if (!response.ok) {
        throw new Error("Request dailed with statuscode: " + response.status)
    }

    const sentiment = await response.json()
    
    return sentiment
}
