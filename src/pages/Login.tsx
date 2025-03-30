import { useState } from "react"
import { authStore } from "../store/auth_store"
import { Link, Outlet, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function onLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        await authStore.login({ "username": username, "password": password })

        setUsername("")
        setPassword("")
        navigate("/sentiment")
    }

    return <>
        <h2>Sentiment analysis login page</h2>
        <form onSubmit={onLogin}>
            <input
                placeholder="Username"
                type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                placeholder="Password"
                type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register"><h3>Register here</h3></Link>
        <Outlet />
    </>
}