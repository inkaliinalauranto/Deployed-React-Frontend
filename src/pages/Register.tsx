import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../services/auth"

export default function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function onRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        await register({ "username": username, "password": password })

        setUsername("")
        setPassword("")
        navigate("/")
    }

    return <>
        <h2>Registration page</h2>
        <form onSubmit={onRegister}>
            <input
                placeholder="Username"
                type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                placeholder="Password"
                type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Register</button>
        </form>
    </>
}