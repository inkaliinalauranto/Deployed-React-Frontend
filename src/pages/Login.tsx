import { useState } from "react"
import { authStore } from "../store/auth_store"
import { Link, Outlet, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)

    async function onLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setDisabled(true)

        try {
            await authStore.login({ "username": username, "password": password })
            navigate("/sentiment")
        } catch (error) {
            alert(error)
        }

        setDisabled(false)
        // setUsername("")
        // setPassword("")
    }

    return <>
        <h2>Sentiment analysis login page</h2>
        <form onSubmit={onLogin}>
            <input
                id="username"
                autoComplete="username"
                required
                placeholder="Username"
                type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                id="password"
                autoComplete="password"
                required
                placeholder="Password"
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" disabled={disabled}>Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register"><h3>Register here</h3></Link>
        <Outlet />
    </>
}